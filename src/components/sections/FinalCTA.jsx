import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-accent rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Stop Doing Everything Yourself?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Book a free discovery call today. Tell us what you need — we'll match you with pre-vetted remote talent in 14 days.
            </p>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-white hover:bg-gray-50 text-accent font-semibold rounded-full text-base transition-colors shadow-lg"
              >
                Book a Free Discovery Call
              </Link>
            </motion.div>

            <p className="text-white/60 text-sm mt-6">
              No commitment. No pitch. Just a conversation about what you need.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
