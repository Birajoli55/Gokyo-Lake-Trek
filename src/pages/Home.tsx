import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Mountain, ShieldCheck, Star, Frown, Award, Camera, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SEO from '../components/SEO';

// Lazy load below-the-fold sections
const CustomTripBanner = lazy(() => import('../components/CustomTripBanner'));
const ItinerariesSection = lazy(() => import('../components/ItinerariesSection'));
const PlacesSection = lazy(() => import('../components/PlacesSection'));
const PlanningSection = lazy(() => import('../components/PlanningSection'));
const SafetySection = lazy(() => import('../components/SafetySection'));
const GearSection = lazy(() => import('../components/GearSection'));
const GallerySection = lazy(() => import('../components/GallerySection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const TrustBar = lazy(() => import('../components/TrustBar'));
const PressAwardsBanner = lazy(() => import('../components/PressAwardsBanner'));
const ReviewBadge = lazy(() => import('../components/ReviewBadge'));
const UserProofBadge = lazy(() => import('../components/UserProofBadge'));
const MainCTA = lazy(() => import('../components/MainCTA'));

import { useBooking } from '../context/BookingContext';
import { TREK_STATS, BLOG_POSTS } from '../constants';
import { CustomItemVariants } from '../types';

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function IntroParallax({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const introY = useTransform(scrollY, [300, 900], [30, 0]);
  
  return (
    <motion.div style={{ y: introY }} className="text-center lg:text-left space-y-6 self-center">
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { openBooking } = useBooking();

  return (
    <main className="bg-stone-50 overflow-hidden">
      <SEO 
        title="Experience the Ultimate Himalayan Adventure" 
        description="Join Gokyo Explorer for an expert-led trek to the turquoise Gokyo Lakes. Discover Sherpa culture, climb Gokyo Ri, and witness Everest panoramas." 
      />
      {/* Hero Section */}
      <Hero
        title="Gokyo Lake Trek"
        subtitle="The Ultimate Himalayan Adventure"
        image="gokyo-lakes-and-mt-cholatse-adobe-stock-4058-opt.webp"
        height="min-h-screen"
        topContent={<Suspense fallback={<div className="h-10" />}><ReviewBadge /></Suspense>}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Discover the turquoise wonders of the Everest region. A serene, visually stunning journey featuring six emerald lakes and the most dramatic 360-degree panoramas of the world's highest 8,000m peaks.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Beyond the lakes, explore ancient Sherpa villages, experience the warmth of local hospitality, and witness the majesty of Everest, Lhotse, and Cho Oyu from the iconic Gokyo Ri viewpoint.
            </span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-brand-400 font-bold hover:text-white transition-colors underline decoration-brand-400/30 underline-offset-4 text-base inline-flex items-center gap-1 group/more focus:outline-none"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'See Less' : 'See More'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-[-90deg]' : 'group-hover/more:translate-x-1'}`} />
            </button>
          </p>
        </div>

        <Suspense fallback={<div className="h-12" />}>
          <UserProofBadge />
        </Suspense>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/trek"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Explore Trek
          </Link>
          <button
            onClick={() => openBooking()}
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Book Now
          </button>
        </div>
      </Hero>

      {/* Stats Section */}
      <section id="stats" className="relative z-30 -mt-16 container mx-auto px-6 mb-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {TREK_STATS.map((stat) => (
            <motion.div
              variants={fadeInUp}
              key={stat.label}
              className="group bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[32px] text-center space-y-3 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-stone-900/5 border border-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5">
                <stat.icon className="w-16 h-16 text-brand-900" />
              </div>
              
              <div className="flex justify-center">
                <div className="bg-brand-50 p-3 rounded-2xl group-hover:bg-brand-600 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-brand-800 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="space-y-1 relative z-10">
                <span className="text-brand-800 text-[10px] font-black uppercase tracking-[0.2em] block">{stat.label}</span>
                <p className="text-2xl md:text-3xl font-black text-stone-900 leading-none tracking-tight">{stat.value}</p>
                <p className="text-stone-600 text-xs font-bold">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Introduction Section */}
      <Section id="introduction" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Centered Text */}
          <IntroParallax>
            <div className="space-y-3">
              <span className="text-brand-800 font-bold uppercase tracking-widest text-sm">The Experience</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-stone-900 leading-[1.1]">
                A Journey Beyond the Ordinary
              </h2>
            </div>
            <p className="text-stone-700 text-lg leading-relaxed">
              The Gokyo Lake Trek is more than just a hike; it's a spiritual journey into the heart of the Himalayas.
              While the Everest Base Camp trek gets the crowds, Gokyo offers a more tranquil, visually stunning alternative.
              Imagine standing beside the turquoise waters of the third lake, with the massive Cho Oyu looming overhead.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/gokyo-lake-trek" className="inline-flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-sm group hover:text-brand-800 transition-colors">
                Read Detailed Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </IntroParallax>

          {/* Right: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group overflow-hidden rounded-[40px] shadow-2xl relative">
              <img
                loading="lazy"
                src="Gokyo-Lake-1726987182-opt.webp"
                alt="Trekkers on the Gokyo trail"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 max-h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
            </div>

            {/* Heritage Trust Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 -left-6 lg:-left-10 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-white/60 hidden sm:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-stone-900 font-black text-sm tracking-tight">Sherpa Owned & Led</p>
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">100% Local Stewardship</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <Suspense fallback={<div className="h-20" />}><TrustBar /></Suspense>

      {/* Bento Grid: Why Gokyo */}
      <Section title="Why Choose Gokyo?" subtitle="Highlights" className="bg-stone-50 pt-20 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Main Large Card */}
          <motion.div variants={fadeInUp} className="md:col-span-2 relative group overflow-hidden rounded-[40px] shadow-2xl min-h-[350px] md:h-[400px]">
            <img loading="lazy" src="gokyori.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Epic views" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-dark inline-flex p-2 rounded-2xl mb-4 backdrop-blur-md">
                <img loading="lazy" src="/logo-opt.webp" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Epic Panoramas</h3>
              <p className="text-stone-300 text-lg max-w-lg leading-relaxed">See four of the world's highest peaks in one incredible 360-degree sweep from Gokyo Ri.</p>
            </div>
          </motion.div>

          {/* Small Top Right Card */}
          <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-[40px] shadow-2xl min-h-[350px] md:h-[400px]">
            <img loading="lazy" src="gikyoremot.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Remote Path" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Remote Path</h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">Experience the Himalayas without the heavy crowds of the Everest Base Camp highway.</p>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Peaceful</span>
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Authentic</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Bottom Left Card */}
          <motion.div variants={fadeInUp} className="bg-brand-600 p-10 rounded-[40px] text-white flex flex-col justify-between shadow-2xl shadow-brand-900/20 group hover:-translate-y-1 transition-transform duration-500">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">Safe & Supported</h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-6">Expert local guides ensuring proper acclimatization and safety throughout your journey.</p>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest backdrop-blur-md border border-white/20">Certified Team</span>
              </div>
            </div>
          </motion.div>

          {/* Medium Bottom Right Card */}
          <motion.div variants={fadeInUp} className="md:col-span-2 relative group overflow-hidden rounded-[40px] bg-stone-950 flex items-center p-10 min-h-[220px] shadow-2xl">
            <div className="relative z-10 max-w-md">
              <div className="inline-flex p-3 bg-brand-500/20 rounded-2xl mb-4">
                <Calendar className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Perfect Timing</h3>
              <p className="text-stone-300 text-base leading-relaxed mb-6">Spring offers blooming rhododendrons, while autumn provides the clearest, sharpest views of the peaks.</p>
              <Link to="/planning/best-time-to-visit" className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group/link">
                Plan Your Season <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
              <img loading="lazy" src="/HimalayanPanorama-opt.webp" className="w-full h-full object-cover mix-blend-screen" alt="Background" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Safety Section */}
      <Suspense fallback={<div className="h-96" />}><SafetySection title="Your Peace of Mind" subtitle="Safety First" className="bg-stone-900 dark py-24" /></Suspense>

      {/* Places Section */}
      <Suspense fallback={<div className="h-96" />}><PlacesSection title="The Golden Path" subtitle="Iconic Villages & Viewpoints" limit={6} className="bg-stone-100 py-24" /></Suspense>


      {/* Planning Section */}
      <Suspense fallback={<div className="h-96" />}><PlanningSection title="Prepare for the Trail" subtitle="Essential Logistics" limit={3} className="py-24" /></Suspense>

      {/* Gallery Section */}
      <Suspense fallback={<div className="h-96" />}><GallerySection /></Suspense>

      {/* Itineraries Section */}
      <Suspense fallback={<div className="h-96" />}><ItinerariesSection title="Trek Itineraries" subtitle="Choose Your Adventure" limit={6} /></Suspense>

      {/* Gear Section */}
      <Suspense fallback={<div className="h-96" />}><GearSection title="Pack Like a Pro" subtitle="Gear Essentials" className="py-24" /></Suspense>

      {/* Blog Section */}
      <Section title="Latest from the Trail" subtitle="Journal" className="py-24 bg-stone-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <motion.div variants={fadeInUp} key={post.id}>
              <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-[40px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 pb-8">
                <div className="overflow-hidden aspect-[16/10] relative mb-6">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt={post.title}
                  />
                  <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">{post.category}</span>
                  </div>
                </div>
                <div className="space-y-3 px-8">
                  <span className="text-stone-400 text-[11px] font-bold uppercase tracking-widest">{post.date}</span>
                  <h3 className="text-2xl font-bold text-stone-900 group-hover:text-brand-800 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 px-10 py-5 bg-white border border-stone-200 text-stone-900 font-bold uppercase tracking-widest rounded-full hover:bg-stone-50 transition-all shadow-sm">
            View All Stories <ArrowRight className="w-4 h-4 text-brand-800" />
          </Link>
        </motion.div>
      </Section>

      <Suspense fallback={<div className="h-64" />}><CustomTripBanner /></Suspense>

      {/* Testimonials */}
      <Section title="Voices from the Trail" subtitle="Testimonials" className="py-24 bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Sarah Jenkins",
              role: "Photographer",
              image: "/avatar-marcus.webp",
              text: "The sheer color of the Gokyo lakes defies imagination. Waking up to see the reflection of Cho Oyu on the water was the highlight of my trekking life. The guides were simply phenomenal."
            },
            {
              name: "Marcus V.",
              role: "Adventure Enthusiast",
              image: "/avatar-marcus.webp",
              text: "I did EBC three years ago, but Gokyo felt much more intimate and wild. The ascent to Gokyo Ri was tough, but standing at the top alone with my group was an unmatched feeling."
            },
            {
              name: "Elena Rodriguez",
              role: "First-time Trekker",
              image: "/avatar-sarah.webp",
              text: "I was extremely nervous about the altitude, but the acclimatization schedule built into our itinerary was perfect. I felt strong the entire time thanks to the incredible support team."
            }
          ].map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-white p-10 rounded-[40px] shadow-2xl shadow-stone-900/5 border border-stone-100 flex flex-col items-start text-left hover:-translate-y-2 transition-all duration-500 hover:shadow-brand-600/5 relative overflow-hidden"
            >
              {/* Verified Badge Header */}
              <div className="flex items-center gap-2 mb-8 w-full justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Verified Guest</span>
                </div>
              </div>

              <div className="flex-grow mb-8">
                <p className="text-stone-800 text-[17px] leading-[1.6] font-medium italic">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-stone-100 w-full">
                <img src={review.image} className="w-16 h-16 rounded-full object-cover ring-4 ring-stone-50" alt={review.name} />
                <div>
                  <p className="text-stone-900 font-black text-base tracking-tight">{review.name}</p>
                  <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* General FAQ Section with Tabs */}
      <Suspense fallback={<div className="h-96" />}><FAQSection className="bg-stone-100 py-24" /></Suspense>
      <Suspense fallback={<div className="h-40" />}><PressAwardsBanner /></Suspense>
      <Suspense fallback={<div className="h-80" />}><MainCTA /></Suspense>
      
    </main>
  );
}
