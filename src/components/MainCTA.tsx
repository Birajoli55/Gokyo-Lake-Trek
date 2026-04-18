import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function MainCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="relative py-32 md:py-60 bg-stone-950 text-white text-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/HimalayanPanorama-opt.webp" 
          className="w-full h-full object-cover mix-blend-overlay scale-110" 
          alt="Himalayan mountains" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <span className="text-brand-400 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs block">
              Your Journey Starts Here
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-balance">
              Ready for the Adventure of a Lifetime?
            </h2>
          </div>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            Join our next expedition to the Gokyo Lakes. Small groups, expert local guides, and memories that will resonate forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => openBooking()}
              className="group relative px-10 py-5 bg-brand-500 text-white font-black uppercase tracking-widest rounded-full hover:bg-brand-400 transition-all shadow-[0_20px_60px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_80px_rgba(20,184,166,0.5)] hover:-translate-y-1.5 active:scale-95 text-sm"
            >
              Book Your Spot
            </button>
            <Link 
              to="/contact" 
              className="px-10 py-5 border-2 border-white/10 glass-dark font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all hover:border-white/30 hover:-translate-y-1.5 active:scale-95 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
