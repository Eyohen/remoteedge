import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const checklistItems = [
  'You need someone to own your sales pipeline',
  'You want to free up your time without hiring locally',
  "You've tried freelancers and it didn't work",
  'You need customer-facing support but can\'t afford a full-time local hire',
  'You want a reliable professional — not another Upwork gamble',
];

const roles = [
  {
    title: 'Appointment Setters',
    outcomes: [
      'A consistently full pipeline of qualified calls',
      'Cold outreach and follow-ups handled daily',
      'CRM management and lead tracking taken off your plate',
    ],
    href: '/roles/appointment-setters',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    outcomes: [
      'Fast, professional responses to every customer',
      'Ticket queues managed without your involvement',
      'Customer satisfaction scores that actually improve',
    ],
    href: '/roles/customer-support',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    title: 'Virtual Assistants',
    outcomes: [
      'Admin, scheduling, and inbox management handled',
      'Operational consistency without micromanaging',
      'More hours in your day to focus on growth',
    ],
    href: '/roles/virtual-assistants',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Book a Free Discovery Call',
    description: 'A 15–20 minute call where we learn about your business, your team, and the role you need filled. No pitch — just a conversation.',
  },
  {
    number: '02',
    title: 'Share Your Requirements',
    description: 'We dig into specifics: skills, experience level, timezone preferences, tools they need to know, and how they\'ll fit into your workflow.',
  },
  {
    number: '03',
    title: 'Get Matched Within 14 Days',
    description: 'We search our pre-vetted talent pool and present you with a candidate who matches your criteria. One strong match — not a stack of resumes.',
  },
  {
    number: '04',
    title: 'Interview & Hire',
    description: 'You interview the candidate directly. If they\'re the right fit, they start. If not, we go back and find someone who is — at no extra cost.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'We don\'t disappear after the placement. We check in, ensure performance is on track, and handle any issues that come up.',
  },
];

const differentiators = [
  {
    title: 'Pre-vetted & Trained Talent',
    description: 'Every candidate has passed our multi-stage screening. They\'re ready to work on day one.',
  },
  {
    title: 'Matched in 14 Days, Not 14 Weeks',
    description: 'No endless hiring cycles. We move fast without cutting corners on quality.',
  },
  {
    title: 'Cost-Efficient Without Compromise',
    description: 'Access top-tier professionals at a fraction of the cost of local hires — without sacrificing quality.',
  },
  {
    title: 'Professionals Who Show Up',
    description: 'No ghosting, no missed deadlines. Our talent is reliable, communicative, and accountable.',
  },
  {
    title: '30-Day Replacement Guarantee',
    description: 'If the placement isn\'t right within 30 days, we replace them at no additional cost. Zero risk.',
  },
];

const qualityPoints = [
  {
    title: 'Less Than 5% Accepted',
    description: 'We reject the vast majority of applicants. Only the top performers make it into our talent pool.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    title: 'Multi-Stage Vetting',
    description: 'Skills assessments, structured interviews, and reference checks — before anyone gets listed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Training',
    description: 'Continuous coaching on communication, tools, and client-specific workflows to keep standards high.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

const HireTalentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 bg-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Hire with confidence
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-gray-900 mb-6">
              Access the Top 1% of Pre-Vetted Remote Talent
              <span className="text-accent"> — Without the Hiring Headache.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              You've tried freelancers. You've wasted time on bad hires. This is how you get it right.
            </p>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full text-base transition-colors shadow-lg shadow-accent/25"
              >
                Book a Free Discovery Call
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3 text-center">
                Is This You?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                This Is For You If...
              </h2>
              <div className="space-y-4">
                {checklistItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roles Overview */}
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
                Roles We Place
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Three Roles. Real Outcomes.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
                  <ul className="space-y-2.5 mb-5">
                    {role.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-gray-500 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={role.href}
                    className="text-accent font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How the Process Works */}
        <section className="py-20 md:py-28 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                The Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works — Step by Step
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Every step is designed to get you the right hire, fast — with zero guesswork on your end.
              </p>
            </motion.div>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md shadow-accent/20">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-full bg-gray-200 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-gray-900 font-semibold text-lg mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiation — Why RemoteEdge */}
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
                Why RemoteEdge
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Don't Send You Options. We Send You a Match.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Keep the Bar High */}
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
                Quality Assurance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Keep the Bar High
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualityPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Guarantee */}
        <section className="py-20 md:py-28 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The 30-Day Replacement Guarantee
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                If the placement is not the right fit within the first 30 days, we replace them at no additional cost. No risk. No hassle. No fine print.
              </p>
              <div className="inline-flex items-center gap-3 bg-accent/5 border border-accent/10 rounded-full px-6 py-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">Your investment is protected from day one</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
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
                  Let's Find Your Next Hire.
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
                  No commitment. Just a conversation about what you need and how we can help.
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

export default HireTalentPage;
