import { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, MessageCircle, ClipboardCheck } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'booking' | 'inquiry'>('booking');

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Get in Touch" 
        subtitle="Start Your Adventure Today"
        image="/cgokyo.jpg"
        height="h-[60vh]"
      />

      <Section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Interaction Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Form Toggles */}
            <div className="flex bg-stone-100 p-1.5 rounded-2xl w-fit">
              <button 
                onClick={() => setActiveTab('booking')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'booking' 
                  ? 'bg-white text-brand-600 shadow-md translate-y-0' 
                  : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <ClipboardCheck className="w-4 h-4" /> Book a Trek
              </button>
              <button 
                onClick={() => setActiveTab('inquiry')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'inquiry' 
                  ? 'bg-white text-brand-600 shadow-md translate-y-0' 
                  : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <MessageCircle className="w-4 h-4" /> General Inquiry
              </button>
            </div>

            {activeTab === 'booking' ? (
              <BookingForm />
            ) : (
              <div className="glass p-12 rounded-[40px] space-y-8 shadow-xl">
                 <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-stone-900">Send a Message</h3>
                  <p className="text-stone-500 text-sm">Have specific questions? We usually respond within 4 hours.</p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Name" className="bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 shadow-sm" />
                    <input type="email" placeholder="Email" className="bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 shadow-sm" />
                  </div>
                  <textarea rows={6} placeholder="How can we help?" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 resize-none shadow-sm" />
                  <button className="px-10 py-5 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-600/20">Send Message</button>
                </form>
              </div>
            )}
          </div>

          {/* Contact Details sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-stone-900">Expert Support</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Kathmandu HQ</h5>
                    <p className="text-stone-500 text-sm leading-relaxed">Thamel Marg 12,<br />Kathmandu 44600, Nepal</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Direct Line</h5>
                    <p className="text-stone-500 text-sm">+977 1 4412345</p>
                    <p className="text-brand-600 text-xs font-bold mt-1 uppercase tracking-widest">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Email Support</h5>
                    <p className="text-stone-500 text-sm">hello@gokyoexplorer.com</p>
                  </div>
                </div>
              </div>

              <hr className="border-stone-200" />

              <div className="space-y-6">
                <h5 className="font-bold text-stone-900 text-sm">Connect with us</h5>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white border border-stone-100 rounded-lg flex items-center justify-center hover:bg-brand-50 hover:border-brand-100 transition-all shadow-sm group">
                      <Icon className="w-5 h-5 text-stone-400 group-hover:text-brand-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-brand-600 p-8 rounded-[40px] text-white space-y-4 shadow-xl shadow-brand-600/20">
              <h4 className="font-bold text-lg">Instant Help</h4>
              <p className="text-brand-100 text-sm leading-relaxed">Chat with our Sherpa guides on WhatsApp for immediate trail updates.</p>
              <button className="flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-stone-50 transition-colors">
                WhatsApp Us
              </button>
            </div>
          </div>

        </div>
      </Section>

      <FAQSection className="bg-stone-100 py-24" />
    </main>
  );
}
