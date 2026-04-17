import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Phone, PhoneCall, AlertTriangle, ShieldAlert, Building, Navigation, ArrowRight, AlertCircle, Copy, Check, Info, CheckCircle2, Shield, MapPin, Heart } from 'lucide-react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const CONTACTS = [
  { category: 'Rescue Services', items: ['Himalayan Rescue Association (HRA): +977-1-4440292', 'Nepal Police (Emergency): 100', 'Tourist Police (Kathmandu): +977-1-4247041'] },
  { category: 'Hospitals & Medical', items: ['CIWEC Hospital (Kathmandu): +977-1-4424111', 'ERA Health Center (Kathmandu): +977-1-4446001', 'HRA Medical Post (Machhermo): Seasonal'] },
  { category: 'Local Authorities', items: ['Sagarmatha National Park Office (Namche): +977-38-540114', 'Khumbu Pasang Lhamu Rural Municipality: +977-38-540114'] },
];

export default function EmergencyContacts() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Emergency Contacts"
        subtitle="Crucial Information for Your Safety"
        image="/emcall.png"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Safety in the Himalayas begins with preparation. Carrying a definitive list of emergency contacts is a non-negotiable requirement for every trekker.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}From the Himalayan Rescue Association to specialized mountain hospitals, having immediate access to these lifelines ensures that help is always within reach, even in the most remote corners of the Khumbu.
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
            href="#contacts"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Emergency Numbers
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Rescue Protocol
          </button>
        </div>
      </Hero>

      <div id="contacts" className="scroll-mt-20">

      <Section title="Stay Connected" subtitle="Safety & Health">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              While the Gokyo Lakes trail is generally safe, it's important to have
              access to emergency contact information in case of accidents,
              altitude sickness, or other unforeseen events. Keep a physical copy
              of these numbers with you at all times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CONTACTS.map((group) => (
                <div key={group.category} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                  <div className="p-3 bg-stone-50 rounded-xl w-fit">
                    <Phone className="w-6 h-6 text-brand-600" />
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
            <div className="p-10 bg-red-50 rounded-[40px] border border-red-100 space-y-8">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Rescue Protocol</h3>
              </div>
              <p className="text-red-800 text-lg leading-relaxed">
                In case of a medical emergency requiring helicopter evacuation,
                contact your insurance provider's 24/7 emergency hotline
                immediately. They will coordinate with local rescue services.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Communication Tips</h3>
              <div className="space-y-6">
                {[
                  { label: 'Local SIM Card', desc: 'Ncell or Nepal Telecom (NTC) offer decent coverage in many areas.' },
                  { label: 'Satellite Phone', desc: 'Many teahouses have satellite phones for emergency use.' },
                  { label: 'Inform Your Guide', desc: 'Your guide is your primary point of contact for any emergency.' },
                  { label: 'Share Your Itinerary', desc: 'Leave a copy of your itinerary with family or friends back home.' },
                ].map((tip) => (
                  <div key={tip.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-brand-300 font-bold mb-2">{tip.label}</h4>
                    <p className="text-stone-400 text-sm">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
              <Info className="w-6 h-6 text-stone-400 shrink-0" />
              <p className="text-stone-500 text-sm leading-relaxed">
                Most teahouses have basic Wi-Fi, but it can be unreliable. Do not
                depend on it for emergency communication.
              </p>
            </div>
          </div>
        </div>
      </Section>

      </div>
      <CustomTripBanner />
    </main>
  );
}
