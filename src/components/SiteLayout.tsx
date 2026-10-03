import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { media } from '@/lib/site-data';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Our courses' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
] as const;

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
              alt="Kaajjal Jadhhav Spiritual Healer & Coach"
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

      {/* Floating Quick Connect Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="group flex items-center gap-3 bg-[var(--foreground)] text-[var(--background)] px-4 py-3 rounded-full shadow-2xl hover:bg-[var(--primary)] transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-md"
          aria-label="Book a consultation with Kaajjal"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <MessageCircle size={18} className="text-amber-300" />
          <span className="text-xs font-semibold tracking-wider uppercase font-sans">
            Quick Connect
          </span>
        </Link>
      </aside>

      <footer className="site-footer">
        <div className="footer-top container-wide">
          <div>
            <img
              className="footer-logo"
              src={media.logo}
              alt="Kaajjal Jadhhav Spiritual Healer & Coach"
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
            <Link to="/services">All 10 Services</Link>
            <Link to="/courses">Courses & Workshops</Link>
            <Link to="/gallery">Video & Client Stories</Link>
          </div>
          <div className="footer-links">
            <span>Visit & Connect</span>
            <p>Bibwewadi, Pune, Maharashtra, India</p>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">Monday – Saturday: By Appointment</p>
            <Link to="/contact" className="mt-3 font-semibold text-[var(--primary)] hover:underline">
              Send an inquiry <ArrowUpRight size={14} />
            </Link>
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

