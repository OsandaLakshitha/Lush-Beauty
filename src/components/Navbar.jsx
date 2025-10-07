import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    ];

  const handleHashLink = (e, path) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-display font-bold tracking-tight">
              <span className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Lush
              </span>
              <span className={`font-light italic ${scrolled ? 'text-[#C4A484]' : 'text-white/90'}`}>
                {' '}Beauty
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={(e) => handleHashLink(e, item.path)}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#C4A484]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#C4A484] text-white px-7 py-3 text-sm font-medium tracking-wider hover:bg-[#B39374] transition-all duration-300 hover:shadow-lg">
              BOOK NOW
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-6 bg-white rounded-sm shadow-lg overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={(e) => handleHashLink(e, item.path)}
                    className="block text-gray-700 hover:text-[#C4A484] py-2 border-b border-gray-100 last:border-0 font-medium tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="w-full bg-[#C4A484] text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-[#B39374] transition-colors">
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;