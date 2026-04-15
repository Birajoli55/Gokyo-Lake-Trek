import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Plane, AlertTriangle, Clock, Info, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import FAQSection from '../../components/FAQSection';

export default function Flights() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Flights to Lukla" 
        subtitle="The Most Scenic (and Nervous) Flight of Your Life"
        image="/luklaairport.jpg"
      />

      <Section title="Lukla Flight Logistics" subtitle="Planning Your Journey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Flying to Lukla (Tenzing-Hillary Airport) is the most common way to start the 
              Gokyo Lakes trek. The 40-minute flight from Kathmandu (or Ramechhap) offers 
              breathtaking views of the Himalayas but is highly weather-dependent.
            </p>
            <div className="p-10 bg-amber-50 rounded-[40px] border border-amber-100 space-y-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-amber-600" />
                <h3 className="text-2xl font-bold text-amber-900">Ramechhap Diversion</h3>
              </div>
              <p className="text-amber-800 text-lg leading-relaxed">
                During peak seasons (Spring and Autumn), most flights to Lukla operate from 
                <strong> Manthali Airport in Ramechhap</strong> instead of Kathmandu to reduce 
                air traffic congestion. This requires a 4-5 hour drive from Kathmandu.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Airlines', items: ['Tara Air', 'Sita Air', 'Summit Air'], icon: Plane },
                { title: 'Weight Limit', items: ['10kg Checked', '5kg Carry-on', 'Extra: ~$1/kg'], icon: Info },
              ].map((group) => (
                <div key={group.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-6">
                  <div className="p-3 bg-stone-50 rounded-xl w-fit">
                    <group.icon className="w-6 h-6 text-brand-600" />
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
              <h3 className="text-2xl font-bold">Essential Tips</h3>
              <div className="space-y-6">
                {[
                  { label: 'Book Early', desc: 'Flights sell out months in advance during peak season.' },
                  { label: 'Buffer Days', desc: 'Always have 2-3 extra days at the end of your trek for delays.' },
                  { label: 'Morning Flights', desc: 'The weather is generally clearer in the early morning.' },
                  { label: 'Left Side Seating', desc: 'Sit on the left side when flying to Lukla for the best mountain views.' },
                ].map((tip) => (
                  <div key={tip.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-brand-300 font-bold mb-2">{tip.label}</h4>
                    <p className="text-stone-400 text-sm">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
              <Clock className="w-6 h-6 text-stone-400 shrink-0" />
              <p className="text-stone-500 text-sm leading-relaxed">
                Flight duration: ~40 mins from Kathmandu, ~20 mins from Ramechhap.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection category="Booking" className="py-24 bg-stone-100" />

      <CustomTripBanner />
    </main>
  );
}
