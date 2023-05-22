import { useState, useEffect } from 'react';

export const HireMe = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="hireme" id="hireme">
      <div className="hireme-bx">
        <div className="hireme-img"></div>
        <h1>Interested in working with me?</h1>
        <a
          href="#contacts"
          className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'}
          onClick={() => onUpdateActiveLink('contacts')}
        >
          <button>Hire Me!</button>
        </a>
      </div>
    </section>
  );
};
