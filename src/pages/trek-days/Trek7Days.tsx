import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, ShieldCheck,
  Smartphone, Info, ArrowRight, Star, Utensils, AlertTriangle, Zap,
  ChevronDown
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import AltitudeGraph, { AltitudeDataPoint } from '../../components/AltitudeGraph';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';
import InteractiveTrekMap from '../../components/InteractiveTrekMap';

const ITINERARY_DAYS = [
  { day: 1, title: 'Fly to Lukla, Trek to Namche Bazaar', altitude: '3,440m', time: '8-9 hrs', distance: '13 km', lodging: 'Tea House', meals: 'L, D', desc: 'A long and challenging first day, combining the flight with a steep climb to Namche.', highlights: ['Lukla Flight', 'Suspension Bridges', 'Steep Namche Climb'] },
  { day: 2, title: 'Acclimatization in Namche', altitude: '3,440m', time: '3-4 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Essential rest day with a short hike to Everest View Hotel.', highlights: ['Everest View Hotel', 'Sherpa Capital', 'Acclimatization Hike'] },
  { day: 3, title: 'Trek to Machhermo', altitude: '4,470m', time: '7-8 hrs', distance: '16 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A significant gain in altitude, passing through Dole.', highlights: ['Rhododendron Forests', 'Alpine Ascent', 'Valley Vistas'] },
  { day: 4, title: 'Trek to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', distance: '7 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Arriving at the beautiful Gokyo Lakes.', highlights: ['Glacial Lakes', 'Lakeside Village', 'Alpine Tundra'] },
  { day: 5, title: 'Gokyo Ri & Trek to Dole', altitude: '5,357m', time: '8-9 hrs', distance: '15 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Sunrise at Gokyo Ri, then a long descent to Dole.', highlights: ['Gokyo Ri Sunrise', 'Panoramic Peak Views', 'Rapid Descent'] },
  { day: 6, title: 'Trek to Lukla', altitude: '2,860m', time: '9-10 hrs', distance: '22 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A very long day retracing steps all the way back to Lukla.', highlights: ['Final Long Push', 'Suspension Bridges', 'Celebration'] },
  { day: 7, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Morning flight back to the capital.', highlights: ['Last Mountain Views', 'KTM Return', 'Relaxation'] },
];

const PACKING_LIST = [
  {
    category: 'Daily Wear',
    items: [
      'Layered Clothing: Lightweight base layers',
      'Trekking Pants: Quick-drying',
      'Shirts: Long and short sleeve',
      'Warm Hat & Gloves',
      'Sturdy Hiking Boots (Waterproof)',
      'Scarf/Buff'
    ]
  },
  {
    category: 'Technical Gear',
    items: [
      'Daypack (30-40L)',
      'Trekking Poles',
      'Sleeping Bag (-20°C recommended)',
      'Water Bottle (Reusable/Insulated)',
      'Headlamp with extra batteries',
      'Power Bank'
    ]
  },
  {
    category: 'Hygiene & Safety',
    items: [
      'Sunscreen (High SPF)',
      'Lip Balm with SPF',
      'Biodegradable Soap/Toiletries',
      'First Aid Kit (Blister care, etc.)',
      'Insect Repellent'
    ]
  }
];

export default function Trek7Days() {
  const { openBooking } = useBooking();
  const [isExpanded, setIsExpanded] = useState(false);

  const altitudeData: AltitudeDataPoint[] = ITINERARY_DAYS.map(day => ({
    day: day.day,
    title: day.title,
    altitude: parseInt(day.altitude.replace(/,/g, '').replace('m', ''), 10)
  }));

  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="7-Day Gokyo Lakes Trek"
        subtitle="The Express Route for Experienced Trekkers"
        image="/7day.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Designed for elite trekkers with limited time, our 7-day express route is a high-commitment journey that demands peak physical condition.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}This intensive itinerary skips traditional rest days, moving rapidly from Lukla to the turquoise heart of the Gokyo valley for a compressed yet profound Himalayan encounter.
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
          <button
            onClick={() => openBooking('Short & Intense Gokyo (7 Days)')}
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Book This Sprint
          </button>
          <a
            href="#itinerary"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            View Itinerary
          </a>
        </div>
      </Hero>

      <div id="itinerary" className="scroll-mt-20">

        {/* Introduction */}
        <Section className="pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="xl:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full text-xs font-black uppercase tracking-widest border border-rose-100 italic">
                  <Zap className="w-3 h-3 fill-rose-600" /> Express Route Warning
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                  High-Intensity <span className="text-brand-800 italic">Himalayan Sprint</span>
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-rose-600 pl-6">
                  Designed for elite trekkers with limited time, our 7-day express
                  route is a high-commitment journey that demands peak physical
                  condition. This is for those who want to experience the majesty
                  of Gokyo without a 2-week commitment.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Best for', value: 'Elite Athletes', icon: Zap },
                  { label: 'Max Altitude', value: '5,357 m', icon: Mountain },
                  { label: 'Pace', value: 'Express', icon: Clock },
                  { label: 'Risk Grade', value: 'High', icon: AlertTriangle },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                    <stat.icon className="w-6 h-6 text-brand-800 mx-auto mb-3" />
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1 text-center">{stat.label}</p>
                    <p className="text-sm font-black text-stone-900 text-center">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-5 relative group">
              <div className="absolute inset-0 bg-rose-600/5 rounded-[40px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <div className="relative">
                <img
                  src="/GokyoThirdLake.webp"
                  alt="Gokyo Lakes Panorama"
                  className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-10 -right-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                  <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    07
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                    Gokyo<br />Express
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Trek Highlights" subtitle="The Sprint Moments" className="bg-stone-100 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fastest possible route to the turquoise lakes",
              "Summiting Gokyo Ri in record time",
              "Viewing Everest, Lhotse, Cho Oyu, and Makalu",
              "High-altitude stamina challenge",
              "Crossing suspension bridges at pace",
              "Gateway of Namche Bazaar exploration",
              "Minimalist Himalayan experience",
              "Efficient travel logistics",
              "Vertical challenge for seasoned trekkers"
            ].map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-stone-200/50"
              >
                <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-800" />
                </div>
                <p className="text-stone-700 font-bold leading-snug">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Interactive Trek Map */}
        <Section title="Trek Route Map" subtitle="Visualize Your Himalayan Journey" className="py-24">
          <InteractiveTrekMap
            trekName="Gokyo Express"
            duration="7 Days"
            price="$980"
            startPoint="Kathmandu"
            endPoint="Kathmandu"
          />
        </Section>

        <Section title="Why Book With Us?" subtitle="Expertise & Safety" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Elite Pacing Support", desc: "Our guides are specialized in leading high-intensity treks safely and efficiently.", icon: Zap },
              { title: "Rescue Readiness", desc: "For express routes, we maintain emergency helicopter evacuation protocols on standby.", icon: ShieldCheck },
              { title: "Efficient Logistics", desc: "Minimal downtime in Kathmandu and Lukla to maximize your days in the high mountains.", icon: Route },
              { title: "Experienced Crews", desc: "We assign our fastest and most resilient porters and guides to our 7-day groups.", icon: Briefcase },
              { title: "Real-time Tracking", desc: "Daily satellite status updates for your comfort and your family's peace of mind.", icon: Smartphone },
              { title: "Lightweight Strategy", desc: "We help you optimize your gear for a fast-and-light mountain journey.", icon: Backpack },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-brand-900 rounded-[40px] text-white space-y-4 hover:scale-[1.02] transition-transform duration-500">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-brand-400" />
                </div>
                <h4 className="text-xl font-black">{item.title}</h4>
                <p className="text-brand-200/80 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Day-by-Day Trek Plan" subtitle="Rapid Mountain Progression">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex items-start gap-4 mb-12">
                <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                <div className="space-y-2">
                  <h4 className="text-red-900 font-bold">High Risk Trek Plan</h4>
                  <p className="text-red-800 text-sm leading-relaxed">
                    This 7-day trek plan is extremely fast-paced and carries a high risk of
                    altitude sickness. It is only recommended for very fit, experienced
                    trekkers who have recently been at high altitude.
                  </p>
                </div>
              </div>

              <AltitudeGraph data={altitudeData} color="#e11d48" />

              {ITINERARY_DAYS.map((day, idx) => (
                <ItineraryDayCard key={day.day} day={day} isFirst={idx === 0} />
              ))}
            </div>
            <div className="space-y-8">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 bg-brand-600 rounded-[40px] text-white space-y-8 shadow-2xl shadow-brand-600/20">
                  <p className="text-brand-100 text-[10px] font-black uppercase tracking-[0.2em]">Package Price</p>
                  <p className="text-6xl font-black tracking-tighter">$980</p>
                  <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                  <button
                    onClick={() => openBooking('Short & Intense Gokyo (7 Days)')}
                    className="mt-6 block w-full py-5 bg-white text-brand-700 font-black text-xs uppercase tracking-[0.3em] rounded-[24px] text-center hover:bg-brand-50 transition-all hover:scale-[1.02]"
                  >
                    Book This Trek
                  </button>
                </div>
                <div className="p-10 bg-white rounded-[40px] border border-stone-100 shadow-xl shadow-stone-900/5 space-y-8">
                  <h4 className="text-xl font-black text-stone-900 uppercase tracking-tighter">What's Included</h4>
                  <ul className="space-y-4">
                    {[
                      'Professional Trekking Guide',
                      'Shared Porter Service',
                      'All Teahouse Accommodation',
                      'Lukla Flight Tickets',
                      'National Park Permits',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Service Details" subtitle="Included & Excluded" className="bg-stone-100 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Included */}
            <div className="bg-white p-10 rounded-[40px] border border-stone-200 shadow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-black text-stone-900">What's Included</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Licensed Professional Trekking Guide',
                  'Shared Porter Service (2 trekkers : 1 porter)',
                  'All Teahouse / Lodge Accommodation',
                  'Khumbu & Sagarmatha National Park Permits',
                  'Kathmandu to Lukla Round-trip Flights',
                  'Airport Transfers in Kathmandu',
                  'Comprehensive First Aid Medical Kit'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-white p-10 rounded-[40px] border border-stone-200 shadow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <h4 className="text-2xl font-black text-stone-900">What's Excluded</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'International Airfare & Airport Taxes',
                  'Nepal Entry Visa Fees',
                  'Comprehensive Travel & Rescue Insurance',
                  'Personal Trekking Equipment (Boots, Poles, etc.)',
                  'Hot Showers, WiFi & Battery Charging Fees',
                  'Alcoholic & Soft Drinks / Bottled Water',
                  'Tips and Gratuities for Guide & Porters'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600 text-sm font-medium">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
        <Section dark title="Packing List" subtitle="Essential Gear" className="py-24 bg-brand-900 text-white rounded-t-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKING_LIST.map((cat, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[40px] border border-white/10 space-y-6">
                <h4 className="text-2xl font-black tracking-tight">{cat.category}</h4>
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-brand-100 leading-relaxed text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Read Before You Book" subtitle="Essential Resources" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lukla Flights', link: '/planning/flights', icon: Plane, label: 'KTM vs Ramechhap' },
              { title: 'Best Time', link: '/planning/best-time-to-visit', icon: Clock, label: 'Weather Guide' },
              { title: 'AMS Safety', link: '/safety/altitude-sickness', icon: ShieldCheck, label: 'Stay Healthy' },
              { title: 'Gear Guide', link: '/gear', icon: Backpack, label: 'What to Buy' },
            ].map((card) => (
              <a key={card.title} href={card.link} className="p-8 bg-white rounded-[40px] border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
                  <card.icon className="w-6 h-6 text-brand-800 group-hover:text-white" />
                </div>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">{card.label}</p>
                <h4 className="text-lg font-black text-stone-900 flex items-center gap-2 group-hover:text-brand-800">
                  {card.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h4>
              </a>
            ))}
          </div>
        </Section>

        <FAQSection category="Booking" className="py-24 bg-stone-100" />
          </div>
      <CustomTripBanner />
    </main>
  );
}



