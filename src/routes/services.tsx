import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { services } from '@/lib/site-data';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Astrology, Tarot & Healing Services | Kaajjal’s Spiritual World' },
      {
        name: 'description',
        content:
          'Explore tarot reading, kundali, reiki, vastu, numerology, crystal healing, business consultancy and more in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'Spiritual Guidance Services | Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content:
          'Personalized astrology, numerology, healing and consultation services with Kaajjal Rahul Jadhhav.',
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
    if (activeCategory === 'ASTROLOGY') return item.category.includes('ASTROLOGY') || item.category.includes('GUIDANCE');
    if (activeCategory === 'ENERGY WORK') return item.category.includes('ENERGY');
    if (activeCategory === 'NUMEROLOGY') return item.category.includes('NUMEROLOGY');
    if (activeCategory === 'SPACES') return item.category.includes('SPACES') || item.category.includes('GUIDANCE');
    return true;
  });

  return (
    <>
      <PageIntro
        label="PERSONALIZED GUIDANCE"
        title="Explore our services."
        description="Ten distinct spiritual and astrological modalities tailored to bring perspective, healing, and harmony to your personal and professional journey."
      />

      <section className="section-wrap">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                OUR SACRED OFFERINGS
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
                  <span className="service-number">{item.number} / 10</span>
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

      <ContactBand />
    </>
  );
}

