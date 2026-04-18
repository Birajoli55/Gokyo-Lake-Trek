import Hero from '../components/Hero';
import Section from '../components/Section';
import CustomTripBanner from '../components/CustomTripBanner';
import { FileText, DollarSign, Info, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Permits() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Permits & Costs" 
        subtitle="The Logistics"
        image="/RequiredPermits.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Transparency is key to a stress-free adventure. We break down every required permit, entry fee, and estimated daily expense so you can budget with confidence.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Our team handles all the heavy lifting of permit applications and government coordination, ensuring you have the legal right to trek through the world's most stunning protected landscapes.
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
            href="#required-permits"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            See Permit Details
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Ask a Question
          </Link>
        </div>
      </Hero>

      <Section id="required-permits" title="Required Permits" subtitle="Documentation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Trekking in the Everest region requires specific permits to enter the Khumbu Pasang Lhamu Rural Municipality 
              and the Sagarmatha National Park. These permits are essential for environmental conservation and safety.
            </p>
            <div className="space-y-6">
              {[
                { 
                  title: 'Khumbu Pasang Lhamu Rural Municipality Permit', 
                  cost: 'NPR 2,000 (approx. $15)', 
                  desc: 'This permit is required for all foreigners entering the Khumbu region. It can be obtained in Lukla or Monjo.' 
                },
                { 
                  title: 'Sagarmatha National Park Entry Permit', 
                  cost: 'NPR 3,000 (approx. $22)', 
                  desc: 'This permit is required to enter the national park. It can be obtained in Kathmandu or at the park entrance in Monjo.' 
                },
                { 
                  title: 'TIMS Card (Trekkers\' Information Management System)', 
                  cost: 'NPR 2,000 (approx. $15)', 
                  desc: 'Required for all trekkers in Nepal. It helps in tracking and ensuring the safety of trekkers.' 
                }
              ].map((permit) => (
                <div key={permit.title} className="glass p-8 rounded-[32px] space-y-4">
                  <div className="flex items-center justify-between">
                    <FileText className="w-8 h-8 text-brand-800" />
                    <span className="px-4 py-1 bg-stone-100 text-brand-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {permit.cost}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">{permit.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{permit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-32">
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-xl border border-stone-100">
              <img 
                src="/RequiredPermits.webp" 
                alt="Gokyo Trek Route Map" 
                className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Estimated Trekking Costs" subtitle="Budgeting" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Flights (KTM-LUK-KTM)', value: '$360 - $400', sub: 'Round trip' },
            { label: 'Accommodation', value: '$10 - $20', sub: 'Per night' },
            { label: 'Food & Water', value: '$30 - $50', sub: 'Per day' },
            { label: 'Guide & Porter', value: '$25 - $40', sub: 'Per day' },
          ].map((item) => (
            <div key={item.label} className="glass-dark p-10 rounded-[32px] text-center space-y-4">
              <div className="p-4 bg-white/10 rounded-2xl w-fit mx-auto">
                <DollarSign className="w-6 h-6 text-brand-300" />
              </div>
              <h3 className="text-brand-300 text-xs font-bold uppercase tracking-widest">{item.label}</h3>
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-stone-400 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Important Notes" subtitle="Guidelines">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Cash is King</h3>
              <p className="text-stone-600 leading-relaxed">
                There are very few ATMs in the mountains, and they are often unreliable. 
                Always carry enough cash in Nepalese Rupees (NPR) to cover your daily expenses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Insurance</h3>
              <p className="text-stone-600 leading-relaxed">
                Travel insurance that covers high-altitude trekking and emergency helicopter evacuation is mandatory. 
                Make sure your policy covers you up to 6,000m.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Permit Validity</h3>
              <p className="text-stone-600 leading-relaxed">
                Permits are typically valid for a single entry and for a specific duration. 
                Always check the validity dates on your permits before starting your trek.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Environmental Responsibility</h3>
              <p className="text-stone-600 leading-relaxed">
                A portion of your permit fees goes towards the conservation of the national park. 
                Always follow the "Leave No Trace" principles and respect the local environment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection category="Permits" className="py-24 bg-stone-100" />

      <CustomTripBanner />
    </main>
  );
}
