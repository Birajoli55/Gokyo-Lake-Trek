import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Clock, MapPin, Mountain, Info, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Arrive in Kathmandu', altitude: '1,400m', time: '-', desc: 'Arrival at Tribhuvan International Airport and transfer to your hotel.' },
  { day: 2, title: 'Kathmandu Sightseeing & Prep', altitude: '1,400m', time: '-', desc: 'Visit world heritage sites and finalize trekking permits and gear.' },
  { day: 3, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', desc: 'Scenic flight and a gentle start to the trek.' },
  { day: 4, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '6-7 hrs', desc: 'Entering the national park and a steep climb to the Sherpa capital.' },
  { day: 5, title: 'Acclimatization in Namche', altitude: '3,440m', time: '3-4 hrs', desc: 'Rest and local exploration for better altitude adjustment.' },
  { day: 6, title: 'Trek to Khumjung', altitude: '3,790m', time: '2-3 hrs', desc: 'A short day visiting the Hillary School and the "Yeti Scalp" monastery.' },
  { day: 7, title: 'Trek to Phortse', altitude: '3,810m', time: '4-5 hrs', desc: 'A beautiful trail with stunning views of Ama Dablam.' },
  { day: 8, title: 'Trek to Machhermo', altitude: '4,470m', time: '5-6 hrs', desc: 'Steady ascent through the Gokyo valley.' },
  { day: 9, title: 'Acclimatization in Machhermo', altitude: '4,470m', time: '2-3 hrs', desc: 'An extra rest day to ensure safety before reaching Gokyo.' },
  { day: 10, title: 'Trek to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', desc: 'Arriving at the third Gokyo Lake.' },
  { day: 11, title: 'Gokyo Ri & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', desc: 'Summiting Gokyo Ri and exploring the upper lakes.' },
  { day: 12, title: 'Trek to Dole', altitude: '4,200m', time: '5-6 hrs', desc: 'Starting the descent down the valley.' },
  { day: 13, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', desc: 'Retracing steps back to the vibrant hub of Namche.' },
  { day: 14, title: 'Trek to Lukla', altitude: '2,860m', time: '7-8 hrs', desc: 'Final day of trekking back to the gateway.' },
  { day: 15, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', desc: 'Morning flight and end of the mountain journey.' },
];

export default function Itinerary15Days() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="15-Day Gokyo Lakes Trek" 
        subtitle="The Most Comfortable & Thorough Experience"
        image="https://picsum.photos/seed/gokyo-15/1920/1080"
      />

      <Section title="Day-by-Day Itinerary" subtitle="Your Journey Details">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
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
            {ITINERARY_DAYS.map((day) => (
              <div key={day.day} className="relative pl-12 border-l-2 border-stone-200 pb-12 last:pb-0">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-600 border-4 border-white shadow-sm" />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-brand-600 font-bold text-sm uppercase tracking-widest">Day {day.day}</span>
                    <h3 className="text-2xl font-bold text-stone-900">{day.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-stone-600 text-sm">
                      <Mountain className="w-4 h-4" /> {day.altitude}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-stone-600 text-sm">
                      <Clock className="w-4 h-4" /> {day.time}
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {day.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
                <h3 className="text-2xl font-bold">Quick Facts</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Difficulty', value: 'Moderate' },
                    { label: 'Max Altitude', value: '5,357m (Gokyo Ri)' },
                    { label: 'Total Distance', value: 'Approx. 92km' },
                    { label: 'Best Season', value: 'Mar-May, Sep-Nov' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-brand-300 text-sm">{fact.label}</span>
                      <span className="font-bold">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                <h4 className="text-xl font-bold text-stone-900">What's Included</h4>
                <ul className="space-y-4">
                  {[
                    'Professional Trekking Guide',
                    'Shared Porter Service',
                    'All Teahouse Accommodation',
                    'Lukla Flight Tickets',
                    'National Park Permits',
                    'Kathmandu Hotel (2 Nights)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
