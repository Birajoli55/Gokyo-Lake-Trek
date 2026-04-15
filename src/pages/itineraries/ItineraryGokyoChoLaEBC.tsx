import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, ShieldCheck,
  Smartphone, Info, ArrowRight, Star, Utensils, Zap, AlertTriangle, Flame
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import { motion } from 'motion/react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', distance: '8 km', lodging: 'Tea House', meals: 'L, D', desc: 'Scenic flight from Kathmandu to Lukla, then a gentle descent along the Dudh Koshi river to Phakding village.', highlights: ['Lukla Flight', 'River Walk', 'Sherpa Villages'] },
  { day: 2, title: 'Phakding to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Cross the Hillary Suspension Bridge and enter Sagarmatha National Park. A steep climb through rhododendron forests delivers you to the Sherpa capital.', highlights: ['Sagarmatha NP Entry', 'Hillary Bridge', 'First Everest View'] },
  { day: 3, title: 'Acclimatization in Namche Bazaar', altitude: '3,440m', time: '3-4 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'First acclimatization day. Hike to the Everest View Hotel for phenomenal views of the Khumbu peaks.', highlights: ['Everest View Hotel', 'Sherpa Museum', 'Market Vibe'] },
  { day: 4, title: 'Namche to Phortse Thanga', altitude: '3,680m', time: '4-5 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Head into the quieter Gokyo valley. The trail contours the hillside with stunning views of Ama Dablam.', highlights: ['Ama Dablam Views', 'Rhododendron Forest', 'Quiet Path'] },
  { day: 5, title: 'Phortse Thanga to Machhermo', altitude: '4,470m', time: '5-6 hrs', distance: '10 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Ascend steadily through yak pastures and high-altitude shrubland with Cho Oyu dominating ahead.', highlights: ['Cho Oyu Panoramas', 'Yak Pastures', 'Alpine Wilderness'] },
  { day: 6, title: 'Machhermo to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', distance: '7 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Pass the first and second sacred lakes before arriving at the stunning third lake and the village of Gokyo.', highlights: ['Sacred Lakes', 'Mount Cho Oyu', 'Lakeside Stay'] },
  { day: 7, title: 'Gokyo Ri Sunrise & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Pre-dawn summit of Gokyo Ri for a 360° panorama of four 8,000m peaks.', highlights: ['Gokyo Ri Summit', '4 x 8000m Peaks', 'Ngozumpa Glacier View'] },
  { day: 8, title: 'Rest & Acclimatization at Gokyo', altitude: '4,750m', time: '2-3 hrs', distance: '3 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'An extra rest day at Gokyo to let your body adjust before the high-altitude Cho La pass crossing.', highlights: ['Preparation for Pass', 'Glacier Moraine Hike', 'Safety Buffer'] },
  { day: 9, title: 'Gokyo to Thangnak (via Ngozumpa Glacier)', altitude: '4,700m', time: '4-5 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Trek south along the glacier to Thangnak, a small settlement at the base of the Cho La Pass.', highlights: ['Crossing Ngozumpa Glacier', 'Glacial Ice Features', 'Base of the Pass'] },
  { day: 10, title: 'Cho La Pass Crossing to Dzongla', altitude: '5,420m', time: '7-8 hrs', distance: '8 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'The adventure highlight of the trek. Cross the dramatic Cho La Pass (5,420m) — a rocky, potentially snow-covered crossing.', highlights: ['Cho La Pass (5,420m)', 'Glacial Walking', 'Technical Challenge'] },
  { day: 11, title: 'Dzongla to Lobuche', altitude: '4,940m', time: '3-4 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A short day moving toward Lobuche, the gateway village for Everest Base Camp.', highlights: ['Ama Dablam Close-up', 'Thukla Pass Memorials', 'Khumbu Glacier Edge'] },
  { day: 12, title: 'Everest Base Camp via Gorak Shep', altitude: '5,364m', time: '8-9 hrs', distance: '12 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Trek to Gorak Shep, drop your bags, and continue to Everest Base Camp (5,364m).', highlights: ['Standing at EBC', 'Khumbu Icefall', 'Everest Expedition Vibe'] },
  { day: 13, title: 'Kala Patthar Summit & Trek to Pheriche', altitude: '5,545m', time: '7-8 hrs', distance: '15 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Rise before dawn to summit Kala Patthar (5,545m) for the finest close-up sunrise view of Mount Everest.', highlights: ['Kala Patthar Summit', 'Everest Sunrise', 'Rapid Descent'] },
  { day: 14, title: 'Pheriche to Namche Bazaar', altitude: '3,440m', time: '7-8 hrs', distance: '14 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A long descent retracing steps through Tengboche and Sansa.', highlights: ['Descending to Greenery', 'Rhododendron Forests', 'Namche Comforts'] },
  { day: 15, title: 'Rest Day in Namche Bazaar', altitude: '3,440m', time: '-', distance: '-', lodging: 'Tea House', meals: 'B, L, D', desc: 'A much-deserved buffer day in Namche. Celebrate your achievement.', highlights: ['Celebration Dinner', 'Souvenir Shopping', 'Hot Showers'] },
  { day: 16, title: 'Namche to Lukla', altitude: '2,860m', time: '7-8 hrs', distance: '19 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'The final long day of trekking back to Lukla airstrip.', highlights: ['Final Trail Push', 'Farewell Ceremony', 'Lukla Night Life'] },
  { day: 17, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Morning flight back to Kathmandu. Transfer to hotel.', highlights: ['Last Mountain Views', 'KTM Return', 'Spa/Relaxation'] },
  { day: 18, title: 'Buffer Day / Departure', altitude: '1,400m', time: '-', distance: '-', lodging: '-', meals: 'B', desc: 'A contingency buffer day in Kathmandu before your international departure.', highlights: ['Contingency Plan', 'Final Transfer'] },
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

export default function ItineraryGokyoChoLaEBC() {
  const { openBooking } = useBooking();
  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="18-Day Gokyo + EBC via Cho La"
        subtitle="The Ultimate Everest Region Grand Circuit"
        image="/18day.png"
      />

      {/* Introduction */}
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="xl:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-black uppercase tracking-widest border border-orange-100 italic">
                <Flame className="w-3 h-3 fill-orange-600" /> Grand Circuit Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                The Ultimate <span className="text-brand-600 italic">Himalayan Odyssey</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-orange-600 pl-6">
                This is the ultimate Himalayan odyssey. By combining the serene
                Gokyo Lakes with the legendary Everest Base Camp, you experience
                the very best of the Khumbu region in a single, epic journey.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Best for', value: 'Adventurers', icon: Flame },
                { label: 'Max Altitude', value: '5,545 m', icon: Mountain },
                { label: 'Pace', value: 'Demanding', icon: Clock },
                { label: 'The Pass', value: 'Cho La 5,420m', icon: Zap },
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
            <div className="absolute inset-0 bg-orange-600/5 rounded-[40px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative">
              <img
                src="/day18.jpg"
                alt="Himalayan Panorama"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-10 -right-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  18
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                  The Grand<br />Circuit
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Trek Highlights" subtitle="The Ultimate Landmarks" className="bg-stone-100 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cross the dramatic glaciated Cho La Pass (5,420m)",
            "Stand at iconic Everest Base Camp (5,364m)",
            "Sunrise at Kala Patthar (5,545m) for world's best Everest view",
            "Summit Gokyo Ri (5,357m) and explore sacred lakes",
            "Two 8000m summits (Kala Patthar & Gokyo Ri viewpoints)",
            "Cross the massive Ngozumpa Glacier",
            "Cultural immersion in Sherpa capital Namche Bazaar",
            "Visit Tengboche Monastery with its spiritual vibe",
            "Full Khumbu Grand Circuit experience"
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

      <Section title="Why Book With Us?" subtitle="Expertise & Safety" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Technical Expertise", desc: "Our guides are trained for safe technical crossings of high passes like Cho La.", icon: Zap },
            { title: "Maximum Safety", desc: "Extra rest days and oxygen saturation monitoring on high altitude push days.", icon: ShieldCheck },
            { title: "Expert Sherpa Crews", desc: "Local crews born in these high valleys with decades of mountaineering experience.", icon: Briefcase },
            { title: "Real-time Support", desc: "Satellite communication and 24/7 Kathmandu office monitoring for every group.", icon: Smartphone },
            { title: "Included Prep Kit", desc: "Full briefings and gear checks in KTM to ensure you are 100% ready.", icon: Info },
            { title: "Private Transfers", desc: "Airport and local logistics managed with private vehicles and expert timing.", icon: Route },
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

      <Section title="Day-by-Day Itinerary" subtitle="Your Epic Journey">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex items-start gap-4 mb-12">
              <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
              <div className="space-y-2">
                <h4 className="text-red-900 font-bold">Strenuous — For Experienced Trekkers</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  This 18-day route combines the Gokyo Lakes, the glaciated Cho La Pass (5,420m),
                  Everest Base Camp, and Kala Patthar — making it the most comprehensive and physically
                  demanding itinerary we offer. Prior high-altitude trekking experience is strongly recommended.
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
                <p className="text-6xl font-black tracking-tighter">$2,250</p>
                <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                <button
                  onClick={() => openBooking('Gokyo + EBC via Cho La (18 Days)')}
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
                    'Pass Equipment Info',
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
