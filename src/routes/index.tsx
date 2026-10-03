import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/SiteLayout';
import { media, reviews, services } from '@/lib/site-data';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Kaajjal’s Spiritual World | Astrology, Healing & Guidance in Pune' },
    { name: 'description', content: 'Discover personalized tarot, kundali, reiki, numerology and spiritual guidance with Kaajjal Rahul Jadhhav in Bibwewadi, Pune.' },
    { property: 'og:title', content: 'Kaajjal’s Spiritual World | Astrology & Healing in Pune' },
    { property: 'og:description', content: 'Personalized astrology, healing and spiritual guidance in Bibwewadi, Pune.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Home,
});

const slides = [
  { eyebrow: 'WELCOME TO KAAJJAL’S SPIRITUAL WORLD', title: <>A little clarity.<br/><em>A lot of possibility.</em></>, text: 'A welcoming space for astrology, healing and guidance that meets you where you are.', video: media.healingVideo, poster: media.healingPoster, caption: 'THE ART OF HEALING' },
  { eyebrow: 'GUIDANCE THAT BEGINS WITH YOU', title: <>Your questions.<br/><em>Your journey.</em></>, text: 'Discover personalized insights through tarot, kundali and spiritual consultation with Kaajjal Rahul Jadhhav.', video: media.founderVideo, poster: media.founderPoster, caption: 'MEET KAAJJAL' },
  { eyebrow: 'UNDERSTAND YOUR UNIQUE PATH', title: <>Look within.<br/><em>Move forward.</em></>, text: 'Explore astrology, numerology and mindful perspectives for the moments that matter.', video: media.astrologyVideo, poster: media.astrologyPoster, caption: 'ASTROLOGY & INSIGHT' },
];
function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive(i => (i + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  const change = (next: number) => setActive((next + slides.length) % slides.length);
  return <>
    <section className="hero" aria-label="Featured introductions">
      {slides.map((slide, i) => <div className={`hero-slide ${active === i ? 'active' : ''}`} key={slide.caption} aria-hidden={active !== i}>
        <div className="hero-media"><video src={slide.video} poster={slide.poster} autoPlay muted playsInline loop preload={i === 0 ? 'auto' : 'none'} /></div>
        <div className="container-wide hero-content"><div className="eyebrow"><span className="eyebrow-line"/>{slide.eyebrow}</div><h1 className="display-title">{slide.title}</h1><p>{slide.text}</p><div className="hero-actions"><Link to="/services" className="pill-link">Explore our services <ArrowUpRight size={16}/></Link><Link to="/about" className="pill-link outline">Our story <ArrowRight size={16}/></Link></div></div><span className="hero-index">0{i + 1}</span>
      </div>)}
      <div className="hero-bottom"><div className="container-wide hero-bottom-inner"><div className="hero-dots">{slides.map((slide,i) => <Button variant="ghost" key={slide.caption} className={`hero-dot ${i === active ? 'active' : ''}`} aria-label={`Show slide ${i + 1}: ${slide.caption}`} aria-current={i === active ? 'true' : undefined} onClick={() => change(i)} />)}</div><span className="hero-caption">{slides[active].caption}</span><div className="hero-arrows"><Button variant="outline" size="icon" aria-label="Previous slide" onClick={() => change(active - 1)}><ChevronLeft size={17}/></Button><Button variant="outline" size="icon" aria-label="Next slide" onClick={() => change(active + 1)}><ChevronRight size={17}/></Button></div></div></div>
    </section>
    <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({length:2}).map((_,i) => <div key={i} className="flex items-center">{['Tarot Reading','Kundali & Astrology','Reiki Healing','Numerology','Vastu Consultation','Crystal Healing'].map(text => <span key={text}>{text} <b>✳</b></span>)}</div>)}</div></div>
    <section className="section-wrap"><div className="container-wide intro-grid"><div className="intro-visual"><video src={media.founderVideo} poster={media.founderPoster} autoPlay muted playsInline loop preload="metadata"/><span className="intro-stamp">A practice with purpose.</span></div><div className="intro-text"><div className="eyebrow"><span className="eyebrow-line"/>OUR WORLD</div><h2 className="section-title">Welcome to a space for <em>self-discovery.</em></h2><p>Founded by Kaajjal Rahul Jadhhav, Kaajjal’s Spiritual World is an astrology and spiritual guidance platform based in Bibwewadi, Pune.</p><p>With six years of experience, Kaajjal offers individual attention and thoughtful guidance across personal and professional life. Every journey is different. Here, yours is heard.</p><div className="intro-stats"><div><strong>6+</strong><span>years of experience</span></div><div><strong>10</strong><span>spiritual services</span></div><div><strong>1:1</strong><span>personal approach</span></div></div><Link to="/about" className="text-link">More about us <ArrowUpRight size={16}/></Link></div></div></section>
    <section className="section-wrap services-band"><div className="container-wide"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>WHAT WE OFFER</div><h2 className="section-title">Find your way <em>forward.</em></h2></div><div><p className="section-aside">A thoughtful mix of astrology, energy work and personalized consultation for different parts of your life.</p><Link to="/services" className="text-link">All services <ArrowUpRight size={16}/></Link></div></div><div className="services-grid">{services.slice(0,6).map(item => <div className="service-item" key={item.number}><div className="service-top"><span className="service-number">{item.number} / 10</span><span className="service-symbol">{item.symbol}</span></div><div className="service-category">{item.category}</div><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></div></section>
    <section className="video-feature"><video src={media.healingVideo} poster={media.healingPoster} autoPlay muted loop playsInline preload="metadata"/><div className="container-wide video-feature-content"><div className="eyebrow"><span className="eyebrow-line"/>A MOMENT TO RECONNECT</div><h2>Pause. Breathe.<br/>Find your balance.</h2><p>Explore a more mindful path with personalized spiritual and healing practices.</p></div></section>
    <section className="section-wrap"><div className="container-wide"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>KIND WORDS</div><h2 className="section-title">Stories from the <em>journey.</em></h2></div><Link to="/gallery" className="text-link">View more stories <ArrowUpRight size={16}/></Link></div><div className="review-grid">{reviews.slice(0,4).map((review,i) => <div className="review-card" key={review.src}><img src={review.src} alt={review.alt} loading="lazy"/><span>Client story 0{i+1}</span></div>)}</div></div></section>
    <ContactBand/>
  </>;
}
