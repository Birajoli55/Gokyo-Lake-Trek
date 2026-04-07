import Hero from '../components/Hero';
import Section from '../components/Section';
import { Mountain, Map, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Overview() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Trek Overview" 
        subtitle="The Heart of Khumbu"
        image="https://picsum.photos/seed/overview/1920/1080"
      />

      <Section title="The Gokyo Experience" subtitle="Overview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              The Gokyo Lake Trek is a spectacular alternative to the traditional Everest Base Camp route. 
              It takes you through the heart of the Khumbu region, offering breathtaking views of four of the world's 
              six highest peaks: Everest, Lhotse, Makalu, and Cho Oyu.
            </p>
            <p className="text-stone-500 leading-relaxed">
              The highlight of the trek is the series of six turquoise glacial lakes, the highest freshwater lake system in the world. 
              The ascent of Gokyo Ri (5,357m) provides what many consider the best panoramic view in the entire Everest region.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {[
                { icon: Mountain, label: 'Max Altitude', value: '5,357m' },
                { icon: Map, label: 'Total Distance', value: '92km' },
                { icon: Info, label: 'Difficulty', value: 'Moderate-Challenging' },
                { icon: AlertCircle, label: 'Best Time', value: 'Mar-May, Sep-Nov' },
              ].map((item) => (
                <div key={item.label} className="glass p-6 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-stone-100 rounded-xl">
                    <item.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-stone-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/peaks/800/1000" 
              alt="Himalayan Peaks" 
              className="rounded-[40px] w-full aspect-[4/5] object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      <Section title="Why Choose Gokyo?" subtitle="Highlights" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'The Gokyo Lakes', desc: 'Six stunning turquoise lakes nestled in the shadow of Cho Oyu.' },
            { title: 'Gokyo Ri Summit', desc: 'A relatively easy non-technical climb with 360-degree views.' },
            { title: 'Ngozumpa Glacier', desc: 'The largest glacier in the Nepal Himalayas.' },
            { title: 'Sherpa Culture', desc: 'Experience the unique traditions and hospitality of the Sherpa people.' },
            { title: 'Less Crowded', desc: 'Enjoy the serenity of the mountains away from the main EBC trail.' },
            { title: 'Everest View', desc: 'Stunning views of Mt. Everest from a unique perspective.' },
          ].map((item) => (
            <div key={item.title} className="glass-dark p-10 rounded-[32px] space-y-4 hover:bg-white/5 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-brand-300" />
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Essential Information" subtitle="Preparation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Physical Fitness</h3>
              <p className="text-stone-600 leading-relaxed">
                You don't need to be an Olympic athlete, but you should be in good cardiovascular shape. 
                Training with long walks, stair climbing, and light weightlifting 2-3 months before the trek is highly recommended.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Altitude Sickness</h3>
              <p className="text-stone-600 leading-relaxed">
                Acute Mountain Sickness (AMS) is a real concern. Our itineraries include mandatory acclimatization days in Namche Bazaar and Gokyo. 
                Drinking plenty of water and walking slowly are key to prevention.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Accommodation</h3>
              <p className="text-stone-600 leading-relaxed">
                During the trek, you will stay in local "teahouses." These are basic but comfortable mountain lodges. 
                Expect twin-sharing rooms, common bathrooms, and a warm communal dining area with a wood-burning stove.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Food & Water</h3>
              <p className="text-stone-600 leading-relaxed">
                Teahouses offer a variety of meals, from the traditional Dal Bhat (lentils and rice) to pasta, pancakes, and eggs. 
                Always drink purified or boiled water to avoid stomach issues.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
