import Hero from '../components/Hero';
import Section from '../components/Section';
import { Map, Calendar, Shield, DollarSign, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UltimateGuide() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="The Ultimate Guide to Gokyo Lakes" 
        subtitle="Everything you need to know for the trek of a lifetime"
        image="https://picsum.photos/seed/gokyo-ultimate/1920/1080"
      />

      <Section title="Route Overview" subtitle="The Journey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              The Gokyo Lakes trek is a spectacular alternative to the traditional Everest Base Camp route. 
              It takes you through the heart of the Khumbu region, offering unparalleled views of four 8,000m peaks: 
              Mount Everest, Lhotse, Makalu, and Cho Oyu.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Total Distance', value: '92km' },
                { label: 'Max Altitude', value: '5,357m' },
                { label: 'Avg. Duration', value: '12-15 Days' },
                { label: 'Difficulty', value: 'Challenging' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-white rounded-3xl shadow-sm border border-stone-100">
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
                </div>
              ))}
            </div>
            <Link 
              to="/routes" 
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-4 transition-all"
            >
              Explore Detailed Routes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/gokyo-map-preview/800/800" 
              alt="Gokyo Route Map" 
              className="rounded-[40px] shadow-2xl w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      <Section title="Key Planning Modules" subtitle="Preparation" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Costs & Budgeting', 
              icon: DollarSign, 
              desc: 'Detailed breakdown of permits, flights, food, and accommodation.',
              link: '/planning/cost-breakdown'
            },
            { 
              title: 'Permits & Fees', 
              icon: Info, 
              desc: 'What you need and where to get them (Municipality & National Park).',
              link: '/planning/permits-fees'
            },
            { 
              title: 'Best Time to Visit', 
              icon: Calendar, 
              desc: 'Monthly weather snapshots, crowd levels, and visibility guides.',
              link: '/planning/best-time-to-visit'
            },
            { 
              title: 'Safety & Altitude', 
              icon: Shield, 
              desc: 'Acclimatization schedules, AMS symptoms, and emergency protocols.',
              link: '/safety'
            },
            { 
              title: 'Gear & Packing', 
              icon: Map, 
              desc: 'Comprehensive list of essential equipment and layering systems.',
              link: '/gear'
            },
            { 
              title: 'Interactive Map', 
              icon: Map, 
              desc: 'Interactive trail map with altitude profiles and checkpoints.',
              link: '/map'
            },
          ].map((item) => (
            <Link 
              key={item.title} 
              to={item.link}
              className="glass-dark p-10 rounded-[32px] hover:bg-white/10 transition-all group"
            >
              <item.icon className="w-10 h-10 text-brand-300 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed mb-6">{item.desc}</p>
              <span className="text-brand-300 font-bold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Day-by-Day Options" subtitle="Itineraries">
        <div className="space-y-12">
          <p className="text-stone-600 text-lg max-w-3xl">
            Depending on your fitness level and time constraints, we offer several itinerary variants. 
            The standard 12-day trek is recommended for best acclimatization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[7, 9, 12, 15].map((days) => (
              <Link 
                key={days} 
                to={`/itineraries/${days}-days`}
                className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <h4 className="text-4xl font-bold text-stone-900 mb-2">{days} Days</h4>
                <p className="text-stone-500 mb-6">
                  {days === 7 ? 'Short & Intense' : days === 12 ? 'Classic Route' : 'Extended Adventure'}
                </p>
                <span className="px-6 py-2 bg-stone-100 text-stone-900 rounded-full font-bold text-sm">
                  View Plan
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Essential Safety" subtitle="Health" dark>
        <div className="bg-brand-900/50 p-12 rounded-[48px] border border-brand-800">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-white">Acclimatization is Key</h3>
              <p className="text-stone-300 text-lg leading-relaxed">
                Trekking to 5,357m is no small feat. Our guides prioritize your safety with 
                built-in rest days and constant monitoring of oxygen levels.
              </p>
              <ul className="space-y-4">
                {[
                  'Daily health checks and O2 monitoring',
                  'Expert guides trained in high-altitude medicine',
                  'Emergency evacuation protocols in place',
                  'Comprehensive first-aid kits carried on all treks'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center space-y-6">
                <Shield className="w-16 h-16 text-brand-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Emergency Support</h4>
                <p className="text-stone-400 text-sm">24/7 Ground support and helicopter rescue coordination.</p>
                <button className="w-full py-4 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-400 transition-colors">
                  Safety Protocols
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
