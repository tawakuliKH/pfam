import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import tawana from '../assets/employees/tawana.jpeg';
import safi from '../assets/employees/safi.jpeg';
import rad from '../assets/employees/rad.jpeg';
import ibrahim from '../assets/employees/ibrahim.jpeg';
import farahmand from '../assets/employees/farahmand.jpeg';
import whoWeAre from '../assets/who_we_are.jpeg';
import mission_1 from '../assets/mission_1.jpeg';
import mission_2 from '../assets/mission_2.jpeg';
import mission_3 from '../assets/mission_3.jpeg';
import future_1 from '../assets/future_1.jpeg';
import future_2 from '../assets/future_2.jpeg';
import future_3 from '../assets/future_3.jpeg';
import future_4 from '../assets/future_4.jpeg';

const About = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const employees = [
    {
      id: 1,
      name: "Mawloda Tawana",
      position: t('about.employees.tawana.position'),
      image: tawana,
      bio: t('about.employees.tawana.bio'),
      fullBio: t('about.employees.tawana.fullBio')
    },
    {
      id: 2,
      name: "Zohal Rad",
      position: t('about.employees.rad.position'),
      image: rad,
      bio: t('about.employees.rad.bio'),
      fullBio: t('about.employees.rad.fullBio')
    },
    {
      id: 3,
      name: "Fatima Farahmand",
      position: t('about.employees.farahmand.position'),
      image: farahmand,
      bio: t('about.employees.farahmand.bio'),
      fullBio: t('about.employees.farahmand.fullBio')
    },
    {
      id: 4,
      name: "Humaira Ibrahim",
      position: t('about.employees.ibrahim.position'),
      image: ibrahim,
      bio: t('about.employees.ibrahim.bio'),
      fullBio: t('about.employees.ibrahim.fullBio')
    },
    {
      id: 5,
      name: "Qandi Safi",
      position: t('about.employees.safi.position'),
      image: safi,
      bio: t('about.employees.safi.bio'),
      fullBio: t('about.employees.safi.fullBio')
    }
  ];

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="about" className="container py-5 employee-section">
      <h2 className="section-title">{t('about.leadershipTeam.title')}</h2>
      <p className="text-center mb-5 lead" style={{color: 'var(--primary-light)', maxWidth: '600px', margin: '0 auto 50px'}}>
        {t('about.leadershipTeam.subtitle')}
      </p>
      
      <div className="row">
        {employees.map((employee) => (
          <div key={employee.id} className="col-lg-4 col-md-6 mb-4">
            <div className="employee-card">
              <div 
                className="employee-image-container"
                onClick={() => openModal(employee)}
              >
                <img src={employee.image} alt={employee.name} />
              </div>
              
              <h3 
                className="employee-name"
                onClick={() => openModal(employee)}
              >
                {employee.name}
              </h3>
              
              <p className="employee-position">{employee.position}</p>
              <p className="employee-bio">{employee.bio}</p>
              
              <button 
                className="read-more-btn"
                onClick={() => openModal(employee)}
              >
                {t('about.leadershipTeam.readMore')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEmployee && (
        <div className="employee-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-header">
              <img 
                src={selectedEmployee.image} 
                alt={selectedEmployee.name} 
                className="modal-image" 
              />
              <div className="modal-title-container">
                <h2 className="modal-title">{selectedEmployee.name}</h2>
                <p className="modal-subtitle">{selectedEmployee.position}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-bio">
                {selectedEmployee.fullBio
                  .split(/\n\s*\n/)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="back-button" onClick={closeModal}>
                <span className="back-arrow">←</span>
                {t('about.leadershipTeam.backToTeam')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-5 who-we-are-section">
        <div className="container">
          <h2 className="section-title">{t('about.whoWeAre.title')}</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="lead">
                {t('about.whoWeAre.lead')}
              </p>
              <p>
                {t('about.whoWeAre.description1')}
              </p>
              <p>
                {t('about.whoWeAre.description2')}
              </p>
              <div className="impact-stats mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="impact-stat">
                      <h3>10+</h3>
                      <p>{t('about.whoWeAre.stats.countries')}</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="impact-stat">
                      <h3>500+</h3>
                      <p>{t('about.whoWeAre.stats.women')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <img
                  src={whoWeAre}
                  className="card-img-top"
                  alt={t('about.whoWeAre.imageAlt')}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    {t('about.whoWeAre.imageCaption')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section id="mission" className="py-5 mission-section">
        <div className="container">
          <h2 className="section-title">{t('about.mission.title')}</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_1}
                    alt={t('about.mission.equality.title')}
                  />
                </div>
                <h5>{t('about.mission.equality.title')}</h5>
                <p>
                  {t('about.mission.equality.description')}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_2}
                    alt={t('about.mission.violence.title')}
                  />
                </div>
                <h5>{t('about.mission.violence.title')}</h5>
                <p>
                  {t('about.mission.violence.description')}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_3}
                    alt={t('about.mission.opportunities.title')}
                  />
                </div>
                <h5>{t('about.mission.opportunities.title')}</h5>
                <p>
                  {t('about.mission.opportunities.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="vision-section py-5">
        <div className="container">
          <h2 className="section-title" style={{color: "white"}}>{t('about.vision.title')}</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_1}
                    alt={t('about.vision.society.title')}
                  />
                </div>
                <h4>{t('about.vision.society.title')}</h4>
                <p>
                  {t('about.vision.society.description')}
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_2}
                    alt={t('about.vision.education.title')}
                  />
                </div>
                <h4>{t('about.vision.education.title')}</h4>
                <p>
                  {t('about.vision.education.description')}
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_3}
                    alt={t('about.vision.leadership.title')}
                  />
                </div>
                <h4>{t('about.vision.leadership.title')}</h4>
                <p>
                  {t('about.vision.leadership.description')}
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_4}
                    alt={t('about.vision.peace.title')}
                  />
                </div>
                <h4>{t('about.vision.peace.title')}</h4>
                <p>
                  {t('about.vision.peace.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;