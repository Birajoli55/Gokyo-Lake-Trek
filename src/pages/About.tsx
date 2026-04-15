import { motion, useScroll, useTransform } from 'motion/react';
import { Mountain, ShieldCheck, Heart, Award, Users, Leaf, Sparkles, MapPin, Globe, History } from 'lucide-react';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';

const team = [
  {
    name: "Tuphan Sherpa",
    role: "Founder & Head Guide",
    experience: "25+ Years",
    bio: "Born in the shadow of Everest, Tuphan has summited Gokyo Ri over 200 times and is dedicated to preserving Sherpa culture.",
    image: "/tuphanSherpa.png"
  },
  {
    name: "Rita Sharma",
    role: "Senior safety Officer",
    experience: "15+ Years",
    bio: "A certified Wilderness First Responder, Rita ensure every trek meets the highest global safety standards.",
    image: "/Ritasharma.png"
  },
  {
    name: "Pasang Lhamu",
    role: "Community Liaison",
    experience: "10+ Years",
    bio: "Pasang manages our local impact projects, ensuring our treks directly benefit Himalayan schools and cooperatives.",
    image: "/PasangLhamu.png"
  }
];

const stats = [
  { label: 'Successful Treks', value: '1,200+' },
  { label: 'Local Guides', value: '45' },
  { label: 'Village Partners', value: '12' },
  { label: 'Safety Rating', value: '100%' },
];

export default function About() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <main className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col justify-center overflow-hidden bg-stone-950">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="/gokyori.png" 
            alt="Gokyo Lakes Heritage" 
            className="w-full h-full object-cover scale-110 blur-[1px]"
          />
          <div className="absolute inset-0 bg-stone-950/50" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/10 text-brand-400 text-xs font-bold uppercase tracking-[0.25em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Legacy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[0.9]"
          >
            Deep Roots. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">High Peaks.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-stone-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80"
          >
            Born in the heart of the Khumbu, we are more than a trekking company. We are the stewards of the Gokyo trail.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <Section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
                From a single yak to a <span className="text-brand-600">Himalayan Legacy.</span>
              </h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Gokyo Explorer wasn't founded in a boardroom—it was founded on the rocky trails between Namche Bazaar and the turquoise lakes of Gokyo. Our story began thirty years ago with Tuphan Sherpa, who spent his childhood guiding yaks through the high passes.
                </p>
                <p>
                  Tuphan saw how the world was falling in love with Everest, but he wanted to share the quiet majesty of his home: the Gokyo Valley. He started with a vision of "Authentic Himalayan Hospitality," ensuring that every trekker wouldn't just see the mountains, but feel the soul of the Sherpa people.
                </p>
                <p>
                  Today, we remain 100% Sherpa-owned and operated. Every guide we employ comes from the villages you visit, ensuring your journey supports the community that makes it possible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-stone-200">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-stone-500 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/tuphanSherpa.png" 
                  alt="Tuphan Sherpa in the mountains" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">The Founder</div>
                  <div className="text-2xl font-bold">Tuphan Sherpa</div>   
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section className="py-24 bg-stone-100 rounded-[64px]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Why Trek With Us?</h2>
            <p className="text-stone-600 text-lg">We maintain the highest standards in the industry, from oxygen protocols to fair-wage practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety Excellence",
                desc: "Every guide carries pulse oximeters and comprehensive medical kits. We are certified by the Nepal Mountaineering Association."
              },
              {
                icon: Leaf,
                title: "Eco Stewardship",
                desc: "We strictly follow 'Leave No Trace' principles and lead waste-clearing initiatives in the Gokyo Lakes region."
              },
              {
                icon: Heart,
                title: "Sherpa Heritage",
                desc: "Don't just walk the trail—understand its history, culture, and mythology through the eyes of the people who live here."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Guide Team */}
      <Section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our People</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                Meet the Guardians of <span className="text-brand-600">the Lakes.</span>
              </h2>
            </div>
            <p className="text-stone-500 text-lg md:max-w-xs leading-relaxed">
              Our guides are all local to the Khumbu, with decades of combined experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-8 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900">
                    {member.experience} EXP
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-1">{member.name}</h3>
                <div className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-4">{member.role}</div>
                <p className="text-stone-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <FAQSection className="bg-stone-50 py-24" />

      <section className="bg-stone-100 py-20">
        <CustomTripBanner />
      </section>
    </main>
  );
}
