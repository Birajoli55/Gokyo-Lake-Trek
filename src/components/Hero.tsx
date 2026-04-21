import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { CloudRain, Map, ThermometerSun } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
  children?: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } }
} as const;

export default function Hero({ title, subtitle, image, height = 'min-h-[90vh]', children, topContent, bottomContent }: HeroProps) {
  return (
    <section className={`relative w-full ${height} flex items-center justify-center py-20 overflow-visible`}>
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full transition-transform duration-[1500ms] ease-out scale-100"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Modern dark gradient overlay with more focus on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-brand-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-stone-950/20" />
      </div>

      {/* Floating Info Cards (Abstract layer) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:flex justify-center items-center">
        <div className="w-full max-w-7xl px-6 h-full relative">
          <motion.div 
            initial={{ opacity: 0, x: -50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-[20%] left-6 xl:left-0 glass-dark px-4 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md"
          >
            <div className="bg-brand-500/20 p-2 rounded-full"><Map className="w-5 h-5 text-brand-300" /></div>
            <div>
              <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Elevation</p>
              <p className="text-white font-bold">5,357m</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-[20%] right-6 xl:right-0 glass-dark px-4 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md"
          >
            <div className="bg-amber-500/20 p-2 rounded-full"><ThermometerSun className="w-5 h-5 text-amber-300" /></div>
            <div>
              <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Best Season</p>
              <p className="text-white font-bold">Spring / Autumn</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-5xl mx-auto space-y-10 flex flex-col items-center"
        >
          {topContent && (
            <motion.div variants={letterVariants}>
              {topContent}
            </motion.div>
          )}

          {subtitle && (
            <motion.span 
              variants={letterVariants}
              className="inline-block px-4 py-1.5 glass-dark glow-effect rounded-full text-emerald-300 text-xs font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md"
            >
              {subtitle}
            </motion.span>
          )}
          
          <motion.h1 
            variants={letterVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95] text-balance break-words w-full"
          >
            {title}
          </motion.h1>

          <motion.div variants={letterVariants} className="pt-8">
            {children}
          </motion.div>
        </motion.div>
      </div>
      
      {bottomContent && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          {bottomContent}
        </div>
      )}
    </section>
  );
}
