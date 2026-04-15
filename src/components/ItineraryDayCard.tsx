import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin, Mountain, Route, Bed, Star, Utensils, ChevronDown } from 'lucide-react';

interface ItineraryDay {
  day: number | string;
  title: string;
  altitude: string;
  time: string;
  distance: string;
  lodging: string;
  meals: string;
  desc: string;
  highlights: string[];
}

interface ItineraryDayCardProps {
  day: ItineraryDay;
  isFirst?: boolean;
}

export default function ItineraryDayCard({ day, isFirst = false }: ItineraryDayCardProps) {
  const [expanded, setExpanded] = useState(isFirst);

  return (
    <div className="relative pl-12 border-l-2 border-stone-200 pb-12 last:pb-0">
      <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-600 border-4 border-white shadow-sm" />
      <div className="space-y-6">
        <div 
          className="flex flex-wrap items-center gap-4 cursor-pointer group"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-brand-600 font-black text-xs uppercase tracking-[0.2em] bg-brand-50 px-3 py-1 rounded-full group-hover:bg-brand-100 transition-colors">
            Day {day.day}
          </span>
          <h3 className="text-3xl font-black text-stone-900 uppercase tracking-tighter group-hover:text-brand-600 transition-colors">
            {day.title}
          </h3>
          <div className="ml-auto">
            <ChevronDown 
              className={`w-6 h-6 text-stone-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
        
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-stone-100 shadow-sm text-stone-600 text-sm font-bold">
                    <Mountain className="w-4 h-4 text-brand-500" /> {day.altitude}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-stone-100 shadow-sm text-stone-600 text-sm font-bold">
                    <Clock className="w-4 h-4 text-brand-500" /> {day.time}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-stone-100 shadow-sm text-stone-600 text-sm font-bold">
                    <Route className="w-4 h-4 text-brand-500" /> {day.distance}
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed text-lg font-medium">{day.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 bg-stone-100/50 rounded-3xl border border-stone-200/50">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-brand-600" />
                      <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest">Highlights</h4>
                    </div>
                    <ul className="space-y-2">
                      {day.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-stone-600 text-sm">
                          <span className="text-brand-600 mt-1">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-stone-100/50 rounded-3xl border border-stone-200/50 space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-400">
                        <Bed className="w-3 h-3" /> Accommodation
                      </div>
                      <span className="text-stone-900 font-bold text-sm">{day.lodging}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-400">
                        <Utensils className="w-3 h-3 text-brand-600" /> Meals
                      </div>
                      <span className="text-stone-900 font-bold text-sm">{day.meals}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
