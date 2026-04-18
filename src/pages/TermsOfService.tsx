import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, ShieldCheck, CreditCard, XCircle, AlertTriangle,
  Globe, Scale, Mail, Phone, MapPin, ChevronDown, ChevronUp, CheckCircle,
} from 'lucide-react';

const LAST_UPDATED = 'April 18, 2026';
const EFFECTIVE_DATE = 'April 18, 2026';

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ id, icon, title, children }: SectionProps) {
  const [open, setOpen] = useState(true);
  return (
    <section id={id} className="border border-stone-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-8 py-6 bg-white hover:bg-stone-50 transition-colors text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 shrink-0">
            {icon}
          </span>
          <h2 className="text-lg font-bold text-stone-900 group-hover:text-brand-700 transition-colors">
            {title}
          </h2>
        </div>
        <span className="text-stone-400 shrink-0">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      {open && (
        <div className="px-8 pb-8 pt-2 bg-white border-t border-stone-100 text-stone-600 leading-relaxed space-y-4 text-sm">
          {children}
        </div>
      )}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const TOC = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'services', label: 'Our Services' },
  { id: 'eligibility', label: 'Eligibility & Responsibilities' },
  { id: 'booking-payment', label: 'Booking & Payment' },
  { id: 'cancellation', label: 'Cancellations & Refunds' },
  { id: 'trek-risks', label: 'Trek Risks & Liability' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'user-conduct', label: 'User Conduct' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'disclaimer', label: 'Disclaimers' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact Us' },
];

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | Gokyo Explorer';
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative bg-stone-950 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #14b8a6, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #2dd4bf, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <FileText className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
            By using Gokyo Explorer's website or booking a trek, you agree to the following
            terms and conditions. Please read them carefully before proceeding.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-stone-500">
            <span><strong className="text-stone-300">Effective:</strong> {EFFECTIVE_DATE}</span>
            <span className="hidden sm:block w-px h-4 bg-stone-700" />
            <span><strong className="text-stone-300">Last Updated:</strong> {LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Sticky TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                Table of Contents
              </p>
              <nav aria-label="Terms of service table of contents">
                <ol className="space-y-2">
                  {TOC.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-stone-600 hover:text-brand-600 transition-colors group"
                      >
                        <span className="text-xs text-stone-400 group-hover:text-brand-400 font-mono w-5">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-4">

            {/* Intro box */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl px-8 py-6 text-sm text-brand-800 leading-relaxed">
              <p>
                These Terms of Service ("Terms") govern your use of the website operated by{' '}
                <strong>Gokyo Explorer</strong> ("Company", "we", "us", or "our") and any trekking
                services you purchase from us. These Terms constitute a legally binding agreement.
                If you do not agree, please discontinue use of our website and services immediately.
              </p>
            </div>

            {/* 1. Acceptance */}
            <Section id="acceptance" icon={<ShieldCheck className="w-5 h-5" />} title="1. Acceptance of Terms">
              <p>
                By accessing our website, creating an account, submitting a booking enquiry, or
                purchasing a trek package, you confirm that:
              </p>
              <BulletList items={[
                'You have read, understood, and agree to be bound by these Terms.',
                'You are at least 18 years of age, or have the consent of a parent or legal guardian.',
                'You have the legal authority to enter into this agreement on behalf of yourself or any group you represent.',
                'All information you provide to us is accurate, current, and complete.',
              ]} />
              <p className="mt-2">
                These Terms apply in addition to our{' '}
                <Link to="/privacy-policy" className="text-brand-600 underline underline-offset-2 hover:text-brand-800">
                  Privacy Policy
                </Link>
                , which is incorporated herein by reference.
              </p>
            </Section>

            {/* 2. Services */}
            <Section id="services" icon={<Globe className="w-5 h-5" />} title="2. Our Services">
              <p>
                Gokyo Explorer provides guided trekking experiences in the Khumbu / Everest region
                of Nepal, including but not limited to:
              </p>
              <BulletList items={[
                'Guided Gokyo Lake Trek packages of varying durations (7–20 days).',
                'Permit procurement services (TIMS Card, Sagarmatha National Park Entry Permit).',
                'Teahouse accommodation booking and logistics coordination.',
                'Certified, English-speaking high-altitude guides and licensed porters.',
                'Pre-trek planning consultation and customized itinerary design.',
                'Post-trek support and emergency evacuation coordination.',
              ]} />
              <p className="mt-2">
                We reserve the right to modify, suspend, or discontinue any service at any time
                with reasonable notice. Service availability may be affected by weather, government
                regulations, or force majeure events.
              </p>
            </Section>

            {/* 3. Eligibility */}
            <Section id="eligibility" icon={<ShieldCheck className="w-5 h-5" />} title="3. Eligibility & Client Responsibilities">
              <p className="font-semibold text-stone-800">Physical & Medical Fitness:</p>
              <BulletList items={[
                'Trekking at high altitude (up to 5,360 m / 17,585 ft) is physically demanding. You are responsible for assessing your own fitness and health.',
                'You must inform us of any pre-existing medical conditions (heart conditions, respiratory issues, severe altitude sickness history) before booking.',
                'We strongly recommend obtaining medical clearance from your doctor prior to departure.',
                'Gokyo Explorer reserves the right to turn back or evacuate any trekker deemed unfit to continue safely.',
              ]} />
              <p className="font-semibold text-stone-800 mt-4">Travel Documents:</p>
              <BulletList items={[
                'You are responsible for obtaining a valid passport (minimum 6 months validity beyond your travel dates).',
                'You are responsible for obtaining the appropriate Nepal visa.',
                'We will assist with trek-specific permits, but cannot be held liable for government-imposed permit changes or denials.',
              ]} />
            </Section>

            {/* 4. Booking & Payment */}
            <Section id="booking-payment" icon={<CreditCard className="w-5 h-5" />} title="4. Booking & Payment">
              <p className="font-semibold text-stone-800">Booking Process:</p>
              <BulletList items={[
                'A booking is confirmed only upon receipt of a deposit (typically 20–30% of total trek cost) and our written confirmation email.',
                'Full payment is due no later than 30 days before your trek departure date.',
                'For bookings made within 30 days of departure, full payment is required at the time of booking.',
              ]} />
              <p className="font-semibold text-stone-800 mt-4">Pricing & Currency:</p>
              <BulletList items={[
                'All prices are quoted in USD unless otherwise stated.',
                'Prices are subject to change without notice until a booking deposit is received.',
                'International bank transfer fees, payment gateway charges, and currency conversion costs are the client\'s responsibility.',
                'We reserve the right to pass on any significant fuel, permit, or government-imposed surcharge increases.',
              ]} />
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-amber-800 text-sm">
                <strong>Note:</strong> Gokyo Explorer does not store credit/debit card details. All
                card payments are processed securely via our PCI-DSS certified payment partners.
              </div>
            </Section>

            {/* 5. Cancellations & Refunds */}
            <Section id="cancellation" icon={<XCircle className="w-5 h-5" />} title="5. Cancellations & Refunds">
              <p className="font-semibold text-stone-800">Cancellation by Client:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse mt-2">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700">
                      <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Days Before Departure</th>
                      <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Cancellation Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ['60+ days', '10% of total cost (deposit forfeited)'],
                      ['30–59 days', '30% of total cost'],
                      ['15–29 days', '50% of total cost'],
                      ['7–14 days', '75% of total cost'],
                      ['Less than 7 days', '100% of total cost — no refund'],
                    ].map(([days, fee]) => (
                      <tr key={days} className="hover:bg-stone-50">
                        <td className="px-4 py-3 font-medium text-stone-800">{days}</td>
                        <td className="px-4 py-3 text-red-600">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 font-semibold text-stone-800">Cancellation by Gokyo Explorer:</p>
              <BulletList items={[
                'We reserve the right to cancel a trek due to insufficient group size, extreme weather, natural disasters, or government travel advisories.',
                'In such cases, clients will receive a full refund of all amounts paid to us, or the option to reschedule at no extra cost.',
                'We are not responsible for non-refundable flights, visas, or other travel expenses incurred by the client.',
              ]} />
              <p className="mt-2">
                <strong>We strongly recommend purchasing comprehensive travel insurance</strong> that
                covers trip cancellation, medical evacuation, and curtailment.
              </p>
            </Section>

            {/* 6. Trek Risks & Liability */}
            <Section id="trek-risks" icon={<AlertTriangle className="w-5 h-5" />} title="6. Trek Risks & Limitation of Liability">
              <p>
                High-altitude trekking involves inherent risks including, but not limited to:
              </p>
              <BulletList items={[
                'Acute Mountain Sickness (AMS), High Altitude Pulmonary Edema (HAPE), and High Altitude Cerebral Edema (HACE).',
                'Extreme and unpredictable weather conditions including blizzards and avalanches.',
                'Rugged, remote terrain with limited access to medical facilities.',
                'Physical injury from falls, rockfall, or other trail hazards.',
                'Flight cancellations or delays (particularly at Lukla Airport, one of the world\'s most challenging airstrips).',
              ]} />
              <p className="mt-2">
                By booking with us, you voluntarily assume all such risks. To the maximum extent
                permitted by applicable law, <strong>Gokyo Explorer's total liability</strong> for
                any claim arising from our services shall not exceed the total amount paid by the
                client for the specific trek.
              </p>
              <p className="mt-2">
                We shall not be liable for indirect, incidental, special, or consequential damages,
                including loss of enjoyment, lost profits, or emotional distress.
              </p>
              <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-800 text-sm">
                <strong>Important:</strong> Travel insurance covering emergency helicopter evacuation
                (minimum USD $100,000 coverage) is <strong>mandatory</strong> for all our treks.
                Proof of insurance must be provided before departure.
              </div>
            </Section>

            {/* 7. Intellectual Property */}
            <Section id="intellectual-property" icon={<FileText className="w-5 h-5" />} title="7. Intellectual Property">
              <p>
                All content on this website — including text, photographs, videos, graphics, logos,
                itineraries, and route descriptions — is the exclusive property of Gokyo Explorer or
                its licensors and is protected by copyright, trademark, and other applicable laws.
              </p>
              <BulletList items={[
                'You may not reproduce, copy, distribute, or create derivative works from our content without prior written permission.',
                'You may share links to our pages for personal, non-commercial purposes.',
                'Our name "Gokyo Explorer" and logo may not be used without our express written consent.',
                'User-submitted content (reviews, photos) grants us a non-exclusive, royalty-free licence to use such content for marketing purposes.',
              ]} />
            </Section>

            {/* 8. User Conduct */}
            <Section id="user-conduct" icon={<ShieldCheck className="w-5 h-5" />} title="8. User Conduct">
              <p>When using our website or services, you agree not to:</p>
              <BulletList items={[
                'Provide false, misleading, or fraudulent information during booking.',
                'Attempt to access unauthorized areas of our website or systems.',
                'Use automated bots, scrapers, or data-mining tools on our website.',
                'Post offensive, defamatory, or harmful content in reviews or communications.',
                'Engage in any activity that violates applicable laws of Nepal or your country of residence.',
                'Resell or commercially exploit our services without authorization.',
              ]} />
              <p className="mt-2">
                Violation of these conduct standards may result in immediate termination of your
                booking without refund and/or legal action.
              </p>
            </Section>

            {/* 9. Third-Party Services */}
            <Section id="third-party" icon={<Globe className="w-5 h-5" />} title="9. Third-Party Services & Links">
              <p>
                Our website may contain links to third-party websites (airlines, accommodation
                booking platforms, travel insurance providers, etc.). These are provided for
                convenience only.
              </p>
              <BulletList items={[
                'We do not endorse or control third-party websites and are not responsible for their content or privacy practices.',
                'Services provided by third parties (teahouses, airlines, insurance companies) are governed by their own terms.',
                'Any disputes with third-party providers must be resolved directly with them.',
              ]} />
            </Section>

            {/* 10. Disclaimers */}
            <Section id="disclaimer" icon={<AlertTriangle className="w-5 h-5" />} title="10. Disclaimers">
              <BulletList items={[
                'Our website and services are provided "as is" and "as available" without warranties of any kind, express or implied.',
                'We do not warrant that our website will be uninterrupted, error-free, or free of viruses.',
                'Trek information (distances, elevations, durations) are estimates and may vary based on conditions and individual fitness.',
                'We are not responsible for changes to permit fees, national park regulations, or government travel advisories.',
                'Photographs and videos on our website are representative; actual conditions may differ.',
              ]} />
            </Section>

            {/* 11. Governing Law */}
            <Section id="governing-law" icon={<Scale className="w-5 h-5" />} title="11. Governing Law & Dispute Resolution">
              <p>
                These Terms are governed by and construed in accordance with the laws of{' '}
                <strong>Nepal</strong>, without regard to its conflict of law provisions.
              </p>
              <p className="mt-2 font-semibold text-stone-800">Dispute Resolution:</p>
              <BulletList items={[
                'We encourage resolving disputes through direct communication first — please contact us at msm47374@gmail.com.',
                'If direct resolution fails, disputes shall be submitted to mediation under the Nepal Mediation Act.',
                'Any unresolved disputes shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.',
                'Nothing in these Terms limits your statutory rights as a consumer under the law of your country of residence.',
              ]} />
            </Section>

            {/* 12. Changes */}
            <Section id="changes" icon={<FileText className="w-5 h-5" />} title="12. Changes to These Terms">
              <p>
                We may update these Terms at any time. When we make material changes, we will:
              </p>
              <BulletList items={[
                'Update the "Last Updated" date at the top of this page.',
                'Notify registered users and newsletter subscribers by email.',
                'Display a prominent notice on our website for 30 days.',
              ]} />
              <p className="mt-2">
                Continued use of our website or services after the effective date of any changes
                constitutes your acceptance of the updated Terms.
              </p>
            </Section>

            {/* 13. Contact */}
            <Section id="contact" icon={<Mail className="w-5 h-5" />} title="13. Contact Us">
              <p>
                For questions about these Terms or our services, please contact us:
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <a href="mailto:msm47374@gmail.com"
                  className="flex flex-col items-center gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-brand-400 hover:bg-brand-50 transition-all text-center group">
                  <Mail className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-stone-700 group-hover:text-brand-700">Email</span>
                  <span className="text-xs text-stone-500">msm47374@gmail.com</span>
                </a>
                <a href="tel:+9779748343015"
                  className="flex flex-col items-center gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-brand-400 hover:bg-brand-50 transition-all text-center group">
                  <Phone className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-stone-700 group-hover:text-brand-700">Phone</span>
                  <span className="text-xs text-stone-500">+977-9748343015</span>
                </a>
                <div className="flex flex-col items-center gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
                  <MapPin className="w-6 h-6 text-brand-500" />
                  <span className="text-xs font-semibold text-stone-700">Address</span>
                  <span className="text-xs text-stone-500">Thamel, Kathmandu, Nepal</span>
                </div>
              </div>
            </Section>

            {/* Bottom CTA */}
            <div className="mt-8 bg-stone-950 rounded-2xl px-8 py-8 text-center">
              <p className="text-stone-300 text-sm mb-2">Have questions before booking?</p>
              <p className="text-stone-500 text-xs mb-5">
                Our team is happy to walk you through any aspect of these terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
                <Link to="/privacy-policy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold rounded-xl transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
