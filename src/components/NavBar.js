import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Lottie from 'lottie-react';
import assets from '../constants';

export const NavBar = () => {
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
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="index.html">
            <Lottie animationData={assets.logo} loop={true} size={1} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#achievements"
                className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('achievements')}
              >
                Career
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#certifications"
                className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('certifications')}
              >
                Certificates
              </Nav.Link>
              <Nav.Link
                href="#papers"
                className={activeLink === 'papers' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('papers')}
              >
                Papers
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/sinda-besrour-6a9459175/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={assets.linkedin} alt="" />
                </a>
                <a href="https://github.com/Sinda271" rel="noreferrer" target="_blank">
                  <img src={assets.github} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/sinda.besrour.9/photos_by"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={assets.facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/sinda.besrour/" rel="noreferrer" target="_blank">
                  <img src={assets.instagram} alt="" />
                </a>
              </div>
              <a
                href="#hireme"
                className={activeLink === 'hireme' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('hireme')}
              >
                <button className="vvd">
                  <span>Interested?</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
