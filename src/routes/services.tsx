import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { contactDetails, media, services } from '@/lib/site-data';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Astrology, Tarot & Healing Services | Kaajjal’s Spiritual World' },
      {
        name: 'description',
        content:
          'Explore tarot reading, kundali, rudraksha healing, reiki, vastu, numerology, crystal healing, business consultancy and more in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'Spiritual Guidance Services | Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content:
          'Personalized astrology, numerology, healing and consultation services with Kaajjal Jadhhav.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Services,
});

const serviceCategories = ['ALL', 'ASTROLOGY', 'ENERGY WORK', 'NUMEROLOGY', 'SPACES'] as const;

function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredServices = services.filter((item) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'ASTROLOGY')
      return item.category.includes('ASTROLOGY') || item.category.includes('GUIDANCE');
    if (activeCategory === 'ENERGY WORK') return item.category.includes('ENERGY');
    if (activeCategory === 'NUMEROLOGY') return item.category.includes('NUMEROLOGY');
    if (activeCategory === 'SPACES')
      return item.category.includes('SPACES') || item.category.includes('GUIDANCE');
    return true;
  });

  return (
    <>
      <PageIntro
        label="PERSONALIZED GUIDANCE"
        title="Explore our services."
        description="Comprehensive spiritual and astrological modalities tailored to bring perspective, healing, and harmony to your personal and professional journey."
      />

      {/* Featured Spotlight: Rudraksha Healing Technique */}
      <section className="section-wrap bg-[var(--paper)] border-b border-[var(--border)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Poster Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl max-w-sm w-full group bg-black/10">
                <img
                  src={media.posterRudraksha}
                  alt="Rudraksha Healing Technique in Astrology poster"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Explanation & Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                FEATURED ASTROLOGICAL PRACTICE
              </div>
              <h2 className="section-title">
                Rudraksha Healing <em>Technique.</em>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--foreground)]/90">
                Rudraksha healing is a traditional astrological practice in which specific Mukhi Rudraksha are carefully selected based on a person's kundali (birth chart) and planetary influences.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--muted-foreground)]">
                Each Mukhi is traditionally associated with particular celestial energies and planets, helping restore balance, ward off planetary-related challenges, and awaken inner serenity.
              </p>

              {/* Core Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
                {[
                  { title: 'Reduces Stress & Anxiety', desc: 'Soothes mental turbulence and brings calm clarity' },
                  { title: 'Balances Subtle Chakras', desc: 'Harmonizes vital energy points and prana flow' },
                  { title: 'Enhances Well-being', desc: 'Holistic support for physical and emotional vitality' },
                  { title: 'Positivity & Protection', desc: 'Creates an aura of energetic security and grace' },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm"
                  >
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--foreground)]">{b.title}</h4>
                      <p className="text-[11px] text-[var(--muted-foreground)] mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Kaajjal, I would like to book a Rudraksha Healing consultation based on my Kundali.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
                >
                  Book Rudraksha Session <ArrowUpRight size={15} />
                </a>
                <Link
                  to="/gallery"
                  className="px-5 py-3 rounded-full border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--card)] text-xs font-semibold text-[var(--foreground)] transition-colors inline-flex items-center gap-1.5"
                >
                  View in Gallery <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Modalities Grid */}
      <section className="section-wrap">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                OUR SACRED OFFERINGS ({services.length})
              </div>
              <h2 className="section-title">
                A practice for <em>every season.</em>
              </h2>
            </div>
            <p className="section-aside">
              Each consultation is conducted one-to-one with full confidentiality, available both in-person in Bibwewadi, Pune, and online.
            </p>
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
            {filteredServices.map((item) => (
              <div className="service-item" key={item.number}>
                <div className="service-top">
                  <span className="service-number">
                    {item.number} / {services.length}
                  </span>
                  <span className="service-symbol">{item.symbol}</span>
                </div>
                <div className="service-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-dashed border-[var(--border)]">
                  <span className="text-[10px] tracking-wider uppercase text-[var(--muted-foreground)]">
                    In-Person / Online
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:underline"
                  >
                    Enquire <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities in Motion: Video Feature Strip */}
      <section className="section-wrap services-band">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                MODALITIES IN MOTION
              </div>
              <h2 className="section-title">
                Experience the <em>sessions.</em>
              </h2>
            </div>
            <p className="section-aside">
              Get an authentic feel for the atmosphere, tools, and intuitive focus brought to each consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                title: 'Rudraksha Healing in Astrology',
                category: 'RUDRAKSHA & KUNDALI',
                src: media.rudrakshaVideo,
                poster: media.posterRudraksha,
                desc: 'Selecting Mukhi Rudraksha based on kundali and planetary remedies.',
              },
              {
                title: 'Tarot Card Reading',
                category: 'INTUITIVE SPREAD',
                src: media.tarotVideo,
                desc: 'Sacred card spreads uncovering clarity on relationship and career crossroads.',
              },
              {
                title: 'Reiki Energy Cleansing',
                category: 'CHAKRA HEALING',
                src: media.reikiVideo,
                desc: 'Gentle vibrational clearing to release accumulated emotional fatigue.',
              },
              {
                title: 'Vastu Spatial Energy',
                category: 'HOME & WORKSPACE',
                src: media.vastuVideo,
                desc: 'Harmonizing floorplans, directional forces, and living space elements.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/5] bg-black relative overflow-hidden">
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    aria-label={item.title}
                  />
                  <div className="absolute top-3 left-3 pointer-events-none bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 pt-3 border-t border-[var(--border)] text-xs font-semibold text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                  >
                    Book This Modality <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
