import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useState } from 'react';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { media } from '@/lib/site-data';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Kaajjal Jadhhav | Kaajjal’s Spiritual World' },
      {
        name: 'description',
        content:
          'Meet Kaajjal Jadhhav and learn about her six-year journey in astrology, healing and personalized spiritual guidance in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'About Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content: 'A welcoming practice for personal attention, self-awareness and spiritual guidance in Bibwewadi, Pune.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: About,
});

const aboutImages = [
  { src: media.kajal7, alt: 'Kaajjal spiritual guide and community' },
  { src: media.kajal4, alt: 'Kaajjal receiving spiritual excellence recognition' },
  { src: media.kajal2, alt: 'Kaajjal spiritual awards and recognition' },
  { src: media.kajal6, alt: 'Kaajjal at spiritual conference and ceremony' },
  { src: media.kajal3, alt: 'Kaajjal consultation presence' },
  { src: media.kajal8, alt: 'Kaajjal spiritual healing milestones' },
];

function About() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <>
      <PageIntro
        label="ABOUT OUR WORLD"
        title="Guidance with heart."
        description="A welcoming space for self-awareness, clarity and an individual approach to every journey."
      />

      {/* Founder Intro Section */}
      <section className="section-wrap">
        <div className="container-wide intro-grid">
          <div className="intro-visual">
            <video
              src={media.founderVideo}
              poster={media.founderPoster}
              controls
              playsInline
              preload="metadata"
            />
            <span className="intro-stamp">Meet Kaajjal.</span>
          </div>
          <div className="intro-text">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              THE FOUNDER
            </div>
            <h2 className="section-title">
              Meet Kaajjal Jadhhav.
            </h2>
            <p>
              What began as an intuitive journey of exploring Vedic astrology and spirituality has blossomed into a trusted sanctuary dedicated to meaningful, personalized guidance.
            </p>
            <p>
              Over the past six years, Kaajjal’s passion for astrology, energy healing, tarot, and numerology has shaped a diverse range of spiritual services and one-to-one consultations.
            </p>
            <p>
              At the heart of her work is a steadfast belief that every person’s story deserves time, complete empathy, and absolute confidentiality.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="pill-link inline-flex items-center gap-2">
                Book a Consultation <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary & Moments Photo Gallery (Clean images with Full Screen on Click) */}
      <section className="section-wrap bg-[var(--paper)] border-y border-[var(--border)]">
        <div className="container-wide">
          <div className="section-heading mb-8 flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                GALLERY & RECOGNITION
              </div>
              <h2 className="section-title">
                Moments of <em>dedication.</em>
              </h2>
            </div>
            <p className="section-aside">
              Tap any image to view in full screen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedImageIndex(idx);
                }}
                className="group relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/5] bg-black/5"
                aria-label={`Open image ${idx + 1} in full screen`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Clean hover overlay with full screen expand icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 border border-white/20 shadow-lg">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {selectedImageIndex !== null && aboutImages[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image preview"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Close full screen view"
          >
            <X size={22} />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((selectedImageIndex - 1 + aboutImages.length) % aboutImages.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((selectedImageIndex + 1) % aboutImages.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={aboutImages[selectedImageIndex].src}
              alt={aboutImages[selectedImageIndex].alt}
              className="max-h-[88vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
            />
          </div>
        </div>
      )}

      {/* Values Section */}
      <section className="section-wrap services-band">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT GUIDES US</div>
              <h2 className="section-title">
                Rooted in <em>intention.</em>
              </h2>
            </div>
          </div>
          <div className="value-grid">
            <div className="value-item">
              <span>01 /</span>
              <h3>Our philosophy</h3>
              <p>
                Spiritual practices can offer perspectives that help us reflect, understand ourselves and approach challenges with greater awareness.
              </p>
            </div>
            <div className="value-item">
              <span>02 /</span>
              <h3>Our mission</h3>
              <p>
                To create a trusted, welcoming space for personalized guidance across personal growth, relationships, career and business.
              </p>
            </div>
            <div className="value-item">
              <span>03 /</span>
              <h3>Our vision</h3>
              <p>
                A community where astrology, healing, knowledge and positive energy come together to inspire self-awareness and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-wrap">
        <div className="container-wide prose-section">
          <h2>Your journey is unique. Let’s understand it together.</h2>
          <p>
            Whether you are looking for insights through your kundali, seeking tarot guidance, exploring reiki, looking for vastu solutions or considering business consultancy, Kaajjal’s Spiritual World is here to offer personalized guidance along the way.
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
