import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Activity, AlertTriangle, Shield, Thermometer, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import FAQSection from '../../components/FAQSection';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const SYMPTOMS = [
  { title: 'Mild Symptoms', items: ['Headache', 'Nausea & Vomiting', 'Dizziness', 'Fatigue', 'Loss of Appetite', 'Shortness of Breath'] },
  { title: 'Severe Symptoms', items: ['Shortness of breath at rest', 'Inability to walk', 'Confusion', 'Fluid in lungs (HAPE)', 'Swelling of brain (HACE)'] },
];

export default function AltitudeSickness() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Altitude Sickness (AMS)"
        subtitle="Understanding and Preventing AMS"
        image="/ams.png"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Acute Mountain Sickness (AMS) is a primary consideration for any high-altitude trek. Understanding its signs is the key to a safe journey.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Knowledge is your best defense against the thin mountain air. From recognizing early symptoms to mastering prevention strategies like hydration and slow ascent, prioritizing your health ensures you reach the turquoise lakes safely.
            </span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-brand-400 font-bold hover:text-white transition-colors underline decoration-brand-400/30 underline-offset-4 text-base inline-flex items-center gap-1 group/more focus:outline-none"
            >
              {isExpanded ? 'See Less' : 'See More'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </p>
        </div>

        <UserProofBadge />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#what-is-ams"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Symptom Guide
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Prevention Tips
          </button>
        </div>
      </Hero>

      <div id="what-is-ams" className="scroll-mt-20">

      <Section title="What is AMS?" subtitle="Safety & Health">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Acute Mountain Sickness (AMS) is a condition that can affect trekkers at high
              altitudes, typically above 2,500 meters. It occurs when your body doesn't have
              enough time to adjust to the lower oxygen levels in the air.
            </p>
            <div className="p-10 bg-red-50 rounded-[40px] border border-red-100 space-y-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">The Golden Rule</h3>
              </div>
              <p className="text-red-800 text-lg leading-relaxed font-medium">
                "If you feel unwell at altitude, it is altitude sickness until proven otherwise.
                Never ascend with symptoms."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SYMPTOMS.map((group) => (
                <div key={group.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                  <h4 className={`text-xl font-bold ${group.title.includes('Severe') ? 'text-red-600' : 'text-stone-900'}`}>
                    {group.title}
                  </h4>
                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-stone-300 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Prevention Strategies</h3>
              <div className="space-y-6">
                {[
                  { label: 'Ascend Slowly', desc: 'Do not increase your sleeping altitude by more than 300-500m per day.' },
                  { label: 'Hydration', desc: 'Drink 3-4 liters of water daily. Avoid alcohol and smoking.' },
                  { label: 'Acclimatization', desc: 'Take rest days every 1,000m of ascent.' },
                  { label: 'Medication', desc: 'Consult your doctor about Diamox (Acetazolamide) before your trip.' },
                ].map((strategy) => (
                  <div key={strategy.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-brand-300 font-bold mb-2">{strategy.label}</h4>
                    <p className="text-stone-400 text-sm">{strategy.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
              <Shield className="w-6 h-6 text-stone-400 shrink-0" />
              <p className="text-stone-500 text-sm leading-relaxed">
                Always trek with a guide who is trained in wilderness first aid and can
                recognize the early signs of AMS.
              </p>
            </div>
          </div>
        </div>
      </Section>

      </div>
      <FAQSection category="Safety" className="py-24 bg-stone-100" />

      <CustomTripBanner />
    </main>
  );
}
