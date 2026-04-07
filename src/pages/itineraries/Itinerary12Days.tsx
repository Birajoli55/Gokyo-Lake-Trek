import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Clock, MapPin, Mountain, Info, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const ITINERARY_DAYS = [
  { day: 1, title: 'Fly to Lukla, Trek to Phakding', altitude: '2,610m', time: '3-4 hrs', desc: 'A scenic flight to Lukla followed by a gentle descent to Phakding village.' },
  { day: 2, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '6-7 hrs', desc: 'Crossing suspension bridges and entering Sagarmatha National Park. A steep climb to Namche.' },
  { day: 3, title: 'Acclimatization in Namche', altitude: '3,440m', time: '3-4 hrs', desc: 'Visit Everest View Hotel for your first glimpse of Everest and Lhotse.' },
  { day: 4, title: 'Trek to Phortse Thanga', altitude: '3,680m', time: '5-6 hrs', desc: 'A beautiful trail with views of Ama Dablam, descending to the Dudh Koshi river.' },
  { day: 5, title: 'Trek to Machhermo', altitude: '4,470m', time: '5-6 hrs', desc: 'Steady ascent through rhododendron forests and summer pastures.' },
  { day: 6, title: 'Trek to Gokyo Village', altitude: '4,750m', time: '4-5 hrs', desc: 'Passing the first and second lakes before arriving at the stunning third Gokyo Lake.' },
  { day: 7, title: 'Gokyo Ri Sunrise & Lake Exploration', altitude: '5,357m', time: '6-7 hrs', desc: 'Early morning climb to Gokyo Ri for panoramic views, then explore the fourth and fifth lakes.' },
  { day: 8, title: 'Trek to Dole', altitude: '4,200m', time: '5-6 hrs', desc: 'Starting the descent, retracing steps with a different perspective of the valley.' },
  { day: 9, title: 'Trek to Namche Bazaar', altitude: '3,440m', time: '5-6 hrs', desc: 'Continuing down through forests and Sherpa settlements back to Namche.' },
  { day: 10, title: 'Trek to Lukla', altitude: '2,860m', time: '7-8 hrs', desc: 'A long final day of trekking to reach Lukla for your flight back.' },
  { day: 11, title: 'Fly back to Kathmandu', altitude: '1,400m', time: '40 mins', desc: 'Morning flight back to the capital for some well-deserved rest.' },
  { day: 12, title: 'Buffer Day / Departure', altitude: '1,400m', time: '-', desc: 'A contingency day for flight delays or extra exploration in Kathmandu.' },
];

export default function Itinerary12Days() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="12-Day Gokyo Lakes Trek" 
        subtitle="The Classic Route for Optimal Acclimatization"
        image="https://picsum.photos/seed/gokyo-12/1920/1080"
      />

      <Section title="Day-by-Day Itinerary" subtitle="Your Journey Details">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
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
                    { label: 'Difficulty', value: 'Moderate to Strenuous' },
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
              <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Safety First:</strong> This itinerary includes 2 acclimatization days which are 
                  crucial for your safety at high altitude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
