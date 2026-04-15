import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, ShieldCheck,
  Smartphone, Info, ArrowRight, Star, Utensils, Zap, AlertTriangle, Wind, Users, Map
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import { motion } from 'motion/react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Arrive in Kathmandu', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'Not Included', desc: 'Scenic flight from Kathmandu to Lukla, then a gentle descent alongside the Dudh Koshi river to the riverside village of Phakding.', highlights: ['Airport Transfer', 'Hotel Check-in', 'Evening Briefing'] },
  { day: 2, title: 'Kathmandu Sightseeing', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Visit UNESCO World Heritage Sites — Pashupatinath, Boudhanath, and Swayambhunath.', highlights: ['UNESCO Sites', 'Local Culture', 'Prep & Gear Check'] },
  { day: 3, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', distance: '8 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Cross the berühmte Hillary Suspension Bridge, enter Sagarmatha National Park, and make the climb to Namche.', highlights: ['Lukla Flight', 'River Walk', 'Sherpa Villages'] },
  { day: 4, title: 'Phakding to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A challenging climb through forests to the vibrant Sherpa capital of Namche.', highlights: ['Hillary Bridge', 'Sagarmatha NP', 'First Everest View'] },
  { day: 5, title: 'Acclimatization in Namche Bazaar', altitude: '3,440m', time: '3-4 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Rest day with a hike to Everest View Hotel. Explore the museum and local markets.', highlights: ['Everest View Hotel', 'Sherpa Museum', 'Market Exploration'] },
  { day: 6, title: 'Namche to Thame Valley', altitude: '3,800m', time: '4-5 hrs', distance: '10 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Head west into the peaceful Thame Valley, home of many legendary Sherpa summiters.', highlights: ['Traditional Thame', 'Remote Path', 'Thame Monastery'] },
  { day: 7, title: 'Thame to Lungden', altitude: '4,380m', time: '4-5 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Ascend through the upper Bhotekoshi valley toward the high pass approach.', highlights: ['Alpine Pastures', 'Yak Herds', 'Mountain Wilderness'] },
  { day: 8, title: 'Renjo La Pass Crossing to Gokyo', altitude: '5,360m', time: '7-8 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Crest the spectacular Renjo La Pass (5,360m) for iconic views of Everest and the Lakes.', highlights: ['Renjo La Pass (5,360m)', 'Panoramic Everest View', 'Gokyo Lakes Entry'] },
  { day: 9, title: 'Gokyo Ri Summit & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Pre-dawn climb to Gokyo Ri for 360° views, then explored the upper lakes.', highlights: ['Gokyo Ri Summit', '4 x 8000m Peaks', 'Ngozumpa Glacier View'] },
  { day: 10, title: 'Gokyo to Phortse Thanga', altitude: '3,680m', time: '5-6 hrs', distance: '12 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Trek south through the valley with dramatic peak views and lush forests.', highlights: ['Valley Vistas', 'Rapid Descent', 'Forest Re-entry'] },
  { day: 11, title: 'Phortse Thanga to Tengboche', altitude: '3,870m', time: '4-5 hrs', distance: '7 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Ascend to the spiritual heart of the Khumbu, the Tengboche Monastery.', highlights: ['Tengboche Monastery', 'Puja Ceremony', 'Ama Dablam View'] },
  { day: 12, title: 'Tengboche to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', distance: '10 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Descend through forests and across the river back to Namche.', highlights: ['Forest Trail', 'Namche Comforts', 'Last High Vistas'] },
  { day: 13, title: 'Rest & Recovery in Namche', altitude: '3,440m', time: '-', distance: '-', lodging: 'Tea House', meals: 'B, L, D', desc: 'A second rest day to celebrate your successful pass crossing.', highlights: ['Souvenir Shopping', 'Hot Shower', 'Celebration Meal'] },
  { day: 14, title: 'Namche to Phakding', altitude: '2,610m', time: '4-5 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A gentle trek down to the lower valley village of Phakding.', highlights: ['Steep Descent', 'Crossing Bridges', 'Warmer Air'] },
  { day: 15, title: 'Phakding to Lukla', altitude: '2,860m', time: '3-4 hrs', distance: '8 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'The final trek back to the gateway of Lukla.', highlights: ['Final Trail Mile', 'Farewell Ceremony', 'Lukla Night Life'] },
  { day: 16, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Morning flight back to KTM and transfer to your hotel.', highlights: ['Last Mountain View', 'KTM Return', 'Relaxation'] },
  { day: 17, title: 'Kathmandu Cultural Tour', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Deep dive into Kathmandu UNESCO sites with a master guide.', highlights: ['Patan Durbar Square', 'Spiritual Insights', 'Master Artisans'] },
  { day: 18, title: 'Buffer Day / Cultural Exploration', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Contingency day for flights or extra sightseeing.', highlights: ['Extra Sightseeing', 'Leisure Time', 'Shopping'] },
  { day: 19, title: 'Contingency Buffer', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Final buffer day ensuring you make your flight home.', highlights: ['Contingency Plan'] },
  { day: 20, title: 'International Departure', altitude: '1,400m', time: '-', distance: '-', lodging: '-', meals: 'B', desc: 'Transfer to the airport for your onward international flight.', highlights: ['Final Farewell'] },
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

export default function ItineraryGokyoRenjoLa() {
  const { openBooking } = useBooking();

  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="20-Day Gokyo via Renjo La"
        subtitle="The Hidden Circuit — A Quieter Path with Stunning Pass Views"
        image="/20day.jpg"
      />

      {/* Introduction */}
      <Section className="pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="xl:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-black uppercase tracking-widest border border-brand-100 italic">
                <Star className="w-3 h-3 fill-brand-600" /> Remote Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                The Hidden <span className="text-brand-600 italic">Himalayan Circuit</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-brand-600 pl-6">
                For those seeking solitude and raw Himalayan beauty, the Renjo La
                circuit offers a profound alternative to the main trails. This
                extended journey takes you clockwise through the remote Thame
                valley before cresting the spectacular Renjo La Pass.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Best for', value: 'Solitude Seekers', icon: Users },
                { label: 'Max Altitude', value: '5,360 m', icon: Mountain },
                { label: 'Pace', value: 'Steady', icon: Clock },
                { label: 'Highlights', value: 'Renjo La Pass', icon: Map },
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
                src="/day20.jpg"
                alt="Gokyo Lakes Panorama"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-10 -right-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  20
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                  The Hidden<br />Circuit
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Trek Highlights" subtitle="Wilderness & Spirituality" className="bg-stone-100 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cross the spectacular, less-crowded Renjo La Pass (5,360m)",
            "Explore the remote Thame valley — legendary home of Sherpas",
            "Iconic 360° panorama of Everest and lakes from Renjo La",
            "Summit Gokyo Ri (5,357m) and visit sacred lakes",
            "20 days of deep Himalayan cultural immersion",
            "Visit Tengboche, the largest monastery in Khumbu",
            "Two strategic acclimatization days in Namche Bazaar",
            "Experience the raw wilderness of Bhote Koshi valley",
            "Full Everest region grand immersion"
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

      <Section title="Why Book With Us?" subtitle="Trust & Remote Experience" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Remote Valley Experts", desc: "Our team has specific logistics experience in the quieter Thame and Renjo La valleys.", icon: Map },
            { title: "Maximum Safety", desc: "Three full acclimatization days are included to ensure your body adjusts safely to high altitude.", icon: ShieldCheck },
            { title: "Specialist Sherpa Teams", desc: "We use guides and porters from the Thame valley who know every hidden trail.", icon: Briefcase },
            { title: "Comprehensive Support", desc: "24/7 dedicated support office in Kathmandu throughout your 20-day journey.", icon: Smartphone },
            { title: "Cultural Guided Tours", desc: "Full day of expert-led Kathmandu sightseeing included to ground your journey in history.", icon: Info },
            { title: "Seamless Transfers", desc: "All airport and local transfers handled with private vehicles and expert timing.", icon: Route },
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

      <Section title="Day-by-Day Itinerary" subtitle="Your Hidden Odyssey">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4 mb-12">
              <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
              <div className="space-y-2">
                <h4 className="text-amber-900 font-bold">Challenging — Remote & Off the Beaten Path</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  This 20-day route crosses the Renjo La Pass (5,360m) from the Thame Valley into Gokyo,
                  making it one of the most scenic and least-crowded circuits in the Khumbu. Prior
                  high-altitude experience is recommended. Expect rugged trails and fewer teahouses
                  on the Thame–Renjo La section.
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
                <p className="text-6xl font-black tracking-tighter">$2,450</p>
                <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                <button
                  onClick={() => openBooking('Gokyo via Renjo La (20 Days)')}
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
                    'KTM Guided Sightseeing',
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
