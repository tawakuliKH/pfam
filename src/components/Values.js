import React from 'react';
import { useTranslation } from 'react-i18next';

const Values = () => {
  const { t } = useTranslation();

  const values = [
    {
      id: 1,
      key: 'choice',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="1.5">
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      key: 'equality',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      key: 'collaboration',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8v6M23 11h-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="values" className="py-5 values-section">
      <div className="container">
        <h2 className="section-title">{t('values.title')}</h2>
        <div className="row g-4">
          {values.map((value) => (
            <div key={value.id} className="col-md-4">
              <div className="value-card bg-white shadow-sm animate__animated">
                <div className="card-icon-container">
                  {value.icon}
                </div>
                <h5>{t(`values.cards.${value.key}.title`)}</h5>
                <p>
                  {t(`values.cards.${value.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;