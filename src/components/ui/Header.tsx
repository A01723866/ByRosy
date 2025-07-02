import React, { useState, useEffect } from 'react';

const ByRosyHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('byrosy');
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Check if we're at the top of the page
      setAtTop(currentScrollPos < 10);
      
      // Set the header visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    // Listen for section changes
    const handleSectionChange = () => {
      const byrosySections = document.getElementById('byrosy-sections');
      const realestateSections = document.getElementById('realestate-sections');
      
      if (byrosySections && byrosySections.classList.contains('active')) {
        setActiveSection('byrosy');
      } else if (realestateSections && realestateSections.classList.contains('active')) {
        setActiveSection('realestate');
      }
    };

    // Initial check
    handleSectionChange();
    
    window.addEventListener('scroll', handleScroll);
    
    // Check for section changes periodically
    const interval = setInterval(handleSectionChange, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  const byrosyNavItems = [
    { href: '#about', label: 'About Rosy' },
    { href: '#services', label: 'Servicios' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contacto' }
  ];

  const realestateNavItems = [
    { href: '#realestate-about', label: 'Inicio' },
    { href: '#realestate-aboutme', label: 'Servicios' },
    { href: '#contact', label: 'Contacto' }
  ];

  const currentNavItems = activeSection === 'byrosy' ? byrosyNavItems : realestateNavItems;
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        !visible ? '-translate-y-full' : ''
      } ${atTop ? 'py-4 md:py-6 bg-transparent' : 'py-3 md:py-4 bg-white/90 shadow-sm backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <button
          onClick={scrollToHero}
          className={`text-xl md:text-2xl font-bold transition-colors ${atTop ? 'text-white' : 'text-deep-charcoal'} hover:opacity-80`}
          style={{fontFamily: 'var(--font-family-playfair)'}}
        >
          {activeSection === 'byrosy' ? 'ByRosy' : 'Real Estate'}
        </button>
        
        {/* Hamburger button for mobile */}
        <button 
          className={`md:hidden z-50 ${atTop || menuOpen ? 'text-white' : 'text-deep-charcoal'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {currentNavItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                    atTop ? 'text-white' : 'text-deep-charcoal'
                  }`}
                  style={{fontFamily: 'var(--font-family-inter)'}}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/90 z-40 flex items-center justify-center transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              {currentNavItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-xl text-white hover:text-gold-accent transition-colors"
                    style={{fontFamily: 'var(--font-family-playfair)'}}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ByRosyHeader; 