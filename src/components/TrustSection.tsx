import { motion } from 'motion/react';
import Section from './Section';
import { TRUST_PILLARS, PARTNERS, HERITAGE_STORY } from '../constants';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function TrustSection({ className = '' }: { className?: string }) {
  return (
    <Section 
      className={`${className} relative overflow-hidden bg-stone-100/50`}
    >
      {/* Background Topography Pattern (CSS-based) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400s150-50 200-150S350 0 400 0m-400 350s150-50 200-150S350-50 400-50m-400 300s150-50 200-150S350-100 400-100' fill='none' stroke='%230D9488' stroke-width='1.5'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Heritage Story & Signature */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-brand-600" />
                <span className="text-brand-600 font-bold uppercase tracking-[0.3em] text-[10px]">Sherpa Heritage & Tradition</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-stone-900 leading-[0.9] text-balance">
                {HERITAGE_STORY.title}
              </h2>
              <div className="relative pt-6">
                <Quote className="absolute left-0 -top-2 w-16 h-16 text-brand-600/10" />
                <p className="text-stone-600 text-xl leading-relaxed italic relative z-10 pl-8 border-l-2 border-brand-600/20 font-medium">
                  "{HERITAGE_STORY.description}"
                </p>
              </div>
            </div>

            {/* Signature Block - More Authentic Look */}
            <div className="flex items-center gap-6 pt-8">
              <div className="space-y-1">
                <span className="block font-serif text-4xl text-stone-900 leading-none italic opacity-80" style={{ letterSpacing: '-0.02em' }}>
                  {HERITAGE_STORY.signature}
                </span>
                <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-brand-600" /> 
                  {HERITAGE_STORY.role}
                </p>
              </div>
              <div className="h-16 w-[1px] bg-stone-200 rotate-12 mx-4" />
              <div className="text-stone-300 text-[10px] font-bold uppercase tracking-widest leading-none">
                <p>Khumbu Valley</p>
                <p>Established Roots</p>
              </div>
            </div>

            {/* Partner Badges */}
            <div className="pt-12 space-y-6">
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">Official Credentials</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                {PARTNERS.map(partner => (
                  <span key={partner} className="text-[10px] font-black text-stone-800 uppercase tracking-tighter border border-stone-900/10 px-4 py-2 rounded-full bg-white shadow-sm hover:bg-stone-50 transition-colors">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Trust Pillars Grid (Field Notes Style) */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUST_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[40px] border border-stone-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 relative group overflow-hidden"
              >
                {/* Vintage ID Overlay */}
                <div className="absolute right-8 top-8 text-[10px] font-mono text-stone-300 group-hover:text-brand-600/30 transition-colors">
                  0{i + 1} / GLT_SEC
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 bg-stone-900 text-white rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3 shadow-lg group-hover:shadow-brand-600/20">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-stone-900 tracking-tight leading-tight">{pillar.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Pattern in corner */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-600/5 rounded-full blur-2xl group-hover:bg-brand-600/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
