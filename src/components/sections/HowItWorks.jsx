import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Book a Free Call',
    description: 'Schedule a quick discovery call to tell us about your business and what you need.',
  },
  {
    number: '02',
    title: 'Share Your Needs',
    description: 'We dig into your requirements — role, skills, timezone, and work style preferences.',
  },
  {
    number: '03',
    title: 'Get Matched',
    description: 'Within 14 days, we present you with a pre-vetted candidate who fits your criteria.',
  },
  {
    number: '04',
    title: 'Interview & Hire',
    description: 'You interview the candidate. If it is a fit, they start. If not, we rematch — no extra cost.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'We stay involved to ensure the placement works. Replacement guarantee included.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
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
            How It Works
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            From first call to perfect hire — in five straightforward steps.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-gray-200" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mb-5 relative z-10 shadow-md shadow-accent/20">
                    {step.number}
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md shadow-accent/20">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-gray-200 min-h-[3rem]" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-gray-900 font-semibold text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
