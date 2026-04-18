import { motion } from 'motion/react';
import { Camera, Home, Mountain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { PLACES } from '../constants';

interface PlacesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export default function PlacesSection({
  title = "Villages & Viewpoints",
  subtitle = "Key Destinations Along the Trail",
  limit,
  className
}: PlacesSectionProps) {
  const displayPlaces = limit ? PLACES.slice(0, limit) : PLACES;

  return (
    <Section title={title} subtitle={subtitle} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPlaces.map((place, i) => (
          <motion.div
            key={place.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={place.link}
              className="group bg-white rounded-[40px] overflow-hidden border border-stone-100 shadow-2xl shadow-stone-900/5 hover:shadow-brand-600/5 transition-all duration-700 block h-full flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  loading="lazy"
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 glass-dark px-4 py-2 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-xl backdrop-blur-md border border-white/10">
                  {place.altitude}
                </div>
              </div>
              <div className="p-10 space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-stone-900 tracking-tight group-hover:text-brand-800 transition-colors">
                  {place.name}
                </h3>
                <p className="text-stone-500 text-base leading-relaxed line-clamp-2">
                  {place.description}
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-stone-50">
                  <span className="text-brand-800 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                      <Camera className="w-4 h-4 text-stone-400 group-hover:text-brand-800" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                      <Home className="w-4 h-4 text-stone-400 group-hover:text-brand-800" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
