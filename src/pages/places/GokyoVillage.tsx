import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { MapPin, Camera, Home, Mountain, Info, ArrowRight, CheckCircle2, Coffee, Utensils, Waves } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'Gokyo Lakes', icon: Waves, desc: 'A series of six stunning high-altitude lakes with turquoise waters.' },
  { title: 'Ngozumpa Glacier', icon: Mountain, desc: 'The largest glacier in the Himalayas, visible from the village.' },
  { title: 'Gokyo Ri', icon: Mountain, desc: 'The ultimate viewpoint for Everest, Lhotse, Makalu, and Cho Oyu.' },
  { title: 'Lakeside Lodges', icon: Home, desc: 'Cozy teahouses offering stunning views of the third lake.' },
];

export default function GokyoVillage() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Gokyo Village" 
        subtitle="A Serene Settlement at 4,750m"
        image="https://picsum.photos/seed/gokyo-village-trek/1920/1080"
      />

      <Section title="Discover Gokyo" subtitle="Places & Stops">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Gokyo Village is one of the highest settlements in the world, located on the 
              shores of the third Gokyo Lake (Dudh Pokhari). It's a peaceful alternative to 
              the busier Everest Base Camp route, offering some of the best mountain 
              panoramas in Nepal.
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
            <div className="p-10 bg-blue-50 rounded-[40px] border border-blue-100 space-y-8">
              <div className="flex items-center gap-4">
                <Waves className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">The Six Lakes</h3>
              </div>
              <p className="text-blue-800 text-lg leading-relaxed">
                While the village is at the third lake, you can hike further up the valley 
                to see the fourth, fifth, and even sixth lakes, which offer even closer 
                views of Cho Oyu and Everest.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Quick Info</h3>
              <div className="space-y-6">
                {[
                  { label: 'Altitude', value: '4,750m' },
                  { label: 'Accommodation', value: 'Teahouses (Limited in winter)' },
                  { label: 'Amenities', value: 'Solar Wi-Fi, Basic Shops' },
                  { label: 'Best Viewpoint', value: 'Gokyo Ri (5,357m)' },
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
                 src="https://picsum.photos/seed/gokyo-view/800/600" 
                 alt="Gokyo View"
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
