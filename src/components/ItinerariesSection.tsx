import { motion } from 'motion/react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { ITINERARY_CARDS } from '../constants';
import { CustomItemVariants } from '../types';

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface ItinerariesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export default function ItinerariesSection({ 
  title = "Find Your Itinerary", 
  subtitle = "Options for Every Trekker",
  limit,
  className = "py-24"
}: ItinerariesSectionProps) {
  const displayCards = limit ? ITINERARY_CARDS.slice(0, limit) : ITINERARY_CARDS;

  return (
    <Section title={title} subtitle={subtitle} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {displayCards.map((item) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <Link
              to={item.link}
              className={`group relative flex flex-col p-10 bg-white rounded-[40px] border shadow-xl shadow-stone-900/5 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-700 hover:-translate-y-2 h-full overflow-hidden ${item.popular ? 'border-brand-200 ring-4 ring-brand-400/10' : 'border-stone-100'}`}
            >
              {item.popular && (
                <span className="absolute top-8 right-8 px-4 py-1.5 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-20 animate-pulse">
                  Most Popular
                </span>
              )}
              {/* Decorative gradient blob */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-100/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-stone-50 group-hover:bg-brand-600 rounded-[22px] flex items-center justify-center transition-all duration-500 group-hover:rotate-6">
                    <Clock className="w-8 h-8 text-brand-600 group-hover:text-white" />
                  </div>
                </div>
                <span className={`px-4 py-1.5 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/50 shadow-sm ${item.difficultyColor}`}>
                  {item.difficulty}
                </span>
              </div>

              <div className="relative z-10 flex-grow space-y-6">
                <div>
                  <h3 className="text-6xl font-black text-stone-900 leading-none tracking-tighter">{item.days}<span className="text-xl text-stone-400 font-bold ml-2 uppercase tracking-widest">Days</span></h3>
                  <h4 className="text-2xl font-black text-stone-900 mt-3 tracking-tight group-hover:text-brand-600 transition-colors">{item.title}</h4>
                </div>
                <p className="text-stone-500 text-base leading-relaxed">{item.desc}</p>
                <div className="space-y-3 pt-4">
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Highlights</p>
                  <ul className="space-y-2.5">
                    {item.highlights.map(h => (
                      <li key={h} className="flex items-center gap-3 text-stone-700 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-100 flex items-center justify-between relative z-10">
                <span className="text-brand-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Full Plan <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
