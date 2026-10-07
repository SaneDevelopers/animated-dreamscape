import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { ContactBand, PageIntro, WhatsAppIcon } from '@/components/SiteLayout';
import { contactDetails, services } from '@/lib/site-data';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact & Book Consultation | Kaajjal’s Spiritual World, Bibwewadi Pune' },
      {
        name: 'description',
        content:
          'Book a confidential astrology, tarot or healing consultation with Kaajjal Jadhhav in Bibwewadi, Pune or online.',
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

  const whatsappMessage = encodeURIComponent(
    `✨ *New Consultation Inquiry - Kaajjal’s Spiritual World*\n\n` +
      `*Name:* ${name || 'Prospective Client'}\n` +
      `*Phone:* ${phone || 'Not specified'}\n` +
      `*Service Required:* ${selectedService}\n` +
      `*Session Mode:* ${mode}\n` +
      (message ? `*Questions / Preferred Timing:* ${message}\n` : '') +
      `\nSent via ${contactDetails.websiteUrl}`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const targetUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${whatsappMessage}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageIntro
        label="LET’S CONNECT"
        title="Begin your journey."
        description="Every consultation is a confidential, personalized space for self-awareness, clarity, and empowerment."
      />

      <section className="section-wrap">
        <div className="container-wide contact-layout">
          {/* Left Column: Sanctuary & Contact Information */}
          <div className="space-y-6">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                VISIT & REACH OUT
              </div>
              <h2 className="text-balance">Some questions are better explored together.</h2>
              <p>
                Whether you are seeking insight into your birth chart, seeking relief through energy work, or navigating life crossroads, Kaajjal is here to guide you with complete empathy and confidentiality.
              </p>
            </div>

            {/* Structured Info Cards */}
            <div className="space-y-4 pt-2">
              {/* Location Card */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 shadow-sm transition-all hover:border-[var(--primary)]/40">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary)] block">
                      Consultation Sanctuary
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mt-0.5">
                      Bibwewadi, Pune, Maharashtra
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      In-person consultations are hosted in a quiet, serene environment. Exact sanctuary address provided upon appointment confirmation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 shadow-sm transition-all hover:border-[var(--primary)]/40">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 block">
                      Direct WhatsApp & Calls
                    </span>
                    <a
                      href={`tel:${contactDetails.phoneRaw}`}
                      className="font-serif text-2xl font-medium text-[var(--foreground)] mt-0.5 hover:text-[var(--primary)] transition-colors block"
                    >
                      {contactDetails.phoneDisplay}
                    </a>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      Fastest response via WhatsApp. Voice consultations available by scheduled slot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary)] block">
                      Practice Hours
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mt-0.5">
                      {contactDetails.hours}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      By prior appointment only to maintain privacy and uninterrupted sessions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Modes Available */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 shadow-sm">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary)] block mb-2">
                  Session Formats
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium">
                    🏛️ In-Person Sanctuary (Bibwewadi)
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium">
                    📹 Online Video Session
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium">
                    📞 Audio Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Minimal Booking Form */}
          <div className="bg-[var(--card)] p-7 sm:p-9 rounded-3xl border border-[var(--border)] shadow-xl relative overflow-hidden">
            <div className="eyebrow mb-2">
              <Sparkles size={14} className="text-amber-500" />
              CONFIDENTIAL APPOINTMENT
            </div>

            <h3 className="font-serif text-3xl font-medium text-[var(--foreground)] mb-2">
              Schedule Your Consultation
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] mb-6 leading-relaxed">
              Fill in your details below. Clicking send will prepare and open a formatted appointment request directly in WhatsApp to Kaajjal (+91 86056 66383).
            </p>

            {submitted ? (
              <div className="p-7 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center animate-in fade-in">
                <CheckCircle2 size={44} className="text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif text-2xl text-emerald-900 dark:text-emerald-100 mb-1">
                  Inquiry Ready to Send
                </h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-5 leading-relaxed">
                  Thank you, {name || 'dear client'}. If WhatsApp did not open automatically, tap the button below to connect with Kaajjal immediately:
                </p>
                <a
                  href={`https://wa.me/${contactDetails.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link inline-flex w-full justify-center bg-[#25D366] hover:bg-[#20ba59] border-[#25D366] text-white gap-2 py-3 shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" /> Open in WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs underline text-emerald-700 dark:text-emerald-300 block mx-auto cursor-pointer"
                >
                  Edit details / Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                    Your Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                    Phone / WhatsApp Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                      Preferred Service <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all cursor-pointer appearance-none"
                      >
                        {services.map((s) => (
                          <option key={s.number} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Consultation">General Consultation</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[var(--muted-foreground)] text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                      Session Mode <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all cursor-pointer appearance-none"
                      >
                        <option value="In-Person (Bibwewadi, Pune)">In-Person (Bibwewadi, Pune)</option>
                        <option value="Online (Video Call)">Online (Video Call)</option>
                        <option value="Phone Consultation">Phone Consultation</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[var(--muted-foreground)] text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                    Your Questions or Preferred Timing <span className="text-xs font-normal text-[var(--muted-foreground)] lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any preferred days/times, or specific topics you'd like Kaajjal to focus on..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                  />
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
                    <span>Send Booking via WhatsApp</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Secondary direct options & privacy disclaimer */}
                <div className="pt-3 border-t border-[var(--border)]/60 text-center space-y-2">
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Prefer to message without the form?{' '}
                    <a
                      href={contactDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Chat directly on WhatsApp <ArrowUpRight size={12} />
                    </a>
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--muted-foreground)]">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>100% Confidential · Prior appointment required</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Google Map Sanctuary Location */}
      <section className="pb-24 pt-4">
        <div className="container-wide">
          <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--card)]">
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)]">
              <div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-[var(--primary)] block mb-1">
                  Sanctuary Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--foreground)]">
                  Kaajjal’s Spiritual World · Bibwewadi, Pune
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Easily accessible in Bibwewadi with a serene atmosphere for in-person consultations and energy work.
                </p>
              </div>
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link flex items-center gap-2 whitespace-nowrap self-start sm:self-center"
              >
                Get Directions <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="w-full h-80 sm:h-96 relative bg-[var(--paper)]">
              <iframe
                title="Kaajjal's Spiritual World Location Map"
                src={contactDetails.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
