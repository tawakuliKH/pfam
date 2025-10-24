// components/Announcements.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSeo } from '../hooks/useSeo';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Donate from './Donate';

const Announcements = () => {
  useSeo({
    title: "Announcements - Progressive Forces of Afghanistan Movement",
    description: "Official announcements and statements from PFA Movement in multiple languages."
  });
  
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Debug logging
  useEffect(() => {
    console.log('Announcements component mounted');
    console.log('Current language:', i18n.language);
    console.log('Announcements data:', announcementsData);
  }, [i18n.language]);

  // Sample announcements data
  const announcementsData = [
    {
      id: 1,
      date: "October 24, 2025",
      title: {
        en: "Joint Statement: Over 113 Civil Society Organizations on Forced Deportation of Vulnerable Afghan Migrants from Pakistan",
        fa: "بیانیه مشترک: بیش از ۱۱۳ انجمن و جنبش مدنی درباره اخراج اجباری مهاجران آسیب‌پذیر افغانستان از پاکستان",
        ps: "د ۱۱۳ څخه زیاتو مدني ټولنو او خوځښتونو مشترک بیان: د افغانستان د زیانمنو کډوالو اجباري شړل له پاکستان څخه",
        ur: "مشترکہ بیان: پاکستان سے کمزور افغان مہاجرین کی جبری بے دخلی کے بارے میں 113 سے زائد سول سوسائٹی تنظیمیں اور تحریکیں"
      },
      files: [
        {
          language: "English",
          code: "en",
          name: "PFA_Announcement_Oct24_2025_EN.pdf",
          url: "/announcements/PFA_Announcement_Oct24_2025_EN.pdf",
          size: "2.1 MB"
        },
        {
          language: "Persian",
          code: "fa",
          name: "PFA_Announcement_Oct24_2025_FA.pdf",
          url: "/announcements/PFA_Announcement_Oct24_2025_FA.pdf",
          size: "2.3 MB"
        },
        {
          language: "Pashtu",
          code: "ps",
          name: "PFA_Announcement_Oct24_2025_PS.pdf",
          url: "/announcements/PFA_Announcement_Oct24_2025_PS.pdf",
          size: "2.2 MB"
        },
        {
          language: "Urdu",
          code: "ur",
          name: "PFA_Announcement_Oct24_2025_UR.pdf",
          url: "/announcements/PFA_Announcement_Oct24_2025_UR.pdf",
          size: "2.4 MB"
        }
      ],
      description: {
        en: "A joint statement signed by over 113 civil society organizations and movements expressing grave concern about the forced deportation of vulnerable Afghan migrants from Pakistan and calling for immediate international intervention.",
        fa: "بیانیه مشترک بیش از ۱۱۳ انجمن و جنبش مدنی که نگرانی شدید خود را درباره اخراج اجباری مهاجران آسیب‌پذیر افغان از پاکستان ابراز کرده و خواستار مداخله فوری بین‌المللی شده‌اند.",
        ps: "د ۱۱۳ څخه زیاتو مدني ټولنو او خوځښتونو لخوا لاسلیک شوی مشترک بیان چې د پاکستان څخه د افغانستان د زیانمنو کډوالو د اجباري شړلو په اړه خپله شدیده اندیښنه څرګندوي او د نړیوالې مرستې غوښتنه کوي.",
        ur: "113 سے زائد سول سوسائٹی تنظیموں اور تحریکوں کا مشترکہ بیان جس میں پاکستان سے کمزور افغان مہاجرین کی جبری بے دخلی پر گہری تشنگی کا اظہار کیا گیا ہے اور فوری بین الاقوامی مداخلت کی اپیل کی گئی ہے۔"
      }
    }
  ];

  const handleAnnouncementClick = (announcement) => {
    console.log('Announcement clicked:', announcement);
    setSelectedAnnouncement(announcement);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedAnnouncement(null);
  };

  const getLanguageName = (code) => {
    const languages = {
      en: "English",
      fa: "فارسی",
      ps: "پښتو",
      ur: "اردو"
    };
    return languages[code] || code;
  };

  const getCurrentLanguageTitle = (announcement) => {
    const title = announcement.title[i18n.language] || announcement.title.en;
    console.log('Getting title for language:', i18n.language, 'Title:', title);
    return title;
  };

  const getCurrentLanguageDescription = (announcement) => {
    return announcement.description[i18n.language] || announcement.description.en;
  };

  // Single Announcement Detail View
  if (selectedAnnouncement) {
    console.log('Rendering detail view for:', selectedAnnouncement);
    return (
      <div className="announcements-page">
        <Navbar />
        
        <section className="announcement-detail-section py-5">
          <div className="container">
            <button 
              className="btn btn-outline-primary mb-4"
              onClick={handleBackToList}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Back to Announcements
            </button>

            <div className="announcement-header text-center mb-5">
              <h1 className="announcement-title">
                {getCurrentLanguageTitle(selectedAnnouncement)}
              </h1>
              <div className="announcement-date">
                <i className="far fa-calendar me-2"></i>
                {selectedAnnouncement.date}
              </div>
              <p className="announcement-description lead mt-3">
                {getCurrentLanguageDescription(selectedAnnouncement)}
              </p>
            </div>

            <div className="files-section">
              <h3 className="section-subtitle text-center mb-4">
                Download Announcement in Different Languages
              </h3>
              
              <div className="row">
                {selectedAnnouncement.files.map((file, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-4">
                    <div className="file-card text-center">
                      <div className="file-icon mb-3">
                        <i className="fas fa-file-pdf fa-3x text-danger"></i>
                      </div>
                      <h5 className="file-language">{file.language}</h5>
                      <p className="file-size text-muted small">{file.size}</p>
                      <a 
                        href={file.url} 
                        className="btn btn-primary btn-sm"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-download me-2"></i>
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
        <Donate />
        <Footer />
      </div>
    );
  }

  // Announcements List View
  console.log('Rendering list view');
  return (
    <div className="announcements-page">
      <Navbar />
      
      <section className="announcements-list-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="section-title">Official Announcements</h1>
            <p className="lead text-white">
              Latest official statements and announcements from Progressive Forces of Afghanistan Movement
            </p>
          </div>

          {announcementsData.length === 0 ? (
            <div className="text-center text-white">
              <p>No announcements available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              {announcementsData.map((announcement) => (
                <div key={announcement.id} className="col-lg-6 mb-4">
                  <div 
                    className="announcement-card card shadow-sm h-100 animate__animated clickable-card"
                    onClick={() => handleAnnouncementClick(announcement)}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.transition = 'transform 0.3s ease';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="card-body">
                      <div className="announcement-date mb-2">
                        <i className="far fa-calendar text-primary me-2"></i>
                        <strong>{announcement.date}</strong>
                      </div>
                      
                      <h5 className="announcement-card-title">
                        {getCurrentLanguageTitle(announcement)}
                      </h5>
                      
                      <p className="announcement-card-description">
                        {getCurrentLanguageDescription(announcement)}
                      </p>
                      
                      <div className="announcement-languages mt-3">
                        <small className="text-muted">
                          <i className="fas fa-language me-1"></i>
                          Available in: 
                          {announcement.files.map((file, index) => (
                            <span key={file.code} className="ms-1">
                              {getLanguageName(file.code)}
                              {index < announcement.files.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </small>
                      </div>
                      
                      <div className="announcement-action mt-3">
                        <span className="btn btn-outline-primary btn-sm">
                          View Announcement <i className="fas fa-arrow-right ms-1"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Contact />
      <Donate />
      <Footer />
    </div>
  );
};

export default Announcements;