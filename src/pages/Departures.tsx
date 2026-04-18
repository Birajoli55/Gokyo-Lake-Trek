import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Mountain, CheckCircle2, ArrowRight, AlertCircle, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { CustomItemVariants } from '../types';

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

type DepartureStatus = 'Available' | 'Limited' | 'Full';

interface Departure {
  id: string;
  date: string;
  returnDate: string;
  days: number;
  package: string;
  difficulty: string;
  price: number;
  spotsTotal: number;
  spotsLeft: number;
  status: DepartureStatus;
  season: string;
  link: string;
}

const DEPARTURES: Departure[] = [
  // Spring 2026
  {
    id: 'SP26-01',
    date: 'Mar 22, 2026',
    returnDate: 'Apr 02, 2026',
    days: 12,
    package: 'Classic Gokyo Lakes',
    difficulty: 'Moderate',
    price: 1450,
    spotsTotal: 8,
    spotsLeft: 4,
    status: 'Available',
    season: 'Spring 2026',
    link: '/itineraries/12-days',
  },
  {
    id: 'SP26-02',
    date: 'Apr 05, 2026',
    returnDate: 'Apr 11, 2026',
    days: 7,
    package: 'Short & Intense Gokyo',
    difficulty: 'Challenging',
    price: 980,
    spotsTotal: 6,
    spotsLeft: 2,
    status: 'Limited',
    season: 'Spring 2026',
    link: '/itineraries/7-days',
  },
  {
    id: 'SP26-03',
    date: 'Apr 10, 2026',
    returnDate: 'Apr 24, 2026',
    days: 15,
    package: 'Extended Comfortable Gokyo',
    difficulty: 'Easy-Moderate',
    price: 1750,
    spotsTotal: 8,
    spotsLeft: 6,
    status: 'Available',
    season: 'Spring 2026',
    link: '/itineraries/15-days',
  },
  {
    id: 'SP26-04',
    date: 'Apr 20, 2026',
    returnDate: 'May 07, 2026',
    days: 18,
    package: 'Gokyo + EBC via Cho La',
    difficulty: 'Strenuous',
    price: 2250,
    spotsTotal: 6,
    spotsLeft: 0,
    status: 'Full',
    season: 'Spring 2026',
    link: '/itineraries/gokyo-cho-la-ebc',
  },
  {
    id: 'SP26-05',
    date: 'May 01, 2026',
    returnDate: 'May 09, 2026',
    days: 9,
    package: 'Efficient Gokyo Loop',
    difficulty: 'Moderate',
    price: 1150,
    spotsTotal: 8,
    spotsLeft: 5,
    status: 'Available',
    season: 'Spring 2026',
    link: '/itineraries/9-days',
  },
  {
    id: 'SP26-06',
    date: 'May 10, 2026',
    returnDate: 'May 29, 2026',
    days: 20,
    package: 'Gokyo via Renjo La',
    difficulty: 'Challenging',
    price: 2450,
    spotsTotal: 6,
    spotsLeft: 3,
    status: 'Available',
    season: 'Spring 2026',
    link: '/itineraries/gokyo-renjo-la',
  },
  // Autumn 2026
  {
    id: 'AU26-01',
    date: 'Sep 20, 2026',
    returnDate: 'Oct 01, 2026',
    days: 12,
    package: 'Classic Gokyo Lakes',
    difficulty: 'Moderate',
    price: 1450,
    spotsTotal: 8,
    spotsLeft: 8,
    status: 'Available',
    season: 'Autumn 2026',
    link: '/itineraries/12-days',
  },
  {
    id: 'AU26-02',
    date: 'Oct 05, 2026',
    returnDate: 'Oct 22, 2026',
    days: 18,
    package: 'Gokyo + EBC via Cho La',
    difficulty: 'Strenuous',
    price: 2250,
    spotsTotal: 6,
    spotsLeft: 6,
    status: 'Available',
    season: 'Autumn 2026',
    link: '/itineraries/gokyo-cho-la-ebc',
  },
  {
    id: 'AU26-03',
    date: 'Oct 12, 2026',
    returnDate: 'Oct 20, 2026',
    days: 9,
    package: 'Efficient Gokyo Loop',
    difficulty: 'Moderate',
    price: 1150,
    spotsTotal: 8,
    spotsLeft: 7,
    status: 'Available',
    season: 'Autumn 2026',
    link: '/itineraries/9-days',
  },
  {
    id: 'AU26-04',
    date: 'Oct 25, 2026',
    returnDate: 'Nov 13, 2026',
    days: 20,
    package: 'Gokyo via Renjo La',
    difficulty: 'Challenging',
    price: 2450,
    spotsTotal: 6,
    spotsLeft: 4,
    status: 'Available',
    season: 'Autumn 2026',
    link: '/itineraries/gokyo-renjo-la',
  },
  {
    id: 'AU26-05',
    date: 'Nov 01, 2026',
    returnDate: 'Nov 08, 2026',
    days: 7,
    package: 'Short & Intense Gokyo',
    difficulty: 'Challenging',
    price: 980,
    spotsTotal: 6,
    spotsLeft: 1,
    status: 'Limited',
    season: 'Autumn 2026',
    link: '/itineraries/7-days',
  },
  {
    id: 'AU26-06',
    date: 'Nov 05, 2026',
    returnDate: 'Nov 19, 2026',
    days: 15,
    package: 'Extended Comfortable Gokyo',
    difficulty: 'Easy-Moderate',
    price: 1750,
    spotsTotal: 8,
    spotsLeft: 5,
    status: 'Available',
    season: 'Autumn 2026',
    link: '/itineraries/15-days',
  },
];

const seasons = ['Spring 2026', 'Autumn 2026'];

const statusStyles: Record<DepartureStatus, { bg: string; text: string; dot: string }> = {
  Available: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  Limited: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  Full: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const difficultyColors: Record<string, string> = {
  'Moderate': 'bg-brand-100 text-brand-700',
  'Easy-Moderate': 'bg-emerald-100 text-emerald-700',
  'Challenging': 'bg-amber-100 text-amber-700',
  'Strenuous': 'bg-red-100 text-red-700',
};

export default function Departures() {
  const { openBooking } = useBooking();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* Hero */}
      <Hero
        title="Trek Departures"
        subtitle="Scheduled Group Departures for 2026"
        image="/GokyoThirdLake.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Join a community of like-minded adventurers. Our fixed departures offer the perfect opportunity to witness the turquoise lakes of Gokyo with a supportive team and expert Sherpa guides.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Choose from our carefully curated dates designed to align with the best weather windows for clear views of Everest and the surrounding peaks. Every departure is 100% guaranteed to run, ensuring your travel plans remain secure and your Himalayan dreams become reality.
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
            href="#schedule"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            View Schedule
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Custom Date
          </Link>
        </div>
      </Hero>

      {/* Info Strip */}
      <section className="bg-stone-900 py-10 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: Calendar, label: 'Seasons', value: '2 per Year' },
            { icon: Users, label: 'Max Group Size', value: '8 Pax' },
            { icon: Clock, label: 'Duration Range', value: '7–20 Days' },
            { icon: Mountain, label: 'Departures in 2026', value: '12 Total' },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="space-y-2">
              <s.icon className="w-7 h-7 text-brand-400 mx-auto" />
              <p className="text-white font-bold text-xl">{s.value}</p>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Departure Schedule */}
      <Section id="schedule" className="py-20">
        {seasons.map((season) => {
          const grouped = DEPARTURES.filter((d) => d.season === season);
          return (
            <div key={season} className="mb-20 last:mb-0">
              {/* Season Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-3 h-3 rounded-full bg-brand-600" />
                <h2 className="text-3xl font-black text-stone-900">{season}</h2>
                <div className="flex-1 h-px bg-stone-200" />
                <span className="text-stone-400 text-sm font-bold uppercase tracking-widest">
                  {grouped.length} Departures
                </span>
              </motion.div>

              {/* Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer}
                className="space-y-5"
              >
                {grouped.map((dep) => {
                  const statusStyle = statusStyles[dep.status];
                  const spotsUsed = dep.spotsTotal - dep.spotsLeft;
                  const pct = (spotsUsed / dep.spotsTotal) * 100;

                  return (
                    <motion.div
                      key={dep.id}
                      variants={fadeInUp}
                      className={`bg-white rounded-[28px] border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${dep.status === 'Full' ? 'opacity-60 border-stone-200' : 'border-stone-200 hover:border-brand-300'
                        }`}
                    >
                      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                        {/* Left: Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {/* Date */}
                          <div>
                            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Departure</p>
                            <p className="text-stone-900 font-bold text-lg">{dep.date}</p>
                            <p className="text-stone-500 text-sm">Returns: {dep.returnDate}</p>
                          </div>

                          {/* Package */}
                          <div>
                            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Package</p>
                            <p className="text-stone-900 font-bold">{dep.package}</p>
                            <span className={`inline-block mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${difficultyColors[dep.difficulty] || 'bg-stone-100 text-stone-600'}`}>
                              {dep.difficulty}
                            </span>
                          </div>

                          {/* Duration & Spots */}
                          <div>
                            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Duration</p>
                            <p className="text-stone-900 font-bold">{dep.days} Days</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${pct >= 100 ? 'bg-red-500' : pct >= 75 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className="text-stone-500 text-xs whitespace-nowrap">
                                {dep.spotsLeft}/{dep.spotsTotal} left
                              </span>
                            </div>
                          </div>

                          {/* Status & Price */}
                          <div>
                            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Price / Person</p>
                            <p className="text-brand-800 font-black text-2xl">${dep.price.toLocaleString()}</p>
                            <span className={`inline-flex items-center gap-1.5 mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                              {dep.status}
                            </span>
                          </div>
                        </div>

                        {/* Right: CTA */}
                        <div className="flex flex-col items-end gap-3 shrink-0">
                          <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                            ID: {dep.id}
                          </span>
                          {dep.status === 'Full' ? (
                            <span className="px-6 py-3 bg-stone-100 text-stone-400 font-bold text-sm uppercase tracking-widest rounded-2xl cursor-not-allowed">
                              Sold Out
                            </span>
                          ) : (
                            <button
                              onClick={() => openBooking(dep.package)}
                              className="px-6 py-3 bg-brand-600 text-white font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-brand-800 transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                              Book Now <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                          <Link
                            to={dep.link}
                            className="text-brand-800 text-xs font-bold hover:underline underline-offset-2"
                          >
                            View Itinerary →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </Section>

      <FAQSection category="Booking" className="py-24 bg-stone-50" />

      <CustomTripBanner />

      {/* Custom Departure CTA */}
      <Section className="bg-stone-100 py-20 rounded-t-[3rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <span className="text-brand-800 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Private & Custom Options
            </span>
            <h2 className="text-4xl font-bold text-stone-900 leading-tight">
              Want Your Own Departure Date?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              None of our scheduled dates work for you? No problem. We offer fully private, custom
              departures for groups of 2 or more on any date that suits your travel plans — at the
              same prices.
            </p>
            <ul className="space-y-3">
              {[
                'Any date year-round (seasonal conditions apply)',
                'All 6 trek packages available as private trips',
                'Same experienced guides & service quality',
                'No extra charge for private departures',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors text-sm"
            >
              Request a Custom Date <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-xl aspect-[4/3]">
              <img
                src="/cgokyo.webp"
                alt="Private trek"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-brand-800" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">20% Deposit to Reserve</p>
                  <p className="text-stone-500 text-xs">Balance due 30 days before departure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
