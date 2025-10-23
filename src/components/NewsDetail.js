import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSeo } from '../hooks/useSeo';
import Navbar from './Navbar';
import Footer from './Footer';
import Donate from './Donate';
import Contact from './Contact';
import news1_1 from '../assets/news/news1_1.jpeg'
import news1_2 from '../assets/news/news1_2.jpeg'
import news1_3 from '../assets/news/news1_3.jpeg'
import news1_4 from '../assets/news/news1_4.jpeg'
import news1_5 from '../assets/news/news1_5.jpeg'

import news2_1 from '../assets/news/news2_1.jpeg';
import news2_2 from '../assets/news/news2_2.jpeg';

import news3_1 from '../assets/news/news3_1.jpeg'
import news3_2 from '../assets/news/news3_2.jpeg'

import story1_1 from '../assets/story/story1_1.jpeg'
import story1_2 from '../assets/story/story1_2.jpeg'

import story2_1 from '../assets/story/story2_1.jpeg'

import story3_1 from '../assets/story/massoud1.jpeg'
import story3_2 from '../assets/story/massoud2.jpeg'

import story4_1 from '../assets/story/conf1.jpeg'
import story4_2 from '../assets/story/conf2.jpeg'
import story4_3 from '../assets/story/conf3.jpeg'
import story4_4 from '../assets/story/conf4.jpeg'
import story4_5 from '../assets/story/conf5.jpeg'

import { useLocation } from 'react-router-dom';
import { changeLanguage } from '../i18n'; // Adjust path as needed

const NewsDetail = () => {
   useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && ['en', 'de', 'fa'].includes(langParam)) {
      changeLanguage(langParam);
    }
  }, [location.search]);

  useSeo({
    title: "Latest News - Progressive Forces of Afghanistan Movement",
    description: "Stay updated with the latest news, events, and announcements from PFA Movement."
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNews, setCurrentNews] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Sample news data with multiple images for each story
  const newsData = [
    {
      id: 1,
      title: t('news.news1.title'),
      date: t('news.news1.date'),
      author: t('news.news1.author'),
      images: [
        news1_1,
        news1_2,
        news1_3,
        news1_4,
        news1_5,
      ],
      content: t('news.news1.content', { returnObjects: true }),
      type: "news"
    },
    {
      id: 2,
      title: t('news.news2.title'),
      date: t('news.news2.date'),
      author: t('news.news2.author'),
      images: [
        news2_1,
        news2_2,
      ],
      content: t('news.news2.content', { returnObjects: true }),
      type: "news"
    },
    {
      id: 3,
      title: t('news.news3.title'),
      date: t('news.news3.date'),
      author: t('news.news3.author'),
      images: [
        news3_1,
        news3_2
      ],
      content: t('news.news3.content', { returnObjects: true }),
      type: "news"
    },
    {
      id: 4,
      title: t('news.story1.title'),
      date: t('news.story1.date'),
      author: t('news.story1.author'),
      images: [
        story1_1,
        story1_2
      ],
      content: t('news.story1.content', { returnObjects: true }),
      type: "story"
    },
    {
      id: 6,
      title: t('news.story2.title'),
      date: t('news.story2.date'),
      author: t('news.story2.author'),
      images: [
        story2_1,
      ],
      content: t('news.story2.content', { returnObjects: true }),
      type: "story"
    },
     {
      id: 7,
      title: t('news.story3.title'),
      date: t('news.story3.date'),
      author: t('news.story3.author'),
      images: [
        story3_1,
        story3_2,
      ],
      content: t('news.story3.content', { returnObjects: true }),
      type: "story"
    },
     {
      id: 8,
      title: t('news.story4.title'),
      date: t('news.story4.date'),
      author: t('news.story4.author'),
      images: [
        story4_5,
        story4_1,
        story4_2,
        story4_3,
        story4_4,

      ],
      content: t('news.story4.content', { returnObjects: true }),
      type: "story"
    }
  ];

  // Set the first news as default
  useEffect(() => {
    if (!currentNews) {
      setCurrentNews(newsData[0]);
    }
  }, [currentNews]);

  useEffect(() => {
    // Initialize gallery slideshow only if there's current news
    if (currentNews) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % currentNews.images.length);
      }, 4000);

      return () => clearInterval(slideInterval);
    }
  }, [currentNews]);

  // Animation on scroll for news cards
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.news-card, .story-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [currentNews]);

  const nextSlide = () => {
    if (currentNews) {
      setCurrentSlide((prev) => (prev + 1) % currentNews.images.length);
    }
  };

  const prevSlide = () => {
    if (currentNews) {
      setCurrentSlide((prev) => (prev - 1 + currentNews.images.length) % currentNews.images.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleNewsClick = (newsItem) => {
    setCurrentNews(newsItem);
    setCurrentSlide(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToNews = () => {
    navigate('/');
  };

  if (!currentNews) {
    return <div>{t('news.loading')}</div>;
  }

  return (
    <div className="news-detail-page">
      <Navbar />
      
      {/* News Detail Section */}
      <section className="news-detail-section">
        <div className="container">
          {/* Sliding Image Gallery */}
          <div className="image-gallery">
            <div 
              className="gallery-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {currentNews.images.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-slide" 
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <div className="gallery-nav gallery-prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="gallery-nav gallery-next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="gallery-controls">
              {currentNews.images.map((_, index) => (
                <div 
                  key={index}
                  className={`gallery-control ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>

          <h1 className="news-title">{currentNews.title}</h1>
          
          <div className="news-meta">
            <i className="far fa-calendar"></i>
            <span>{currentNews.date}</span>
            <span className="mx-3">|</span>
            <i className="far fa-user"></i>
            <span>{t('news.by')} {currentNews.author}</span>
          </div>
          
          <div className="news-content">
            {Array.isArray(currentNews.content) && currentNews.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related News Section */}
      <section className="related-news-section">
        <div className="container">
          <h2 className="section-title">{t('news.moreNewsStories')}</h2>
          
          {/* News Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="subsection-title text-center mb-4">{t('news.latestNews')}</h3>
            </div>
            {newsData.filter(item => item.type === "news" && item.id !== currentNews.id).map((newsItem) => (
              <div key={newsItem.id} className="col-md-6 mb-4">
                <div 
                  className="news-card bg-white shadow-sm animate__animated clickable-card"
                  onClick={() => handleNewsClick(newsItem)}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.transition = 'transform 0.3s ease';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="card-img-container">
                    <img
                      src={newsItem.images[0]}
                      alt={newsItem.title}
                    />
                  </div>
                  <div className="card-content">
                    <h5 
                      className="clickable-title"
                      style={{ color: '#007bff' }}
                    >
                      {newsItem.title}
                    </h5>
                    <p>
                      {Array.isArray(newsItem.content) ? newsItem.content[0].substring(0, 150) : newsItem.content.substring(0, 150)}...
                    </p>
                    <div className="news-date">
                      <i className="far fa-calendar me-2"></i>{newsItem.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stories Section */}
          <div className="row">
            <div className="col-12">
              <h3 className="subsection-title text-center mb-4">{t('news.inspiringStories')}</h3>
            </div>
            {newsData.filter(item => item.type === "story" && item.id !== currentNews.id).map((storyItem) => (
              <div key={storyItem.id} className="col-md-6 mb-4">
                <div 
                  className="story-card bg-white shadow-sm animate__animated clickable-card"
                  onClick={() => handleNewsClick(storyItem)}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.transition = 'transform 0.3s ease';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="card-img-container">
                    <img
                      src={storyItem.images[0]}
                      alt={storyItem.title}
                    />
                  </div>
                  <div className="card-content">
                    <h5 
                      className="clickable-title"
                      style={{ color: '#007bff' }}
                    >
                      {storyItem.title}
                    </h5>
                    <p>
                      {Array.isArray(storyItem.content) ? storyItem.content[0].substring(0, 150) : storyItem.content.substring(0, 150)}...
                    </p>
                    <div className="story-author">
                      <i className="fas fa-user-edit me-2"></i>{storyItem.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
};

export default NewsDetail;