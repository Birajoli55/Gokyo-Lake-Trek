import Hero from '../components/Hero';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Contact Us" 
        subtitle="Start Your Journey"
        image="https://picsum.photos/seed/contact/1920/1080"
      />

      <Section title="Get in Touch" subtitle="Contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-12 rounded-[40px] space-y-8 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-stone-900">Send a Message</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Have questions about the trek? Our team of experts is here to help you plan your perfect Himalayan adventure.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-stone-500 text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-stone-100 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-colors text-stone-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-stone-500 text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-stone-100 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-colors text-stone-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-stone-500 text-xs font-bold uppercase tracking-widest">Subject</label>
                <select className="w-full bg-stone-100 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-colors appearance-none text-stone-900">
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Custom Itinerary</option>
                  <option>Gear Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-stone-500 text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  rows={6} 
                  placeholder="Tell us about your plans..." 
                  className="w-full bg-stone-100 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none text-stone-900"
                />
              </div>
              <button className="w-full py-5 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-700 transition-all hover:scale-105">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12 py-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-stone-900">Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-stone-100 rounded-2xl">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-stone-900 font-bold">Location</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Thamel, Kathmandu, Nepal<br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-stone-100 rounded-2xl">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-stone-900 font-bold">Phone</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">+977 1 4412345</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-stone-100 rounded-2xl">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-stone-900 font-bold">Email</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">info@gokyoexplorer.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-stone-900">Follow Us</h3>
              <div className="flex items-center gap-6">
                <a href="#" className="p-4 bg-stone-100 rounded-2xl hover:bg-stone-200 transition-colors">
                  <Instagram className="w-6 h-6 text-brand-600" />
                </a>
                <a href="#" className="p-4 bg-stone-100 rounded-2xl hover:bg-stone-200 transition-colors">
                  <Twitter className="w-6 h-6 text-brand-600" />
                </a>
                <a href="#" className="p-4 bg-stone-100 rounded-2xl hover:bg-stone-200 transition-colors">
                  <Facebook className="w-6 h-6 text-brand-600" />
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] space-y-4 shadow-lg">
              <h4 className="text-stone-900 font-bold">Emergency Contact</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                For urgent matters related to an ongoing trek, please call our 24/7 emergency line:
              </p>
              <p className="text-brand-600 font-bold text-xl">+977 980 1234567</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
