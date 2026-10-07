import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, BookOpen, CheckCircle, GraduationCap, Sparkles, Video } from 'lucide-react';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { media } from '@/lib/site-data';

export const Route = createFileRoute('/courses')({
  head: () => ({
    meta: [
      { title: 'Spiritual Courses & Workshops | Kaajjal’s Spiritual World, Pune' },
      {
        name: 'description',
        content:
          'Learn Tarot reading, Vedic astrology, numerology and energy healing with personalized mentorship from Kaajjal Jadhhav in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'Our Courses & Workshops | Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content: 'Interactive spiritual learning, workshops and student mentorship with Kaajjal.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Courses,
});

const upcomingWorkshops = [
  {
    title: 'Intuitive Tarot Masterclass',
    badge: 'BEGINNER TO ADVANCED',
    duration: '4-Week Mentorship',
    format: 'In-Person & Online Live',
    topics: ['Major & Minor Arcana Archetypes', 'Spreads for Love, Career & Growth', 'Ethical Reading & Intuitive Tuning'],
  },
  {
    title: 'Vedic Astrology & Kundali Fundamentals',
    badge: 'FOUNDATIONAL ASTROLOGY',
    duration: '6-Week Intensive',
    format: 'Weekend Live Sessions',
    topics: ['12 Bhavas (Houses) & Planetary Influences', 'Nakshatras & Dasha Cycles', 'Reading Birth Charts with Accuracy'],
  },
  {
    title: 'Reiki & Energy Healing Practitioner Level 1',
    badge: 'CERTIFIED PRACTICE',
    duration: 'Weekend Workshop',
    format: 'In-Person Sanctuary (Bibwewadi)',
    topics: ['Chakra Anatomy & Subtle Energy Flow', 'Attunement & Self-Healing Practices', 'Grounding & Shielding Techniques'],
  },
];

function Courses() {
  return (
    <>
      <PageIntro
        label="SACRED MENTORSHIP"
        title="Knowledge shared with heart."
        description="Deepen your spiritual understanding through structured, compassionate guidance in Tarot, Astrology, and Holistic Energy Work."
      />

      {/* Featured Video Section */}
      <section className="section-wrap">
        <div className="container-wide course-feature">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              LEARNING WITH KAAJJAL
            </div>
            <h2 className="text-balance">Knowledge is a journey we can share.</h2>
            <p>
              Whether you are taking your first steps into reading Tarot cards or seeking to understand the ancient wisdom of your Vedic birth chart, Kaajjal provides patient, one-on-one and intimate cohort mentorship.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link to="/contact" className="pill-link inline-flex items-center gap-2">
                Enquire for Next Batch <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Real Workshop & Mentorship Video */}
          <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl bg-black aspect-[4/5] sm:max-h-[520px] mx-auto w-full">
            <video
              src={media.workshopVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              aria-label="Kaajjal's Spiritual World Workshop and Mentorship Video"
            />
            <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10">
              <GraduationCap size={14} className="text-amber-400" />
              <span>Mentorship Session in Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Mentorship Offerings */}
      <section className="section-wrap services-band">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CURRICULUM & WORKSHOPS</div>
              <h2 className="section-title">
                Explore our <em>programs.</em>
              </h2>
            </div>
            <p className="section-aside">
              Hands-on practical training with personalized feedback, printed course material, and continued mentorship after completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {upcomingWorkshops.map((program) => (
              <div
                key={program.title}
                className="p-7 sm:p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary)] block mb-2">
                    {program.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-3">
                    {program.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5 text-xs text-[var(--muted-foreground)]">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border)]">
                      🕒 {program.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border)]">
                      📍 {program.format}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6 text-xs text-[var(--foreground)]">
                    {program.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="pill-link outline w-full justify-center text-xs py-2.5 inline-flex items-center gap-1.5"
                >
                  Join Waitlist <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
