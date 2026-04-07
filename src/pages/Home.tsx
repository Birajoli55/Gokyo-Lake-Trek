import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Mountain, ShieldCheck, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { TREK_STATS, BLOG_POSTS } from '../constants';

export default function Home() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <Hero 
        title="Gokyo Lake Trek" 
        subtitle="The Ultimate Himalayan Adventure"
        image="https://picsum.photos/seed/himalayas/1920/1080"
        height="h-screen"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link 
            to="/overview" 
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-700 transition-all hover:scale-105"
          >
            Explore Trek
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 glass-dark text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="relative z-20 -mt-24 container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {TREK_STATS.map((stat) => (
            <div key={stat.label} className="glass p-8 rounded-3xl text-center space-y-2">
              <span className="text-brand-600 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
              <h3 className="text-3xl font-bold text-stone-900">{stat.value}</h3>
              <p className="text-stone-500 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <Section 
        title="A Journey Beyond the Ordinary" 
        subtitle="The Experience"
        className="pt-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              The Gokyo Lake Trek is more than just a hike; it's a spiritual journey into the heart of the Himalayas. 
              While the Everest Base Camp trek gets the crowds, Gokyo offers a more tranquil, visually stunning alternative. 
              Imagine standing beside the turquoise waters of the third lake, with the massive Cho Oyu looming overhead.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Mountain, title: 'Epic Views', desc: '360-degree views from Gokyo Ri.' },
                { icon: MapPin, title: 'Remote Path', desc: 'Less crowded than EBC.' },
                { icon: Calendar, title: 'Best Timing', desc: 'Spring and Autumn clarity.' },
                { icon: ShieldCheck, title: 'Safe Travel', desc: 'Expert guides and support.' },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="p-3 bg-stone-100 rounded-2xl h-fit">
                    <feature.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-stone-900 font-bold">{feature.title}</h4>
                    <p className="text-stone-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/overview" className="inline-flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-sm group">
              Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/lake/800/1000" 
              alt="Gokyo Lake" 
              className="rounded-[40px] w-full aspect-[4/5] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl hidden md:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i} 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-white" 
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-stone-900 font-bold text-sm">500+ Happy Trekkers</span>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                "The most beautiful place I've ever seen. The lakes are truly magical."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Itinerary */}
      <Section title="The Classic Route" subtitle="Itinerary" dark>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-[40px]">
            <img 
              src="https://picsum.photos/seed/trekpath/1200/800" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-bold text-white mb-4">12 Days Classic Gokyo</h3>
              <p className="text-stone-300 max-w-lg mb-8">
                A perfect balance of challenge and reward. Includes Lukla, Namche, and the stunning Gokyo Ri summit.
              </p>
              <Link to="/itineraries" className="px-8 py-4 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-700 transition-colors">
                View Full Itinerary
              </Link>
            </div>
          </div>
          <div className="space-y-8">
            {[
              { day: 'Day 01', title: 'Lukla to Phakding', desc: 'The gateway to the Everest region.' },
              { day: 'Day 02', title: 'Namche Bazaar', desc: 'The heart of Sherpa culture.' },
              { day: 'Day 07', title: 'Gokyo Ri Summit', desc: 'The ultimate panoramic view.' },
            ].map((item) => (
              <div key={item.day} className="glass-dark p-8 rounded-3xl space-y-2">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest">{item.day}</span>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section title="Latest from the Trail" subtitle="Journal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to="/tips" className="group block space-y-6">
              <div className="overflow-hidden rounded-[32px] aspect-video">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">Ready for the Adventure of a Lifetime?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join our next expedition to the Gokyo Lakes. Small groups, expert guides, and memories that will last forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-12 py-5 bg-white text-stone-900 font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
              Book Your Spot
            </Link>
            <Link to="/contact" className="px-12 py-5 border-2 border-white/20 font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
