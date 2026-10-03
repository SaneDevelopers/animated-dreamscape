import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
  return <>
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" aria-label="Kaajjal’s Spiritual World home" className="brand" onClick={() => setOpen(false)}><img src={media.logo} alt="Kaajjal Jadhhav Spiritual Healer & Coach" /></Link>
        <nav aria-label="Main navigation" className={`site-nav ${open ? 'is-open' : ''}`}>
          {links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`nav-link ${path === link.to ? 'active' : ''}`}>{link.label}</Link>)}
          <Link to="/contact" onClick={() => setOpen(false)} className="nav-cta">Get in touch <ArrowUpRight size={16}/></Link>
        </nav>
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer">
      <div className="footer-top container-wide"><div><img className="footer-logo" src={media.logo} alt="Kaajjal Jadhhav Spiritual Healer & Coach"/><p>Personalized guidance for every unique journey.</p></div><div className="footer-links"><span>Explore</span><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/courses">Our courses</Link><Link to="/gallery">Gallery</Link></div><div className="footer-links"><span>Find us</span><p>Bibwewadi, Pune, India</p><Link to="/contact">Contact us <ArrowUpRight size={14}/></Link></div></div>
      <div className="footer-bottom container-wide"><span>© {new Date().getFullYear()} Kaajjal’s Spiritual World.</span><span>Made for the journey inward.</span></div>
    </footer>
  </>;
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="page-intro"><div className="container-wide"><div className="eyebrow"><span className="eyebrow-line" />{label}</div><h1>{title}</h1><p>{description}</p></div><span className="intro-sun" aria-hidden="true">✳</span></section>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container-wide contact-band-inner"><div><div className="eyebrow">THE NEXT CHAPTER</div><h2>Every journey begins<br/>with a <em>conversation.</em></h2></div><Link className="round-link" to="/contact" aria-label="Go to contact page"><ArrowUpRight size={30}/></Link></div></section>;
}
