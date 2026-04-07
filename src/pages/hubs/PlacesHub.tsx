import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { MapPin, Camera, Home, Mountain, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLACES = [
  {
    name: 'Lukla',
    altitude: '2,860m',
    description: 'The gateway to the Everest region, home to Tenzing-Hillary Airport.',
    image: 'https://picsum.photos/seed/lukla/800/600',
    link: '/places/lukla'
  },
  {
    name: 'Namche Bazaar',
    altitude: '3,440m',
    description: 'The Sherpa capital, a vibrant hub with markets, cafes, and museums.',
    image: 'https://picsum.photos/seed/namche/800/600',
    link: '/places/namche-bazaar'
  },
  {
    name: 'Phortse',
    altitude: '3,810m',
    description: 'A traditional Sherpa village known for its climbing culture and views.',
    image: 'https://picsum.photos/seed/phortse/800/600',
    link: '/places/phortse'
  },
  {
    name: 'Machhermo',
    altitude: '4,470m',
    description: 'A key acclimatization stop on the way to Gokyo, offering stunning views.',
    image: 'https://picsum.photos/seed/machhermo/800/600',
    link: '/places/machhermo'
  },
  {
    name: 'Gokyo Village',
    altitude: '4,750m',
    description: 'A serene lakeside settlement at the foot of Gokyo Ri.',
    image: 'https://picsum.photos/seed/gokyo-village/800/600',
    link: '/places/gokyo-village'
  },
  {
    name: 'Gokyo Ri',
    altitude: '5,357m',
    description: 'The ultimate viewpoint for Everest, Lhotse, Makalu, and Cho Oyu.',
    image: 'https://picsum.photos/seed/gokyo-ri/800/600',
    link: '/places/gokyo-ri'
  }
];

export default function PlacesHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Places & Stops" 
        subtitle="Explore the Heart of the Himalayas"
        image="https://picsum.photos/seed/himalaya-places/1920/1080"
      />

      <Section title="Villages & Viewpoints" subtitle="Key Destinations Along the Trail">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACES.map((place) => (
            <Link 
              key={place.name}
              to={place.link}
              className="group bg-white rounded-[40px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-stone-900 font-bold text-sm shadow-lg">
                  {place.altitude}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">
                  {place.name}
                </h3>
                <p className="text-stone-500 leading-relaxed line-clamp-2">
                  {place.description}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-stone-50">
                  <span className="text-brand-600 font-bold flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex gap-2">
                    <Camera className="w-4 h-4 text-stone-300" />
                    <Home className="w-4 h-4 text-stone-300" />
                    <Mountain className="w-4 h-4 text-stone-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Trail Map & Logistics" subtitle="Plan Your Route" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900 leading-tight">
              Understanding the Gokyo Lakes Trail Layout
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              The Gokyo Lakes trek is a stunning alternative to the traditional Everest Base Camp 
              route. It takes you through the Dudh Koshi valley, branching off towards the 
              Gokyo valley after Namche Bazaar.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Total Distance', value: 'Approx. 92km (Round Trip)' },
                { label: 'Highest Point', value: 'Gokyo Ri (5,357m)' },
                { label: 'Average Daily Walk', value: '5-7 Hours' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between p-6 bg-stone-50 rounded-2xl">
                  <span className="text-stone-500 font-medium">{stat.label}</span>
                  <span className="text-brand-600 font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-stone-100 rounded-[48px] overflow-hidden border border-stone-200">
             <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-mono text-sm">
                [ Interactive Trail Map Placeholder ]
             </div>
             <img 
               src="https://picsum.photos/seed/map-placeholder/1000/1000" 
               alt="Trail Map"
               className="w-full h-full object-cover opacity-50"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </Section>
    </main>
  );
}
