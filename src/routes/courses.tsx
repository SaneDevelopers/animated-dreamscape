import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/SiteLayout';
import { media } from '@/lib/site-data';
export const Route = createFileRoute('/courses')({ head: () => ({ meta: [
  { title: 'Our Courses | Kaajjal’s Spiritual World' },
  { name: 'description', content: 'Interested in learning with Kaajjal’s Spiritual World? Reach out to ask about upcoming courses and learning opportunities.' },
  { property: 'og:title', content: 'Our Courses | Kaajjal’s Spiritual World' }, { property: 'og:description', content: 'Ask about upcoming spiritual learning opportunities with Kaajjal’s Spiritual World.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
] }), component: Courses });
function Courses() { return <><PageIntro label="LEARN & EXPLORE" title="Our courses." description="Curious to deepen your connection with spiritual practices? Start the conversation here."/><section className="section-wrap"><div className="container-wide course-feature"><div><div className="eyebrow">LEARNING WITH KAAJJAL</div><h2>Knowledge is a journey we can share.</h2><p>Course details are being prepared. If you’re interested in learning more, get in touch to ask about upcoming opportunities and what might be right for you.</p><Link to="/contact" className="pill-link">Ask about courses <ArrowUpRight size={16}/></Link></div><img src={media.astrologyPoster} alt="Kaajjal speaking about astrology"/></div></section></> }
