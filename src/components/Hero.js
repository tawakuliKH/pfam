import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleSupportClick = (e) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const donateSection = document.getElementById('donate');
        if (donateSection) {
          donateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      const donateSection = document.getElementById('donate');
      if (donateSection) {
        donateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Check if current language is RTL
  const isRTL = ['fa'].includes(i18n.language);

  return (
    <section className="hero">
      <div className="container">
        <h1 
          className="animate__animated animate__fadeInDown"
        
        >
          {t('hero.title')}
        </h1>
        <p 
          className="animate__animated animate__fadeIn animate__delay-1s"
        
        >
          {t('hero.subtitle')}
        </p>
        <a 
          href="#donate" 
          className="btn btn-primary btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s"
          onClick={handleSupportClick}
        >
          {t('hero.supportButton')}
        </a>
      </div>
    </section>
  );
};

export default Hero;