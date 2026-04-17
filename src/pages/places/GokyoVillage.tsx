import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { MapPin, Camera, Home, Mountain, Info, ArrowRight, CheckCircle2, Coffee, Utensils, Waves } from 'lucide-react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const HIGHLIGHTS = [
  { title: 'Gokyo Lakes', icon: Waves, desc: 'A series of six stunning high-altitude lakes with turquoise waters.' },
  { title: 'Ngozumpa Glacier', icon: Mountain, desc: 'The largest glacier in the Himalayas, visible from the village.' },
  { title: 'Gokyo Ri', icon: Mountain, desc: 'The ultimate viewpoint for Everest, Lhotse, Makalu, and Cho Oyu.' },
  { title: 'Lakeside Lodges', icon: Home, desc: 'Cozy teahouses offering stunning views of the third lake.' },
];

export default function GokyoVillage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Gokyo Village"
        subtitle="A Serene Settlement at 4,750m"
        image="/GokyoVillageh.jpg"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Gokyo Village is one of the highest and most tranquil settlements in the world, nestled on the shores of the turquoise third Gokyo Lake (Dudh Pokhari).
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}This peaceful alpine sanctuary offers a stark, beautiful contrast to the busier Everest trails, providing trekkers with unparalleled access to the Ngozumpa Glacier and the sacred upper lakes.
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
            href="#discover"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Discover Lake Life
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Lodge Gallery
          </button>
        </div>
      </Hero>

      <div id="discover" className="scroll-mt-20">

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
                  src="/GokyoVillagei.jpg"
                  alt="Gokyo View"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </Section>

        <FAQSection className="py-24 bg-stone-100" />

          </div>
      <CustomTripBanner />
    </main>
  );
}
