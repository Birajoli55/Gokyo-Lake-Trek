import { motion, useScroll, useTransform } from 'motion/react';
import { Mountain, ShieldCheck, Heart, Award, Users, Leaf, Sparkles, MapPin, Globe, History, ArrowRight, Star } from 'lucide-react';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import Hero from '../components/Hero';
import ReviewBadge from '../components/ReviewBadge';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TrustBar from '../components/TrustBar';
import PressAwardsBanner from '../components/PressAwardsBanner';
import UserProofBadge from '../components/UserProofBadge';


const team = [
  {
    name: "Tuphan Sherpa",
    role: "Founder & Head Guide",
    experience: "25+ Years",
    bio: "Born in the shadow of Everest, Tuphan has summited Gokyo Ri over 200 times and is dedicated to preserving Sherpa culture.",
    image: "/tuphanSherpa.webp"
  },
  {
    name: "Rita Sharma",
    role: "Senior safety Officer",
    experience: "15+ Years",
    bio: "A certified Wilderness First Responder, Rita ensure every trek meets the highest global safety standards.",
    image: "/Ritasharma.webp"
  },
  {
    name: "Pasang Lhamu",
    role: "Community Liaison",
    experience: "10+ Years",
    bio: "Pasang manages our local impact projects, ensuring our treks directly benefit Himalayan schools and cooperatives.",
    image: "/PasangLhamu.webp"
  }
];

const stats = [
  { label: 'Successful Treks', value: '1,200+' },
  { label: 'Local Guides', value: '45' },
  { label: 'Village Partners', value: '12' },
  { label: 'Safety Rating', value: '100%' },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50 min-h-screen">
      <SEO 
        title="About Us | Expert Himalayan Sherpa Guides" 
        description="Learn about Gokyo Explorer's mission to provide sustainable, safe, and culturally immersive trekking experiences in the Everest region." 
        canonical="/about"
      />
      <Hero
        title="Deep Roots. High Peaks."
        subtitle="Our Legacy"
        image="/gokyori.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Born in the heart of the Khumbu, we are more than a trekking company. We are the stewards of the Gokyo trail.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Our journey began with a simple passion for the mountains and has grown into a lifelong commitment to preserving the beauty and culture of the Himalayas.
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
          <Link
            to="/trek"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Explore Trek
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Talk to an Expert
          </Link>
        </div>

      </Hero>
      <TrustBar />
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
              <div className="flex items-center gap-2 text-brand-800 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
                From a single yak to a <span className="text-brand-800">Himalayan Legacy.</span>
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
                  src="/tuphanSherpa.webp"
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
              <div className="text-brand-800 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our People</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                Meet the Guardians of <span className="text-brand-800">the Lakes.</span>
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
                <div className="text-brand-800 font-bold text-sm uppercase tracking-widest mb-4">{member.role}</div>
                <p className="text-stone-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <FAQSection className="bg-stone-50 py-24" />

      <section className="bg-stone-100 py-20">

        <CustomTripBanner />
        <Section title="Voices from the Trail" subtitle="Testimonials" className="py-24 bg-stone-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Sarah Jenkins",
                role: "Photographer",
                image: "/avatar-marcus.webp",
                text: "The sheer color of the Gokyo lakes defies imagination. Waking up to see the reflection of Cho Oyu on the water was the highlight of my trekking life. The guides were simply phenomenal."
              },
              {
                name: "Marcus V.",
                role: "Adventure Enthusiast",
                image: "/avatar-marcus.webp",
                text: "I did EBC three years ago, but Gokyo felt much more intimate and wild. The ascent to Gokyo Ri was tough, but standing at the top alone with my group was an unmatched feeling."
              },
              {
                name: "Elena Rodriguez",
                role: "First-time Trekker",
                image: "/avatar-sarah.webp",
                text: "I was extremely nervous about the altitude, but the acclimatization schedule built into our itinerary was perfect. I felt strong the entire time thanks to the incredible support team."
              }
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white p-10 rounded-[40px] shadow-2xl shadow-stone-900/5 border border-stone-100 flex flex-col items-start text-left hover:-translate-y-2 transition-all duration-500 hover:shadow-brand-600/5 relative overflow-hidden"
              >
                {/* Verified Badge Header */}
                <div className="flex items-center gap-2 mb-8 w-full justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Verified Guest</span>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <p className="text-stone-800 text-[17px] leading-[1.6] font-medium italic">"{review.text}"</p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-stone-100 w-full">
                  <img src={review.image} className="w-16 h-16 rounded-full object-cover ring-4 ring-stone-50" alt={review.name} />
                  <div>
                    <p className="text-stone-900 font-black text-base tracking-tight">{review.name}</p>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">{review.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>


        <PressAwardsBanner />
      </section>
    </main>
  );
}
