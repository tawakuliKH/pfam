import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languageRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

const handleLanguageChange = (lng) => {
  // Import the changeLanguage function
  import('../i18n').then(module => {
    module.changeLanguage(lng);
  });
  setIsLanguageOpen(false);
  closeMobileMenu();
};
  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Handle page navigation with scroll to top
    if (targetId === 'news-stories') {
      navigate('/news');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      closeMobileMenu();
      return;
    }

    if (targetId === 'gallery') {
      navigate('/gallery');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      closeMobileMenu();
      return;
    }

    // Handle Home navigation
    if (targetId === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
      closeMobileMenu();
      return;
    }
    
    // Handle section navigation (Values, Story, Contact, Donate)
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    closeMobileMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  };

  // Get current language display name
  const getCurrentLanguageName = () => {
    switch(i18n.language) {
      case 'en': return 'EN';
      case 'de': return 'DE';
      case 'fa': return 'FA';
      default: return 'EN';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <div className="logo">
          <a className="navbar-brand" href="/" onClick={handleHomeClick}>
            <img src={logo} alt="Logo" />
            <span className="brand-text">{t('navbar.title')}</span>
            <span className="brand-text-sm">{t('navbar.title')}</span>
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
              <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, 'home')}>
                {t('navbar.home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#values" onClick={(e) => handleNavClick(e, 'values')}>
                {t('navbar.values')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#story" onClick={(e) => handleNavClick(e, 'story')}>
                {t('navbar.story')}
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#news-stories" onClick={(e) => handleNavClick(e, 'news-stories')}>
                {t('navbar.news')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>
                {t('navbar.gallery')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                {t('navbar.contact')}
              </a>
            </li>
            
            <li className="nav-item donate-wrapper">
              <a className="nav-link donate-btn" href="#donate" onClick={(e) => handleNavClick(e, 'donate')}>
                {t('navbar.donate')}
              </a>
            </li>

            {/* Custom Language Switcher */}
            <li className="nav-item language-switcher" ref={languageRef}>
              <div className="language-container">
                <button 
                  className="nav-link language-toggle"
                  onClick={toggleLanguageDropdown}
                  style={{ 
                    fontSize: '0.9rem', 
                    padding: '0.5rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-globe me-1"></i>
                  {getCurrentLanguageName()}
                  <i className={`fas fa-chevron-${isLanguageOpen ? 'up' : 'down'} ms-1`} style={{ fontSize: '0.7rem' }}></i>
                </button>
                
                {isLanguageOpen && (
                  <div className="language-dropdown">
                    <button 
                      className="language-option"
                      onClick={() => handleLanguageChange('en')}
                    >
                       English
                    </button>
                    <button 
                      className="language-option"
                      onClick={() => handleLanguageChange('de')}
                    >
                       Deutsch
                    </button>
                    <button 
                      className="language-option"
                      onClick={() => handleLanguageChange('fa')}
                    >
                       فارسی
                    </button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;