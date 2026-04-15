import { motion, useScroll, useTransform } from 'motion/react';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { Zap, Mountain, Shield, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ItinerariesSection from '../../components/ItinerariesSection';
import FAQSection from '../../components/FAQSection';
import { CustomItemVariants } from '../../types';

const WHY_MATTERS = [
  { icon: Mountain, title: 'Built-in rest days', desc: 'Acclimatization stops in Namche and Gokyo prevent altitude sickness.' },
  { icon: Shield, title: 'Gradual gain', desc: 'Max 500m elevation gain per day to keep your body adapting safely.' },
  { icon: Zap, title: 'Flexible pace', desc: 'Add extra rest days if your body needs more time to adjust.' },
  { icon: Users, title: 'Expert monitoring', desc: 'Certified guides tracking altitude symptoms at every checkpoint.' },
];

const fadeInUp: CustomItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ItinerariesHub() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.25]);

  return (
    <main className="bg-stone-50">
      {/* Parallax Hero */}
      <section className="relative h-[72vh] flex flex-col justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/bento-view.png)', y: heroY, opacity: heroOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/20" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 glass-dark rounded-full text-emerald-300 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Choose Your Path
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-[0.95]">Trek Itineraries</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">From 7-day sprints to 20-day epics — we have a route perfectly matched to your fitness level and schedule.</p>
        </motion.div>
      </section>

      {/* Itinerary Section (Full Grid) */}
      <ItinerariesSection />

      {/* Why Itinerary Planning Matters */}
      <Section title="Why Planning Matters" subtitle="Acclimatization First" dark className="py-24 rounded-t-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white">Why Your Itinerary Decides Everything</motion.h3>
            <motion.p variants={fadeInUp} className="text-stone-400 text-lg leading-relaxed">
              The secret to a successful trek is not speed — it's how well your body adapts to thinning air. Our itineraries are carefully engineered with optimal acclimatization stops.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {WHY_MATTERS.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeInUp} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h5 className="text-white font-bold mb-1">{title}</h5>
                  <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl bg-stone-900/50">
              <img
                src="/gokyoroute.png"
                alt="Gokyo Trek Route Map"
                className="w-full aspect-[4/3] object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent rounded-[40px] pointer-events-none" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-brand-600 p-6 rounded-3xl shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mountain className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Max Elevation</div>
                  <div className="text-white text-xl font-bold">5,357m</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <CustomTripBanner />
      <FAQSection category="Preparation" className="py-24 bg-stone-100" />
    </main>
  );
}
