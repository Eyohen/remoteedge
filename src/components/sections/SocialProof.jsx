import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3 text-center">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Real Clients. Real Results.
          </h2>

          {/* Testimonial card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <svg className="w-10 h-10 text-accent/20 mb-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-6">
              "Since placing a virtual assistant through RemoteEdge, my operations have become significantly more consistent. I can focus on creating content instead of managing every moving part. It changed how I run my business."
            </blockquote>
            <div className="mb-8">
              <p className="text-gray-900 font-semibold text-sm">Content Creator</p>
              <p className="text-gray-400 text-sm">RemoteEdge Client</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl">14</p>
                <p className="text-gray-400 text-xs mt-1">Days Average Match</p>
              </div>
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl">&lt;5%</p>
                <p className="text-gray-400 text-xs mt-1">Acceptance Rate</p>
              </div>
              <div className="text-center">
                <p className="text-accent font-bold text-2xl md:text-3xl">30</p>
                <p className="text-gray-400 text-xs mt-1">Day Guarantee</p>
              </div>
            </div>
          </div>

          {/* Link to results */}
          <div className="text-center mt-10">
            <Link
              to="/results"
              className="text-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              See All Results
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
