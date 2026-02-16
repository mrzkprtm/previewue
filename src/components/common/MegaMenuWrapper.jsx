import React, { useState, useEffect } from 'react';
import MegaMenu from './MegaMenu.jsx';

export default function MegaMenuWrapper() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);
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
    <nav className="w-full py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 duration-300">
            <img src="/logos/logo-ue.png" alt="Ultimate Education" className="h-12 w-auto" width="512" height="512" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = activePath === item.href || (item.href !== '/' && activePath.startsWith(item.href));

              return (
                <div
                  key={item.label}
                  className="relative px-4 py-2"
                  onMouseEnter={() => item.hasDropdown && setOpenMenuIndex(idx)}
                  onMouseLeave={() => item.hasDropdown && setOpenMenuIndex(null)}
                  style={{ display: 'inline-block' }}
                >
                  <div>
                    <a
                      href={item.href}
                      className={`text-base font-normal font-heading capitalize tracking-wide transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1 ${isActive ? 'text-black' : 'text-[#145da0] hover:text-ultimate-yellow'
                        }`}
                      onClick={(e) => {
                        // Only open dropdown on hover, not click
                        // Clicking 'Program' should always navigate to /program
                        // No preventDefault for dropdown
                      }}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <svg className={`w-3 h-3 transition-transform duration-300 ${openMenuIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>

                    {/* Active/Hover Indicator Underline */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${isActive ? 'w-1/2 opacity-100' : 'w-0 group-hover:w-1/2 opacity-0 group-hover:opacity-100'
                      } bg-ultimate-yellow`}></span>

                    {/* Mega Menu Dropdown */}
                    {item.hasDropdown && openMenuIndex === idx && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[90vw] max-w-7xl z-[1000] animate-in fade-in slide-in-from-top-4 duration-300"
                        onMouseEnter={() => setOpenMenuIndex(idx)}
                        onMouseLeave={() => setOpenMenuIndex(null)}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                          <MegaMenu isOpen={true} onClose={() => setOpenMenuIndex(null)} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-[#145da0] hover:bg-[#145da0]/10"
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-drawer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`lg:hidden fixed top-0 right-0 h-screen w-[280px] z-[999] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 flex flex-col h-full bg-ultimate-navy text-white">
          <div className="flex items-center justify-between mb-10">
            <div className="font-heading font-extrabold text-xl">ULTIMATE<span className="text-ultimate-yellow">.</span></div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/10 rounded-full hover:bg-white/20" aria-label="Tutup menu navigasi">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activePath === item.href || (item.href !== '/' && activePath.startsWith(item.href));
              return (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className={`text-lg font-normal font-heading py-3 flex items-center justify-between group ${isActive ? 'text-ultimate-yellow' : 'text-slate-300'
                      }`}
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && <span className="text-base">▾</span>}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 border-l-2 border-white/10 mt-1 flex flex-col gap-2">
                      {/* Mobile sub-menu items could go here */}
                      <a href="/persiapan-ielts" className="text-base py-2 text-slate-400">Ultimate IELTS</a>
                      <a href="/beasiswa" className="text-base py-2 text-slate-400">Beasiswa</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
