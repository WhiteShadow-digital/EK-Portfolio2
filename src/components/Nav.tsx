import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Intel', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" onClick={() => handleNav('#home')}>
            <div className="w-10 h-12 -skew-x-12 bg-crimson flex items-center justify-center group-hover:bg-crimson-600 transition-colors duration-200">
              <span className="skew-x-12 font-display font-black text-white text-sm tracking-wider">EK</span>
            </div>
            <div className="hidden sm:block leading-none">
              <p className="font-display font-black text-white text-sm uppercase tracking-widest">Ethan</p>
              <p className="font-display font-black text-white text-sm uppercase tracking-widest mt-1">Krewu</p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNav(item.href)}
                className={`nav-item relative px-3 py-2 font-display font-semibold text-xs uppercase tracking-widest transition-colors duration-200 group ${
                  active === item.href ? 'text-crimson' : 'text-charcoal-200 hover:text-white'
                }`}
              >
                <span className="text-crimson/40 text-[10px] mr-1 font-oswald">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
                <span className="nav-indicator" />
              </a>
            ))}
          </div>

          {/* Connect CTA */}
          <a
            href="#contact"
            onClick={() => handleNav('#contact')}
            className="hidden lg:flex items-center gap-3 bg-crimson text-white font-display font-bold text-xs uppercase tracking-widest px-5 py-4 hover:bg-crimson-700 transition-all duration-200 hover:scale-105"
          >
            Connect <span className="text-lg leading-none">↗</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white hover:text-crimson transition-colors duration-200 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 flex flex-col justify-center px-8 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative */}
        <div className="absolute top-24 right-8 w-32 h-32 border border-crimson/20 rotate-12 pointer-events-none" />
        <div className="absolute bottom-24 left-8 w-20 h-20 border border-crimson/10 -rotate-6 pointer-events-none" />

        <div className="space-y-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNav(item.href)}
              className={`flex items-center gap-4 py-4 border-b border-white/5 group transition-all duration-200 ${
                mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
            >
              <span className="font-oswald text-crimson text-sm w-8">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-display font-black text-3xl uppercase tracking-tight text-white group-hover:text-crimson transition-colors duration-200">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => handleNav('#contact')}
          className="mt-8 btn-primary text-center"
        >
          Let's Connect
        </a>
      </div>
    </>
  );
}
