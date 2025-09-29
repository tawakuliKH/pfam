import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactDetails = [
    {
      key: 'director',
      icon: 'fas fa-user'
    },
    {
      key: 'email', 
      icon: 'fas fa-envelope'
    },
    {
      key: 'phone',
      icon: 'fas fa-phone'
    },
    {
      key: 'linkedin',
      icon: 'fab fa-linkedin'
    },
    {
      key: 'address',
      icon: 'fas fa-map-marker-alt'
    }
  ];

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="text-center mb-5 lead">{t('contact.subtitle')}</p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow contact-card">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-info text-center">
                      <p>{t('contact.description')}</p>
                      
                      <div className="row mt-5">
                        {contactDetails.slice(0, 3).map((detail) => (
                          <div key={detail.key} className="col-md-4">
                            <div className="contact-detail">
                              <div className="icon-box">
                                <i className={detail.icon}></i>
                              </div>
                              <div className="detail-content">
                                <h5>{t(`contact.details.${detail.key}.title`)}</h5>
                                <p>
                                  {detail.key === 'linkedin' ? (
                                    <a
                                      href={t(`contact.details.${detail.key}.url`)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {t(`contact.details.${detail.key}.linkText`)}
                                    </a>
                                  ) : (
                                    t(`contact.details.${detail.key}.value`)
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="row mt-4">
                        {contactDetails.slice(3).map((detail) => (
                          <div key={detail.key} className="col-md-6">
                            <div className="contact-detail">
                              <div className="icon-box">
                                <i className={detail.icon}></i>
                              </div>
                              <div className="detail-content">
                                <h5>{t(`contact.details.${detail.key}.title`)}</h5>
                                <p>
                                  {detail.key === 'linkedin' ? (
                                    <a
                                      href={t(`contact.details.${detail.key}.url`)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {t(`contact.details.${detail.key}.linkText`)}
                                    </a>
                                  ) : (
                                    t(`contact.details.${detail.key}.value`)
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;