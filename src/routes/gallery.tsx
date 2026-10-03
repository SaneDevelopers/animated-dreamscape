import { createFileRoute } from '@tanstack/react-router';
import { ContactBand, PageIntro } from '@/components/SiteLayout';
import { media, reviews } from '@/lib/site-data';
export const Route = createFileRoute('/gallery')({ head: () => ({ meta: [
  { title: 'Videos & Client Stories | Kaajjal’s Spiritual World Gallery' },
  { name: 'description', content: 'Watch videos from Kaajjal’s Spiritual World and browse real client reviews and experiences.' },
  { property: 'og:title', content: 'Gallery & Client Stories | Kaajjal’s Spiritual World' }, { property: 'og:description', content: 'Videos, moments and client stories from Kaajjal’s Spiritual World.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
] }), component: Gallery });
const videos = [
  { src:media.healingVideo, poster:media.healingPoster, label:'Healing & balance', wide:true },
  { src:media.founderVideo, poster:media.founderPoster, label:'Meet Kaajjal' },
  { src:media.astrologyVideo, poster:media.astrologyPoster, label:'Astrology insights' },
  { src:media.watchVideo, poster:media.watchPoster, label:'Watch therapy' },
];
function Gallery() { return <><PageIntro label="MOMENTS & STORIES" title="A closer look." description="Explore videos and words shared by people who have connected with Kaajjal’s Spiritual World."/><section className="section-wrap"><div className="container-wide"><div className="section-heading"><div><div className="eyebrow">WATCH & EXPLORE</div><h2 className="section-title">Inside the <em>practice.</em></h2></div></div><div className="gallery-grid">{videos.map(video => <figure className={`gallery-cell ${video.wide ? 'wide' : ''}`} key={video.label}><video src={video.src} poster={video.poster} controls playsInline preload="metadata" aria-label={video.label}/><figcaption>{video.label}</figcaption></figure>)}</div></div></section><section className="section-wrap services-band"><div className="container-wide"><div className="section-heading"><div><div className="eyebrow">CLIENT STORIES</div><h2 className="section-title">Words that <em>stay with us.</em></h2></div></div><div className="review-grid">{reviews.map((review,i) => <div className="review-card" key={review.src}><img src={review.src} alt={review.alt} loading="lazy"/><span>Client story {String(i+1).padStart(2,'0')}</span></div>)}</div></div></section><ContactBand/></> }
