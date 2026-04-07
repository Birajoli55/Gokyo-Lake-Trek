import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { Shield, Activity, Heart, Info, ArrowRight, AlertTriangle, Thermometer, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SAFETY_TOPICS = [
  {
    title: 'Altitude Sickness (AMS)',
    description: 'Learn about Acute Mountain Sickness, symptoms, prevention, and treatment protocols.',
    icon: Activity,
    link: '/safety/altitude-sickness',
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Travel Insurance',
    description: 'Essential requirements for trekking insurance, including helicopter evacuation coverage.',
    icon: Shield,
    link: '/safety/travel-insurance',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'First Aid & Health',
    description: 'Recommended medical kit, common ailments, and health precautions for the trail.',
    icon: Heart,
    link: '/safety/first-aid',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Emergency Contacts',
    description: 'Crucial contact numbers for rescue services, hospitals, and local authorities.',
    icon: Info,
    link: '/safety/emergency-contacts',
    color: 'bg-stone-50 text-stone-600'
  }
];

export default function SafetyHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Safety & Health" 
        subtitle="Your Well-being is Our Priority"
        image="https://picsum.photos/seed/safety-trek/1920/1080"
      />

      <Section title="Stay Safe on the Trail" subtitle="Essential Safety Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAFETY_TOPICS.map((topic) => (
            <Link 
              key={topic.title}
              to={topic.link}
              className="group p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start gap-6"
            >
              <div className={`p-4 rounded-2xl ${topic.color}`}>
                <topic.icon className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Quick Safety Tips" subtitle="Best Practices" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <AlertTriangle className="w-10 h-10 text-amber-500" />
            <h4 className="text-xl font-bold">Acclimatization</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Never skip acclimatization days. Ascend slowly and listen to your body. 
              "Climb high, sleep low" is the golden rule.
            </p>
          </div>
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <Thermometer className="w-10 h-10 text-blue-500" />
            <h4 className="text-xl font-bold">Hydration</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Drink at least 3-4 liters of water daily. Dehydration mimics and 
              exacerbates altitude sickness symptoms.
            </p>
          </div>
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <MapPin className="w-10 h-10 text-brand-500" />
            <h4 className="text-xl font-bold">Guide & Porter</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Hiring a local guide significantly increases your safety. They know 
              the terrain, weather patterns, and symptoms of AMS.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
