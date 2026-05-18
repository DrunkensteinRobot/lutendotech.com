import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scrolling to add dynamic backdrop border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy observer for highlighting active navigation elements
  useEffect(() => {
    const sections = ['home', 'services', 'results', 'pricing', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies main center view
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Home', target: '#home', id: 'home' },
    { label: 'Services', target: '#services', id: 'services' },
    { label: 'Results', target: '#results', id: 'results' },
    { label: 'Pricing', target: '#pricing', id: 'pricing' },
    { label: 'Contact', target: '#contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-dark/30 py-3.5 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Branding Logo */}
        <a href="#home" className="flex items-center gap-2.5 group select-none">
          <div className="w-8.5 h-8.5 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
            LK
          </div>
          <span className="font-bold text-text-dark text-base tracking-wide group-hover:text-accent transition-colors duration-200">
            LK Digital Solutions
          </span>
        </a>

        {/* Desktop Navigation Link Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.target}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-accent font-semibold'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA action button */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary py-2 px-5 text-xs font-semibold rounded-lg">
            Book a discovery call
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="block md:hidden text-text-dark hover:text-accent focus:outline-none p-1 shrink-0"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-bg-primary/95 backdrop-blur-lg z-40 flex flex-col justify-between p-8 border-t border-border-dark/30 animate-fadeIn">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.target}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-semibold tracking-wide transition-colors duration-200 py-1.5 border-b border-border-light ${
                  activeSection === link.id
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pb-12">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary text-center block"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
