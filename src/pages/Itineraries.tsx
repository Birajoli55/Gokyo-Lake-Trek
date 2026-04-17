import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import { ITINERARIES } from '../constants';
import { MapPin, Clock, Mountain, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { useState } from 'react';

export default function Itineraries() {
  const itinerary = ITINERARIES[0];
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Trek Itineraries" 
        subtitle="The Path Ahead"
        image="/itineraries.png"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            The journey to Gokyo is more than just a walk; it's a carefully crafted adventure through some of the most dramatic landscapes on Earth.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}From the gentle riverside trails of the lower valley to the lung-busting ascent of Gokyo Ri, our itineraries are optimized for safety, scenery, and soul-stirring cultural immersion.
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
            href="#classic-route"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Classic Itinerary
          </a>
          <Link
            to="/itineraries/gokyo-cho-la-ebc"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Alternative Routes
          </Link>
        </div>
      </Hero>

      <div id="classic-route">
        <Section title={itinerary.name} subtitle="Classic Route">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-8 rounded-[32px] space-y-6 sticky top-32">
              <h3 className="text-2xl font-bold text-stone-900">Trek Summary</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {itinerary.description}
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stone-100 rounded-xl">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">Duration</p>
                    <p className="text-stone-900 font-bold">{itinerary.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stone-100 rounded-xl">
                    <Mountain className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">Difficulty</p>
                    <p className="text-stone-900 font-bold">{itinerary.difficulty}</p>
                  </div>
                </div>
              </div>
              <button className="w-full py-4 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-brand-700 transition-colors">
                Download PDF
              </button>
            </div>
          </div>

          {/* Main Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {itinerary.days.map((day, index) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 border-l border-stone-200 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-600 border-4 border-stone-50" />
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="px-3 py-1 bg-stone-100 text-brand-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Day {day.day < 10 ? `0${day.day}` : day.day}
                    </span>
                    <h4 className="text-2xl font-bold text-stone-900">{day.title}</h4>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed">
                    {day.description}
                  </p>

                  <div className="flex flex-wrap gap-6 pt-2">
                    {day.elevation && (
                      <div className="flex items-center gap-2 text-stone-500 text-xs font-medium">
                        <Mountain className="w-4 h-4" />
                        <span>Max Elevation: {day.elevation}</span>
                      </div>
                    )}
                    {day.duration && (
                      <div className="flex items-center gap-2 text-stone-500 text-xs font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Walking Time: {day.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      </div>

      {/* Alternative Routes */}
      <Section title="Alternative Routes" subtitle="Variations" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Gokyo & Everest Base Camp', 
              duration: '18 Days', 
              desc: 'The ultimate Everest experience, crossing the challenging Cho La Pass (5,420m).',
              image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
            },
            { 
              title: 'Renjo La Pass Loop', 
              duration: '14 Days', 
              desc: 'A stunning loop that adds the Renjo La Pass (5,360m) for even more spectacular views.',
              image: 'https://images.unsplash.com/photo-1505410603994-c3ac6269711f?q=80&w=800&auto=format&fit=crop'
            }
          ].map((route) => (
            <div key={route.title} className="group glass-dark overflow-hidden rounded-[40px] flex flex-col md:flex-row">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src={route.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest">{route.duration}</span>
                <h3 className="text-2xl font-bold text-white">{route.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{route.desc}</p>
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs pt-4 group/btn">
                  Explore Route <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <FAQSection category="Booking" className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
