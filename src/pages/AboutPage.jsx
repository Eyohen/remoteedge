import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  {
    title: 'Quality Over Volume',
    description: 'Less than 5% of applicants make it in. We would rather have a small pool of exceptional talent than a marketplace of unknowns.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Fast, Not Rushed',
    description: 'Matched in 14 days without cutting corners. Speed matters, but not at the expense of getting the right person.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Relationships, Not Transactions',
    description: 'We stay involved after the placement. Your success is our success — and we treat every client like a long-term partner.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const advantages = [
  {
    title: 'Time-Zone Alignment',
    description: 'Talent in Latin America and Africa overlaps with US, UK, and European business hours — enabling real-time collaboration.',
  },
  {
    title: 'Strong English Proficiency',
    description: 'Our candidates are fluent or advanced English speakers, vetted for professional communication from day one.',
  },
  {
    title: 'Professional Work Culture',
    description: 'These are career professionals — experienced, reliable, and motivated. Not freelancers between gigs.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Access world-class talent at a fraction of the cost of local hires — without any compromise on quality or reliability.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 bg-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              About Us
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-gray-900 mb-6">
              We Believe Great Talent <span className="text-accent">Has No Borders.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              RemoteEdge connects growing businesses with exceptional remote professionals from Africa and Latin America — vetted, matched, and supported.
            </p>
          </motion.div>
        </section>

        {/* The Story */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                How RemoteEdge Started
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  RemoteEdge was born from a simple observation: some of the most talented, driven professionals in the world are being overlooked — simply because of where they live. Meanwhile, founders and business owners in the US, UK, and beyond are burning through time and money trying to hire through platforms that don't deliver.
                </p>
                <p>
                  We saw the gap and decided to bridge it. Not with a marketplace full of unvetted profiles, but with a curated placement service that does the hard work upfront — screening, assessing, and matching — so our clients can hire with confidence.
                </p>
                <p>
                  Today, RemoteEdge focuses on three high-impact roles: appointment setters, customer support representatives, and virtual assistants. We keep our scope intentionally narrow so we can do it better than anyone else. Every candidate in our pool has passed a rigorous multi-stage vetting process. Every placement comes with a 30-day guarantee. And every client gets ongoing support, not just a handoff.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="py-20 md:py-28 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Latin America & Africa */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Our Talent Markets
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Africa & Latin America?
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                These regions are home to a growing pool of highly skilled professionals — and we've built the systems to find and vet the best of them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Founder */}
        <section className="py-20 md:py-28 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                The Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who's Behind RemoteEdge
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 text-center"
            >
              {/* Photo placeholder */}
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Founder</h3>
              <p className="text-accent font-medium text-sm mb-4">CEO & Founder, RemoteEdge</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                Driven by the belief that location shouldn't limit opportunity — for businesses or for talent. Building RemoteEdge to make remote hiring faster, safer, and more effective.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-accent rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Work With Us?
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
                  Book a free discovery call and tell us what you need. We'll take it from there.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3.5 bg-white hover:bg-gray-50 text-accent font-semibold rounded-full text-base transition-colors shadow-lg"
                  >
                    Book a Free Discovery Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
