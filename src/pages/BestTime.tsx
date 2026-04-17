import Hero from '../components/Hero';
import Section from '../components/Section';
import CustomTripBanner from '../components/CustomTripBanner';
import { Sun, Cloud, Snowflake, CloudRain, CheckCircle2, Calendar, Thermometer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { useState } from 'react';

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

export default function BestTime() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Best Time to Visit" 
        subtitle="Monthly Guide to Gokyo Lakes"
        image="/besttime.jpg"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Timing is everything when it comes to the Himalayas. Choosing the right month can mean the difference between crystal clear views and cloud-covered peaks.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Whether you're looking for the blooming rhododendrons of spring or the sharp visibility and quiet trails of autumn, our seasonal guide helps you pick the perfect window for your adventure.
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
          <a
            href="#seasons"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Seasonal Overview
          </a>
          <Link
            to="/itineraries"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg flex items-center gap-2"
          >
            Explore Routes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Hero>

      <div id="seasons">
        <Section title="The Four Seasons" subtitle="Weather">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              season: 'Spring', 
              months: 'Mar - May', 
              icon: Sun, 
              desc: 'Clear skies, blooming rhododendrons, and mild temperatures. The best time for photography.' 
            },
            { 
              season: 'Autumn', 
              months: 'Sep - Nov', 
              icon: Cloud, 
              desc: 'Stable weather, crisp air, and the most popular time for trekking. Expect some crowds.' 
            },
            { 
              season: 'Winter', 
              months: 'Dec - Feb', 
              icon: Snowflake, 
              desc: 'Extremely cold, but very clear skies and fewer trekkers. High passes may be closed.' 
            },
            { 
              season: 'Monsoon', 
              months: 'Jun - Aug', 
              icon: CloudRain, 
              desc: 'Heavy rain, clouds, and leeches. Not recommended for trekking due to flight cancellations.' 
            }
          ].map((item) => (
            <div key={item.season} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
              <div className="p-4 bg-stone-50 rounded-2xl w-fit">
                <item.icon className="w-8 h-8 text-brand-600" />
              </div>
              <div className="space-y-2">
                <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">{item.months}</span>
                <h3 className="text-2xl font-bold text-stone-900">{item.season}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      </div>

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
                  <Calendar className="w-5 h-5 text-stone-400 group-hover:text-brand-600" />
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
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Temperature & Visibility" subtitle="Conditions" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Daytime Temperatures</h3>
              <p className="text-stone-400 leading-relaxed">
                During the peak seasons (Spring and Autumn), daytime temperatures at lower altitudes can be 15°C to 20°C. 
                As you climb higher, it will drop to 5°C to 10°C.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Nighttime Temperatures</h3>
              <p className="text-stone-400 leading-relaxed">
                Nights are always cold in the mountains. 
                Expect temperatures to drop below freezing (0°C to -15°C) at higher altitudes like Gokyo.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Visibility</h3>
              <p className="text-stone-400 leading-relaxed">
                Autumn offers the best visibility, with clear blue skies and sharp mountain views. 
                Spring can be a bit hazier due to dust and pollen, but the flowers are in full bloom.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Flight Reliability</h3>
              <p className="text-stone-400 leading-relaxed">
                Flights to Lukla are highly weather-dependent. 
                Cancellations are common during the monsoon and winter. 
                Always build a few buffer days into your itinerary.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection category="Preparation" className="py-24" />

      <CustomTripBanner />
    </main>
  );
}
