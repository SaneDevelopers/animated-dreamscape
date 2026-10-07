import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Star, X } from 'lucide-react';
import { useEffect } from 'react';
import { ClientReview, contactDetails } from '@/lib/site-data';

interface ReviewModalProps {
  selectedIndex: number | null;
  reviews: ClientReview[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GoogleGIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export function ReviewModal({ selectedIndex, reviews, onClose, onNavigate }: ReviewModalProps) {
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((selectedIndex - 1 + reviews.length) % reviews.length);
      if (e.key === 'ArrowRight') onNavigate((selectedIndex + 1) % reviews.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, reviews.length, onClose, onNavigate]);

  if (selectedIndex === null) return null;
  const current = reviews[selectedIndex];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Google Client Review Details"
    >
      <div
        className="relative max-w-xl w-full flex flex-col bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--background)]">
          <div className="flex items-center gap-2">
            <GoogleGIcon className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
              Verified Google Review
            </span>
            <span className="text-xs text-[var(--muted-foreground)]">
              ({selectedIndex + 1} of {reviews.length})
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close review viewer"
            className="p-2 rounded-full hover:bg-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Review Content */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Reviewer Profile */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div
                className={`w-12 h-12 rounded-full ${current.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}
              >
                {current.initials}
              </div>
              <div>
                <h3 className="font-semibold text-base text-[var(--foreground)] leading-tight">
                  {current.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mt-0.5">
                  {current.reviewerInfo && <span>{current.reviewerInfo}</span>}
                  <span>•</span>
                  <span>{current.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-current text-amber-400" />
              ))}
            </div>
          </div>

          {/* Highlight Badge */}
          {current.highlight && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-200 text-xs font-medium border border-amber-500/20">
              <span>✦</span> {current.highlight}
            </div>
          )}

          {/* Full Review Text */}
          <blockquote className="font-serif text-lg sm:text-xl text-[var(--foreground)] leading-relaxed italic border-l-2 border-[var(--primary)] pl-4 py-1">
            "{current.content}"
          </blockquote>

          {/* Owner Reply if present */}
          {current.ownerReply && (
            <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold text-[var(--primary)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {current.ownerReply.author}
                </span>
                <span className="text-[10px] text-[var(--muted-foreground)] font-normal">
                  {current.ownerReply.timeAgo}
                </span>
              </div>
              <p className="text-xs text-[var(--foreground)]/80 leading-relaxed font-sans">
                {current.ownerReply.text}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-[var(--border)] bg-[var(--background)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate((selectedIndex - 1 + reviews.length) % reviews.length)}
              aria-label="Previous review"
              className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--card)] text-[var(--foreground)] transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => onNavigate((selectedIndex + 1) % reviews.length)}
              aria-label="Next review"
              className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--card)] text-[var(--foreground)] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <a
            href={contactDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
          >
            <span>View on Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
