import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (targetId === 'news-stories') {
      navigate('/news');
      closeMobileMenu();
      return;
    }

    if (targetId === 'gallery') {
      navigate('/gallery');
      closeMobileMenu();
      return;
    }
    
    // For other sections, scroll within the current page
    if (window.location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    closeMobileMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <div className="logo">
          <a className="navbar-brand" href="/" onClick={handleHomeClick}>
            <img src={logo} alt="Logo" />
            <span className="brand-text">Progressive Forces of Afghanistan</span>
            <span className="brand-text-sm">PFA Movement</span>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#values" onClick={(e) => handleNavClick(e, 'values')}>Values</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#story" onClick={(e) => handleNavClick(e, 'story')}>Our Story</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#news-stories" onClick={(e) => handleNavClick(e, 'news-stories')}>News|Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </li>
            <li className="nav-item donate-wrapper">
              <a className="nav-link donate-btn" href="#donate" onClick={(e) => handleNavClick(e, 'donate')}>Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;