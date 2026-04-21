import Hero from '../components/Hero';
import Section from '../components/Section';
import CustomTripBanner from '../components/CustomTripBanner';
import { Map, Calendar, Shield, ShieldCheck, DollarSign, Info, ArrowRight, CheckCircle2, Backpack, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FAQSection from '../components/FAQSection';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { CustomItemVariants } from '../types';
import { useState } from 'react';
import SEO from '../components/SEO';

const CATEGORIES = [
  {
    id: 'itineraries',
    title: 'Itineraries',
    description: 'Explore carefully crafted trekking routes for all timeframes and experience levels.',
    icon: Calendar,
    path: '/itineraries',
    image: '/itineraries.webp',
    color: 'bg-brand-600'
  },
  {
    id: 'places',
    title: 'Places',
    description: 'Discover the iconic villages, lakes, and viewpoints along the Gokyo trail.',
    icon: Map,
    path: '/places',
    image: '/places.webp',
    color: 'bg-amber-600'
  },
  {
    id: 'planning',
    title: 'Planning',
    description: 'Everything you need to know about permits, flights, budgets, and the best seasons.',
    icon: Mountain,
    path: '/planning',
    image: '/Planning.webp',
    color: 'bg-emerald-600'
  },
  {
    id: 'gear',
    title: 'Gear',
    description: 'Comprehensive packing lists to keep you warm, safe, and comfortable at high altitude.',
    icon: Backpack,
    path: '/gear',
    image: '/gear.webp',
    color: 'bg-indigo-600'
  },
  {
    id: 'safety',
    title: 'Safety',
    description: 'Crucial information on altitude sickness, insurance, first aid, and emergency contacts.',
    icon: ShieldCheck,
    path: '/safety',
    image: '/safety.webp',
    color: 'bg-rose-600'
  }
];


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function UltimateGuide() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <SEO 
        title="The Ultimate Guide to Gokyo Lakes Trek | 2024 Edition" 
        description="Everything you need to know about the Gokyo Lake Trek: Best time to visit, gear lists, training guides, and essential safety tips for high-altitude trekking." 
      />
      <Hero
        title="The Ultimate Guide to Gokyo Lakes"
        subtitle="Everything you need to know for the trek of a lifetime"
        image="/gokyori.webp"
        height="h-[120vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Your comprehensive resource for navigating the turquoise wonders of the Everest region. From trail logistics to cultural insights, we've gathered everything you need for a successful journey.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Whether you are a first-time trekker or a seasoned mountain enthusiast, our expert-curated guide covers every detail to ensure your Gokyo experience is nothing short of extraordinary.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-brand-400 font-bold hover:text-white transition-colors underline decoration-brand-400/30 underline-offset-4 text-base inline-flex items-center gap-1 group/more focus:outline-none"
            >
              {isExpanded ? 'See Less' : 'See More'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </p>
        </div>

        <UserProofBadge />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/trek"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Explore Routes
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Talk to an Expert
          </Link>
        </div>
      </Hero>

      <Section title="Route Overview" subtitle="The Journey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              The Gokyo Lakes trek is a spectacular alternative to the traditional Everest Base Camp route.
              It takes you through the heart of the Khumbu region, offering unparalleled views of four 8,000m peaks:
              Mount Everest, Lhotse, Makalu, and Cho Oyu.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Total Distance', value: '92km' },
                { label: 'Max Altitude', value: '5,357m' },
                { label: 'Avg. Duration', value: '12-15 Days' },
                { label: 'Difficulty', value: 'Challenging' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-white rounded-3xl shadow-sm border border-stone-100">
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
                </div>
              ))}
            </div>
            <Link
              to="/itineraries"
              className="inline-flex items-center gap-2 text-brand-800 font-bold hover:gap-4 transition-all"
            >
              Explore Detailed Routes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="/gikyoremot.webp"
              alt="Gokyo Route Map"
              className="rounded-[40px] shadow-2xl w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Replaced old small grids with the new Trek Directory category cards */}
      <Section className="py-24 bg-stone-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center space-y-6 mb-16"
        >
          <motion.span variants={fadeInUp} className="text-brand-800 font-bold uppercase tracking-widest text-sm">
            Preparation Directory
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
            Everything You Need
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-stone-600 text-lg leading-relaxed">
            From picking the perfect itinerary to packing the right gear, explore our detailed hubs to prepare for the adventure of a lifetime.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {CATEGORIES.map((category, index) => (
            <motion.div variants={fadeInUp} key={category.id} className={index === 0 || index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Link
                to={category.path}
                className="group relative block h-full overflow-hidden rounded-[32px] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors" />
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-brand-800 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-brand-800">
                    Explore Hub <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Day-by-Day Options" subtitle="Itineraries">
        <div className="space-y-12">
          <p className="text-stone-600 text-lg max-w-3xl">
            Depending on your fitness level and time constraints, we offer several itinerary variants.
            The standard 12-day trek is recommended for best acclimatization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[7, 9, 12, 15].map((days) => (
              <Link
                key={days}
                to={`/itineraries/${days}-days`}
                className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <h4 className="text-4xl font-bold text-stone-900 mb-2">{days} Days</h4>
                <p className="text-stone-500 mb-6">
                  {days === 7 ? 'Short & Intense' : days === 12 ? 'Classic Route' : 'Extended Adventure'}
                </p>
                <span className="px-6 py-2 bg-stone-100 text-stone-900 rounded-full font-bold text-sm">
                  View Plan
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Essential Safety" subtitle="Health" dark>
        <div className="bg-brand-900/50 p-12 rounded-[48px] border border-brand-800">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-white">Acclimatization is Key</h3>
              <p className="text-stone-300 text-lg leading-relaxed">
                Trekking to 5,357m is no small feat. Our guides prioritize your safety with
                built-in rest days and constant monitoring of oxygen levels.
              </p>
              <ul className="space-y-4">
                {[
                  'Daily health checks and O2 monitoring',
                  'Expert guides trained in high-altitude medicine',
                  'Emergency evacuation protocols in place',
                  'Comprehensive first-aid kits carried on all treks'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center space-y-6">
                <Shield className="w-16 h-16 text-brand-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Emergency Support</h4>
                <p className="text-stone-400 text-sm">24/7 Ground support and helicopter rescue coordination.</p>
                <Link to="/safety" className="block w-full py-4 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-400 transition-colors">
                  Safety Protocols
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection className="py-24" />

      <CustomTripBanner />
    </main>
  );
}
