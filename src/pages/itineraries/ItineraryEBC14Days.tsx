import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, Thermometer, ShieldCheck,
  Smartphone, Wallet, Info, ArrowRight, Star
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import { motion } from 'motion/react';

const ITINERARY_DAYS = [
  {
    day: 1,
    title: 'Welcome to Kathmandu!',
    altitude: '1,300 m / 4,265 ft',
    time: '-',
    distance: '-',
    lodging: 'Hotel (Business Hotel or similar)',
    meals: 'Not Included',
    desc: 'Arrival in Kathmandu. Transfer to your hotel and evening briefing about the trek. Your journey to the roof of the world begins here.',
    highlights: ['Airport transfer', 'Trek briefing', 'Traditional Nepali Dinner (Optional)']
  },
  {
    day: 2,
    title: 'Kathmandu to Lukla (Flight) to Phakding',
    altitude: '2,651 m / 8,697 ft',
    time: '4 hrs',
    distance: '8 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Take a thrilling flight to Lukla (2,860m), then begin your trek with a gentle descent towards Phakding.',
    highlights: ['Scenic flight to Lukla', 'First views of Khumbu peaks', 'Walking along Dudh Koshi River']
  },
  {
    day: 3,
    title: 'Phakding to Namche Bazaar',
    altitude: '3,440 m / 11,286 ft',
    time: '5-6 hrs',
    distance: '11 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Cross several suspension bridges, including the famous Hillary Bridge, and enter Sagarmatha National Park. A steep climb brings you to Namche Bazaar.',
    highlights: ['Hillary Suspension Bridge', 'Entrance to Sagarmatha NP', 'First glimpse of Everest']
  },
  {
    day: 4,
    title: 'Acclimatization Day in Namche Bazaar',
    altitude: '3,700 m / 12,139 ft',
    time: '4-5 hrs',
    distance: '4 km (return)',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'A crucial day to adjust to the altitude. Hike to Everest View Hotel for panoramic views of Everest, Lhotse, and Ama Dablam.',
    highlights: ['Everest View Hotel', 'Sherpa Culture Museum', 'Panoramic mountain views']
  },
  {
    day: 5,
    title: 'Namche to Tengboche',
    altitude: '3,956 m / 12,979 ft',
    time: '5-6 hrs',
    distance: '10 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'A beautiful trail with dramatic mountain views, descending to the river before climbing up to Tengboche Monastery.',
    highlights: ['Tengboche Monastery visit', 'Ama Dablam views', 'Rhododendron forests']
  },
  {
    day: 6,
    title: 'Tengboche to Dingboche',
    altitude: '4,380 m / 14,370 ft',
    time: '4-5 hrs',
    distance: '9 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'The trail descends to Deboche, crosses the Imja Khola, and climbs steadily to the summer settlement of Dingboche.',
    highlights: ['Imja Valley views', 'Traditional stone walls', 'Island Peak views']
  },
  {
    day: 7,
    title: 'Acclimatization Day in Dingboche',
    altitude: '4,380 m / 14,370 ft',
    time: '3-4 hrs',
    distance: '3 km (return)',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Second acclimatization day. We hike up to Nangkartshang Peak (5,083m) for incredible views of Makalu and the Imja Valley.',
    highlights: ['Nangkartshang Peak hike', 'Views of Makalu (8,481m)', 'Lhotse and Nuptse close-ups']
  },
  {
    day: 8,
    title: 'Dingboche to Lobuche',
    altitude: '4,938 m / 16,200 ft',
    time: '4-5 hrs',
    distance: '8 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'The trail climbs to Thukla and then steeply up the Thukla Pass, home to memorials for fallen climbers, before reaching Lobuche.',
    highlights: ['Thukla Pass Memorials', 'Khumbu Glacier edge', 'Stark tundra landscape']
  },
  {
    day: 9,
    title: 'Lobuche to Gorakshep (Afternoon hike to Kalapatthar)',
    altitude: '5,160 m / 16,929 ft',
    time: '6-7 hrs',
    distance: '12 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Trek along the Khumbu Glacier to Gorakshep. In the afternoon, climb Kalapatthar for the world\'s best sunset view over Everest.',
    highlights: ['Sunset from Kalapatthar', 'Khumbu Glacier walking', 'Highest tea house stay']
  },
  {
    day: 10,
    title: 'Gorakshep to Pheriche (Morning hike to EBC)',
    altitude: '4,371 m / 14,340 ft',
    time: '8-9 hrs',
    distance: '15 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Morning hike to the ultimate goal: Everest Base Camp (5,364m). After celebrating, descend back to Pheriche for lower altitude sleep.',
    highlights: ['Standing at Everest Base Camp', 'Khumbu Icefall views', 'Celebration at 5,364m']
  },
  {
    day: 11,
    title: 'Pheriche to Namche Bazaar',
    altitude: '3,440 m / 11,286 ft',
    time: '6-7 hrs',
    distance: '14 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'Retrace your steps down the valley. The thicker air and descending altitude will make walking feel much easier today.',
    highlights: ['Descending to greenery', 'Famous Namche bakeries', 'Hot shower celebration']
  },
  {
    day: 12,
    title: 'Namche to Lukla',
    altitude: '2,860 m / 9,383 ft',
    time: '7 hrs',
    distance: '19 km',
    lodging: 'Tea House',
    meals: 'B, L, D',
    desc: 'The final day of trekking. A long but satisfying journey back to Lukla where the adventure began.',
    highlights: ['Final suspension bridges', 'Goodbye to the mountains', 'Farewell dinner with crew']
  },
  {
    day: 13,
    title: 'Lukla to Kathmandu (Flight)',
    altitude: '1,300 m / 4,265 ft',
    time: '30 min flight',
    distance: '-',
    lodging: 'Hotel (Business Hotel or similar)',
    meals: 'B',
    desc: 'Morning flight back to Kathmandu. Free afternoon for souvenir shopping or a massage.',
    highlights: ['Last scenic flight', 'Thamel exploration', 'Spa and relaxation']
  },
  {
    day: 14,
    title: 'Final Departure',
    altitude: '-',
    time: '-',
    distance: '-',
    lodging: '-',
    meals: 'B',
    desc: 'Transfer to the international airport for your flight home, carrying memories of a lifetime.',
    highlights: ['Airport transfer', 'End of journey']
  }
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

export default function ItineraryEBC14Days() {
  const { openBooking } = useBooking();

  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="14-Day Everest Base Camp Trek"
        subtitle="The Ultimate Journey to the Foot of the World's Highest Peak"
        image="/gokyovsebc.jpg"
      />

      {/* Introduction */}
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="xl:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-black uppercase tracking-widest border border-brand-100 italic">
                <Star className="w-3 h-3 fill-brand-600" /> Introduction to Everest Base Camp Trek
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                Stand at the top of the world, <span className="text-brand-600 italic">8,848m high</span> on Mt Everest.
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-brand-600 pl-6">
                Realistically, most of us will not be able to achieve the summit! But if you have good fitness and strong determination,
                you can trek to Everest Base Camp. The views of Everest from Kalapatthar are the most spectacular you can get
                without having to spend weeks trudging up to the summit!
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Starts at', value: 'Lukla', icon: MapPin },
                { label: 'Max Altitude', value: '5,545 m', icon: Mountain },
                { label: 'Duration', value: '14 Days', icon: Clock },
                { label: 'Trip Grade', value: 'Strenuous', icon: Briefcase },
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
                src="/images/ebc-intro.png"
                alt="Everest Base Camp Trail"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-10 -left-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  14
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                  Ultimate<br />Adventure
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section title="Trek Highlights" subtitle="The Moments You'll Never Forget" className="bg-stone-100 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Stand at the base of Mt Everest Summit",
            "Witness sunset over Everest from Kalapatthar",
            "Fly into high-altitude Lukla Airport",
            "Visit remote Sherpa villages & yak herders",
            "Stay in Namche Bazaar, the gateway hub",
            "Be stunned by the Khumbu Glacier & Icefalls",
            "Visit the spiritual Tengboche Monastery",
            "Pass through Sagarmatha National Park",
            "Follow the footsteps of Sir Edmund Hillary"
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

      {/* Why Book With Us */}
      <Section title="Why Book With Us?" subtitle="Trust & Expertise in the Khumbu" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Expert Local Guides", desc: "Our team has lived and worked in the Everest region for over 15 years. They know every trail and weather pattern.", icon: Users },
            { title: "100% Guaranteed Departures", desc: "Our scheduled trips run regardless of group size. Your adventure is safe with us.", icon: ShieldCheck },
            { title: "24/7 Dedicated Support", desc: "Real-time support via WhatsApp and local team interaction throughout your trek.", icon: Smartphone },
            { title: "Personalized Briefings", desc: "In-depth sessions in Kathmandu to cover gear, acclimatization, and safety protocols.", icon: Info },
            { title: "Private Airport Transfers", desc: "Comfortable start and end to your journey with personal vehicles and smooth logistics.", icon: Route },
            { title: "Included Gear Rental", desc: "We provide high-quality down jackets and sleeping bags at no extra cost.", icon: Backpack },
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

      {/* Detailed Itinerary */}
      <Section title="Detailed Itinerary" subtitle="A Day-by-Day Journey Breakdown" className="bg-stone-50 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {ITINERARY_DAYS.map((day, idx) => (
              <ItineraryDayCard key={day.day} day={day} isFirst={idx === 0} />
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Price Card */}
              <div className="p-10 bg-brand-600 rounded-[40px] text-white space-y-4 shadow-2xl shadow-brand-600/20">
                <p className="text-brand-100 text-[10px] font-black uppercase tracking-[0.2em]">Package Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">$1,550</span>
                </div>
                <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                <button
                  onClick={() => openBooking('14-Day EBC Trek')}
                  className="mt-6 block w-full py-5 bg-white text-brand-700 font-black text-xs uppercase tracking-[0.3em] rounded-[24px] text-center hover:bg-brand-50 transition-all hover:scale-[1.02]"
                >
                  Book This Trek
                </button>
              </div>

              {/* Includes Grid */}
              <div className="p-10 bg-white rounded-[40px] border border-stone-100 shadow-xl shadow-stone-900/5 space-y-8">
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-stone-900 uppercase tracking-tighter">What's Included</h4>
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-widest italic">Full Package Service</p>
                </div>
                <ul className="space-y-4">
                  {[
                    'KTM Airport Transfers (Arrival/Departure)',
                    'Domestic Flights (KTM-Lukla-KTM)',
                    'Sagarmatha NP Entry Permits',
                    'Licensed English-speaking Guide',
                    'Experienced Porter Service',
                    'All Teahouse Accommodation',
                    'All Meals (Breakfast, Lunch, Dinner)',
                    'Standard Medical Kit'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 text-stone-600 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-stone-100 space-y-4">
                  <h5 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Not Included</h5>
                  <ul className="space-y-3">
                    {['International Flights', 'Travel Insurance', 'Nepal Visa Fee', 'Tips for Crew'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-500 text-xs">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Packing List */}
      <Section dark title="Packing List" subtitle="Everything You'll Need In Your Bag" className="py-24 bg-brand-900 text-white rounded-t-[60px]">
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

      {/* Expert Resources Cards */}
      <Section title="Read Before You Book" subtitle="Essential Resources for Success" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Lukla Flights', link: '/planning/flights', icon: Plane, label: 'KTM vs Ramechhap' },
            { title: 'Best Time', link: '/planning/best-time-to-visit', icon: Calendar, label: 'Weather Guide' },
            { title: 'AMS Safety', link: '/safety/altitude-sickness', icon: ShieldCheck, label: 'Stay Healthy' },
            { title: 'Gear Guide', link: '/gear', icon: Backpack, label: 'What to Buy' },
          ].map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="p-8 bg-white rounded-[40px] border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
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

      <CustomTripBanner />
    </main>
  );
}

// Helper icons needed from user prompt logic (not all standard Lucide base names match prompt exactly, mapped accordingly above)
const Users = (props: any) => <Briefcase {...props} />;
const Utensils = (props: any) => <Bed {...props} />; // Placeholder mapping if icon missing
const Calendar = (props: any) => <Clock {...props} />;
