import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Mountain, Info, ArrowRight, CheckCircle2, Home, Camera, Heart, Activity } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'Yeti Sighting History', icon: Info, desc: 'Famous for a reported Yeti sighting in 1974.' },
  { title: 'Himalayan Rescue Association', icon: Heart, desc: 'Home to a medical post specializing in altitude sickness.' },
  { title: 'Acclimatization Stop', icon: Activity, desc: 'A key stop for trekkers on the way to Gokyo to adjust to the altitude.' },
  { title: 'Stunning Valley Views', icon: Camera, desc: 'Beautiful vistas of the Gokyo valley and surrounding peaks.' },
];

export default function Machhermo() {
  return (
    <main className="bg-stone-50">
      <Hero
        title="Machhermo"
        subtitle="A Key Acclimatization Stop at 4,470m"
        image="/Machhermoh.jpg"
      />

      <Section title="Discover Machhermo" subtitle="Places & Stops">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Machhermo (4,470m) is a small settlement in the Gokyo valley, located
              between Dole and Gokyo village. It is a crucial stop for trekkers to
              acclimatize before reaching the higher altitudes of the Gokyo Lakes.
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
            <div className="p-10 bg-red-50 rounded-[40px] border border-red-100 space-y-8">
              <div className="flex items-center gap-4">
                <Heart className="w-10 h-10 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Medical Post</h3>
              </div>
              <p className="text-red-800 text-lg leading-relaxed">
                The Himalayan Rescue Association (HRA) operates a medical post in
                Machhermo during the peak trekking seasons. They offer daily talks on
                altitude sickness and can provide emergency medical assistance.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Quick Info</h3>
              <div className="space-y-6">
                {[
                  { label: 'Altitude', value: '4,470m' },
                  { label: 'Accommodation', value: 'Several Teahouses' },
                  { label: 'Amenities', value: 'Medical Post, Basic Shops' },
                  { label: 'Key Feature', value: 'Yeti Legend & HRA Post' },
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
                src="/Machhermoi.jpg"
                alt="Machhermo View"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      <FAQSection className="py-24 bg-stone-100" />

      <CustomTripBanner />
    </main>
  );
}
