import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';

interface ReviewModalProps {
  selectedIndex: number | null;
  reviews: { src: string; alt: string }[];
  onClose: () => void;
  onNavigate: (index: number) => void;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Client review preview"
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="w-full flex items-center justify-between text-white/90 pb-3 border-b border-white/10 mb-3 px-2">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-lg text-amber-200">
              Client Story {String(selectedIndex + 1).padStart(2, '0')} of {String(reviews.length).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-white/60 hidden sm:inline">
              Verified Experience
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close review viewer"
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image preview */}
        <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
          />

          {/* Navigation buttons */}
          <button
            onClick={() => onNavigate((selectedIndex - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => onNavigate((selectedIndex + 1) % reviews.length)}
            aria-label="Next review"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Footer info */}
        <p className="text-white/60 text-xs mt-3 tracking-wide">
          Tap anywhere outside or press ESC to close · Use arrow keys to navigate
        </p>
      </div>
    </div>
  );
}
