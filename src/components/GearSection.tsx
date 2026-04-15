import { motion } from 'motion/react';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { GEAR_LIST } from '../constants';

interface GearSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export default function GearSection({
  title = "Essential Packing List",
  subtitle = "Gear Priorities",
  limit,
  className
}: GearSectionProps) {
  const displayGear = limit ? GEAR_LIST.slice(0, limit) : GEAR_LIST;

  return (
    <Section title={title} subtitle={subtitle} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayGear.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="glass p-10 rounded-[40px] space-y-8 h-full">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-stone-100 rounded-2xl">
                  <ShoppingBag className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">{category.category}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {category.items.length > 6 && (
                <p className="text-stone-400 text-xs italic">And more...</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link 
          to="/gear" 
          className="inline-flex items-center gap-2 px-10 py-5 bg-white border border-stone-200 text-stone-900 font-bold uppercase tracking-widest rounded-full hover:bg-stone-50 transition-all shadow-sm"
        >
          View Complete Gear Guide <ArrowRight className="w-4 h-4 text-brand-600" />
        </Link>
      </div>
    </Section>
  );
}
