import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { SAFETY_TOPICS } from '../constants';

interface SafetySectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export default function SafetySection({
  title = "Stay Safe on the Trail",
  subtitle = "Essential Safety Information",
  limit,
  className
}: SafetySectionProps) {
  const displayTopics = limit ? SAFETY_TOPICS.slice(0, limit) : SAFETY_TOPICS;

  return (
    <Section title={title} subtitle={subtitle} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayTopics.map((topic, i) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={topic.link}
              className="group p-10 bg-white rounded-[40px] border border-stone-100 shadow-2xl shadow-stone-900/5 hover:shadow-brand-600/5 transition-all duration-500 flex flex-col items-start gap-8 h-full relative overflow-hidden"
            >
              <div className={`p-5 rounded-[22px] shadow-lg ${topic.color} relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                <topic.icon className="w-8 h-8" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-black text-stone-900 tracking-tight group-hover:text-brand-800 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-stone-500 text-base leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex items-center gap-2 text-brand-800 font-black text-xs uppercase tracking-widest relative z-10">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-stone-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
