import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Mountain, Info, ArrowRight, CheckCircle2, Camera, Sun, Wind } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'Four 8,000m Peaks', icon: Mountain, desc: 'Unrivaled views of Everest, Lhotse, Makalu, and Cho Oyu.' },
  { title: 'Ngozumpa Glacier', icon: Mountain, desc: 'The largest glacier in the Himalayas, stretching out below you.' },
  { title: 'Turquoise Lakes', icon: Camera, desc: 'A bird\'s-eye view of the stunning Gokyo Lakes.' },
  { title: 'Sunrise Panorama', icon: Sun, desc: 'The best place to witness the first light hitting the highest peaks.' },
];

export default function GokyoRi() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Gokyo Ri" 
        subtitle="The Ultimate Viewpoint of the Everest Region"
        image="https://picsum.photos/seed/gokyo-ri-view/1920/1080"
      />

      <Section title="Conquer Gokyo Ri" subtitle="Places & Stops">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Gokyo Ri (5,357m) is a peak located on the west side of the Ngozumpa 
              Glacier, overlooking Gokyo village. It is widely considered to offer 
              one of the best panoramic views in the entire Everest region, even 
              surpassing the famous Kala Patthar.
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
            <div className="p-10 bg-brand-50 rounded-[40px] border border-brand-100 space-y-8">
              <h3 className="text-2xl font-bold text-brand-900">The Climb</h3>
              <p className="text-brand-800 text-lg leading-relaxed">
                The ascent from Gokyo village takes about 2-3 hours. It's a steep 
                climb but technically straightforward. The reward at the top is a 
                360-degree view of some of the highest mountains on Earth.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Quick Info</h3>
              <div className="space-y-6">
                {[
                  { label: 'Altitude', value: '5,357m' },
                  { label: 'Time from Village', value: '2-3 Hours Up, 1 Hour Down' },
                  { label: 'Difficulty', value: 'Strenuous (Steep Ascent)' },
                  { label: 'Best Time', value: 'Early Morning for Sunrise' },
                ].map((info) => (
                  <div key={info.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-brand-300 text-sm">{info.label}</span>
                    <span className="font-bold">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
              <Wind className="w-6 h-6 text-stone-400 shrink-0" />
              <p className="text-stone-500 text-sm leading-relaxed">
                It can be extremely windy and cold at the summit. Bring extra layers 
                even if it feels warm in the village.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
