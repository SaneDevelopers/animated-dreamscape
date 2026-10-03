import logo from '@/assets/logo.jpg';
import healingVideo from '@/assets/IMG_9216.mp4';
import founderVideo from '@/assets/IMG_9214.MP4';
import astrologyVideo from '@/assets/IMG_9215.MP4';
import watchVideo from '@/assets/IMG_9206.MP4';
import healingPoster from '@/assets/IMG_9216.mp4-4.jpg';
import founderPoster from '@/assets/IMG_9214.MP4-4.jpg';
import astrologyPoster from '@/assets/IMG_9215.MP4-4.jpg';
import watchPoster from '@/assets/IMG_9206.MP4-4.jpg';
import t1 from '@/assets/T-1.jpeg';
import t2 from '@/assets/T-2.jpeg';
import t3 from '@/assets/T-3.jpeg';
import t4 from '@/assets/T-4.jpeg';
import t5 from '@/assets/T-5.jpeg';
import t6 from '@/assets/T-6.jpeg';
import t7 from '@/assets/T-7.jpeg';
import t8 from '@/assets/T-8.jpeg';
import t9 from '@/assets/T-9.jpeg';
import t10 from '@/assets/T-10.jpeg';

export const media = {
  logo,
  healingVideo,
  founderVideo,
  astrologyVideo,
  watchVideo,
  healingPoster,
  founderPoster,
  astrologyPoster,
  watchPoster,
};

export const services = [
  { number: '01', title: 'Tarot Reading', category: 'INTUITIVE GUIDANCE', symbol: '✦', description: 'Explore relationships, career, finances and important life situations through intuitive card readings.' },
  { number: '02', title: 'Kundali Reading', category: 'ASTROLOGY', symbol: '☾', description: 'Understand your birth chart and planetary influences across life’s major phases.' },
  { number: '03', title: 'Reiki Healing', category: 'ENERGY WORK', symbol: '✳', description: 'A holistic energy-healing practice intended to support relaxation and emotional balance.' },
  { number: '04', title: 'Business Consultancy', category: 'PROFESSIONAL GUIDANCE', symbol: '◈', description: 'Astrology- and numerology-based perspectives on business decisions, names and timing.' },
  { number: '05', title: 'Vastu Consultancy', category: 'SPACES', symbol: '⌂', description: 'Guidance for homes, offices and commercial spaces to foster a balanced environment.' },
  { number: '06', title: 'Mobile Numerology', category: 'NUMEROLOGY', symbol: '⌗', description: 'Explore your mobile number through numerological principles and its relationship to your numbers.' },
  { number: '07', title: 'Name Numerology', category: 'NUMEROLOGY', symbol: '◇', description: 'Examine the numerical associations of names for personal, professional or business naming.' },
  { number: '08', title: 'Crystal Healing', category: 'ENERGY WORK', symbol: '✧', description: 'Use crystals as complementary tools for meditation, intention-setting and energy-focused sessions.' },
  { number: '09', title: 'Watch Therapy', category: 'NUMEROLOGY', symbol: '◷', description: 'A numerology-based approach to watches, numbers and timing-related symbolism.' },
  { number: '10', title: 'Psychic Healing', category: 'ENERGY WORK', symbol: '✺', description: 'A spiritual practice focused on energetic cleansing, chakra balancing and reflection.' },
];

export const reviews = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10].map((src, i) => ({ src, alt: `Client review ${i + 1} for Kaajjal’s Spiritual World` }));
