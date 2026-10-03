import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PageIntro } from '@/components/SiteLayout';
import { services } from '@/lib/site-data';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact & Book Consultation | Kaajjal’s Spiritual World, Bibwewadi Pune' },
      {
        name: 'description',
        content:
          'Book a confidential astrology, tarot or healing consultation with Kaajjal Rahul Jadhhav in Bibwewadi, Pune or online.',
      },
      { property: 'og:title', content: 'Contact Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content: 'Connect with Kaajjal’s Spiritual World in Bibwewadi, Pune.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Tarot Reading');
  const [mode, setMode] = useState('In-Person (Bibwewadi, Pune)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kaajjal, I would like to book a consultation session.\n\n` +
      `*Name:* ${name || 'Prospective Client'}\n` +
      `*Phone:* ${phone || 'Not specified'}\n` +
      `*Service:* ${selectedService}\n` +
      `*Mode:* ${mode}\n` +
      (message ? `*Notes:* ${message}\n` : '')
  );

  return (
    <>
      <PageIntro
        label="LET’S CONNECT"
        title="Begin your journey."
        description="Every consultation is a confidential, personalized space for self-awareness, clarity, and empowerment."
      />

      <section className="section-wrap">
        <div className="container-wide contact-layout">
          {/* Left Column: Info & Location */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              VISIT & REACH OUT
            </div>
            <h2>Some questions are better explored together.</h2>
            <p>
              Whether you are seeking insight into your birth chart, seeking relief through energy work, or navigating life and business crossroads, Kaajjal is here to guide you.
            </p>

            <div className="contact-detail">
              <span>LOCATION</span>
              <strong>Bibwewadi, Pune, Maharashtra</strong>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Quiet & peaceful consultation sanctuary in Bibwewadi.
              </p>
              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Bibwewadi%2C+Pune"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="contact-detail">
              <span>PRACTICE HOURS</span>
              <strong>Monday – Saturday</strong>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                10:00 AM – 7:00 PM IST · Prior appointment required
              </p>
            </div>

            <div className="contact-detail">
              <span>FOUNDER & PRACTITIONER</span>
              <strong>Kaajjal Rahul Jadhhav</strong>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Spiritual Healer, Astrologer & Life Guidance Coach (6+ Years)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="bg-[var(--card)] p-8 sm:p-10 rounded-3xl border border-[var(--border)] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-5 rounded-full blur-2xl pointer-events-none" />

            <div className="eyebrow mb-2">
              <Sparkles size={14} className="text-amber-500" />
              SCHEDULE A SESSION
            </div>

            <h3 className="font-serif text-3xl font-medium text-[var(--foreground)] mb-2">
              Book a Consultation
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] mb-6">
              Fill in your details below and send your inquiry directly via WhatsApp or submission.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center animate-in fade-in">
                <CheckCircle2 size={40} className="text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif text-2xl text-emerald-900 dark:text-emerald-100 mb-1">
                  Inquiry Received
                </h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-5">
                  Thank you, {name || 'dear client'}. You can also connect directly on WhatsApp to finalize your timing immediately:
                </p>
                <a
                  href={`https://wa.me/?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link inline-flex w-full justify-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600"
                >
                  <MessageCircle size={16} /> Open in WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs underline text-emerald-700 dark:text-emerald-300 block mx-auto cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                      Preferred Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.number} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                    >
                      <option value="In-Person (Bibwewadi, Pune)">In-Person (Pune)</option>
                      <option value="Online (Video Call)">Online (Video Call)</option>
                      <option value="Phone Consultation">Phone Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Your Questions / Preferred Date (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any specific life situation or questions you'd like Kaajjal to focus on..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="pill-link flex-1 justify-center cursor-pointer"
                  >
                    Submit Booking Inquiry <Send size={15} />
                  </button>
                  <a
                    href={`https://wa.me/?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-link outline flex items-center justify-center gap-2 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white"
                  >
                    <MessageCircle size={15} className="text-emerald-500" /> WhatsApp
                  </a>
                </div>

                <p className="text-[10px] text-center text-[var(--muted-foreground)] pt-1">
                  🔒 100% confidential · Your personal details are never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

