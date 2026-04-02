import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 text-center px-4 bg-white overflow-hidden">
      {/* Subtle accent gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Pre-vetted talent from Africa & Latin America
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.12] tracking-tight text-gray-900 mb-6">
          Hire Top 1% Remote Talent
          <br />
          <span className="text-accent">Matched in 14 Days.</span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We place pre-vetted appointment setters, support reps, and virtual assistants
          so you can scale without the hiring headache.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full text-base transition-colors shadow-lg shadow-accent/25"
            >
              Book a Free Discovery Call
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href="#how-it-works"
              className="inline-block px-8 py-3.5 border border-gray-200 hover:border-accent/30 text-gray-700 hover:text-accent font-semibold rounded-full text-base transition-all"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Trust indicator strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-400 text-sm"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
