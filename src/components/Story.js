import React from 'react';
import { useTranslation } from 'react-i18next';
import begining from '../assets/begining.jpeg';

const Story = () => {
  const { t } = useTranslation();

  return (
    <section id="story" className="container py-5 story-section">
      <h2 className="section-title">{t('story.title')}</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-lg">
            <img
              src={begining}
              className="card-img-top"
              alt={t('story.imageAlt')}
            />
            <div className="card-body">
              <p className="card-text text-center">
                {t('story.imageCaption')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="lead">
            {t('story.lead')}
          </p>
          <p>
            {t('story.paragraph1')}
          </p>
          <p>
            {t('story.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;