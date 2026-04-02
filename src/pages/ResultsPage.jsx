import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    quote: "Since placing a virtual assistant through RemoteEdge, my operations have become significantly more consistent. I can focus on creating content instead of managing every moving part. It changed how I run my business.",
    name: 'Content Creator',
    company: 'RemoteEdge Client',
    role: 'Virtual Assistant Placement',
  },
  {
    quote: "We needed someone to handle outbound calls and follow-ups. RemoteEdge matched us within two weeks and the quality was immediately clear. Our pipeline hasn't been this full in months.",
    name: 'Startup Founder',
    company: 'SaaS Company',
    role: 'Appointment Setter Placement',
    placeholder: true,
  },
  {
    quote: "I was drowning in support tickets. The rep RemoteEdge placed was professional, responsive, and required almost no onboarding. Our response time dropped by 60% in the first month.",
    name: 'Agency Owner',
    company: 'Digital Agency',
    role: 'Customer Support Placement',
    placeholder: true,
  },
];

const ResultsPage = () => {
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
              Proof of outcomes
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-gray-900 mb-6">
              Real Clients. <span className="text-accent">Real Results.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We are building a track record of high-performance placements. Here is what that looks like so far.
            </p>
          </motion.div>
        </section>

        {/* Case Study */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Case Study
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Placement
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm"
            >
              {/* Top label bar */}
              <div className="bg-accent/5 border-b border-accent/10 px-8 py-3">
                <span className="text-accent text-sm font-semibold">Content Creator — Virtual Assistant Placement</span>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </div>
                      <h3 className="text-gray-900 font-bold text-base">The Problem</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Struggling with operational consistency and content workflow. Spending too much time managing logistics instead of creating content.
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <h3 className="text-gray-900 font-bold text-base">The Solution</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      RemoteEdge placed a pre-vetted virtual assistant who took over scheduling, inbox management, and operational coordination.
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-gray-900 font-bold text-base">The Result</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Improved operations, more consistent output, and the founder freed up to focus entirely on creating content and growing the brand.
                    </p>
                  </div>
                </div>

                {/* Pull quote */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-accent/20 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed italic">
                        "It changed how I run my business. I finally have the bandwidth to focus on what I do best."
                      </p>
                      <p className="text-gray-400 text-sm mt-3">— RemoteEdge Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
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
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col"
                >
                  <svg className="w-8 h-8 text-accent/20 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-900 font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{testimonial.company}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-accent bg-accent/5 px-2.5 py-1 rounded-full">
                      {testimonial.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results At a Glance */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                By The Numbers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Results At a Glance
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: '14', label: 'Days Average Match Time' },
                { stat: '<5%', label: 'Candidate Acceptance Rate' },
                { stat: '30', label: 'Day Replacement Guarantee' },
                { stat: '100%', label: 'Client Satisfaction' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
                >
                  <p className="text-accent font-bold text-3xl md:text-4xl mb-2">{item.stat}</p>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 bg-white">
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
                  Want Results Like These?
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
                  Book a free discovery call and let us match you with pre-vetted talent that delivers.
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

export default ResultsPage;
