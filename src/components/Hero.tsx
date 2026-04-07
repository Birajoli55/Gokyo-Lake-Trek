import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
  children?: ReactNode;
}

export default function Hero({ title, subtitle, image, height = 'h-[80vh]', children }: HeroProps) {
  return (
    <section className={`relative w-full ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-brand-950/20 to-brand-950" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {subtitle && (
            <span className="inline-block text-brand-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] text-balance">
            {title}
          </h1>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
