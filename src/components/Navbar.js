import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopLanguageOpen, setIsDesktopLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languageRef = useRef(null);
  const menuRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsDesktopLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.navbar-toggler')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 const handleLanguageChange = (lng) => {
    import('../i18n').then(module => {
      module.changeLanguage(lng);
    });
    setIsDesktopLanguageOpen(false);
    setIsMobileLanguageOpen(false);
    closeMobileMenu();
  };

  const toggleDesktopLanguageDropdown = () => {
    setIsDesktopLanguageOpen(!isDesktopLanguageOpen);
  };

  const toggleMobileLanguageDropdown = () => {
    setIsMobileLanguageOpen(!isMobileLanguageOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDesktopLanguageOpen(false);
    setIsMobileLanguageOpen(false);
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
            <span className="brand-text-sm">{t('navbar.subtitle')}</span>
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
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        />
        
        {/* Mobile Menu Sidebar */}
        <div 
          ref={menuRef}
          className={`mobile-menu-sidebar ${isMenuOpen ? 'active' : ''}`}
        >
          {/* Close Button */}
          <button 
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-chevron-left"></i>
            <span>Close</span>
          </button>

          {/* Menu Items */}
          <div className="mobile-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, 'home')}>
                  <i className="fas fa-home me-2"></i>
                  {t('navbar.home')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#values" onClick={(e) => handleNavClick(e, 'values')}>
                  <i className="fas fa-heart me-2"></i>
                  {t('navbar.values')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#story" onClick={(e) => handleNavClick(e, 'story')}>
                  <i className="fas fa-book me-2"></i>
                  {t('navbar.story')}
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#news-stories" onClick={(e) => handleNavClick(e, 'news-stories')}>
                  <i className="fas fa-newspaper me-2"></i>
                  {t('navbar.news')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>
                  <i className="fas fa-images me-2"></i>
                  {t('navbar.gallery')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  <i className="fas fa-envelope me-2"></i>
                  {t('navbar.contact')}
                </a>
              </li>
              
              <li className="nav-item donate-wrapper">
                <a className="nav-link donate-btn" href="#donate" onClick={(e) => handleNavClick(e, 'donate')}>
                  <i className="fas fa-hand-holding-heart me-2"></i>
                  {t('navbar.donate')}
                </a>
              </li>

              {/* Language Switcher for Mobile */}
              <li className="nav-item language-switcher-mobile">
                <div className="language-container">
                  <button 
                    className="nav-link language-toggle"
                    onClick={toggleMobileLanguageDropdown}
                  >
                    <i className="fas fa-globe me-2"></i>
                    {getCurrentLanguageName()}
                    <i className={`fas fa-chevron-${isMobileLanguageOpen ? 'up' : 'down'} ms-2`}></i>
                  </button>
                  
                  {isMobileLanguageOpen && (
                    <div className="language-dropdown-mobile">
                      <button 
                        className="language-option"
                        onClick={() => handleLanguageChange('en')}
                      >
                        <i className="fas fa-language me-2"></i>
                        English
                      </button>
                      <button 
                        className="language-option"
                        onClick={() => handleLanguageChange('de')}
                      >
                        <i className="fas fa-language me-2"></i>
                        Deutsch
                      </button>
                      <button 
                        className="language-option"
                        onClick={() => handleLanguageChange('fa')}
                      >
                        <i className="fas fa-language me-2"></i>
                        فارسی
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
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

            {/* Desktop Language Switcher */}
            <li className="nav-item language-switcher" ref={languageRef}>
              <div className="language-container">
                <button 
                  className="nav-link language-toggle"
                  onClick={toggleDesktopLanguageDropdown}
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
                  <i className={`fas fa-chevron-${isDesktopLanguageOpen ? 'up' : 'down'} ms-1`} style={{ fontSize: '0.7rem' }}></i>
                </button>
                
                {isDesktopLanguageOpen && (
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