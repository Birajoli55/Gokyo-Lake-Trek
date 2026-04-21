import { motion } from 'motion/react';

const PRESS_LOGOS = [
  { name: 'INDEPENDENT', className: 'font-serif tracking-tighter font-black text-xl italic' },
  { name: 'yahoo!', className: 'font-sans font-black text-2xl tracking-tighter' },
  { name: 'Dívány', className: 'font-serif font-black text-2xl italic' },
  { name: 'The Telegraph', className: 'font-serif font-black text-xl' },
];

const AWARDS = [
  { year: '2024', title: 'Travelers\' Choice', level: 'Best of the Best' },
  { year: '2023', title: 'Travelers\' Choice', level: 'Top Rated' },
  { year: '2020', title: 'Travelers\' Choice', level: 'Recommended' },
  { year: '2019', title: 'Certificate of Excellence', level: 'Hall of Fame' },
];

const OwlIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <circle cx="35" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="6" />
    <circle cx="65" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="6" />
    <circle cx="35" cy="45" r="3" />
    <circle cx="65" cy="45" r="3" />
    <path d="M50,55 L42,65 L58,65 Z" />
    <path d="M25,25 Q35,15 45,25" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M55,25 Q65,15 75,25" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const LaurelWreath = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <path d="M20,50 Q10,40 10,20 Q10,10 20,5 Q15,15 15,30 Q15,45 20,50 Z" />
    <path d="M30,45 Q20,35 20,15 Q20,5 30,0 Q25,10 25,25 Q25,40 30,45 Z" />
    <path d="M40,40 Q30,30 30,10 Q30,0 40,-5 Q35,5 35,20 Q35,35 40,40 Z" />
    <path d="M80,50 Q90,40 90,20 Q90,10 80,5 Q85,15 85,30 Q85,45 80,50 Z" />
    <path d="M70,45 Q80,35 80,15 Q80,5 70,0 Q75,10 75,25 Q75,40 70,45 Z" />
    <path d="M60,40 Q70,30 70,10 Q70,0 60,-5 Q65,5 65,20 Q65,35 60,40 Z" />
  </svg>
);

export default function PressAwardsBanner() {
  return (
    <section className="py-12 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col space-y-12">
          
          {/* Press Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <span className="text-stone-900 font-black uppercase tracking-wider text-sm whitespace-nowrap lg:w-32">
              IN THE PRESS
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {PRESS_LOGOS.map((logo) => (
                <span key={logo.name} className={`${logo.className} text-stone-900`}>
                  {logo.name}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-stone-100" />

          {/* Awards Section - Precise Recreation */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <span className="text-stone-900 font-black uppercase tracking-wider text-sm whitespace-nowrap lg:w-32">
              AWARDS
            </span>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-between flex-1 gap-x-8 gap-y-10">
              
              {/* Award 2024 */}
              <div className="flex flex-col items-center space-y-1 group">
                <div className="flex flex-col items-center text-center">
                  <span className="text-[11px] font-bold text-stone-900 leading-tight">Tripadvisor</span>
                  <span className="text-[11px] font-bold text-stone-900 leading-tight">Travelers'</span>
                  <span className="text-[11px] font-bold text-stone-900 leading-tight">Choice Awards</span>
                </div>
                <div className="relative flex flex-col items-center py-1">
                  <LaurelWreath className="w-20 h-12 text-stone-900" />
                  <OwlIcon className="w-8 h-8 text-stone-900 absolute top-1/2 -translate-y-1/2" />
                </div>
                <span className="text-xs font-black text-stone-900">2024</span>
              </div>

              {/* Award 2023 */}
              <div className="flex flex-col items-center space-y-1 group">
                <div className="flex flex-col items-center text-center">
                  <span className="text-[11px] font-bold text-stone-900 leading-tight">Travelers'</span>
                  <div className="flex items-center">
                    <span className="text-[11px] font-bold text-stone-900 leading-tight">Choice</span>
                    <span className="text-[6px] font-bold text-stone-900 align-top ml-0.5">TM</span>
                  </div>
                </div>
                <div className="relative flex flex-col items-center py-1">
                  <LaurelWreath className="w-20 h-12 text-stone-900" />
                  <OwlIcon className="w-8 h-8 text-stone-900 absolute top-1/2 -translate-y-1/2" />
                </div>
                <span className="text-xs font-black text-stone-900">2023</span>
              </div>

              {/* Award 2020 */}
              <div className="flex flex-col items-center space-y-1 group">
                <span className="text-[10px] font-bold text-stone-700">2020</span>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[11px] font-bold text-stone-900 leading-tight">Travelers'</span>
                  <div className="flex items-center">
                    <span className="text-[11px] font-bold text-stone-900 leading-tight">Choice</span>
                    <span className="text-[6px] font-bold text-stone-900 align-top ml-0.5">TM</span>
                  </div>
                </div>
                <div className="relative flex flex-col items-center py-1">
                  <LaurelWreath className="w-20 h-12 text-stone-900" />
                  <OwlIcon className="w-8 h-8 text-stone-900 absolute top-1/2 -translate-y-1/2" />
                </div>
                <span className="text-[9px] font-black text-stone-900 uppercase tracking-tighter">Tripadvisor</span>
              </div>

              {/* Award 2019 */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-20 h-20 rounded-full border border-[#00AA6C] flex flex-col items-center justify-center p-2 relative">
                  <span className="text-[10px] font-bold text-stone-700">2019</span>
                  <div className="flex flex-col items-center leading-none -mt-0.5">
                    <span className="text-[8px] font-black text-stone-900">CERTIFICATE</span>
                    <span className="text-[6px] font-bold text-stone-900 italic">of</span>
                    <span className="text-[8px] font-black text-stone-900">EXCELLENCE</span>
                  </div>
                  <OwlIcon className="w-6 h-6 text-stone-900 mt-1" />
                </div>
                <div className="flex items-center justify-center gap-1 -mt-1">
                  <span className="text-[10px] font-black text-[#007a4d] tracking-tighter">tripadvisor</span>
                  <span className="text-[5px] text-stone-400 font-bold">®</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
