import Hero from '../components/Hero';
import Section from '../components/Section';
import { FileText, DollarSign, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Permits() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Permits & Costs" 
        subtitle="The Logistics"
        image="https://picsum.photos/seed/permits/1920/1080"
      />

      <Section title="Required Permits" subtitle="Documentation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                    <FileText className="w-8 h-8 text-brand-600" />
                    <span className="px-4 py-1 bg-stone-100 text-brand-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {permit.cost}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">{permit.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{permit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/permit-doc/800/1000" 
              alt="Permit Documentation" 
              className="rounded-[40px] w-full aspect-[4/5] object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
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
    </main>
  );
}
