import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Maximize2,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { GoogleReviewsSection } from '@/components/GoogleReviewsSection';
import {
  contactDetails,
  galleryVideos,
  sanctuaryPhotos,
  servicePosters,
} from '@/lib/site-data';

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Gallery & Sanctuary Showcase | Kaajjal’s Spiritual World' },
      {
        name: 'description',
        content:
          'Explore sanctuary photographs, service posters, thumbnails, videos, reels and verified client reviews from Kaajjal’s Spiritual World in Bibwewadi, Pune.',
      },
      { property: 'og:title', content: 'Gallery & Service Showcase | Kaajjal’s Spiritual World' },
      {
        property: 'og:description',
        content: 'Explore all videos, service thumbnails & posters, sanctuary photographs, and authentic client stories.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Gallery,
});

const videoFilterCategories = [
  'ALL',
  'ENERGY WORK',
  'ASTROLOGY & TAROT',
  'NUMEROLOGY & VASTU',
  'WORKSHOPS & GUIDANCE',
] as const;

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredVideos = galleryVideos.filter((video) => {
    if (activeCategory === 'ALL') return true;
    return video.category === activeCategory;
  });

  const activeVideo =
    selectedVideoIndex !== null && filteredVideos[selectedVideoIndex]
      ? filteredVideos[selectedVideoIndex]
      : null;

  useEffect(() => {
    if (selectedVideoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideoIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedVideoIndex((prev) =>
          prev !== null ? (prev - 1 + filteredVideos.length) % filteredVideos.length : null
        );
      }
      if (e.key === 'ArrowRight') {
        setSelectedVideoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredVideos.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideoIndex, filteredVideos.length]);

  return (
    <>
      <PageIntro
        label="MOMENTS & STORIES"
        title="A closer look."
        description="Explore videos, official service thumbnails, and verified client experiences from Kaajjal’s Spiritual World in Bibwewadi, Pune."
      />

      {/* Video Showcase Section */}
      <section className="section-wrap">
        <div className="container-wide">
          <div className="section-heading flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                VIDEO SHOWCASE ({galleryVideos.length} REELS & SESSIONS)
              </div>
              <h2 className="section-title">
                Inside the <em>practice.</em>
              </h2>
              <p className="text-xs text-[var(--muted-foreground)] mt-2 max-w-xl">
                Authentic session recordings, remedy breakdowns, and healing demonstrations by Kaajjal Jadhhav. Tap any reel to watch in high definition.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 self-start sm:self-end">
              {videoFilterCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedVideoIndex(null);
                  }}
                  className={`text-xs py-2 px-3.5 rounded-full border transition-all cursor-pointer font-sans ${
                    activeCategory === category
                      ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] font-semibold shadow-md'
                      : 'bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {category === 'ALL' ? `ALL VIDEOS (${galleryVideos.length})` : category}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video, idx) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideoIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedVideoIndex(idx);
                  }
                }}
                aria-label={`Watch ${video.title}`}
                className="group relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col aspect-[4/5] hover:-translate-y-1.5"
              >
                {/* Video Poster Image with hover scale */}
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Multi-Stop Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30 opacity-80 group-hover:opacity-75 transition-opacity" />

                {/* Top Badges */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-2 pointer-events-none">
                  {/* Category Pill Over Video */}
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] tracking-wider uppercase font-semibold px-3 py-1.5 rounded-full border border-amber-400/20 shadow-sm">
                    <Sparkles size={11} className="text-amber-400" />
                    <span>{video.categoryLabel}</span>
                  </div>
                  {/* Duration Badge */}
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono px-2.5 py-1.5 rounded-full border border-white/15 shadow-sm">
                    <Clock size={11} />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Center Glassmorphic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E0A75E] group-hover:text-black group-hover:border-[#E0A75E] group-hover:shadow-[0_0_30px_rgba(224,167,94,0.55)]">
                    <Play size={22} className="fill-current ml-1" />
                  </div>
                </div>

                {/* Video Info Content at Bottom */}
                <div className="relative mt-auto p-5 sm:p-6 text-white z-10 flex flex-col justify-end">
                  <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase font-semibold block mb-1">
                    {video.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white line-clamp-1 group-hover:text-amber-200 transition-colors drop-shadow-sm">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1.5 leading-relaxed drop-shadow-sm font-sans">
                    {video.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                    <span className="flex items-center gap-1.5 font-sans tracking-wide">
                      <Play size={12} className="fill-current" /> Tap to Watch Video
                    </span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATE THUMBNAIL & SERVICE POSTERS SECTION */}
      <section className="section-wrap bg-[var(--paper)] border-y border-[var(--border)]">
        <div className="container-wide">
          <div className="section-heading flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                SERVICE HIGHLIGHTS & THUMBNAILS ({servicePosters.length})
              </div>
              <h2 className="section-title">
                Creative <em>thumbnails & posters.</em>
              </h2>
              <p className="text-xs text-[var(--muted-foreground)] mt-2 max-w-xl">
                Official service blueprints, planetary remedy guides, healing therapy posters, and workshop announcements from Kaajjal’s Spiritual World. Tap any thumbnail to view in high resolution.
              </p>
            </div>
            <p className="section-aside self-start sm:self-end">
              Tap any thumbnail to expand full screen & details.
            </p>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {servicePosters.map((poster, idx) => (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedPoster(idx);
                }}
                aria-label={`Open ${poster.title} thumbnail`}
                className="group flex flex-col bg-[var(--card)] rounded-3xl overflow-hidden border border-[var(--border)] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Poster Image Container */}
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-900/10">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full border border-white/15">
                    {poster.category}
                  </div>

                  {/* Maximize Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-md">
                    <Maximize2 size={14} />
                  </div>

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase block mb-0.5">
                      {poster.tagline}
                    </span>
                    <h3 className="font-serif text-lg font-medium leading-snug drop-shadow-sm line-clamp-1">
                      {poster.title}
                    </h3>
                  </div>
                </div>

                {/* Card footer summary */}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-[var(--card)]">
                  <p className="text-xs text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                    {poster.description}
                  </p>
                  <div className="pt-2 border-t border-dashed border-[var(--border)] flex items-center justify-between text-xs font-semibold text-[var(--primary)] group-hover:translate-x-0.5 transition-transform">
                    <span>View Full Poster</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary & Practice Moments Photos (All 8 Images) */}
      <section className="section-wrap">
        <div className="container-wide">
          <div className="section-heading flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                SANCTUARY & SESSIONS ({sanctuaryPhotos.length} PHOTOGRAPHS)
              </div>
              <h2 className="section-title">
                Moments of <em>presence.</em>
              </h2>
              <p className="text-xs text-[var(--muted-foreground)] mt-2 max-w-xl">
                Authentic photographs from Kaajjal’s consultation sanctuary in Bibwewadi, Pune — capturing the peaceful atmosphere, sacred tools, and serene environment.
              </p>
            </div>
            <p className="section-aside self-start sm:self-end">
              Tap any photograph to view in high resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sanctuaryPhotos.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(i);
                }}
                className={`group relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col ${
                  photo.wide ? 'sm:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-black/5 ${photo.wide ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    {photo.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-lg font-medium drop-shadow-sm">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1 drop-shadow-sm mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Reviews Showcase */}
      <div id="reviews">
        <GoogleReviewsSection />
      </div>

      {/* Lightbox Modal for Service Thumbnails / Posters */}
      {selectedPoster !== null && servicePosters[selectedPoster] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] flex flex-col items-center bg-[var(--card)] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary)] block">
                  {servicePosters[selectedPoster].category}
                </span>
                <h4 className="font-serif text-lg sm:text-2xl text-[var(--foreground)] font-medium">
                  {servicePosters[selectedPoster].title}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  aria-label="Close poster preview"
                  className="p-2 rounded-full hover:bg-[var(--border)] text-[var(--foreground)] transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Poster Preview Body */}
            <div className="relative w-full flex-1 max-h-[68vh] flex items-center justify-center bg-black/95 p-2 overflow-hidden">
              <img
                src={servicePosters[selectedPoster].src}
                alt={servicePosters[selectedPoster].title}
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                type="button"
                onClick={() =>
                  setSelectedPoster(
                    (selectedPoster - 1 + servicePosters.length) % servicePosters.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer"
                aria-label="Previous thumbnail"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedPoster((selectedPoster + 1) % servicePosters.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer"
                aria-label="Next thumbnail"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Modal Footer with Details & WhatsApp CTA */}
            <div className="w-full p-4 sm:p-5 bg-[var(--background)] border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[var(--foreground)]">
                  {servicePosters[selectedPoster].tagline}
                </p>
                <p className="text-[11px] text-[var(--muted-foreground)] mt-0.5 max-w-xl">
                  {servicePosters[selectedPoster].description}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Kaajjal, I would like to inquire about ${servicePosters[selectedPoster].title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
                >
                  Book on WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Sanctuary Photos */}
      {selectedPhoto !== null && sanctuaryPhotos[selectedPhoto] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-white/90 pb-3 border-b border-white/10 mb-3 px-2">
              <div>
                <h4 className="font-serif text-xl text-white font-medium">
                  {sanctuaryPhotos[selectedPhoto].title}
                </h4>
                <p className="text-xs text-white/70">
                  {sanctuaryPhotos[selectedPhoto].caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
              <img
                src={sanctuaryPhotos[selectedPhoto].src}
                alt={sanctuaryPhotos[selectedPhoto].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Video Reels */}
      {activeVideo !== null && selectedVideoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedVideoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-neutral-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Stage: Video Player */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[580px] max-h-[60vh] lg:max-h-[85vh] overflow-hidden">
              <video
                key={activeVideo.src}
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[60vh] lg:max-h-[85vh] object-contain"
                aria-label={activeVideo.title}
              />

              {/* Prev / Next Navigation Arrows on the Video Stage */}
              <button
                type="button"
                onClick={() =>
                  setSelectedVideoIndex(
                    (selectedVideoIndex - 1 + filteredVideos.length) % filteredVideos.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Previous video"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedVideoIndex((selectedVideoIndex + 1) % filteredVideos.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Next video"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Right Drawer: Video Info & Actions */}
            <div className="w-full lg:w-96 flex flex-col justify-between p-5 sm:p-6 bg-neutral-900/95 border-t lg:border-t-0 lg:border-l border-white/10 text-white overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                    {activeVideo.categoryLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedVideoIndex(null)}
                    aria-label="Close video player"
                    className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-amber-400/30">
                      <Clock size={10} /> {activeVideo.duration}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Reel {selectedVideoIndex + 1} of {filteredVideos.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-white leading-snug">
                    {activeVideo.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed mt-3">
                    {activeVideo.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Kaajjal, I watched your video on "${activeVideo.title}" and would like to inquire about a consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={16} /> Book Session on WhatsApp
                </a>

                {/* Playlist Nav */}
                <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVideoIndex(
                        (selectedVideoIndex - 1 + filteredVideos.length) % filteredVideos.length
                      )
                    }
                    className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <span className="font-mono text-[11px]">
                    {selectedVideoIndex + 1} / {filteredVideos.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVideoIndex((selectedVideoIndex + 1) % filteredVideos.length)
                    }
                    className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactBand />
    </>
  );
}
