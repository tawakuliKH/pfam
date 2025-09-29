import React from 'react';
import { useTranslation } from 'react-i18next';

const Issues = () => {
  const { t } = useTranslation();

  const issues = [
    {
      key: 'violence',
      icon: t('issues.items.violence.icon')
    },
    {
      key: 'education', 
      icon: t('issues.items.education.icon')
    },
    {
      key: 'political',
      icon: t('issues.items.political.icon')
    },
    {
      key: 'extremism',
      icon: t('issues.items.extremism.icon')
    }
  ];

  return (
    <section id="issues" className="py-5 issues-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">{t('issues.title')}</h2>
        <div className="row">
          {issues.map((issue, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="issue-item d-flex align-items-start p-4">
                <div className="issue-icon-wrapper me-4">
                  <span className="issue-icon">{issue.icon}</span>
                </div>
                <div className="issue-content">
                  <h4 className="issue-title mb-3">
                    {t(`issues.items.${issue.key}.title`)}
                  </h4>
                  <p className="issue-description mb-0">
                    {t(`issues.items.${issue.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;