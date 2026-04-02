import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const roles = [
  {
    title: 'Appointment Setters',
    outcome: 'Fill your calendar with qualified calls — consistently, without chasing leads yourself.',
    href: '/roles/appointment-setters',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    outcome: 'Give every customer a fast, professional response — without stretching your team thin.',
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
    outcome: 'Take the operational load off your plate so you can focus on what actually grows the business.',
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

const RolesOverview = () => {
  return (
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
            Who We Help You Hire
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Three high-impact roles, pre-vetted and ready to work. Each one matched to your specific needs.
          </p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {role.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {role.outcome}
              </p>
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
  );
};

export default RolesOverview;
