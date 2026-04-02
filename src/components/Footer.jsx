import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Hire Talent', href: '/hire' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const roleLinks = [
  { name: 'Appointment Setters', href: '/roles/appointment-setters' },
  { name: 'Customer Support', href: '/roles/customer-support' },
  { name: 'Virtual Assistants', href: '/roles/virtual-assistants' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-extrabold text-lg tracking-wider text-white">
              REMOTE<span className="text-accent">EDGE</span>
            </Link>
            <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
              Pre-vetted remote talent from Africa & Latin America. Matched in 14 days with a 30-day replacement guarantee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Roles</h4>
            <ul className="space-y-2.5">
              {roleLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get Started</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ready to hire? Book a free discovery call and get matched with top talent.
            </p>
            <Link
              to="/contact"
              className="inline-block px-5 py-2 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-all"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; 2026 RemoteEdge. All rights reserved.
          </p>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
