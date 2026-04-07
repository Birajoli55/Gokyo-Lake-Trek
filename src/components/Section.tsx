import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({ id, className = '', title, subtitle, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 ${dark ? 'section-dark' : 'section-light'} ${className}`}
    >
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-16 max-w-2xl">
            {subtitle && (
              <span className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 block ${dark ? 'text-brand-300' : 'text-brand-600'}`}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight leading-tight ${dark ? 'text-white' : 'text-stone-900'}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
