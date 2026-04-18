import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Eye,
  Database,
  Share2,
  Lock,
  Cookie,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle,
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
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-8 py-6 bg-white hover:bg-stone-50 transition-colors text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-800 shrink-0">
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
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const TOC = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'sharing', label: 'Sharing of Information' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'international', label: 'International Transfers' },
  { id: 'security', label: 'Data Security' },
  { id: 'children', label: "Children's Privacy" },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Gokyo Explorer';
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <div className="relative bg-stone-950 overflow-hidden">
        {/* Decorative gradient orbs */}
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
            <Shield className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
            Your privacy matters to us. This policy explains how Gokyo Explorer collects, uses,
            and protects your personal information when you use our website and services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-stone-500">
            <span>
              <strong className="text-stone-300">Effective:</strong> {EFFECTIVE_DATE}
            </span>
            <span className="hidden sm:block w-px h-4 bg-stone-700" />
            <span>
              <strong className="text-stone-300">Last Updated:</strong> {LAST_UPDATED}
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sticky Table of Contents */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                Table of Contents
              </p>
              <nav aria-label="Privacy policy table of contents">
                <ol className="space-y-2">
                  {TOC.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-stone-600 hover:text-brand-800 transition-colors group"
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

          {/* Main content */}
          <div className="flex-1 space-y-4">
            {/* Intro box */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl px-8 py-6 text-sm text-brand-800 leading-relaxed">
              <p>
                <strong>Gokyo Explorer</strong> ("we", "us", or "our") operates the website{' '}
                <a
                  href="https://gokyoexplorers.com"
                  className="underline underline-offset-2 hover:text-brand-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gokyoexplorers.com
                </a>{' '}
                and provides trekking services in Nepal. This Privacy Policy describes how we
                collect, use, disclose, and safeguard your information when you visit our website
                or book one of our treks. Please read it carefully. By using our services, you
                consent to the practices described here.
              </p>
            </div>

            {/* ── 1. Information We Collect ─────────────── */}
            <Section
              id="information-we-collect"
              icon={<Database className="w-5 h-5" />}
              title="1. Information We Collect"
            >
              <p className="font-semibold text-stone-800">Personal Information you provide directly:</p>
              <BulletList
                items={[
                  'Full name, email address, phone number, and nationality when submitting a booking or contact form.',
                  'Passport details (number, expiry date, nationality) required for permit applications.',
                  'Emergency contact name and relationship.',
                  'Dietary requirements and medical conditions relevant to your trek safety.',
                  'Payment details (processed securely via our payment gateway — we do not store raw card data).',
                ]}
              />

              <p className="font-semibold text-stone-800 mt-4">Information collected automatically:</p>
              <BulletList
                items={[
                  'IP address, browser type, operating system, and device identifiers.',
                  'Pages visited, time spent, referring URLs, and click-through paths.',
                  'Cookies and similar tracking technologies (see Section 4).',
                  'Geographic location (country/region level, derived from IP).',
                ]}
              />
            </Section>

            {/* ── 2. How We Use Your Information ───────── */}
            <Section
              id="how-we-use"
              icon={<Eye className="w-5 h-5" />}
              title="2. How We Use Your Information"
            >
              <p>We use your personal information to:</p>
              <BulletList
                items={[
                  'Process and confirm your trek bookings and payments.',
                  'Obtain required trekking permits (TIMS Card, Sagarmatha National Park Entry Permit) on your behalf.',
                  'Coordinate logistics including accommodation, guides, and porters.',
                  'Send booking confirmations, itinerary details, and pre-departure information.',
                  'Respond to enquiries and provide customer support.',
                  'Send occasional newsletters and promotional offers (only with your explicit consent).',
                  'Improve our website, services, and user experience through analytics.',
                  'Comply with applicable legal and regulatory obligations.',
                  'Protect against fraud, abuse, and unauthorized transactions.',
                ]}
              />
              <p className="mt-2">
                <strong>Legal basis (GDPR):</strong> We process your data on the grounds of{' '}
                <em>contract performance</em> (booking fulfillment),{' '}
                <em>legitimate interests</em> (service improvement, fraud prevention), and{' '}
                <em>consent</em> (marketing emails).
              </p>
            </Section>

            {/* ── 3. Sharing of Information ─────────────── */}
            <Section
              id="sharing"
              icon={<Share2 className="w-5 h-5" />}
              title="3. Sharing of Information"
            >
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal data. We may share it
                only with the following categories of recipients for the purposes listed:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse mt-2">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700">
                      <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Recipient</th>
                      <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      ['Nepal Tourism Board / TIMS', 'Permit processing', 'Government authority'],
                      ['Local guides & porters', 'Trek operations', 'Contractual obligation'],
                      ['Teahouse & hotel partners', 'Accommodation booking', 'Data processing agreement'],
                      ['Payment processors (Stripe / PayPal)', 'Secure payment handling', 'PCI-DSS certified'],
                      ['Analytics providers (Google Analytics)', 'Website analytics', 'Anonymised / GDPR compliant'],
                      ['Email service providers', 'Transactional & marketing emails', 'Data processing agreement'],
                      ['Legal authorities', 'Legal compliance', 'Only when legally required'],
                    ].map(([r, p, s]) => (
                      <tr key={r} className="hover:bg-stone-50">
                        <td className="px-4 py-3 font-medium text-stone-800">{r}</td>
                        <td className="px-4 py-3">{p}</td>
                        <td className="px-4 py-3 text-stone-500">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* ── 4. Cookies & Tracking ─────────────────── */}
            <Section
              id="cookies"
              icon={<Cookie className="w-5 h-5" />}
              title="4. Cookies & Tracking Technologies"
            >
              <p>
                Our website uses cookies and similar technologies to enhance your browsing experience
                and collect usage analytics. The types of cookies we use:
              </p>
              <BulletList
                items={[
                  'Strictly Necessary — essential for the website to function (e.g., session management, CSRF protection). Cannot be disabled.',
                  'Performance & Analytics — help us understand how visitors interact with the site (e.g., Google Analytics, anonymized). Can be declined.',
                  'Functional — remember your preferences (e.g., currency selection, language). Can be declined.',
                  'Marketing — used to show you relevant advertisements across the web. Disabled by default; enabled only with your consent.',
                ]}
              />
              <p className="mt-2">
                You can control cookie preferences at any time through your browser settings or our
                on-site cookie banner. Note that disabling certain cookies may affect website
                functionality.
              </p>
            </Section>

            {/* ── 5. Data Retention ─────────────────────── */}
            <Section
              id="data-retention"
              icon={<Database className="w-5 h-5" />}
              title="5. Data Retention"
            >
              <p>We retain your personal data for the following periods:</p>
              <BulletList
                items={[
                  'Booking & payment records — 7 years (required for tax and financial compliance in Nepal).',
                  'Trek participation records (permits, emergency contacts) — 5 years.',
                  'Marketing & newsletter data — until you unsubscribe or request deletion.',
                  'Website analytics data — 26 months (anonymized).',
                  'Customer support communications — 3 years.',
                ]}
              />
              <p className="mt-2">
                After these periods, data is securely deleted or anonymized. You may request early
                deletion subject to our legal retention obligations (see Section 6).
              </p>
            </Section>

            {/* ── 6. Your Rights ───────────────────────── */}
            <Section
              id="your-rights"
              icon={<Shield className="w-5 h-5" />}
              title="6. Your Rights"
            >
              <p>
                Depending on your country of residence, you may have the following rights regarding
                your personal data:
              </p>
              <BulletList
                items={[
                  'Right to Access — request a copy of the personal data we hold about you.',
                  'Right to Rectification — correct inaccurate or incomplete data.',
                  'Right to Erasure — request deletion of your data ("right to be forgotten").',
                  'Right to Restriction — request that we limit how we process your data.',
                  'Right to Data Portability — receive your data in a machine-readable format.',
                  'Right to Object — object to processing based on legitimate interests or for direct marketing.',
                  'Right to Withdraw Consent — withdraw consent at any time for consent-based processing.',
                  'Right to Lodge a Complaint — with your local data protection authority (e.g., ICO in the UK, CNIL in France).',
                ]}
              />
              <p className="mt-2">
                To exercise any of these rights, contact us at{' '}
                <a
                  href="mailto:msm47374@gmail.com"
                  className="text-brand-800 underline underline-offset-2 hover:text-brand-800"
                >
                  msm47374@gmail.com
                </a>
                . We will respond within <strong>30 days</strong>.
              </p>
            </Section>

            {/* ── 7. International Transfers ────────────── */}
            <Section
              id="international"
              icon={<Globe className="w-5 h-5" />}
              title="7. International Data Transfers"
            >
              <p>
                Gokyo Explorer is based in <strong>Kathmandu, Nepal</strong>. When you provide
                information from outside Nepal (for example, from the EU, UK, or USA), your data may
                be transferred to and processed in Nepal or other countries where our service
                providers operate.
              </p>
              <p>
                For transfers from the European Economic Area (EEA) or United Kingdom, we rely on
                appropriate safeguards such as Standard Contractual Clauses (SCCs) or the recipient's
                certification under recognized frameworks.
              </p>
              <p>
                By submitting your information, you acknowledge and consent to this transfer. We take
                all reasonably necessary steps to ensure your data is treated securely in accordance
                with this Privacy Policy.
              </p>
            </Section>

            {/* ── 8. Security ──────────────────────────── */}
            <Section
              id="security"
              icon={<Lock className="w-5 h-5" />}
              title="8. Data Security"
            >
              <p>
                We implement industry-standard technical and organizational measures to protect your
                personal information:
              </p>
              <BulletList
                items={[
                  'TLS/SSL encryption for all data transmitted to and from our website.',
                  'Encrypted storage for sensitive personal data (e.g., passport numbers).',
                  'Role-based access controls — only authorized staff can access personal booking data.',
                  'Regular security audits and vulnerability assessments.',
                  'Third-party payment processors handle card data; we never store raw payment credentials.',
                  'Staff trained in data protection and privacy best practices.',
                ]}
              />
              <p className="mt-2">
                While we strive to protect your information, no method of transmission over the
                internet is 100% secure. In the event of a data breach that affects your rights, we
                will notify you as required by applicable law.
              </p>
            </Section>

            {/* ── 9. Children's Privacy ─────────────────── */}
            <Section
              id="children"
              icon={<Shield className="w-5 h-5" />}
              title="9. Children's Privacy"
            >
              <p>
                Our services are not directed to individuals under the age of <strong>16</strong>.
                We do not knowingly collect personal data from children. If you are a parent or
                guardian and believe your child has provided us with personal information, please
                contact us immediately at{' '}
                <a
                  href="mailto:msm47374@gmail.com"
                  className="text-brand-800 underline underline-offset-2 hover:text-brand-800"
                >
                  msm47374@gmail.com
                </a>{' '}
                and we will promptly delete such data.
              </p>
              <p>
                For trekkers under 18 who participate in our treks with parental/guardian consent, we
                collect only the minimum personal information necessary and apply heightened protection
                measures.
              </p>
            </Section>

            {/* ── 10. Changes to This Policy ───────────── */}
            <Section
              id="changes"
              icon={<Eye className="w-5 h-5" />}
              title="10. Changes to This Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technologies, or applicable laws. When we make material changes, we will:
              </p>
              <BulletList
                items={[
                  'Update the "Last Updated" date at the top of this page.',
                  'Send a notification email to registered users and newsletter subscribers.',
                  'Display a prominent notice on our website for at least 30 days.',
                ]}
              />
              <p className="mt-2">
                We encourage you to review this policy periodically. Your continued use of our
                website after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </Section>

            {/* ── 11. Contact Us ───────────────────────── */}
            <Section
              id="contact"
              icon={<Mail className="w-5 h-5" />}
              title="11. Contact Us"
            >
              <p>
                For any questions, concerns, or requests regarding this Privacy Policy or your
                personal data, please reach out to our Privacy Team:
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <a
                  href="mailto:msm47374@gmail.com"
                  className="flex flex-col items-center gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-brand-400 hover:bg-brand-50 transition-all text-center group"
                >
                  <Mail className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-stone-700 group-hover:text-brand-700">Email</span>
                  <span className="text-xs text-stone-500">msm47374@gmail.com</span>
                </a>
                <a
                  href="tel:+9779748343015"
                  className="flex flex-col items-center gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-brand-400 hover:bg-brand-50 transition-all text-center group"
                >
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
              <p className="mt-4 text-xs text-stone-500">
                We aim to respond to all privacy-related enquiries within{' '}
                <strong>3 business days</strong>.
              </p>
            </Section>

            {/* Bottom CTA */}
            <div className="mt-8 bg-stone-950 rounded-2xl px-8 py-8 text-center">
              <p className="text-stone-300 text-sm mb-4">
                Still have questions about how we handle your data?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Our Privacy Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
