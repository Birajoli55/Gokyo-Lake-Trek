import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import PlacesSection from '../../components/PlacesSection';
import TrailMap from '../../components/TrailMap';

export default function PlacesHub() {
  return (
    <main className="bg-stone-50">
      <Hero
        title="Places & Stops"
        subtitle="Explore the Heart of the Himalayas"
        image="/p&s.webp"
      />

      <PlacesSection />

      <Section title="Interactive Trail Map" subtitle="Your Journey Details" className="bg-white">
        <TrailMap />
      </Section>

      <Section title="Logistics & Stats" subtitle="Plan Your Route" className="bg-stone-50 py-24 rounded-t-[48px]">
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
                <div key={stat.label} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <span className="text-stone-500 font-medium">{stat.label}</span>
                  <span className="text-brand-800 font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square bg-stone-100 rounded-[48px] overflow-hidden border border-stone-200">
            <img
              src="trilmap.webp"
              alt="Trail Map View"
              className="w-full h-full object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white text-xl font-bold tracking-tight"></p>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
