import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Utensils, Droplets, Info, ArrowRight, CheckCircle2, AlertTriangle, Coffee, Soup } from 'lucide-react';

const FOOD_ITEMS = [
  { title: 'Dal Bhat', icon: Soup, desc: 'The staple meal of Nepal. Lentil soup, rice, and vegetable curry. Refills are free!' },
  { title: 'MoMo', icon: Utensils, desc: 'Delicious dumplings filled with vegetables or meat, served with spicy dipping sauce.' },
  { title: 'Sherpa Stew', icon: Soup, desc: 'A hearty and warming stew with vegetables, meat, and dough balls.' },
  { title: 'Hot Drinks', icon: Coffee, desc: 'Ginger lemon honey tea, masala tea, and hot chocolate are trail favorites.' },
];

export default function FoodWater() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Food & Water" 
        subtitle="Fueling Your Himalayan Adventure"
        image="/food.png"
      />

      <Section title="Trekking Nutrition" subtitle="Planning Your Meals">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              Eating well is crucial for maintaining energy levels at high altitude. 
              Teahouses along the Gokyo Lakes trail offer a surprisingly varied menu, 
              from traditional Nepali dishes to Western favorites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FOOD_ITEMS.map((item) => (
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
              <div className="flex items-center gap-4">
                <Droplets className="w-10 h-10 text-brand-600" />
                <h3 className="text-2xl font-bold text-brand-900">Safe Drinking Water</h3>
              </div>
              <p className="text-brand-800 text-lg leading-relaxed">
                Staying hydrated is key to preventing AMS. Drink 3-4 liters of water daily. 
                Avoid single-use plastic bottles. Use water purification tablets or 
                UV filters like SteriPen.
              </p>
            </div>
          </div>
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
              <h3 className="text-2xl font-bold">Dietary Tips</h3>
              <div className="space-y-6">
                {[
                  { label: 'Go Vegetarian', desc: 'Meat is carried up by porters and may not be fresh. Stick to veg for safety.' },
                  { label: 'Dal Bhat Power', desc: 'High in carbs and protein, it is the best fuel for long trekking days.' },
                  { label: 'Avoid Alcohol', desc: 'Alcohol dehydrates and can mask symptoms of altitude sickness.' },
                  { label: 'Snack Smart', desc: 'Bring your own energy bars, nuts, and chocolate for trail snacks.' },
                ].map((tip) => (
                  <div key={tip.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-brand-300 font-bold mb-2">{tip.label}</h4>
                    <p className="text-stone-400 text-sm">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Hygiene:</strong> Always wash your hands or use sanitizer before meals 
                to avoid common stomach issues on the trail.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CustomTripBanner />
    </main>
  );
}
