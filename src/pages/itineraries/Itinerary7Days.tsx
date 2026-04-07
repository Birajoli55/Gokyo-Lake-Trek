import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Clock, MapPin, Mountain, Info, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Fly to Lukla, Trek to Namche Bazaar', altitude: '3,440m', time: '8-9 hrs', desc: 'A long and challenging first day, combining the flight with a steep climb to Namche.' },
  { day: 2, title: 'Acclimatization in Namche', altitude: '3,440m', time: '3-4 hrs', desc: 'Essential rest day with a short hike to Everest View Hotel.' },
  { day: 3, title: 'Trek to Machhermo', altitude: '4,470m', time: '7-8 hrs', desc: 'A significant gain in altitude, passing through Dole.' },
  { day: 4, title: 'Trek to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', desc: 'Arriving at the beautiful Gokyo Lakes.' },
  { day: 5, title: 'Gokyo Ri & Trek to Dole', altitude: '5,357m', time: '8-9 hrs', desc: 'Sunrise at Gokyo Ri, then a long descent to Dole.' },
  { day: 6, title: 'Trek to Lukla', altitude: '2,860m', time: '9-10 hrs', desc: 'A very long day retracing steps all the way back to Lukla.' },
  { day: 7, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', desc: 'Morning flight back to the capital.' },
];

export default function Itinerary7Days() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="7-Day Gokyo Lakes Trek" 
        subtitle="The Express Route for Experienced Trekkers"
        image="https://picsum.photos/seed/gokyo-7/1920/1080"
      />

      <Section title="Day-by-Day Itinerary" subtitle="Your Journey Details">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex items-start gap-4 mb-12">
              <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
              <div className="space-y-2">
                <h4 className="text-red-900 font-bold">High Risk Itinerary</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  This 7-day itinerary is extremely fast-paced and carries a high risk of 
                  altitude sickness. It is only recommended for very fit, experienced 
                  trekkers who have recently been at high altitude.
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
                    { label: 'Difficulty', value: 'Extremely Strenuous' },
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
