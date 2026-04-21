import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Calendar, Thermometer, Cloud, Sun, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const MONTHS = [
  { name: 'January', season: 'Winter', temp: '-15°C to -5°C', status: 'Challenging', link: '/best-time/january' },
  { name: 'February', season: 'Winter', temp: '-15°C to -5°C', status: 'Challenging', link: '/best-time/february' },
  { name: 'March', season: 'Spring', temp: '-10°C to 5°C', status: 'Good', link: '/best-time/march' },
  { name: 'April', season: 'Spring', temp: '-5°C to 10°C', status: 'Excellent', link: '/best-time/april' },
  { name: 'May', season: 'Spring', temp: '0°C to 15°C', status: 'Excellent', link: '/best-time/may' },
  { name: 'June', season: 'Monsoon', temp: '5°C to 18°C', status: 'Wet', link: '/best-time/june' },
  { name: 'July', season: 'Monsoon', temp: '5°C to 18°C', status: 'Wet', link: '/best-time/july' },
  { name: 'August', season: 'Monsoon', temp: '5°C to 18°C', status: 'Wet', link: '/best-time/august' },
  { name: 'September', season: 'Autumn', temp: '0°C to 15°C', status: 'Good', link: '/best-time/september' },
  { name: 'October', season: 'Autumn', temp: '-5°C to 10°C', status: 'Excellent', link: '/best-time/october' },
  { name: 'November', season: 'Autumn', temp: '-10°C to 5°C', status: 'Excellent', link: '/best-time/november' },
  { name: 'December', season: 'Winter', temp: '-15°C to -5°C', status: 'Challenging', link: '/best-time/december' },
];

export default function MonthlyHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Best Time to Visit" 
        subtitle="Monthly Guide to Gokyo Lakes"
        image="/besttime.webp"
      />

      <Section title="Seasonal Overview" subtitle="Weather & Conditions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Spring', months: 'Mar - May', icon: Sun, desc: 'Clear skies, blooming rhododendrons, and stable weather. Peak season.', color: 'text-amber-500' },
            { title: 'Monsoon', months: 'Jun - Aug', icon: Cloud, desc: 'Heavy rain, clouds obscuring views, and leeches on the trail. Not recommended.', color: 'text-blue-500' },
            { title: 'Autumn', months: 'Sep - Nov', icon: Sun, desc: 'Crisp air, best visibility, and stable conditions. Most popular time.', color: 'text-brand-500' },
            { title: 'Winter', months: 'Dec - Feb', icon: Thermometer, desc: 'Extremely cold, snow-covered trails, but quiet and clear. For experienced trekkers.', color: 'text-stone-400' },
          ].map((season) => (
            <div key={season.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-4">
              <season.icon className={`w-10 h-10 ${season.color}`} />
              <h3 className="text-2xl font-bold text-stone-900">{season.title}</h3>
              <p className="text-brand-800 font-bold text-sm uppercase tracking-widest">{season.months}</p>
              <p className="text-stone-500 text-sm leading-relaxed">{season.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Monthly Breakdown" subtitle="Detailed Guides" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MONTHS.map((month) => (
            <Link 
              key={month.name}
              to={month.link}
              className="group p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:bg-white hover:shadow-xl transition-all duration-500 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl group-hover:bg-brand-50 transition-colors">
                  <Calendar className="w-5 h-5 text-stone-400 group-hover:text-brand-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{month.name}</h4>
                  <p className="text-xs text-stone-500">{month.season} • {month.temp}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
                  month.status === 'Excellent' ? 'bg-green-100 text-green-700' : 
                  month.status === 'Good' ? 'bg-blue-100 text-blue-700' : 
                  month.status === 'Wet' ? 'bg-amber-100 text-amber-700' : 
                  'bg-stone-200 text-stone-600'
                }`}>
                  {month.status}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-brand-800 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FAQSection className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
