import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import {
  Clock, MapPin, Mountain, Route, Flag, Plane, Briefcase, Bed,
  CheckCircle2, XCircle, Backpack, ShieldCheck,
  Smartphone, Info, ArrowRight, Star, Utensils, Heart, Camera
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import ItineraryDayCard from '../../components/ItineraryDayCard';
import AltitudeGraph, { AltitudeDataPoint } from '../../components/AltitudeGraph';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';
import InteractiveTrekMap from '../../components/InteractiveTrekMap';

const ITINERARY_DAYS = [
  { day: 1, title: 'Arrive in Kathmandu', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'Not Included', desc: 'Arrival at Tribhuvan International Airport and transfer to your hotel.', highlights: ['Airport Transfer', 'Hotel Check-in', 'Evening Briefing'] },
  { day: 2, title: 'Kathmandu Sightseeing & Prep', altitude: '1,400m', time: '-', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Visit world heritage sites and finalize trekking permits and gear.', highlights: ['Pashupatinath Temple', 'Boudhanath Stupa', 'Gear Finalization'] },
  { day: 3, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', distance: '8 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Scenic flight and a gentle start to the trek.', highlights: ['Lukla Flight', 'Dudh Koshi River', 'Mountain Air'] },
  { day: 4, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '6-7 hrs', distance: '11 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Entering the national park and a steep climb to the Sherpa capital.', highlights: ['Hillary Bridge', 'Sagarmatha NP', 'First Everest View'] },
  { day: 5, title: 'Acclimatization in Namche', altitude: '3,440m', time: '3-4 hrs', distance: '4 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Rest and local exploration for better altitude adjustment.', highlights: ['Everest View Hotel', 'Museum Visit', 'Local Markets'] },
  { day: 6, title: 'Trek to Khumjung', altitude: '3,790m', time: '2-3 hrs', distance: '3 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A short day visiting the Hillary School and the "Yeti Scalp" monastery.', highlights: ['Hillary School', 'Yeti Scalp Monastery', 'Khumjung Valley'] },
  { day: 7, title: 'Trek to Phortse', altitude: '3,810m', time: '4-5 hrs', distance: '7 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'A beautiful trail with stunning views of Ama Dablam.', highlights: ['Ama Dablam Panoramas', 'Hidden Trail', 'Traditional Phortse'] },
  { day: 8, title: 'Trek to Machhermo', altitude: '4,470m', time: '5-6 hrs', distance: '10 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Steady ascent through the Gokyo valley.', highlights: ['Alpine Landscapes', 'Cho Oyu Views', 'Yak Pastures'] },
  { day: 9, title: 'Acclimatization in Machhermo', altitude: '4,470m', time: '2-3 hrs', distance: '3 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'An extra rest day to ensure safety before reaching Gokyo.', highlights: ['Safety First', 'Short High Hike', 'Glacier Views'] },
  { day: 10, title: 'Trek to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', distance: '7 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Arriving at the third Gokyo Lake.', highlights: ['Sacred Lakes', 'Mount Cho Oyu', 'Lakeside Stay'] },
  { day: 11, title: 'Gokyo Ri & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', distance: '6 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Summiting Gokyo Ri and exploring the upper lakes.', highlights: ['Gokyo Ri Peak', '4 x 8000m Peaks', 'Sacred Water'] },
  { day: 12, title: 'Trek to Dole', altitude: '4,200m', time: '5-6 hrs', distance: '12 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Starting the descent down the valley.', highlights: ['Rapid Oxygen Return', 'Valley Vistas', 'Descending Pastures'] },
  { day: 13, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', distance: '12 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Retracing steps back to the vibrant hub of Namche.', highlights: ['Namche Comforts', 'Forest Trails', 'Sherpa Villages'] },
  { day: 14, title: 'Trek to Lukla', altitude: '2,860m', time: '7-8 hrs', distance: '19 km', lodging: 'Tea House', meals: 'B, L, D', desc: 'Final day of trekking back to the gateway.', highlights: ['Final Long Walk', 'Crossing Hillary Bridge', 'Celebration'] },
  { day: 15, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', distance: '-', lodging: 'Hotel', meals: 'B', desc: 'Morning flight and end of the mountain journey.', highlights: ['Last Mountain View', 'KTM Relaxation', 'Spa/Massage'] },
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

export default function Trek15Days() {
  const { openBooking } = useBooking();
  const [isExpanded, setIsExpanded] = useState(false);

  const altitudeData: AltitudeDataPoint[] = ITINERARY_DAYS.map(day => ({
    day: day.day,
    title: day.title,
    altitude: parseInt(day.altitude.replace(/,/g, ''), 10) || 1300
  }));
  return (
    <main className="bg-stone-50 overflow-x-clip">
      <Hero
        title="15-Day Gokyo Lakes Trek"
        subtitle="The Most Comfortable & Thorough Experience"
        image="/day15.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Our 15-day itinerary is designed for those who believe the journey is just as important as the destination, allowing for a deeper immersion into Himalayan life.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}This extended route provides ample time for acclimatization, exploration of the hidden valleys, and cultural connection with the Sherpa communities of Khumjung and Phortse.
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
            onClick={() => openBooking('Comfortable Gokyo (15 Days)')}
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Book This Experience
          </button>
          <a
            href="#itinerary"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            View Full Plan
          </a>
        </div>
      </Hero>

      <div id="itinerary" className="scroll-mt-20">


        {/* Introduction */}
        <Section className="pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="xl:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-black uppercase tracking-widest border border-brand-100 italic">
                  <Star className="w-3 h-3 fill-brand-600" /> Comfort Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                  Patience & <span className="text-brand-800 italic">Deep Immersion</span>
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-4 border-brand-600 pl-6">
                  Our 15-day itinerary is designed for those who believe the journey
                  is just as important as the destination. By extending the trek,
                  we allow for a deeper connection with the Sherpa culture and the
                  ever-changing Himalayan landscapes.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Best for', value: 'Comfort Seekers', icon: Heart },
                  { label: 'Max Altitude', value: '5,357 m', icon: Mountain },
                  { label: 'Pace', value: 'Relaxed', icon: Clock },
                  { label: 'Success Rate', value: '99%', icon: ShieldCheck },
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
              <div className="absolute inset-0 bg-brand-600/5 rounded-[40px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <div className="relative">
                <img
                  src="/15day.webp"
                  alt="Gokyo Lakes Panorama"
                  className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-10 -right-6 p-6 glass rounded-3xl shadow-xl flex items-center gap-4 hidden md:flex animate-float">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    15
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                    Gokyo<br />Comfort
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Trek Highlights" subtitle="A Journey of Discovery" className="bg-stone-100 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Extra rest days for safe acclimatization",
              "In-depth exploration of 5 sacred lakes",
              "Visit Khumjung Hillary School",
              "Stay in traditional Phortse village",
              "Highest lakeside sunset experience",
              "Slow-paced cultural immersion",
              "UNESCO Heritage sightseeing in KTM",
              "Premium tea house selection",
              "Widest panoramic views from Gokyo Ri"
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
            trekName="Extended Adventure"
            duration="15 Days"
            price="$1750"
            startPoint="Kathmandu"
            endPoint="Kathmandu"
          />
        </Section>
        <Section title="Why Book With Us?" subtitle="Quality & Safety" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Maximum Safety", desc: "Extra rest days included specifically to ensure your body adjusts to the altitude safely.", icon: ShieldCheck },
              { title: "Premium Lodging", desc: "On our 15-day tour, we pre-book the best available rooms in every village.", icon: Bed },
              { title: "Expert Sherpa Guides", desc: "Local guides with decades of experience leading first-time trekkers.", icon: Briefcase },
              { title: "Cultural Deep Dive", desc: "More than just walking; we facilitate meetings with local community leaders.", icon: Camera },
              { title: "KTM Sightseeing", desc: "Fully guided tours of Kathmandu's most sacred temples and heritage sites.", icon: Info },
              { title: "Stress-Free Logistics", desc: "All transfers, flights, and permits handled by our dedicated office team.", icon: Route },
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

        <Section title="Day-by-Day Trek Plan" subtitle="Slow & Steady Wins the Race">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <AltitudeGraph data={altitudeData} />
              <div className="p-8 bg-green-50 rounded-[32px] border border-green-100 flex items-start gap-4 mb-12">
                <CheckCircle2 className="w-8 h-8 text-green-600 shrink-0" />
                <div className="space-y-2">
                  <h4 className="text-green-900 font-bold">Recommended for Beginners</h4>
                  <p className="text-green-800 text-sm leading-relaxed">
                    This 15-day itinerary includes extra acclimatization days and shorter
                    walking days, making it the safest and most enjoyable option for
                    first-time high-altitude trekkers.
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
                  <p className="text-6xl font-black tracking-tighter">$1,750</p>
                  <p className="text-brand-200 text-sm font-medium">Per person, All Inclusive</p>
                  <button
                    onClick={() => openBooking('Comfortable Gokyo (15 Days)')}
                    className="mt-6 block w-full py-5 bg-white text-brand-700 font-black text-xs uppercase tracking-[0.3em] rounded-[24px] text-center hover:bg-brand-50 transition-all hover:scale-[1.02]"
                  >
                    Book This Trek
                  </button>
                </div>
                <div className="p-10 bg-white rounded-[40px] border border-stone-100 shadow-xl shadow-stone-900/5 space-y-8">
                  <h4 className="text-xl font-black text-stone-900 uppercase tracking-tighter">What's Included</h4>
                  <ul className="space-y-4">
                    {[
                      'KTM Guided Tours',
                      '2 Nights KTM Hotel',
                      'Professional Guide',
                      'Shared Porter Service',
                      'Teahouse Accommodation',
                      'Lukla Flight Tickets',
                      'NP Entry Permits',
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




