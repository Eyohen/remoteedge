import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Hire Talent', href: '/hire' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="font-extrabold text-xl tracking-wider text-gray-900">
            REMOTE<span className="text-accent">EDGE</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book a Call Button */}
          <Link
            to="/contact"
            className="hidden lg:block px-5 py-2.5 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-all shadow-sm shadow-accent/20"
          >
            Book a Call
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gray-900 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-1 p-4 bg-white border border-gray-100 rounded-2xl shadow-lg animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block py-2.5 text-sm font-medium ${
                isActive(link.href) ? 'text-accent' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 block w-full py-2.5 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-all text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
