import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { PLANNING_MODULES } from '../constants';

interface PlanningSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export default function PlanningSection({
  title = "Planning Resources",
  subtitle = "Step-by-Step Guide",
  limit,
  className
}: PlanningSectionProps) {
  const displayModules = limit ? PLANNING_MODULES.slice(0, limit) : PLANNING_MODULES;

  return (
    <Section title={title} subtitle={subtitle} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayModules.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={item.link}
              className="p-10 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all group block h-full"
            >
              <div className="p-4 bg-stone-50 rounded-2xl w-fit mb-6 group-hover:bg-brand-50 transition-colors">
                <item.icon className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-6">{item.desc}</p>
              <span className="text-brand-600 font-bold flex items-center gap-2">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
