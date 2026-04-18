import { Compass } from 'lucide-react';
import Section from './Section';
import { useBooking } from '../context/BookingContext';

export default function CustomTripBanner() {
  const { openBooking } = useBooking();

  return (
    <Section className="py-16 md:py-24 !bg-transparent border-t border-stone-200/60 mt-auto">
      <div className="glass-dark border border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 w-full overflow-hidden group shadow-2xl">
        {/* Background Glows */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-800/20 transition-colors duration-700" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700" />
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10 text-center md:text-left">
          <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center border border-brand-500/20 group-hover:scale-110 transition-transform duration-500">
            <Compass className="w-8 h-8 text-brand-400" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Need a custom itinerary?</h3>
            <p className="text-stone-400 font-medium text-base md:text-lg max-w-xl">
              We can design a trip tailored specifically to your needs, fitness level, and schedule. It only takes 2 minutes to start.
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => openBooking('Custom Itinerary')}
          className="relative z-10 w-full md:w-auto px-10 py-5 bg-brand-600 text-white font-extrabold rounded-2xl hover:bg-brand-800 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-center text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(13,148,136,0.3)]"
        >
          Start Custom Plan
        </button>
      </div>
    </Section>
  );
}
