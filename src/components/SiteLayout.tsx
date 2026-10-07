import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { contactDetails, media } from '@/lib/site-data';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Our courses' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
] as const;

export function WhatsAppIcon({ className = 'w-5 h-5 fill-current' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.487-8.406z"/>
    </svg>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link
            to="/"
            aria-label="Kaajjal’s Spiritual World home"
            className="brand group"
            onClick={() => setOpen(false)}
          >
            <img
              src={media.logo}
              alt="Kaajjal’s Spiritual World"
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          <nav aria-label="Main navigation" className={`site-nav ${open ? 'is-open' : ''}`}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`nav-link ${path === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="nav-cta">
              Book Consultation <ArrowUpRight size={15} />
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </header>

      <main>{children}</main>

      {/* Floating Quick Connect Button -> Instant WhatsApp Redirect (086056 66383) */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
        <a
          href={contactDetails.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] border border-white/25 backdrop-blur-md font-sans"
          aria-label="Directly message Kaajjal on WhatsApp (+91 86056 66383)"
        >
          <span className="relative flex items-center justify-center">
            <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-ping opacity-75"></span>
            </span>
          </span>
          <span className="text-xs font-bold tracking-wide uppercase font-sans text-white drop-shadow-sm">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      <footer className="site-footer">
        <div className="footer-top container-wide">
          <div>
            <img
              className="footer-logo"
              src={media.logo}
              alt="Kaajjal’s Spiritual World"
            />
            <p className="mt-3">
              Personalized guidance, Vedic astrology, and holistic healing for every unique journey. Grounded in six years of dedicated practice in Bibwewadi, Pune.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for In-Person & Online Consultations</span>
            </div>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <Link to="/about">About Kaajjal</Link>
            <Link to="/services">All Services</Link>
            <Link to="/courses">Courses & Workshops</Link>
            <Link to="/gallery">Video & Client Stories</Link>
          </div>
          <div className="footer-links">
            <span>Visit & Connect</span>
            <p>Bibwewadi, Pune, Maharashtra</p>
            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="mt-1 text-xs font-semibold text-[var(--foreground)] hover:text-[var(--primary)] flex items-center gap-1.5 transition-colors"
            >
              Call: {contactDetails.phoneDisplay}
            </a>
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Chat on WhatsApp <ArrowUpRight size={13} />
            </a>
            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Google Maps Location <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-bottom container-wide">
          <span>© {new Date().getFullYear()} Kaajjal’s Spiritual World. All rights reserved.</span>
          <span>Bibwewadi, Pune · Compassionate Guidance & Healing</span>
        </div>
      </footer>
    </>
  );
}

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container-wide">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {label}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="intro-sun" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container-wide contact-band-inner">
        <div>
          <div className="eyebrow">THE NEXT CHAPTER</div>
          <h2>
            Every journey begins
            <br />
            with a <em>conversation.</em>
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mt-3 max-w-md">
            Whether you seek clarity on career, relationships, health, or personal peace, Kaajjal offers a confidential and thoughtful space.
          </p>
        </div>
        <Link className="round-link" to="/contact" aria-label="Go to contact page">
          <ArrowUpRight size={30} />
        </Link>
      </div>
    </section>
  );
}

