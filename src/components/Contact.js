import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa'; // Check if current language is Persian

  const contactDetails = [
    {
      key: 'director',
      icon: 'fas fa-user',
      type: 'text'
    },
    {
      key: 'directorEmail', 
      icon: 'fas fa-envelope',
      type: 'email',
      emailType: 'director'
    },
    {
      key: 'contactEmail', 
      icon: 'fas fa-envelope',
      type: 'email',
      emailType: 'team'
    },
    {
      key: 'phone',
      icon: 'fas fa-phone',
      type: 'phone'
    },
    {
      key: 'linkedin',
      icon: 'fab fa-linkedin',
      type: 'link'
    },
    {
      key: 'address',
      icon: 'fas fa-map-marker-alt',
      type: 'text'
    }
  ];

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'phone':
        // Clean the phone number for tel: protocol (remove any formatting)
        const cleanPhone = value.replace(/[^\d+]/g, '');
        window.open(`tel:${cleanPhone}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'link':
        window.open(value, '_blank', 'noopener noreferrer');
        break;
      default:
        break;
    }
  };

  const formatPhoneNumber = (phone, isRTL) => {
    if (!isRTL) return phone;
    
    // For Persian/RTL, reverse the numbers for proper display
    // But keep the actual tel: link in international format
    return phone.split('').reverse().join('');
  };

  const renderContactValue = (detail) => {
    const value = t(`contact.details.${detail.key}.value`);
    const url = t(`contact.details.${detail.key}.url`);
    const linkText = t(`contact.details.${detail.key}.linkText`);

    if (detail.type === 'link') {
      return (
        <button
          className="contact-link-btn"
          onClick={() => handleContactClick('link', url)}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <span className="link-text">{linkText}</span>
          <i className="fas fa-external-link-alt link-icon"></i>
        </button>
      );
    }

    if (detail.type === 'phone') {
      const displayNumber = formatPhoneNumber(value, isRTL);
      return (
        <button
          className={`contact-action-btn ${detail.type}`}
          onClick={() => handleContactClick(detail.type, value)}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <span className="action-text">{displayNumber}</span>
          <i className={`fas fa-phone action-icon ${isRTL ? 'rtl-icon' : ''}`}></i>
        </button>
      );
    }

    if (detail.type === 'email') {
      return (
        <button
          className={`contact-action-btn ${detail.type} ${detail.emailType}`}
          onClick={() => handleContactClick(detail.type, value)}
          dir="ltr" // Email should always be LTR
        >
          <span className="action-text">{value}</span>
          <i className="fas fa-envelope action-icon"></i>
        </button>
      );
    }

    return (
      <span 
        className="contact-text" 
        dir={isRTL && detail.key === 'address' ? 'rtl' : 'ltr'}
      >
        {value}
      </span>
    );
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-header">
              <div className="contact-avatar">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="contact-greeting">{t('contact.description')}</h3>
            </div>

            <div className="contact-grid">
              {contactDetails.map((detail, index) => (
                <div key={detail.key} className="contact-item">
                  <div className="contact-icon-wrapper">
                    <i className={detail.icon}></i>
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-label">{t(`contact.details.${detail.key}.title`)}</h4>
                    <div className="contact-value">
                      {renderContactValue(detail)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;