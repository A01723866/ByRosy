import React, { useState, useEffect } from 'react';

const ByRosyHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Check if we're at the top of the page
      setAtTop(currentScrollPos < 10);
      
      // Set the header visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        !visible ? '-translate-y-full' : ''
      } ${atTop ? 'py-6 bg-transparent' : 'py-4 bg-white/90 shadow-sm backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="/" 
          className={`text-2xl font-bold transition-colors ${atTop ? 'text-white' : 'text-deep-charcoal'}`}
          style={{fontFamily: 'var(--font-family-playfair)'}}
        >
          ByRosy
        </a>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#about" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                About Rosy
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ByRosyHeader; 