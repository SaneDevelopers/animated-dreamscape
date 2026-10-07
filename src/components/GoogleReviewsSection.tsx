import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink, MessageCircle, Star } from 'lucide-react';
import { ClientReview, clientReviews, contactDetails } from '@/lib/site-data';
import { GoogleGIcon, ReviewModal } from './ReviewModal';

interface GoogleReviewsSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export function GoogleReviewsSection({ limit, showAllLink = false }: GoogleReviewsSectionProps) {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const displayedReviews = limit ? clientReviews.slice(0, limit) : clientReviews;

  return (
    <>
      <section className="section-wrap services-band bg-[var(--paper)] border-y border-[var(--border)]">
        <div className="container-wide">
          <div className="section-heading flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow flex items-center gap-2">
                <GoogleGIcon className="w-4 h-4" />
                <span>VERIFIED GOOGLE REVIEWS ({clientReviews.length})</span>
              </div>
              <h2 className="section-title">
                Words that <em>stay with us.</em>
              </h2>
              <p className="text-xs text-[var(--muted-foreground)] mt-2 max-w-xl">
                Authentic testimonials and ratings shared directly by seekers on Google Maps for Kaajjal’s Spiritual World in Bibwewadi, Pune.
              </p>
            </div>

            {/* Google Rating Summary Badge */}
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                <GoogleGIcon className="w-5 h-5" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[var(--foreground)]">5.0</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-current text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)] block">
                    Google Maps Reviews
                  </span>
                </div>
              </div>
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Native Responsive Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedReviews.map((review, i) => (
              <div
                key={review.id}
                onClick={() => setSelectedReview(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedReview(i);
                }}
                aria-label={`Read review from ${review.name}`}
                className="group flex flex-col justify-between bg-[var(--card)] p-5 sm:p-6 rounded-3xl border border-[var(--border)] shadow-sm hover:shadow-xl hover:border-[var(--primary)]/40 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Card Header: Reviewer Info & Google icon */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-sm shrink-0`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)]">
                          {review.reviewerInfo ? (
                            <span>{review.reviewerInfo}</span>
                          ) : (
                            <span>Verified Seeker</span>
                          )}
                          <span>•</span>
                          <span>{review.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded-md bg-[var(--background)] border border-[var(--border)] shrink-0">
                      <GoogleGIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Rating Stars & Verified Chip */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={10} /> Verified
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[var(--foreground)]/85 leading-relaxed line-clamp-4 font-sans">
                    "{review.content}"
                  </p>
                </div>

                {/* Card Footer: Highlight & Owner reply indication */}
                <div className="mt-4 pt-3.5 border-t border-[var(--border)]/70 flex flex-col gap-2">
                  {review.ownerReply && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[var(--primary)] bg-[var(--background)] px-2.5 py-1.5 rounded-xl border border-[var(--border)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span className="font-medium">Kaajjal’s reply:</span>
                      <span className="truncate">{review.ownerReply.text}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors pt-1">
                    <span className="text-[11px] font-medium">Read full review</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA to view all reviews or Google Maps */}
          {showAllLink && limit && clientReviews.length > limit && (
            <div className="mt-10 text-center">
              <a
                href="/gallery#reviews"
                className="pill-link inline-flex items-center gap-2"
              >
                View all {clientReviews.length} client stories <ArrowUpRight size={15} />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Full Details Modal on Click */}
      <ReviewModal
        selectedIndex={selectedReview}
        reviews={clientReviews}
        onClose={() => setSelectedReview(null)}
        onNavigate={setSelectedReview}
      />
    </>
  );
}
