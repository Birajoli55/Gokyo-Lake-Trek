import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Heart, Activity, Shield, Info, ArrowRight, CheckCircle2, AlertTriangle, Thermometer, Pill } from 'lucide-react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const MEDICAL_KIT = [
  { category: 'Medication', items: ['Diamox (Acetazolamide)', 'Ibuprofen/Paracetamol', 'Imodium (Anti-diarrheal)', 'Ciprofloxacin (Antibiotic)', 'Oral Rehydration Salts'] },
  { category: 'First Aid', items: ['Blister Bandages (Compeed)', 'Sterile Gauze & Tape', 'Antiseptic Wipes', 'Elastic Bandage', 'Thermometer'] },
];

export default function FirstAid() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="First Aid & Health"
        subtitle="Staying Healthy on the Gokyo Lakes Trail"
        image="/fah.png"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Maintaining your health is the single most important factor for a successful Himalayan journey.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}From assembling a specialized medical kit to mastering high-altitude hygiene, our comprehensive health guide provides the essential knowledge and preparation strategies needed to stay energized and resilient on the Gokyo trail.
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
            href="#health"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Medical Kit Essentials
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Health Tips
          </button>
        </div>
      </Hero>

      <div id="health" className="scroll-mt-20">

      <Section title="Health & Well-being" subtitle="Safety & Health">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Staying healthy is the most important factor in a successful trek.
              The combination of high altitude, physical exertion, and a different
              diet can be challenging for your body. Proper preparation and a
              well-stocked first aid kit are essential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MEDICAL_KIT.map((group) => (
                <div key={group.category} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                  <div className="p-3 bg-stone-50 rounded-xl w-fit">
                    <Pill className="w-6 h-6 text-brand-600" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">{group.category}</h4>
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
            <div className="p-10 bg-brand-50 rounded-[40px] border border-brand-100 space-y-8">
              <div className="flex items-center gap-4">
                <Heart className="w-10 h-10 text-brand-600" />
                <h3 className="text-2xl font-bold text-brand-900">Personal Hygiene</h3>
              </div>
              <p className="text-brand-800 text-lg leading-relaxed">
                Most illnesses on the trail are related to poor hygiene. Always wash
                your hands or use sanitizer before every meal. Avoid tap water and
                stick to purified or boiled water.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Health Tips</h3>
              <div className="space-y-6">
                {[
                  { label: 'Listen to Your Body', desc: 'Do not ignore minor symptoms. They can escalate quickly at altitude.' },
                  { label: 'Stay Hydrated', desc: 'Drink 3-4 liters of water daily to help your body adjust.' },
                  { label: 'Eat Well', desc: 'Maintain your energy levels with high-carb meals like Dal Bhat.' },
                  { label: 'Rest & Recover', desc: 'Get plenty of sleep and do not push yourself too hard.' },
                ].map((tip) => (
                  <div key={tip.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-brand-300 font-bold mb-2">{tip.label}</h4>
                    <p className="text-stone-400 text-sm">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Disclaimer:</strong> This information is for educational
                purposes only. Consult your doctor before your trip for personalized
                medical advice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      </div>
      <FAQSection category="Safety" className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
