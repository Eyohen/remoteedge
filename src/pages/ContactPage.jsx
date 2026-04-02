import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactMethods = [
  {
    title: 'Book a Discovery Call',
    description: 'Tell us what role you need, your timeline, and the kind of support your business needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Email Us Directly',
    description: 'Prefer email? Send over your hiring needs and we will get back to you promptly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    title: 'Fast Response',
    description: 'We keep the process simple, clear, and focused on getting you matched quickly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-4 bg-white overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Let’s talk about your next hire
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-gray-900 mb-6">
                Contact Our Team
                <br />
                <span className="text-accent">Start Your Hiring Process.</span>
              </h1>

              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Tell us what kind of support you need and we will help you find pre-vetted remote talent
                matched to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/70 p-6 md:p-8"
              >
                <div className="mb-8">
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                    Contact Form
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Tell Us What You Need
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Share a few details and we will reach out to discuss your hiring goals.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                        Role Needed
                      </label>
                      <select
                        id="role"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a role</option>
                        <option value="appointment-setter">Appointment Setter</option>
                        <option value="customer-support">Customer Support</option>
                        <option value="virtual-assistant">Virtual Assistant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your hiring needs, timeline, and what success looks like for this role."
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full text-base transition-colors shadow-lg shadow-accent/25"
                  >
                    Send Inquiry
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-6 md:p-8">
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                    Why Reach Out
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    A Simple Start to the Right Hire
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                    Whether you need help immediately or you are planning ahead, we will guide you through the next steps.
                  </p>

                  <div className="space-y-4">
                    {contactMethods.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                        className="rounded-2xl bg-white border border-gray-100 p-5"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next</h3>
                  <div className="space-y-4 text-sm text-gray-500">
                    <div className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">01</span>
                      <p className="leading-relaxed pt-1">We review your inquiry and understand the kind of support you need.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">02</span>
                      <p className="leading-relaxed pt-1">We reach out to book a discovery call and clarify your hiring goals.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">03</span>
                      <p className="leading-relaxed pt-1">We begin the matching process and move you toward a qualified candidate.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Less than 5% accepted
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Matched in 14 days
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                30-day replacement guarantee
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
