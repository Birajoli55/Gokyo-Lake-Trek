import { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Calculator, Users, Calendar, Star, DollarSign, Info, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PERMIT_COST = 50; // Total for both permits approx
const FLIGHT_COST = 360; // Round trip KTM-LUK-KTM approx

const LUXURY_LEVELS = [
  { id: 'budget', name: 'Budget', daily: 30, desc: 'Basic teahouses, local food, no porter.' },
  { id: 'standard', name: 'Standard', daily: 50, desc: 'Better teahouses, varied menu, shared porter.' },
  { id: 'premium', name: 'Premium', daily: 90, desc: 'Best available lodges, private room, private porter.' },
];

export default function BudgetCalculator() {
  const [days, setDays] = useState(12);
  const [people, setPeople] = useState(1);
  const [luxury, setLuxury] = useState('standard');
  const [includeFlights, setIncludeFlights] = useState(true);
  const [includePermits, setIncludePermits] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const lux = LUXURY_LEVELS.find(l => l.id === luxury);
    const dailyRate = lux ? lux.daily : 50;
    
    let subtotal = (dailyRate * days * people);
    if (includeFlights) subtotal += (FLIGHT_COST * people);
    if (includePermits) subtotal += (PERMIT_COST * people);
    
    setTotal(subtotal);
  }, [days, people, luxury, includeFlights, includePermits]);

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Budget Calculator" 
        subtitle="Estimate Your Gokyo Lakes Trek Expenses"
        image="/phortse.jpg"
      />

      <Section title="Plan Your Expenses" subtitle="Interactive Tool">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-2 space-y-8 bg-white p-8 md:p-12 rounded-[48px] border border-stone-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Duration */}
              <div className="space-y-6">
                <label className="flex items-center gap-3 text-stone-900 font-bold text-lg">
                  <Calendar className="w-6 h-6 text-brand-600" /> Trek Duration
                </label>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="7" 
                    max="20" 
                    value={days} 
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between text-stone-500 font-medium">
                    <span>7 Days</span>
                    <span className="text-brand-600 font-bold text-xl">{days} Days</span>
                    <span>20 Days</span>
                  </div>
                </div>
              </div>

              {/* Group Size */}
              <div className="space-y-6">
                <label className="flex items-center gap-3 text-stone-900 font-bold text-lg">
                  <Users className="w-6 h-6 text-brand-600" /> Group Size
                </label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setPeople(num)}
                      className={`flex-1 py-4 rounded-2xl font-bold transition-all duration-300 ${
                        people === num 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 scale-105' 
                        : 'bg-stone-50 text-stone-400 hover:bg-stone-100'
                      }`}
                    >
                      {num}{num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Luxury Level */}
            <div className="space-y-6 pt-8 border-t border-stone-50">
              <label className="flex items-center gap-3 text-stone-900 font-bold text-lg">
                <Star className="w-6 h-6 text-brand-600" /> Comfort Level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {LUXURY_LEVELS.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setLuxury(level.id)}
                    className={`p-6 rounded-3xl text-left border-2 transition-all duration-500 ${
                      luxury === level.id 
                      ? 'border-brand-600 bg-brand-50/50' 
                      : 'border-stone-100 bg-white hover:border-stone-200'
                    }`}
                  >
                    <h4 className={`font-bold mb-2 ${luxury === level.id ? 'text-brand-600' : 'text-stone-900'}`}>
                      {level.name}
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{level.desc}</p>
                    <div className="mt-4 text-brand-600 font-bold">
                      ${level.daily}<span className="text-[10px] text-stone-400 font-normal">/day</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-stone-50">
              <button 
                onClick={() => setIncludeFlights(!includeFlights)}
                className={`p-6 rounded-2xl border flex items-center justify-between transition-all ${
                  includeFlights ? 'border-brand-200 bg-brand-50/30' : 'border-stone-100 bg-stone-50/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${includeFlights ? 'bg-brand-600 text-white' : 'bg-stone-200 text-stone-400'}`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-stone-700">Lukla Flights</span>
                </div>
                <span className="text-stone-400 font-mono text-sm">${FLIGHT_COST}</span>
              </button>
              <button 
                onClick={() => setIncludePermits(!includePermits)}
                className={`p-6 rounded-2xl border flex items-center justify-between transition-all ${
                  includePermits ? 'border-brand-200 bg-brand-50/30' : 'border-stone-100 bg-stone-50/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${includePermits ? 'bg-brand-600 text-white' : 'bg-stone-200 text-stone-400'}`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-stone-700">Permits & Fees</span>
                </div>
                <span className="text-stone-400 font-mono text-sm">${PERMIT_COST}</span>
              </button>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-brand-900 rounded-[48px] text-white space-y-10 shadow-2xl shadow-brand-900/20">
              <div className="space-y-2">
                <h3 className="text-brand-300 font-bold uppercase tracking-widest text-sm">Estimated Total</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black">${total.toLocaleString()}</span>
                  <span className="text-brand-400 font-medium">USD</span>
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-brand-300 text-sm">Per Person</span>
                  <span className="font-bold text-xl">${(total / people).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-300 text-sm">Daily Average</span>
                  <span className="font-bold text-xl">${Math.round(total / (people * days))}</span>
                </div>
              </div>

              <button className="w-full py-6 bg-brand-600 hover:bg-brand-500 text-white rounded-3xl font-black text-lg transition-all flex items-center justify-center gap-3 group">
                Book Your Trek <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
              <div className="space-y-2">
                <h5 className="font-bold text-amber-900 text-sm">Important Note</h5>
                <p className="text-amber-800 text-xs leading-relaxed">
                  This is an estimate. Prices can vary based on season, specific lodge choices, 
                  and personal spending habits. We recommend carrying 20% extra as a buffer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Cost Breakdown" subtitle="What's Included?" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: 'Accommodation', 
              desc: 'Teahouse stays range from $5 for a basic room to $50+ for luxury lodges with en-suite bathrooms.',
              icon: DollarSign 
            },
            { 
              title: 'Meals & Drinks', 
              desc: 'Expect to spend $25-$40 per day on food. Prices increase significantly as you go higher.',
              icon: DollarSign 
            },
            { 
              title: 'Logistics', 
              desc: 'Includes permits, Lukla flights, and transportation to/from the airport or Ramechhap.',
              icon: DollarSign 
            },
          ].map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">{item.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <FAQSection category="Preparation" className="py-24 bg-stone-50" />

      <CustomTripBanner />
    </main>
  );
}
