import logo from '@/assets/logo.jpg';
import healingVideo from '@/assets/IMG_9216.mp4';
import founderVideo from '@/assets/IMG_9214.MP4';
import astrologyVideo from '@/assets/IMG_9215.MP4';
import watchVideo from '@/assets/IMG_9206.MP4';
import tarotVideo from '@/assets/IMG_9208.MP4';
import guidanceVideo from '@/assets/IMG_9209.MP4';
import reikiVideo from '@/assets/IMG_9210.MP4';
import vastuVideo from '@/assets/IMG_9211.MP4';
import crystalVideo from '@/assets/IMG_9212.MP4';
import workshopVideo from '@/assets/IMG_9213.MP4';
import rudrakshaVideo from '@/assets/rudraksha-healing.mp4';

import healingPoster from '@/assets/IMG_9216.mp4-4.jpg';
import founderPoster from '@/assets/IMG_9214.MP4-4.jpg';
import astrologyPoster from '@/assets/IMG_9215.MP4-4.jpg';
import watchPoster from '@/assets/IMG_9206.MP4-4.jpg';
import rudrakshaPoster from '@/assets/rudraksha-healing-poster.jpg';
import tarotPoster from '@/assets/IMG_9208-poster.jpg';
import guidancePoster from '@/assets/IMG_9209-poster.jpg';
import reikiPoster from '@/assets/IMG_9210-poster.jpg';
import vastuPoster from '@/assets/IMG_9211-poster.jpg';
import crystalPoster from '@/assets/IMG_9212-poster.jpg';
import workshopPoster from '@/assets/IMG_9213-poster.jpg';

import posterRudraksha from '@/assets/posters/poster-rudraksha.jpeg';
import posterTarot from '@/assets/posters/poster-tarot.jpeg';
import posterPsychicHealing from '@/assets/posters/poster-psychic-healing.jpeg';
import posterCosmicCalm from '@/assets/posters/poster-cosmic-calm.jpeg';
import posterNameNumerology from '@/assets/posters/poster-name-numerology.jpeg';
import posterMobileNumerology from '@/assets/posters/poster-mobile-numerology.jpeg';
import posterKundaliYogs from '@/assets/posters/poster-kundali-yogs.jpeg';
import posterCrystalHealing from '@/assets/posters/poster-crystal-healing.jpeg';
import posterPsychicWorkshop from '@/assets/posters/poster-psychic-workshop.jpeg';

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

import kajal1 from '@/assets/imgs/kajal1.jpeg';
import kajal2 from '@/assets/imgs/kajal2.jpeg';
import kajal3 from '@/assets/imgs/kajal3.jpeg';
import kajal4 from '@/assets/imgs/kajal4.jpeg';
import kajal5 from '@/assets/imgs/kajal5.jpeg';
import kajal6 from '@/assets/imgs/kajal6.jpeg';
import kajal7 from '@/assets/imgs/kajal7.jpeg';
import kajal8 from '@/assets/imgs/kajal8.jpeg';

export const media = {
  logo,
  healingVideo,
  founderVideo,
  astrologyVideo,
  watchVideo,
  tarotVideo,
  guidanceVideo,
  reikiVideo,
  vastuVideo,
  crystalVideo,
  workshopVideo,
  rudrakshaVideo,
  healingPoster,
  founderPoster,
  astrologyPoster,
  watchPoster,
  posterRudraksha,
  posterTarot,
  posterPsychicHealing,
  posterCosmicCalm,
  posterNameNumerology,
  posterMobileNumerology,
  posterKundaliYogs,
  posterCrystalHealing,
  posterPsychicWorkshop,
  kajal1,
  kajal2,
  kajal3,
  kajal4,
  kajal5,
  kajal6,
  kajal7,
  kajal8,
};

export interface SanctuaryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  caption: string;
  wide?: boolean;
}

export const sanctuaryPhotos: SanctuaryPhoto[] = [
  {
    id: 'k4',
    src: kajal4,
    title: 'Consultation Sanctuary in Bibwewadi',
    category: 'SACRED SPACE',
    caption: 'A serene and quiet sanctuary designed for deep reflection and confidential guidance.',
    wide: true,
  },
  {
    id: 'k2',
    src: kajal2,
    title: 'Sacred Crystals & Spiritual Tools',
    category: 'PRACTICE TOOLS',
    caption: 'Energized crystals, tarot decks, and numerological instruments.',
  },
  {
    id: 'k3',
    src: kajal3,
    title: 'Intuitive Reading Space',
    category: 'SESSIONS',
    caption: 'One-to-one personalized consultations in a supportive atmosphere.',
  },
  {
    id: 'k6',
    src: kajal6,
    title: 'Atmosphere of Tranquility',
    category: 'SACRED SPACE',
    caption: 'Peaceful ambience allowing seekers to explore life crossroads without judgment.',
    wide: true,
  },
  {
    id: 'k7',
    src: kajal7,
    title: 'Guiding Seekers Across Pune',
    category: 'COMMUNITY',
    caption: 'Serving in-person clients in Pune and online clients internationally.',
  },
  {
    id: 'k8',
    src: kajal8,
    title: 'Harmonious Balance & Focus',
    category: 'SACRED SPACE',
    caption: 'Thoughtfully designed energetic environment in Bibwewadi.',
  },
];

export interface GalleryVideo {
  id: string;
  src: string;
  poster?: string;
  title: string;
  category: 'ALL' | 'ENERGY WORK' | 'ASTROLOGY & TAROT' | 'NUMEROLOGY & VASTU' | 'WORKSHOPS & GUIDANCE';
  categoryLabel: string;
  duration: string;
  wide?: boolean;
  description: string;
}

export const galleryVideos: GalleryVideo[] = [
  {
    id: 'rudraksha',
    src: rudrakshaVideo,
    poster: rudrakshaPoster,
    title: 'Rudraksha Healing Technique in Astrology',
    category: 'ENERGY WORK',
    categoryLabel: 'Rudraksha & Kundali Healing',
    duration: '0:35',
    description: 'Traditional astrological remedy selecting specific Mukhi Rudraksha based on kundali and planetary influences for mental peace, emotional balance, and overcoming planetary challenges.',
  },
  {
    id: 'healing',
    src: healingVideo,
    poster: healingPoster,
    title: 'Sanctuary Energy & Holistic Healing',
    category: 'ENERGY WORK',
    categoryLabel: 'Energy Healing Sanctuary',
    duration: '0:40',
    description: 'Immersive glimpse into the peaceful atmosphere and serene healing energy at Kaajjal’s spiritual sanctuary in Bibwewadi.',
  },
  {
    id: 'founder',
    src: founderVideo,
    poster: founderPoster,
    title: 'Meet Kaajjal Jadhhav',
    category: 'WORKSHOPS & GUIDANCE',
    categoryLabel: 'Founder & Spiritual Guide',
    duration: '0:10',
    description: 'Introduction to Kaajjal’s compassionate philosophy and 6+ years of dedicated spiritual healing and life coaching.',
  },
  {
    id: 'tarot',
    src: tarotVideo,
    poster: tarotPoster,
    title: 'Tarot & Intuitive Card Insights',
    category: 'ASTROLOGY & TAROT',
    categoryLabel: 'Intuitive Tarot Guidance',
    duration: '0:10',
    description: 'Revealing hidden perspectives and intuitive clarity for relationships, career choices, and personal transitions.',
  },
  {
    id: 'astrology',
    src: astrologyVideo,
    poster: astrologyPoster,
    title: 'Kundali & Vedic Astrology Insights',
    category: 'ASTROLOGY & TAROT',
    categoryLabel: 'Vedic Astrology Consultation',
    duration: '0:10',
    description: 'Understanding your planetary dasha cycles and birth chart blueprint to navigate life’s major milestones.',
  },
  {
    id: 'reiki',
    src: reikiVideo,
    poster: reikiPoster,
    title: 'Reiki & Chakra Alignment Practice',
    category: 'ENERGY WORK',
    categoryLabel: 'Holistic Energy Clearing',
    duration: '0:10',
    description: 'Gentle, restorative energetic cleansing session aimed at releasing emotional tension and harmonizing the subtle body.',
  },
  {
    id: 'vastu',
    src: vastuVideo,
    poster: vastuPoster,
    title: 'Vastu & Spatial Energy Harmony',
    category: 'NUMEROLOGY & VASTU',
    categoryLabel: 'Vastu & Living Spaces',
    duration: '0:19',
    description: 'Practical spatial guidance for homes and offices to foster positive vibration, abundance, and balanced environments.',
  },
  {
    id: 'watch',
    src: watchVideo,
    poster: watchPoster,
    title: 'Watch Therapy & Time Vibration',
    category: 'NUMEROLOGY & VASTU',
    categoryLabel: 'Watch Therapy & Numerology',
    duration: '0:36',
    description: 'Aligning timepieces, numbers, and personal astrological vibrations to enhance daily productivity and focus.',
  },
  {
    id: 'crystals',
    src: crystalVideo,
    poster: crystalPoster,
    title: 'Crystal Healing & Positive Frequencies',
    category: 'ENERGY WORK',
    categoryLabel: 'Crystal Vibration & Aura',
    duration: '0:12',
    description: 'Using authentic crystals and stones to ground intentions, amplify positive aura, and assist in mindful meditation.',
  },
  {
    id: 'workshops',
    src: workshopVideo,
    poster: workshopPoster,
    title: 'Workshops, Courses & Student Mentorship',
    category: 'WORKSHOPS & GUIDANCE',
    categoryLabel: 'Courses & Sacred Learning',
    duration: '0:18',
    description: 'Inspiring workshops and structured guidance sessions designed for seekers wishing to deepen their spiritual knowledge.',
  },
  {
    id: 'guidance',
    src: guidanceVideo,
    poster: guidancePoster,
    title: 'Life Crossroads & Personal Clarity',
    category: 'WORKSHOPS & GUIDANCE',
    categoryLabel: 'Spiritual Coaching',
    duration: '0:10',
    description: 'Confidential one-on-one consultation addressing career decisions, relationship growth, and emotional equilibrium.',
  },
];

export interface ServicePoster {
  id: string;
  src: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
}

export const servicePosters: ServicePoster[] = [
  {
    id: 'rudraksha-healing',
    src: posterRudraksha,
    title: 'Rudraksha Healing Technique',
    category: 'ASTROLOGY & HEALING',
    tagline: 'Balance Your Energy • Heal Your Mind • Align Your Life',
    description: 'Traditional astrological remedy selecting specific Mukhi Rudraksha based on kundali and planetary influences for mental peace, positivity, and chakra alignment.',
  },
  {
    id: 'tarot-consultation',
    src: posterTarot,
    title: 'Tarot Live Consultation',
    category: 'INTUITIVE GUIDANCE',
    tagline: 'Unlock Answers Through Ancient Tarot Wisdom',
    description: 'Online and offline card consultations revealing clarity for love, relationships, career, finances, and life purpose.',
  },
  {
    id: 'psychic-healing-therapy',
    src: posterPsychicHealing,
    title: 'Psychic Healing Therapy',
    category: 'ENERGY WORK & CHAKRAS',
    tagline: 'Holistic Healing for Mind • Body • Spirit • Soul',
    description: 'Experience deep transformation, aura cleansing, chakra balancing, and energetic release with personalized spiritual tools.',
  },
  {
    id: 'embrace-cosmic-calm',
    src: posterCosmicCalm,
    title: 'Embrace Cosmic Calm (Watch Therapy)',
    category: 'NUMEROLOGY & TIME HARMONY',
    tagline: 'Harness Cosmic Energy • Overcome Time Anxiety',
    description: 'Harmonize personal astrological vibrations and productivity through curated timepieces and numerology-aligned watches.',
  },
  {
    id: 'name-numerology',
    src: posterNameNumerology,
    title: 'Name Numerology',
    category: 'SACRED NUMEROLOGY',
    tagline: 'Your Name Holds the Key to Your Destiny',
    description: 'Discover hidden strengths, harmonize personal and professional relationships, and align your name vibration with your life path.',
  },
  {
    id: 'mobile-numerology',
    src: posterMobileNumerology,
    title: 'Mobile Numerology',
    category: 'SACRED NUMEROLOGY',
    tagline: 'Decode Your Numbers • Discover Your True Path',
    description: 'Understand the energetic vibration of your phone numbers to attract career prosperity, financial stability, and clarity.',
  },
  {
    id: 'kundali-yogs',
    src: posterKundaliYogs,
    title: '7 Types of Kundali Yogs',
    category: 'VEDIC ASTROLOGY',
    tagline: 'Planetary Combinations That Shape Your Life Path',
    description: 'In-depth birth chart analysis covering foreign travel settlement, child birth, marriage, job/business success, wealth, and vastu yogs.',
  },
  {
    id: 'crystal-healing-therapy',
    src: posterCrystalHealing,
    title: 'Crystal Healing Therapy',
    category: 'ENERGY & FREQUENCIES',
    tagline: 'Heal • Balance • Transform',
    description: 'Authentic energized crystals and stones to release negativity, soothe anxiety, elevate positive aura, and manifest abundance.',
  },
  {
    id: 'psychic-healing-workshop',
    src: posterPsychicWorkshop,
    title: 'Psychic Healing Workshop',
    category: 'WORKSHOPS & LEARNING',
    tagline: 'Energy Testing, Dowsing Scanner & Chakra Healing',
    description: 'Specialized session covering dowsing scanner aura testing, crystal cleansing, and one-to-one chakra balancing in Baramati & Pune.',
  },
];

export const services = [
  { number: '01', title: 'Tarot Reading', category: 'INTUITIVE GUIDANCE', symbol: '✦', description: 'Explore relationships, career, finances and important life situations through intuitive card readings.' },
  { number: '02', title: 'Kundali Reading', category: 'ASTROLOGY', symbol: '☾', description: 'Understand your birth chart and planetary influences across life’s major phases.' },
  { number: '03', title: 'Rudraksha Healing', category: 'ASTROLOGY & ENERGY WORK', symbol: '🌿', description: 'A traditional astrological practice selecting specific Mukhi Rudraksha based on kundali and planetary influences to foster mental peace, emotional balance, and chakra harmony.' },
  { number: '04', title: 'Reiki Healing', category: 'ENERGY WORK', symbol: '✳', description: 'A holistic energy-healing practice intended to support relaxation and emotional balance.' },
  { number: '05', title: 'Business Consultancy', category: 'PROFESSIONAL GUIDANCE', symbol: '◈', description: 'Astrology- and numerology-based perspectives on business decisions, names and timing.' },
  { number: '06', title: 'Vastu Consultancy', category: 'SPACES', symbol: '⌂', description: 'Guidance for homes, offices and commercial spaces to foster a balanced environment.' },
  { number: '07', title: 'Mobile Numerology', category: 'NUMEROLOGY', symbol: '⌗', description: 'Explore your mobile number through numerological principles and its relationship to your numbers.' },
  { number: '08', title: 'Name Numerology', category: 'NUMEROLOGY', symbol: '◇', description: 'Examine the numerical associations of names for personal, professional or business naming.' },
  { number: '09', title: 'Crystal Healing', category: 'ENERGY WORK', symbol: '✧', description: 'Use crystals as complementary tools for meditation, intention-setting and energy-focused sessions.' },
  { number: '10', title: 'Watch Therapy', category: 'NUMEROLOGY', symbol: '◷', description: 'A numerology-based approach to watches, numbers and timing-related symbolism.' },
  { number: '11', title: 'Psychic Healing', category: 'ENERGY WORK', symbol: '✺', description: 'A spiritual practice focused on energetic cleansing, chakra balancing and reflection.' },
];

export interface ClientReview {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  reviewerInfo?: string;
  content: string;
  ownerReply?: {
    author: string;
    timeAgo: string;
    text: string;
  };
  highlight?: string;
  verified: boolean;
}

export const clientReviews: ClientReview[] = [
  {
    id: 'rev-1',
    name: 'Dhanashree Oswal',
    initials: 'DO',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgo: '7 months ago',
    reviewerInfo: '2 reviews',
    content:
      'Very right prediction. Gives right solution n remedies for the problems. Keeps taking the feedback until the problems are not solved. My personal experience is that what ever she gave me remedies I got 100 percent results. Very genuine person n trustworthy.',
    ownerReply: {
      author: 'Kaajjal’s Spiritual World (owner)',
      timeAgo: '7 months ago',
      text: '🙏❤️🧿',
    },
    highlight: '100% results & genuine remedies',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Shirin Sayyad',
    initials: 'SS',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    timeAgo: '6 months ago',
    reviewerInfo: '1 review',
    content:
      'Thank you Kajal for best remedies after using your salt in bath water I got good result this is very genuine feedback of mine.',
    highlight: 'Best remedies & genuine feedback',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Vikrant Patre',
    initials: 'VP',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgo: '6 months ago',
    reviewerInfo: '4 reviews',
    content:
      'Given nice future prediction from Kajal madam. Her guidance provided clear direction and grounded answers for my upcoming journey.',
    highlight: 'Nice future prediction & direction',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Namrata Kokare',
    initials: 'NK',
    avatarBg: 'bg-teal-600',
    rating: 5,
    timeAgo: '7 months ago',
    reviewerInfo: '1 review · 2 photos',
    content:
      'For years, I approached healing with an open mind but a skeptical heart. I tried everything, yet always felt stuck in the same loops, financially, emotionally, and spiritually. It wasn’t until I started working with properly activated crystal remedies and personalized guidance from Kaajjal that things truly shifted.',
    ownerReply: {
      author: 'Kaajjal’s Spiritual World (owner)',
      timeAgo: '7 months ago',
      text: '❤️❤️❤️❤️🙏🙏 It’s my honour to be with you like angels... We r chosen one to guide such people like u who ever conveys gratitude to universe ❤️✨✨',
    },
    highlight: 'Deep emotional & spiritual breakthrough',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Shubham Yadav',
    initials: 'SY',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgo: '7 months ago',
    reviewerInfo: 'Local Guide · 16 reviews · 25 photos',
    content:
      'Very knowledgeable and kind, one of the best astrologer in Pune. Her guidance was completely spot on and gave me immense clarity with actionable remedies.',
    ownerReply: {
      author: 'Kaajjal’s Spiritual World (owner)',
      timeAgo: '7 months ago',
      text: '🧿😇👍',
    },
    highlight: 'One of the best astrologers in Pune',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Tanmayi Arts',
    initials: 'TA',
    avatarBg: 'bg-purple-600',
    rating: 5,
    timeAgo: '6 months ago',
    reviewerInfo: '2 reviews',
    content:
      'Kajal is a great tarot card reader.....all her remedies work....this is my personal experience....her remedies have a touch of science so they always work....!!',
    highlight: 'Remedies with a touch of science',
    verified: true,
  },
  {
    id: 'rev-7',
    name: 'Nikhil Vade',
    initials: 'NV',
    avatarBg: 'bg-cyan-700',
    rating: 5,
    timeAgo: '7 months ago',
    reviewerInfo: '5 reviews',
    content:
      'Very good guide and great experience. Highly recommend consulting Kaajjal for astrology, tarot insights and life crossroads.',
    highlight: 'Very good guide & great experience',
    verified: true,
  },
  {
    id: 'rev-8',
    name: 'Monali Haral',
    initials: 'MH',
    avatarBg: 'bg-rose-600',
    rating: 5,
    timeAgo: '6 months ago',
    reviewerInfo: '3 reviews · 5 photos',
    content:
      'Satisfied counseling. Kaajjal madam explains everything with immense patience, understanding the root emotional causes.',
    highlight: 'Satisfied & patient counseling',
    verified: true,
  },
  {
    id: 'rev-9',
    name: 'Ekta Agiwal',
    initials: 'EA',
    avatarBg: 'bg-orange-600',
    rating: 5,
    timeAgo: '7 months ago',
    reviewerInfo: '6 reviews',
    content:
      'She is really good with her readings. Accurate timeline perspectives, genuine concern for seekers, and comforting guidance.',
    ownerReply: {
      author: 'Kaajjal’s Spiritual World (owner)',
      timeAgo: '7 months ago',
      text: '🙏❤️',
    },
    highlight: 'Really good & accurate readings',
    verified: true,
  },
  {
    id: 'rev-10',
    name: 'Pragati Omkar',
    initials: 'PO',
    avatarBg: 'bg-violet-600',
    rating: 5,
    timeAgo: '5 months ago',
    reviewerInfo: '1 review',
    content:
      'Kajal Madam is God for me. Her prediction and remedies are too good. After taking remedies I got a result within 3 months. She is the Best Astrologer in India I must say.',
    ownerReply: {
      author: 'Kaajjal’s Spiritual World (owner)',
      timeAgo: '5 months ago',
      text: '🙏❤️',
    },
    highlight: 'Visible result within 3 months',
    verified: true,
  },
];

export const reviews = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10].map((src, i) => ({
  src,
  alt: `Client review ${i + 1} for Kaajjal’s Spiritual World`,
}));

export const contactDetails = {
  name: 'Kaajjal’s Spiritual World',
  address: 'Bibwewadi, Pune, Maharashtra',
  phoneDisplay: '+91 86056 66383',
  phoneRaw: '+918605666383',
  whatsappNumber: '918605666383',
  whatsappUrl: 'https://wa.me/918605666383?text=Hello%20Kaajjal%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.',
  mapUrl: 'https://maps.app.goo.gl/9PkUYrhnRwLTGARH7',
  embedMapUrl: 'https://maps.google.com/maps?q=18.4593638,73.8638416&t=&z=16&ie=UTF8&iwloc=&output=embed',
  hours: 'Monday – Saturday: 11:00 AM – 7:00 PM IST',
  websiteUrl: 'https://kaajjaljadhhav.in',
  domain: 'kaajjaljadhhav.in',
};
