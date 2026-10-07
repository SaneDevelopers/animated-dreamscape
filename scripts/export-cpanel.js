import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.resolve(rootDir, 'cpanel-deploy');
const port = 4173;

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/services', file: 'services/index.html' },
  { path: '/courses', file: 'courses/index.html' },
  { path: '/gallery', file: 'gallery/index.html' },
  { path: '/contact', file: 'contact/index.html' },
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {}
    await sleep(400);
  }
  throw new Error(`Server did not respond at ${url} within timeout`);
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function run() {
  console.log('🚀 Step 1: Building project with Node.js / SSR pipeline...');
  const buildProcess = spawn('npm', ['run', 'build'], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: true,
  });

  await new Promise((resolve, reject) => {
    buildProcess.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build process exited with code ${code}`));
    });
  });

  console.log('\n🌐 Step 2: Spinning up temporary local server for static page rendering...');
  const serverProcess = spawn('node', ['.output/server/index.mjs'], {
    cwd: rootDir,
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1' },
    stdio: 'pipe',
  });

  try {
    const baseUrl = `http://127.0.0.1:${port}`;
    await waitForServer(baseUrl);
    console.log(`✅ Server ready at ${baseUrl}`);

    console.log('\n📁 Step 3: Preparing cpanel-deploy/ directory...');
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true, force: true });
    }
    fs.mkdirSync(outputDir, { recursive: true });

    // Copy static assets from .output/public
    const publicDir = path.resolve(rootDir, '.output', 'public');
    if (fs.existsSync(publicDir)) {
      console.log('📦 Copying static assets, media & styles...');
      copyDirRecursive(publicDir, outputDir);
    }

    console.log('\n📄 Step 4: Prerendering all routes to static HTML files...');
    for (const route of routes) {
      const url = `${baseUrl}${route.path}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch route ${route.path} (${res.status} ${res.statusText})`);
      }
      const html = await res.text();
      const targetFilePath = path.join(outputDir, route.file);
      fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
      fs.writeFileSync(targetFilePath, html, 'utf-8');
      console.log(`   ✓ ${route.path} -> ${route.file} (${Math.round(html.length / 1024)} KB)`);
    }

    console.log('\n⚙️ Step 5: Generating Apache .htaccess for cPanel...');
    const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve existing files and directories directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Clean URLs: map /about to /about/index.html
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*)/?$ $1/index.html [L]

  # Fallback to root index.html for client-side router
  RewriteRule ^ index.html [L]
</IfModule>

# Caching for high-performance media & assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
`;
    fs.writeFileSync(path.join(outputDir, '.htaccess'), htaccessContent, 'utf-8');
    console.log('   ✓ .htaccess generated');

    console.log('\n📦 Step 6: Creating cpanel-deploy.zip for one-click upload...');
    const zipPath = path.resolve(rootDir, 'cpanel-deploy.zip');
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }
    const zipProcess = spawn('zip', ['-r', '-q', zipPath, '.', '-x', '__MACOSX/*', '*.DS_Store'], {
      cwd: outputDir,
      shell: true,
    });
    await new Promise((resolve) => {
      zipProcess.on('close', (code) => {
        if (code === 0) {
          console.log(`   ✓ Packaged into ${zipPath}`);
        } else {
          console.warn(`   ⚠️ Zip command exited with code ${code}`);
        }
        resolve();
      });
    });

    console.log('\n✨ Export Complete! Ready for cPanel deployment.');
    console.log('----------------------------------------------------');
    console.log(`Location: ${outputDir}`);
    console.log(`Zip file: ${zipPath}`);
    console.log('You can now upload "cpanel-deploy.zip" or the contents of "cpanel-deploy/" directly to your cPanel "public_html" directory.');
    console.log('----------------------------------------------------\n');
  } finally {
    serverProcess.kill();
  }
}

run().catch((err) => {
  console.error('Export failed:', err);
  process.exit(1);
});
