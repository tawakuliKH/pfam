import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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



const NewsDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNews, setCurrentNews] = useState(null);
  const navigate = useNavigate();

  // Sample news data with multiple images for each story
  const newsData = [
    {
      id: 1,
      title: "Protest by members of the movement in Tehran, Iran",
      date: "March 15, 2025",
      author: "PFA News Team",
      images: [
        news1_1,
        news1_2,
        news1_3,
        news1_4,
        news1_5,
             ],
      content: [
        "In March 2025, members of the Progressive Forces of Afghanistan Movement (PFAM) in Tehran orchestrated a poignant, symbolic protest against the Taliban's increasingly draconian regime. The demonstration was a quiet but powerful visual statement, featuring participants holding carefully crafted placards that highlighted specific, recent injustices.",
        "The slogans targeted new decrees such as the 'Code of Conduct,' which mandated the permanent closure of all women's bathhouses, arguing they were sites of potential moral corruption, and a directive that barred women from entering any shop selling male clothing or goods. Signs reading 'Bread, Dignity, Freedom,' 'Our Bodies Are Not Your Battlefield,' and 'You Ban, We Build' served as a direct rebuttal to the regime's attempts to systematically erase women from society.",
        "This deliberate and focused display was not meant for loud chants but for the penetrating silence of photography, creating a stark visual record of resistance that was widely disseminated to counter the Taliban's narrative of total control and compliance.",
        "The protest highlighted the Taliban's recent 'Code of Conduct' that mandated the permanent closure of women's bathhouses and barred women from shops selling male goods. These measures represent a systematic effort to erase women from public life and confine them to their homes.",
        "Through this symbolic action, PFAM members demonstrated that resistance continues despite the regime's oppressive measures, and that the voice of Afghan women cannot be silenced even through the most severe restrictions."
      ],

      type: "news"
    },
    {
      id: 2,
      title: "Appreciation from Afghan Civil Society for PFAM Founder's Activities in Pakistan",
      date: "May 28, 2023",
      author: "PFAM News Team",
      images: [
       news2_1,
       news2_2,
      ],
     content: [
        "In a moving testament to her unwavering dedication, the Afghan Civil Society Organization (ACSO) extends its profound gratitude and deepest appreciation to Ms. Mawloda Tawana, the esteemed founder of the Progressive Forces of Afghanistan Movement (PFAM), for her exceptional and courageous activities throughout Pakistan in May 2023.",
        "During a period of escalating crisis, when hope was a scarce commodity for many displaced Afghans, Ms. Tawana embarked on a pivotal mission, tirelessly traveling between Islamabad, Peshawar, and Quetta to mobilize support and shine a light on the plight of those most vulnerable.",
        "She orchestrated a series of critical coordination meetings with Afghan diaspora leaders, human rights defenders, and international aid agencies, successfully establishing a vital network for channeling humanitarian assistance to refugee families facing dire conditions.",
        "Furthermore, her powerful advocacy at roundtable discussions with Pakistani civil society groups and foreign diplomats was instrumental in raising awareness about the systematic gender apartheid and human rights violations being perpetrated by the Taliban regime.",
        "Perhaps most impactful was her personal engagement with Afghan women and youth in refugee settlements, where she listened to their harrowing stories, documented human rights abuses, and, with immense compassion, helped establish underground digital literacy programs to empower them with skills for the future.",
        "The ACSO recognizes that Ms. Tawana's efforts have not only provided immediate solace and practical support to countless individuals but have also fortified the very foundations of our collective resistance, demonstrating that the spirit of Afghanistan remains unbroken."
      ],

      type: "news"
    },
    {
      id: 3,
      title: "Protest on the occasion of the International Day for the Elimination of Violence against Women, Pakistan",
      date: "Nov, 2022",
      author: "PFAM News Team",
      images: [
       news3_1,
       news3_2
      ],
      content: [
    "On November 25, 2022, marking the International Day for the Elimination of Violence against Women, members of the Progressive Forces of Afghanistan Movement (PFAM), led by founder Ms. Mawloda Tawana, joined hands with Pakistani human rights organizations in a powerful demonstration in Islamabad.",
    "The protest served as a stark reminder of the escalating violence against Afghan women under Taliban rule, highlighting specific cases of forced disappearances, arbitrary detentions, and public floggings that have become increasingly common since the regime's takeover.",
    "Ms. Tawana delivered an impassioned speech condemning the Taliban's systematic gender apartheid, drawing parallels between the struggles of women across the region and emphasizing the need for international accountability mechanisms.",
    "Protesters carried banners featuring names of Afghan women activists currently imprisoned by the Taliban and displayed symbolic empty chairs representing the millions of girls barred from schools and universities.",
    "The demonstration successfully garnered significant media attention, with Ms. Tawana giving interviews to international press outlets, ensuring that the plight of Afghan women remained visible on the global stage during this important international observance.",
    "This solidarity event strengthened cross-border alliances between Afghan and Pakistani women's rights activists, creating a unified front against religious extremism and gender-based violence in the region."
  ],

      type: "news"
    },
    {
      id: 4,
      title: "Day of the Elimination of Violence against Women, Kabul",
      date: "Nov 25, 2018",
      author: "Interview by Zohal Rad",
      images: [
       story1_1,
       story1_2
      ],
      content: [
    "The participation of Ms. Mawloda Tawana, then a dedicated official within the Ministry of Education in Kabul, in the 2018 commemoration of the International Day for the Elimination of Violence against Women, was a pivotal moment that foreshadowed her future as the founder of the Progressive Forces of Afghanistan Movement (PFAM).",
    "Her presence at this official event was a testament to her deep-seated commitment to addressing the systemic injustices faced by Afghan women, a commitment forged through her firsthand experiences within the government system. Having worked on initiatives aimed at increasing girls' enrollment, she witnessed the chasm between policy promises and the grim realities on the ground.",
    "Ms. Tawana saw how cultural impediments, institutional corruption, and the rising threat of extremism consistently undermined efforts to protect women and girls. It was this profound frustration with the system's inability to enact meaningful change, coupled with her direct encounters with the stories of survivors, that crystallized her resolve.",
    "The 2018 event, rather than being a celebration of progress, highlighted for her the escalating dangers and the insufficient official response. This realization, that true advocacy required operating beyond the constraints of a compromised bureaucracy, was the crucial catalyst.",
    "The Taliban's subsequent takeover in 2021 confirmed her deepest fears and accelerated her determination, leading her to establish PFAM. The movement became the embodiment of the principle she had long advocated for: that the elimination of violence against women requires relentless, grassroots resistance."
  ],
      type: "story"
    },
    {
  id: 6,
  title: "Ms. Mawloda Tawana Participates in Pakistani Cultural Celebration, Strengthening Cross-Border Ties",
  date: "March 23, 2022",
  author: "PFAM team",
  images: [
    story2_1,
  ],
  content: [
    "In a significant gesture of cross-border solidarity and cultural diplomacy, Ms. Mawloda Tawana, founder of the Progressive Forces of Afghanistan Movement (PFAM), participated in a major event celebrating Pakistani culture and cultural programs held in Islamabad.",
    "The event, which coincided with Pakistan Day celebrations, featured traditional music, dance performances, poetry recitals, and exhibitions showcasing the rich cultural heritage of various regions across Pakistan. Ms. Tawana's presence underscored PFAM's commitment to building bridges of understanding between the peoples of Afghanistan and Pakistan.",
    "In her address to the gathering, Ms. Tawana emphasized the shared historical and cultural ties between the two neighboring nations, noting that 'culture and art have always been the most powerful tools against extremism and division.' She highlighted how the Taliban's regime has systematically targeted cultural diversity and artistic expression in Afghanistan as part of their oppressive agenda.",
    "Ms. Tawana's participation was particularly meaningful given the current tensions between the two countries, serving as a reminder that the aspirations for peace, beauty, and creative expression transcend political boundaries and governmental policies.",
    "The event provided an important platform for Ms. Tawana to engage with Pakistani intellectuals, artists, and civil society leaders, fostering relationships that would later prove crucial in PFAM's humanitarian efforts for Afghan refugees in Pakistan.",
    "This cultural engagement demonstrated PFAM's holistic approach to activism, recognizing that the fight for women's rights and democracy must be accompanied by efforts to preserve and celebrate the diverse cultural tapestry that extremists seek to destroy."
  ],
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
  }, [currentNews]); // Re-run when currentNews changes

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
    setCurrentSlide(0); // Reset to first image
    // Scroll to top of news detail section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToNews = () => {
    navigate('/');
  };

  if (!currentNews) {
    return <div>Loading...</div>;
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
            <span>By {currentNews.author}</span>
          </div>
          
          <div className="news-content">
            {currentNews.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related News Section */}
      <section className="related-news-section">
        <div className="container">
          <h2 className="section-title">More News & Stories</h2>
          
          {/* News Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="subsection-title text-center mb-4">Latest News</h3>
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
                      src={newsItem.images[0]} // Show only first image in list
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
                      {newsItem.content[0].substring(0, 150)}...
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
              <h3 className="subsection-title text-center mb-4">Inspiring Stories</h3>
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
                      src={storyItem.images[0]} // Show only first image in list
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
                      {storyItem.content[0].substring(0, 150)}...
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