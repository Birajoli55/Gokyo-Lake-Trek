import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Clock, Activity, Map, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITINERARY_CARDS = [
  { 
    days: 7, 
    title: 'Shortest Gokyo Trek', 
    desc: 'Fast-paced route for experienced trekkers with limited time.',
    difficulty: 'Challenging',
    link: '/itineraries/7-days'
  },
  { 
    days: 9, 
    title: 'Efficient Gokyo Loop', 
    desc: 'Balanced route for those with moderate fitness levels.',
    difficulty: 'Moderate',
    link: '/itineraries/9-days'
  },
  { 
    days: 12, 
    title: 'Classic Gokyo Lakes', 
    desc: 'The standard route with optimal acclimatization.',
    difficulty: 'Moderate',
    link: '/itineraries/12-days'
  },
  { 
    days: 15, 
    title: 'Comfortable Gokyo', 
    desc: 'Extra rest days and comfortable teahouse stops.',
    difficulty: 'Easy-Moderate',
    link: '/itineraries/15-days'
  },
  { 
    days: 18, 
    title: 'Gokyo + EBC via Cho La', 
    desc: 'The ultimate Everest region adventure.',
    difficulty: 'Strenuous',
    link: '/itineraries/gokyo-cho-la-ebc'
  },
  { 
    days: 14, 
    title: 'Gokyo via Renjo La', 
    desc: 'A quieter route with stunning pass views.',
    difficulty: 'Challenging',
    link: '/itineraries/gokyo-renjo-la'
  },
];

export default function ItinerariesHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Trek Itineraries" 
        subtitle="Choose Your Path"
        image="https://picsum.photos/seed/itineraries-hub/1920/1080"
      />

      <Section title="Find Your Itinerary" subtitle="Options for Every Trekker">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITINERARY_CARDS.map((item) => (
            <Link 
              key={item.title} 
              to={item.link}
              className="p-10 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-stone-50 rounded-2xl group-hover:bg-brand-50 transition-colors">
                  <Clock className="w-8 h-8 text-brand-600" />
                </div>
                <span className="px-4 py-1 bg-stone-100 text-stone-900 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {item.difficulty}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-4">{item.days} Days</h3>
              <h4 className="text-xl font-bold text-stone-700 mb-4">{item.title}</h4>
              <p className="text-stone-500 leading-relaxed mb-8">{item.desc}</p>
              <span className="text-brand-600 font-bold flex items-center gap-2">
                View Full Plan <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Acclimatization First" subtitle="Safety" dark>
        <div className="bg-white/5 p-12 rounded-[48px] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Why Itinerary Matters</h3>
              <p className="text-stone-400 text-lg leading-relaxed">
                The secret to a successful trek isn't speed, it's how well your body adapts 
                to the thinning air. Our itineraries are designed with optimal 
                acclimatization stops.
              </p>
              <ul className="space-y-4">
                {[
                  'Built-in rest days in Namche and Gokyo',
                  'Gradual elevation gain (max 500m per day)',
                  'Flexible schedules for extra rest if needed',
                  'Expert monitoring of altitude symptoms'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/itinerary-safety/800/600" 
                alt="Acclimatization" 
                className="rounded-[40px] shadow-2xl w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
