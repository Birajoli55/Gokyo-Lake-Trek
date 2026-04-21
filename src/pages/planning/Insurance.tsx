import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Shield, ShieldAlert, ArrowRight, CheckCircle2, Plane, Activity, AlertTriangle, FileText, Heart } from 'lucide-react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

export default function Insurance() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Travel Insurance"
        subtitle="Essential Coverage for High-Altitude Trekking"
        image="/Insurance.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Comprehensive travel insurance is not just a recommendation—it is a critical safety requirement for anyone trekking to the Gokyo Lakes at altitudes exceeding 5,000m.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Your policy must explicitly cover emergency helicopter evacuation at high altitudes, ensuring that in the event of AMS or injury, you have access to life-saving medical transport without devastating financial burden.
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
            href="#requirements"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Coverage Requirements
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Compare Providers
          </button>
        </div>
      </Hero>

      <div id="requirements" className="scroll-mt-20">

        <Section title="Why You Need Insurance" subtitle="Safety & Planning">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-stone-600 text-lg leading-relaxed">
                Trekking in the Everest region involves inherent risks, from altitude sickness
                to unpredictable weather. A comprehensive travel insurance policy is not just
                recommended—it's a requirement for your safety and peace of mind.
              </p>
              <div className="p-10 bg-red-50 rounded-[40px] border border-red-100 space-y-8">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                  <h3 className="text-2xl font-bold text-red-900">Critical Requirement</h3>
                </div>
                <p className="text-red-800 text-lg leading-relaxed">
                  Your policy <strong>MUST</strong> explicitly cover helicopter evacuation up to
                  <strong> 6,000 meters</strong>. Many standard policies only cover up to
                  2,500m or 3,000m.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Medical Coverage', items: ['Hospitalization', 'Emergency Treatment', 'Repatriation'], icon: Heart },
                  { title: 'Travel Coverage', items: ['Flight Cancellations', 'Trip Interruption', 'Lost Luggage'], icon: Plane },
                ].map((group) => (
                  <div key={group.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                    <div className="p-3 bg-stone-50 rounded-xl w-fit">
                      <group.icon className="w-6 h-6 text-brand-800" />
                    </div>
                    <h4 className="text-xl font-bold text-stone-900">{group.title}</h4>
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
                <h3 className="text-2xl font-bold">What to Check</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Altitude Limit', desc: 'Ensure it covers trekking up to 6,000m (Gokyo Ri is 5,357m).' },
                    { label: 'Helicopter Rescue', desc: 'Must include emergency heli-evacuation from remote areas.' },
                    { label: 'Direct Payment', desc: 'Check if the insurer pays the hospital/rescue directly or if you must pay upfront.' },
                    { label: 'Pre-existing Conditions', desc: 'Disclose any health issues to ensure your coverage is valid.' },
                  ].map((tip) => (
                    <div key={tip.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="text-brand-300 font-bold mb-2">{tip.label}</h4>
                      <p className="text-stone-400 text-sm">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
                <Shield className="w-6 h-6 text-stone-400 shrink-0" />
                <p className="text-stone-500 text-sm leading-relaxed">
                  Keep a digital and physical copy of your insurance policy and the 24/7
                  emergency contact number with you at all times.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <FAQSection category="Preparation" className="py-24 bg-stone-50" />

          </div>
      <CustomTripBanner />
    </main>
  );
}
