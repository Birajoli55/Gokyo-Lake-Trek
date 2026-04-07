import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Mountain, Info, ArrowRight, CheckCircle2, Home, Camera } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'Climbing Culture', icon: Mountain, desc: 'Home to many of the world\'s most famous Everest summiters.' },
  { title: 'Traditional Village', icon: Home, desc: 'One of the most authentic and less-visited Sherpa villages.' },
  { title: 'Khumbu Climbing Center', icon: Info, desc: 'A training facility for local Sherpas to learn safe climbing techniques.' },
  { title: 'Stunning Views', icon: Camera, desc: 'Breathtaking panoramas of Ama Dablam, Thamserku, and Kangtega.' },
];

export default function Phortse() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Phortse" 
        subtitle="The Heart of Sherpa Climbing Culture"
        image="https://picsum.photos/seed/phortse-village/1920/1080"
      />

      <Section title="Discover Phortse" subtitle="Places & Stops">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Phortse (3,810m) is a traditional Sherpa village located on a plateau 
              overlooking the Dudh Koshi river. It is often visited by trekkers on the 
              Gokyo Lakes route who want to experience a more authentic side of the 
              Khumbu region, away from the main Everest Base Camp trail.
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
              <h3 className="text-2xl font-bold text-brand-900">Why Visit Phortse?</h3>
              <p className="text-brand-800 text-lg leading-relaxed">
                Phortse is known for its high concentration of Everest summiters. Almost 
                every household has at least one member who has reached the top of the 
                world. The village offers a unique glimpse into the lives of these 
                extraordinary people.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Quick Info</h3>
              <div className="space-y-6">
                {[
                  { label: 'Altitude', value: '3,810m' },
                  { label: 'Accommodation', value: 'Authentic Teahouses' },
                  { label: 'Amenities', value: 'Basic Shops, Wi-Fi' },
                  { label: 'Key Feature', value: 'Khumbu Climbing Center' },
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
                 src="https://picsum.photos/seed/phortse-view/800/600" 
                 alt="Phortse View"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
