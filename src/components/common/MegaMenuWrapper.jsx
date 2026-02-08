import React, { useState, useEffect } from 'react';
import MegaMenu from './MegaMenu.jsx';

export default function MegaMenuWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Program', href: '/program', hasDropdown: true },
    { label: 'Beasiswa', href: '/beasiswa' },
    { label: 'Kontak', href: '/kontak' },
    { label: 'Mitra', href: '/mitra' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Artikel', href: '/artikel' },
  ];

  return (
    <nav
      className="relative w-full z-[999] bg-white shadow-sm py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-48 h-14 bg-gray-200 rounded overflow-hidden">
              {/* Placeholder for actual logo */}
              <img src="https://placehold.co/200x56" alt="Ultimate Education Logo" className="w-full h-full object-cover" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsMenuOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsMenuOpen(false)}
              >
                <a
                  href={item.href}
                  className="text-base font-medium font-heading transition-colors py-3 block text-gray-800 hover:text-primary"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setIsMenuOpen(!isMenuOpen);
                    }
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1 text-xs">▼</span>
                  )}
                </a>

                {/* Dropdown Indicator Line */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary"></span>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && isMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-7xl z-[1000]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      <MegaMenu isOpen={true} onClose={() => setIsMenuOpen(false)} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '80px' }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="text-lg font-medium text-gray-800 hover:text-primary block py-2"
                onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
              {item.hasDropdown && (
                <div className="pl-4 mt-2 border-l-2 border-gray-100">
                  <MegaMenu mobile={true} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

