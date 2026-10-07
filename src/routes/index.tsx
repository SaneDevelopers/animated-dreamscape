import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/SiteLayout';
import { GoogleReviewsSection } from '@/components/GoogleReviewsSection';
import { media, services } from '@/lib/site-data';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Kaajjal’s Spiritual World | Astrology, Healing & Guidance in Pune' },
      {
        name: 'description',
        content:
          'Discover personalized tarot, kundali, reiki, numerology and spiritual guidance with Kaajjal Jadhhav in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'Kaajjal’s Spiritual World | Astrology & Healing in Pune' },
      {
        property: 'og:description',
        content: 'Personalized astrology, healing and spiritual guidance in Bibwewadi, Pune.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Home,
});

const slides = [
  {
    layout: 'fullscreen',
    eyebrow: 'WELCOME TO KAAJJAL’S SPIRITUAL WORLD',
    title: (
      <>
        A little clarity.
        <br />
        <em>A lot of possibility.</em>
      </>
    ),
    text: 'A welcoming space for astrology, healing and guidance that meets you where you are.',
    video: media.healingVideo,
    poster: media.healingPoster,
    caption: 'THE ART OF HEALING',
    role: 'Reiki & Energy Practice',
  },
  {
    layout: 'portrait',
    eyebrow: 'GUIDANCE THAT BEGINS WITH YOU',
    title: (
      <>
        Your questions.
        <br />
        <em>Your journey.</em>
      </>
    ),
    text: 'Discover personalized insights through tarot, kundali and spiritual consultation with Kaajjal Jadhhav.',
    video: media.founderVideo,
    poster: media.founderPoster,
    caption: 'MEET KAAJJAL',
    role: 'Founder & Intuitive Guide',
  },
  {
    layout: 'portrait',
    eyebrow: 'UNDERSTAND YOUR UNIQUE PATH',
    title: (
      <>
        Look within.
        <br />
        <em>Move forward.</em>
      </>
    ),
    text: 'Explore astrology, numerology and mindful perspectives for the moments that matter.',
    video: media.astrologyVideo,
    poster: media.astrologyPoster,
    caption: 'ASTROLOGY & INSIGHT',
    role: 'Planetary & Name Insights',
  },
];

const serviceCategories = ['ALL', 'ASTROLOGY', 'ENERGY WORK', 'NUMEROLOGY', 'SPACES'] as const;

function Home() {
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  // Synchronize audio and playback state across slides
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === active) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.muted = true;
      }
    });
  }, [active, isMuted]);

  const change = (next: number) => {
    setActive((next + slides.length) % slides.length);
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const currentSlide = slides[active] ?? slides[0]!;

  const filteredServices = services.filter((item) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'ASTROLOGY') return item.category.includes('ASTROLOGY') || item.category.includes('GUIDANCE');
    if (activeCategory === 'ENERGY WORK') return item.category.includes('ENERGY');
    if (activeCategory === 'NUMEROLOGY') return item.category.includes('NUMEROLOGY');
    if (activeCategory === 'SPACES') return item.category.includes('SPACES') || item.category.includes('GUIDANCE');
    return true;
  });

  return (
    <>
      {/* Iconic Unified Hero Slider: Fullscreen Landscape & Seamlessly Blended Portrait Stage */}
      <section className="hero" aria-label="Featured introductions">
        {slides.map((slide, i) => {
          const isCurrent = active === i;
          return (
            <div
              className={`hero-slide ${isCurrent ? 'active' : ''}`}
              key={slide.caption}
              aria-hidden={!isCurrent}
            >
              {slide.layout === 'fullscreen' ? (
                /* Full-screen Cinematic Landscape Video */
                <div className="hero-media-fullscreen">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={slide.video}
                    poster={slide.poster}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    loop
                    preload={i === 0 ? 'auto' : 'none'}
                  />
                </div>
              ) : (
                /* Blended Portrait Showcase Stage: Full-bleed on mobile, refined showcase card on desktop */
                <>
                  <div className="hero-portrait-stage" aria-hidden="true">
                    <div className="hero-ambient-aura" />
                    <div className="hero-celestial-sun">✳</div>
                  </div>
                  <div className="hero-portrait-wrap">
                    <div className="hero-portrait-glow" />
                    <div className="hero-portrait-card">
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={slide.video}
                        poster={slide.poster}
                        autoPlay
                        muted={isMuted}
                        playsInline
                        loop
                        preload={i === 0 ? 'auto' : 'none'}
                      />
                      <div className="portrait-badge">
                        <span className="live-dot" />
                        <span>{slide.role}</span>
                      </div>
                      <div className="portrait-location-tag">
                        <span>Pune & Online</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Standardized Hero Content Typography & CTAs */}
              <div className="container-wide hero-content">
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  {slide.eyebrow}
                </div>
                <h1 className="display-title">{slide.title}</h1>
                <p>{slide.text}</p>
                <div className="hero-actions">
                  <Link to="/contact" className="pill-link">
                    Book Consultation <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/services" className="pill-link outline">
                    Explore Services <ArrowRight size={15} />
                  </Link>
                </div>
                <div className="hero-metrics">
                  <div className="hero-metric-item">
                    <strong>6+ Years</strong>
                    <span>Experience</span>
                  </div>
                  <div className="hero-metric-divider" />
                  <div className="hero-metric-item">
                    <strong>10 Modalities</strong>
                    <span>Holistic Guidance</span>
                  </div>
                  <div className="hero-metric-divider" />
                  <div className="hero-metric-item">
                    <strong>Pune & Online</strong>
                    <span>1:1 Sessions</span>
                  </div>
                </div>
              </div>

              {/* Subtle Serif Watermark Number */}
              <span className="hero-index">0{i + 1}</span>
            </div>
          );
        })}

        {/* Unified Audio Toggle Button Pinned Consistently Across All Slides */}
        <button
          onClick={toggleSound}
          className="hero-audio-btn"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{isMuted ? 'Tap to listen' : 'Mute sound'}</span>
        </button>

        {/* Previous Slider Bottom Navigation Bar */}
        <div className="hero-bottom">
          <div className="container-wide hero-bottom-inner">
            <div className="hero-dots">
              {slides.map((slide, i) => (
                <button
                  key={slide.caption}
                  className={`hero-dot ${i === active ? 'active' : ''}`}
                  aria-label={`Show slide ${i + 1}: ${slide.caption}`}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => change(i)}
                />
              ))}
            </div>

            <span className="hero-caption">
              0{active + 1} / 0{slides.length} · {currentSlide.caption}
            </span>

            <div className="hero-arrows">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous slide"
                onClick={() => change(active - 1)}
              >
                <ChevronLeft size={17} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Next slide"
                onClick={() => change(active + 1)}
              >
                <ChevronRight size={17} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                'Tarot Reading',
                'Kundali & Vedic Astrology',
                'Reiki Healing',
                'Mobile Numerology',
                'Vastu Consultation',
                'Crystal Healing',
                'Watch Therapy',
                'Psychic Cleansing',
              ].map((text) => (
                <span key={text}>
                  {text} <b>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Founder Section */}
      <section className="section-wrap">
        <div className="container-wide intro-grid">
          <div className="intro-visual">
            <video
              src={media.founderVideo}
              poster={media.founderPoster}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
            />
            <span className="intro-stamp">A practice with purpose.</span>
          </div>
          <div className="intro-text">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              OUR WORLD
            </div>
            <h2 className="section-title">
              Welcome to a space for <em>self-discovery.</em>
            </h2>
            <p>
              Founded by Kaajjal Jadhhav, Kaajjal’s Spiritual World is an astrology and spiritual guidance platform based in Bibwewadi, Pune.
            </p>
            <p>
              With six years of experience, Kaajjal offers individual attention and thoughtful guidance across personal and professional life. Every journey is different. Here, yours is heard with complete confidentiality.
            </p>
            <div className="intro-stats">
              <div>
                <strong>6+</strong>
                <span>years experience</span>
              </div>
              <div>
                <strong>{services.length}</strong>
                <span>sacred services</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>personal approach</span>
              </div>
            </div>
            <Link to="/about" className="text-link">
              More about Kaajjal <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Band with Category Filters */}
      <section className="section-wrap services-band">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                WHAT WE OFFER
              </div>
              <h2 className="section-title">
                Find your way <em>forward.</em>
              </h2>
            </div>
            <div>
              <p className="section-aside">
                A thoughtful mix of astrology, energy work and personalized consultation for every season of life.
              </p>
              <Link to="/services" className="text-link">
                View all {services.length} services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Category filter tabs */}
          <div className="services-tabs-row" role="tablist">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`service-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.slice(0, 6).map((item) => (
              <div className="service-item" key={item.number}>
                <div className="service-top">
                  <span className="service-number">{item.number} / {services.length}</span>
                  <span className="service-symbol">{item.symbol}</span>
                </div>
                <div className="service-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/contact" className="service-card-action">
                  Enquire for {item.title} <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Feature Reconnect */}
      <section className="video-feature">
        <video
          src={media.healingVideo}
          poster={media.healingPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="container-wide video-feature-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            A MOMENT TO RECONNECT
          </div>
          <h2>
            Pause. Breathe.
            <br />
            Find your balance.
          </h2>
          <p>
            Explore a more mindful path with personalized spiritual and healing practices in a safe, tranquil environment.
          </p>
        </div>
      </section>

      {/* Client Stories / Google Reviews */}
      <GoogleReviewsSection limit={3} showAllLink={true} />

      <ContactBand />
    </>
  );
}

