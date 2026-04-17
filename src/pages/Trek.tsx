import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Mountain, Users, Star, CheckCircle2, Zap, Shield, TrendingUp, Flame, Map } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { useState } from 'react';
import { CustomItemVariants } from '../types';

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const PACKAGES = [
  {
    days: 7,
    tag: 'Short & Intense',
    tagline: 'Maximum Gokyo, Minimum Time',
    description:
      'A fast-paced, high-commitment trek for experienced adventurers with limited vacation days. Every single day is purposeful and rewarding.',
    difficulty: 'Challenging',
    difficultyColor: 'bg-rose-500',
    price: '$980',
    highlights: ['Lukla to Gokyo direct route', 'Gokyo Ri summit (5,357m)', 'Minimal acclimatization days'],
    icon: Zap,
    image: '/machhermo.jpg',
    link: '/trek/7-days',
    featured: false,
  },
  {
    days: 9,
    tag: 'Extended Adventure',
    tagline: 'Balanced Pace, Full Experience',
    description:
      'The sweet spot between speed and comfort. An extra rest day in Namche ensures your body is fully ready for the high-altitude push to Gokyo.',
    difficulty: 'Moderate',
    difficultyColor: 'bg-amber-500',
    price: '$1,150',
    highlights: ['Extra acclimatization in Namche', 'Gokyo Ri & Ngozumpa Glacier', 'Five Sacred Lakes visit'],
    icon: TrendingUp,
    image: '/bento-view.png',
    link: '/trek/9-days',
    featured: false,
  },
  {
    days: 12,
    tag: 'Classic Route',
    tagline: 'The Definitive Gokyo Experience',
    description:
      'Our most popular package. A perfect blend of challenge, culture, and stunning natural beauty. The gold standard for the Gokyo Lakes Trek.',
    difficulty: 'Moderate',
    difficultyColor: 'bg-brand-500',
    price: '$1,450',
    highlights: [
      'Optimal acclimatization schedule',
      'Gokyo Ri summit & Fifth Lake',
      'Full Sherpa village cultural experience',
      'Most recommended for first-timers',
    ],
    icon: Star,
    image: '/besttime.jpg',
    link: '/trek/12-days',
    featured: true,
  },
  {
    days: 15,
    tag: 'Extended Adventure',
    tagline: 'Leisure, Comfort & Complete Immersion',
    description:
      'Take your time. Extra rest days, optional side hikes, and a relaxed schedule let you soak in every breathtaking moment without rushing.',
    difficulty: 'Easy-Moderate',
    difficultyColor: 'bg-emerald-500',
    price: '$1,750',
    highlights: [
      'Maximum acclimatization (lowest AMS risk)',
      'Optional Cho La Pass crossing',
      'Deeper teahouse cultural immersion',
    ],
    icon: Shield,
    image: 'Gokyo-Lake-1726987182.jpg',
    link: '/trek/15-days',
    featured: false,
  },
  {
    days: 18,
    tag: 'Grand Circuit',
    tagline: 'Gokyo Lakes + Everest Base Camp',
    description:
      'The ultimate Himalayan adventure. Cross the glaciated Cho La Pass and stand at both Gokyo Ri and Everest Base Camp on a single unforgettable journey.',
    difficulty: 'Strenuous',
    difficultyColor: 'bg-red-600',
    price: '$2,250',
    highlights: [
      'Gokyo Ri summit (5,357m)',
      'Cho La Pass crossing (5,420m)',
      'Everest Base Camp & Kala Patthar (5,545m)',
      'Full Khumbu grand circuit',
    ],
    icon: Flame,
    image: '/18day.png',
    link: '/trek/18-days',
    featured: false,
  },
  {
    days: 20,
    tag: 'Hidden Circuit',
    tagline: 'Gokyo via the Renjo La Pass',
    description:
      'A quieter, more remote circuit crossing the spectacular Renjo La Pass — one of the most scenic high passes in Nepal, with far fewer trekkers than the main EBC route.',
    difficulty: 'Challenging',
    difficultyColor: 'bg-violet-600',
    price: '$2,450',
    highlights: [
      'Renjo La Pass (5,360m) crossing',
      'Thame Valley — off the beaten path',
      'Gokyo Ri summit & Five Sacred Lakes',
      'Tengboche Monastery cultural visit',
    ],
    icon: Map,
    image: '/RenjoLaPass.jpg',
    link: '/trek/20-days',
    featured: false,
  },
];

const COMPARISON = [
  { label: 'Duration', values: ['7 Days', '9 Days', '12 Days', '15 Days', '18 Days', '20 Days'] },
  { label: 'Difficulty', values: ['Challenging', 'Moderate', 'Moderate', 'Easy-Moderate', 'Strenuous', 'Challenging'] },
  { label: 'Acclim. Days', values: ['0', '1', '2', '3', '3', '3'] },
  { label: 'Max Altitude', values: ['5,357m', '5,357m', '5,357m', '5,357m', '5,545m', '5,360m'] },
  { label: 'Best For', values: ['Experts', 'Fit Beginners', 'Most People', 'First-Timers', 'Experienced', 'Adventurers'] },
  { label: 'Price / person', values: ['$980', '$1,150', '$1,450', '$1,750', '$2,250', '$2,450'] },
];

export default function Trek() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* Hero */}
      <Hero
        title="Gokyo Lake Trek"
        subtitle="Choose Your Adventure"
        image="/trek.jpg"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Discover the perfect itinerary for your Himalayan journey. From rapid express treks to comprehensive grand circuits, we have a route tailored to your experience and timeline.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Whether you are looking for the classic 12-day experience or the ultimate challenge of crossing the Cho La Pass, our Sherpa-led teams ensure your safety and comfort at every step.
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
          <a
            href="#packages"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Explore Packages
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Talk to an Expert
          </Link>
        </div>
      </Hero>

      {/* Intro Strip */}
      <section className="bg-stone-900 py-12 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: Mountain, label: 'Max Elevation', value: '5,357m' },
            { icon: Clock, label: 'Duration Range', value: '7–15 Days' },
            { icon: Users, label: 'Group Size', value: '2–8 Pax' },
            { icon: Star, label: 'Avg. Rating', value: '4.9 / 5' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="space-y-2">
              <stat.icon className="w-8 h-8 text-brand-400 mx-auto" />
              <p className="text-white font-bold text-2xl">{stat.value}</p>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Package Cards */}
      <Section id="packages" title="Our Trek Packages" subtitle="Find Your Perfect Plan" className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.days}
                variants={fadeInUp}
                className={`relative group rounded-[32px] overflow-hidden shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.featured
                  ? 'border-brand-500 shadow-brand-500/20'
                  : 'border-stone-200 hover:border-brand-300'
                  }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute top-5 right-5 z-20 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.days} Day Trek`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                  {/* Day counter on image */}
                  <div className="absolute bottom-5 left-5">
                    <span className="text-6xl font-black text-white leading-none">{pkg.days}</span>
                    <span className="text-white font-bold text-xl ml-1">Days</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 ${pkg.featured ? 'bg-white' : 'bg-white'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 ${pkg.difficultyColor} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-stone-700" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white ${pkg.difficultyColor}`}>
                          {pkg.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-900">{pkg.tagline}</h3>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">From</p>
                      <p className="text-3xl font-black text-brand-600">{pkg.price}</p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{pkg.description}</p>

                  <ul className="space-y-2 mb-8">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={pkg.link}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${pkg.featured
                      ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/30'
                      : 'bg-stone-100 text-stone-900 hover:bg-brand-600 hover:text-white'
                      }`}
                  >
                    View Plan <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Comparison Table */}
      <Section title="Compare at a Glance" subtitle="Which Route Is Right for You?" className="bg-stone-100 py-24 rounded-t-[3rem]">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <motion.table
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-[640px] bg-white rounded-[32px] overflow-hidden shadow-sm"
          >
            <thead>
              <tr className="bg-stone-900 text-white">
                <th className="py-5 px-8 text-left text-xs font-bold uppercase tracking-widest text-stone-400 w-1/4">Category</th>
                {PACKAGES.map((pkg) => (
                  <th key={pkg.days} className="py-5 px-4 text-center">
                    <span className={`text-2xl font-black block ${pkg.featured ? 'text-brand-400' : 'text-white'}`}>
                      {pkg.days}
                    </span>
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Days</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
                  <td className="py-4 px-8 text-sm font-bold text-stone-500 uppercase tracking-widest">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`py-4 px-4 text-center text-sm font-bold ${PACKAGES[j].featured ? 'text-brand-600' : 'text-stone-700'
                        }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </Section>

      <FAQSection className="py-24" />

      <CustomTripBanner />

      {/* Final CTA */}
      <section className="bg-brand-600 text-white text-center py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1520209268518-cd6221f9a24c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Not Sure Which Trek to Pick?
          </h2>
          <p className="text-white/80 text-lg font-medium max-w-xl mx-auto">
            Talk to our expert team. We'll help you choose the perfect route based on your fitness level, time, and budget — completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-stone-900 font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              Get Free Advice
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
