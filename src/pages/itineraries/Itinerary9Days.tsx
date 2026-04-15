import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, ShieldCheck,
  Smartphone, Info, ArrowRight, Star, Utensils, TrendingUp, AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', distance: '8 km', lodging: 'Tea House', meals: 'L, D', desc: 'An early morning scenic flight from Kathmandu to Lukla (2,840m). After meeting your guide and porter, begin trekking down to the riverside village of Phakding — a gentle warm-up for the days ahead.', highlights: ['Scenic Flight', 'Dudh Koshi River', 'Sherpa Villages'] },
  { day: 2, title: 'Phakding to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Cross the famous Hillary Suspension Bridge and enter Sagarmatha National Park. The trail makes a challenging climb through rhododendron forests to the bustling Sherpa capital of Namche Bazaar.', highlights: ['Hillary Bridge', 'Sagarmatha NP', 'First Everest View'] },
  { day: 3, title: 'Acclimatization Day in Namche', altitude: '3,440m', time: '3-4 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A crucial rest and acclimatization day. Hike up to the Everest View Hotel (3,880m) for your first breathtaking glimpse of Everest, Lhotse, and Ama Dablam. Explore the local market and gear shops.', highlights: ['Everest View Hotel', 'Sherpa Museum', 'Market Exploration'] },
  { day: 4, title: 'Namche to Dole', altitude: '4,110m', time: '5-6 hrs', distance: '12 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Leave the Namche trail behind and head into the quieter Gokyo valley. The trail passes through yak pastures and rhododendron forests with increasingly powerful views of Cho Oyu.', highlights: ['Forest Trails', 'Ama Dablam Panoramas', 'Quiet Paths'] },
  { day: 5, title: 'Dole to Gokyo Village', altitude: '4,750m', time: '5-6 hrs', distance: '14 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A milestone day. Pass through Machhermo and the first and second Gokyo Lakes before arriving at the stunning third and largest lake. The turquoise water reflecting the peaks is your reward.', highlights: ['First & Second Lakes', 'Third Sacred Lake', 'Glacier Views'] },
  { day: 6, title: 'Gokyo Ri Summit & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'The crown jewel of the trek. Rise before dawn and summit Gokyo Ri for a 360° panorama of Everest, Lhotse, Makalu, and Cho Oyu. In the afternoon, explore the Fourth and Fifth Gokyo Lakes.', highlights: ['Gokyo Ri Summit', '4 x 8000m Peaks', 'Ngozumpa Glacier View'] },
  { day: 7, title: 'Gokyo to Namche Bazaar', altitude: '3,440m', time: '7-8 hrs', distance: '22 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A long but rewarding descent back down the valley, covering ground efficiently. The return journey through the valley offers the landscape from a completely different angle.', highlights: ['Efficiency Descent', 'Valley Overlooks', 'Evening in Namche'] },
  { day: 8, title: 'Namche to Lukla', altitude: '2,860m', time: '7-8 hrs', distance: '19 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'The final full day of trekking. Retrace the route through Monjo and Phakding, crossing the suspension bridges one last time before reaching Lukla.', highlights: ['Final Trail Push', 'Monjo Checkpoint', 'Farewell Celebration'] },
  { day: 9, title: 'Fly Back to Kathmandu', altitude: '1,400m', time: '40 mins', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'An early morning flight back to Kathmandu. Transfer to your hotel for a well-deserved rest, or explore the city.', highlights: ['Last Mountain View', 'Hot Shower', 'Souvenir Shopping'] },
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

export default function Itinerary9Days() {
  const { openBooking } = useBooking();

  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="9-Day Gokyo Lakes Trek"
        subtitle="The Balanced Route — Full Experience, Smart Pace"
        image="/9day.jpg"
      />

      {/* Introduction */}
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="xl:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-black uppercase tracking-widest border border-brand-100 italic">
                <Star className="w-3 h-3 fill-brand-600" /> Efficient Choice
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                The Smart <span className="text-brand-600 italic">Himalayan Balance</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-brand-600 pl-6">
                Our 9-day itinerary is the "sweet spot" of Himalayan trekking. It's
                engineered for those who want the full majesty of the Gokyo Lakes
                without the time commitment of a two-week expedition.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Best for', value: 'Fit Trekkers', icon: TrendingUp },
                { label: 'Max Altitude', value: '5,357 m', icon: Mountain },
                { label: 'Pace', value: 'Steady', icon: Clock },
                { label: 'Success Rate', value: '95%', icon: ShieldCheck },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <stat.icon className="w-6 h-6 text-brand-600 mx-auto mb-3" />
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1 text-center">{stat.label}</p>
                  <p className="text-sm font-black text-stone-900 text-center">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-600/5 rounded-[40px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative">
              <img
                src="/day9.jpg"
                alt="Gokyo Lakes Panorama"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-10 -right-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  09
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                  Gokyo<br />Efficient
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Trek Highlights" subtitle="Maximum Impact, Optimized Path" className="bg-stone-100 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Gokyo Ri Sunrise (5,357m)",
            "Efficient traverse of the upper valley",
            "View of 4 out of 14 highest 8000m peaks",
            "Strategic Namche acclimatization day",
            "Visit sacred turquoise glacial lakes",
            "Cultural exploration of Sherpa capital",
            "Ngozumpa Glacier trail experience",
            "Optimized Lukla flight logistics",
            "Perfect for experienced trekkers with limited time"
          ].map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-stone-200/50"
            >
              <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
              </div>
              <p className="text-stone-700 font-bold leading-snug">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Why Book With Us?" subtitle="Experience & Efficiency" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Optimized Itinerary", desc: "Every day is planned to maximize your acclimatization while keeping the journey efficient.", icon: Route },
            { title: "Expert Pace-Setters", desc: "Our guides know how to manage energy levels on faster routes to ensure a safe summit.", icon: Briefcase },
            { title: "Real-time Support", desc: "24/7 support throughout your trek via our dedicated Kathmandu office.", icon: Smartphone },
            { title: "Guaranteed Departures", desc: "Our trips run regardless of group size. Your schedule is our priority.", icon: ShieldCheck },
            { title: "Full Gear Inclusion", desc: "Down jackets and -20°C sleeping bags included at no extra cost.", icon: Backpack },
            { title: "Personalized Briefing", desc: "Complete arrival orientation focused on health and route details.", icon: Info },
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

      <Section title="Day-by-Day Itinerary" subtitle="Your Efficient Journey">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4 mb-12">
              <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
              <div className="space-y-2">
                <h4 className="text-amber-900 font-bold">Good for Fit Beginners</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  This 9-day itinerary includes one essential acclimatization day in Namche Bazaar.
                  It is suitable for trekkers with good cardiovascular fitness who want the complete
                  Gokyo experience in a time-efficient package. Not recommended for first-time high-altitude trekkers.
                </p>
              </div>
            </div>
            {ITINERARY_DAYS.map((day, idx) => (
              <ItineraryDayCard key={day.day} day={day} isFirst={idx === 0} />
            ))}
          </div>
          <div className="space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-brand-600 rounded-[40px] text-white space-y-8 shadow-2xl shadow-brand-600/20">
                <p className="text-brand-100 text-[10px] font-black uppercase tracking-[0.2em]">Package Price</p>
                <p className="text-6xl font-black tracking-tighter">$1,150</p>
                <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                <button
                  onClick={() => openBooking('Efficient Gokyo Loop (9 Days)')}
                  className="mt-6 block w-full py-5 bg-white text-brand-700 font-black text-xs uppercase tracking-[0.3em] rounded-[24px] text-center hover:bg-brand-50 transition-all hover:scale-[1.02]"
                >
                  Book This Trek
                </button>
              </div>
              <div className="p-10 bg-white rounded-[40px] border border-stone-100 shadow-xl shadow-stone-900/5 space-y-8">
                <h4 className="text-xl font-black text-stone-900 uppercase tracking-tighter">What's Included</h4>
                <ul className="space-y-4">
                  {[
                    'Professional Guide',
                    'Shared Porter Service',
                    'All Teahouse Accommodation',
                    'Lukla Flight Tickets',
                    'NP Entry Permits',
                    'TIMS & Khumbu Permits',
                    'All Meals (B+L+D)',
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
                <card.icon className="w-6 h-6 text-brand-600 group-hover:text-white" />
              </div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">{card.label}</p>
              <h4 className="text-lg font-black text-stone-900 flex items-center gap-2 group-hover:text-brand-600">
                {card.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </h4>
            </a>
          ))}
        </div>
      </Section>

      <FAQSection category="Preparation" className="py-24 bg-stone-100" />
      <CustomTripBanner />
    </main>
  );
}
