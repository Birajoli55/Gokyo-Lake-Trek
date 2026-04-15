import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Plane, AlertTriangle, Clock, Info, ArrowRight, CheckCircle2, MapPin, Mountain } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'Tenzing-Hillary Airport', icon: Plane, desc: 'One of the most dangerous and scenic airports in the world.' },
  { title: 'Gateway to Everest', icon: Mountain, desc: 'The starting point for almost all treks in the Khumbu region.' },
  { title: 'Local Markets', icon: Info, desc: 'Last chance to pick up forgotten gear or snacks before the trail.' },
  { title: 'Sherpa Culture', icon: Info, desc: 'Your first introduction to the hospitality of the Sherpa people.' },
];

export default function Lukla() {
  return (
    <main className="bg-stone-50">
      <Hero
        title="Lukla"
        subtitle="The Gateway to the Everest Region"
        image="/luklaairport.jpg"
      />

      <Section title="Welcome to Lukla" subtitle="Places & Stops">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Lukla (2,860m) is a small town in the Khumbu region of eastern Nepal. It is the
              place where most trekkers and climbers begin their journey into the Everest
              region. The town is famous for its airport, which features a short, uphill
              runway carved into the side of a mountain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-4">
                  <div className="p-3 bg-stone-50 rounded-xl w-fit">
                    <item.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-10 bg-amber-50 rounded-[40px] border border-amber-100 space-y-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-amber-600" />
                <h3 className="text-2xl font-bold text-amber-900">Flight Delays</h3>
              </div>
              <p className="text-amber-800 text-lg leading-relaxed">
                Lukla is notorious for flight cancellations due to unpredictable weather.
                Always have a few buffer days at the end of your trek to account for
                potential delays in flying back to Kathmandu.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Quick Info</h3>
              <div className="space-y-6">
                {[
                  { label: 'Altitude', value: '2,860m' },
                  { label: 'Accommodation', value: 'Numerous Lodges & Hotels' },
                  { label: 'Amenities', value: 'Shops, Cafes, ATMs, Hospital' },
                  { label: 'Key Feature', value: 'Tenzing-Hillary Airport' },
                ].map((info) => (
                  <div key={info.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-brand-300 text-sm">{info.label}</span>
                    <span className="font-bold">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video bg-stone-100 rounded-[32px] overflow-hidden border border-stone-200">
              <img
                src="/luklaarp.jpg"
                alt="Lukla Airport"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      <FAQSection className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
