import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Donate from './Donate';
import Contact from './Contact';

import ir1 from  '../assets/gallery/ir1.jpeg'
import ir2 from  '../assets/gallery/ir2.jpeg'
import kbl1 from  '../assets/gallery/kbl1.jpeg'
import pkl from  '../assets/gallery/pkl1.jpeg'
import pkl2 from  '../assets/gallery/pkl2.jpeg'
import alb from  '../assets/gallery/alb1.jpeg'
import cnf from  '../assets/gallery/cnf1.jpeg'
import pkl4 from  '../assets/gallery/pkl4.jpeg'
import pklkh1 from  '../assets/gallery/pkl-kh1.jpeg'
import pklkh2 from  '../assets/gallery/pkl-kh2.jpeg'
import pklkh3 from  '../assets/gallery/pkl-kh3.jpeg'
import mrf1 from '../assets/gallery/mrf1.jpeg'
import mrf2 from '../assets/gallery/mrf2.jpeg'
import islm1 from '../assets/gallery/islm1.jpeg'
import islm2 from '../assets/gallery/islm2.jpeg'
import prot from '../assets/gallery/prot1.jpeg'
import glb1 from '../assets/gallery/glb1.jpeg'
import glb2 from '../assets/gallery/glb2.jpeg'
import irr1 from '../assets/gallery/irr1.jpeg'
import irr2 from '../assets/gallery/irr2.jpeg'
import irr3 from '../assets/gallery/irr3.jpeg'
import hmb1 from '../assets/gallery/hmb1.jpeg'
import geneva from '../assets/gallery/geneva.jpeg'


const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentSlide, setModalCurrentSlide] = useState(0);
  const navigate = useNavigate();
  

  // Sample photo data with descriptions (same as before)
   // Sample photo data with descriptions
  const photoData = [
    {
      id: 1,
      title: "Active members of the movement, Tehran - Iran",
      description: "PFAM members raised their hands for justice in Tehran, Iran",
      image: ir1,
      category: "Activity"
    },
    {
      id: 2,
      title: "Active members of the movement, Tehran - Iran",
      description: "PFAM members raised their hands for justice in Tehran, Iran",
      image: ir2,
      category: "Activity"
    },
    {
      id: 3,
      title: "Movement members, advocacy program",
      description: "Movement members, advocacy program, closed location. Kabul Afghanistan 2024",
      image: kbl1,
      category: "Activity"
    },
    {
      id: 4,
      title: "Protest in Pakistan, Islamabad",
      description: "2024",
      image: pkl,
      category: "Activity"
    },
    {
      id: 5,
      title: "Commemoration and Advocacy for Afghan Women",
      description: "March 8, 2023 Isalmabad, Pakistan",
      image: pkl2,
      category: "Activity"
    },
    {
      id: 6,
      title: "Women Empowerment Summit in Albania",
      description: "2024",
      image: alb,
      category: "Activity"
    },
    {
      id: 7,
      title: "WFA Conference on Gender Justice and Accountability",
      description: "2024",
      image: cnf,
      category: "Activity"
    },
    {
      id: 8,
      title: "Protest and advocacy program against the Taliban's misogynistic decrees on women",
      description: "2024",
      image: pkl4,
      category: "Activity"
    },
    {
      id: 9,
      title: "celebrating the elimination of violence against women",
      description: "Islamabad, Pakistan, 2023",
      image: pklkh1,
      category: "Activity"
    },
    {
      id: 10,
      title: "celebrating the elimination of violence against women",
      description: "Islamabad, Pakistan, 2023",
      image: pklkh2,
      category: "Activity"
    },
    {
      id: 11,
      title: "celebrating the elimination of violence against women",
      description: "Islamabad, Pakistan, 2023",
      image: pklkh3,
      category: "Activity"
    },
    {
      id: 12,
      title: "Celebrating the International Day for the Elimination of Violence against Women",
      description: "Official of the Ministry of Education of Afghanistan, Celebrating the International Day for the Elimination of Violence against Women at the Ministry of Education, 2019",
      image: mrf1,
      category: "Activity"
    },
    {
      id: 13,
      title: "Celebrating the International Day for the Elimination of Violence against Women",
      description: "Official of the Ministry of Education of Afghanistan, Celebrating the International Day for the Elimination of Violence against Women at the Ministry of Education, 2019",
      image: mrf2,
      category: "Activity"
    },
    {
      id: 14,
      title: "Protest on the second anniversary of the collapse of Afghanistan",
      description: "Islamabad, Pakistan, 2024",
      image: islm1,
      category: "Activity"
    },
    {
      id: 14,
      title: "Protest on the second anniversary of the collapse of Afghanistan",
      description: "Islamabad, Pakistan, 2024",
      image: islm2,
      category: "Activity"
    },
    {
      id: 15,
      title: "The protest of Taliban opponents",
      description: "2024",
      image: prot,
      category: "Activity"
    },
    {
      id: 16,
      title: "Global Call to Save Afghan Women And Girl",
      description: "Islamabad, 2023",
      image: glb1,
      category: "Activity"
    },
    {
      id: 17,
      title: "Global Call to Save Afghan Women And Girl",
      description: "Islamabad, 2023",
      image: glb2,
      category: "Activity"
    },
    {
      id: 18,
      title: "Movement Members Protest in Tehran, Iran",
      description: "2025",
      image: irr1,
      category: "Activity"
    },
    {
      id: 19,
      title: "Movement Members Protest in Tehran, Iran",
      description: "2025",
      image: irr2,
      category: "Activity"
    },
    {
      id: 20,
      title: "Movement Members Protest in Tehran, Iran",
      description: "2025",
      image: irr3,
      category: "Activity"
    },
    {
      id: 21,
      title: "Fourth anniversary of the collapse of Afghanistan, ",
      description: "Hamburg, Germany, 2025",
      image: hmb1,
      category: "Activity"
    },
    {
      id: 22,
      title: "United Nations headquarters",
      description: "Geneva, 2024",
      image: geneva,
      category: "Activity"
    },
   

   
  ];

  // Sample video data
  const videoData = [
    {
      id: 1,
      title: "Speech by Ms. Mawloda Tawana at the UN Summit, Geneva 2024 WFA Conference on Gender Justice and Accountability (November 28, 2024)",
      description: "The Women’s Forum on Afghanistan (WFA), with the support of the Permanent Missions of Chile and Spain in Geneva,",
      youtubeId: "zG2-bjfVVFE", // Placeholder ID
      thumbnail: "https://img.youtube.com/vi/zG2-bjfVVFE/hqdefault.jpg"
    },
    {
      id: 2,
      title: "Public protest on the two-year anniversary of the collapse of Afghanistan",
      description: "Speech by Ms. Mawlada Tawana, founder of the Afghanistan Progressive Force Movement, in Islamabad in August 2022, a public protest on the two-year anniversary of the collapse of Afghanistan",
      youtubeId: "qou9ZRuGlHQ", // Placeholder ID
      thumbnail: "https://img.youtube.com/vi/qou9ZRuGlHQ/hqdefault.jpg"
    },
    {
      id: 3,
      title: "Celebrating the International Day for the Elimination of Violence against Women, Islamabad 2025",
      description: "",
      youtubeId: "myfiT9zb1h0", // Placeholder ID
      thumbnail: "https://img.youtube.com/vi/myfiT9zb1h0/hqdefault.jpg"
    },
    {
      id: 4,
      title: "Celebrating March 8 and protesting against Taliban rule, Islamabad 2023",
      description: "",
      youtubeId: "joHXE-e2oWw", // Placeholder ID
      thumbnail: "https://img.youtube.com/vi/joHXE-e2oWw/hqdefault.jpg"
    }
  ];

  // Featured photos for the slideshow (first 5 photos)
  const featuredPhotos = photoData.slice(0, 5);

  // Initialize slideshow with longer interval (7 seconds instead of 5)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPhotos.length);
    }, 7000); // Increased to 7 seconds

    return () => clearInterval(slideInterval);
  }, [featuredPhotos.length]);

  // Animation on scroll for photo cards
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.photo-card, .video-card');
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
  }, [currentPage]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPhotos.length) % featuredPhotos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Modal navigation functions
  const nextModalSlide = () => {
    if (selectedPhoto) {
      const currentIndex = photoData.findIndex(photo => photo.id === selectedPhoto.id);
      const nextIndex = (currentIndex + 1) % photoData.length;
      setSelectedPhoto(photoData[nextIndex]);
      setModalCurrentSlide(nextIndex);
    }
  };

  const prevModalSlide = () => {
    if (selectedPhoto) {
      const currentIndex = photoData.findIndex(photo => photo.id === selectedPhoto.id);
      const prevIndex = (currentIndex - 1 + photoData.length) % photoData.length;
      setSelectedPhoto(photoData[prevIndex]);
      setModalCurrentSlide(prevIndex);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    // Find the index of the clicked photo in the full photoData array
    const photoIndex = photoData.findIndex(p => p.id === photo.id);
    setModalCurrentSlide(photoIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // Pagination logic
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photoData.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photoData.length / photosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBackToGallery = () => {
    navigate('/');
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="gallery-page">
      <Navbar />
      
      {/* Featured Slideshow Section */}
      <section className="featured-slideshow-section">
        <div className="container">
          <h1 className="page-title text-center mb-4">Our Gallery</h1>
          <p className="page-subtitle text-center mb-5">
            A visual journey through our work for women's rights and education in Afghanistan
          </p>
          
          <div className="image-gallery">
            <div 
              className="gallery-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className="gallery-slide" 
                  style={{ backgroundImage: `url(${photo.image})` }}
                >
                  <div className="slide-overlay">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="gallery-nav gallery-prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="gallery-nav gallery-next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="gallery-controls">
              {featuredPhotos.map((_, index) => (
                <div 
                  key={index}
                  className={`gallery-control ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery-section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          
          <div className="row">
            {currentPhotos.map((photo) => (
              <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div 
                  className="photo-card bg-white shadow-sm animate__animated clickable-card"
                  onClick={() => handlePhotoClick(photo)}
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
                      src={photo.image}
                      alt={photo.title}
                    />
                    <div className="photo-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5 
                      className="clickable-title"
                      style={{ color: '#007bff' }}
                    >
                      {photo.title}
                    </h5>
                    <p className="photo-description">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination-container d-flex justify-content-center mt-5">
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <h2 className="section-title">Our Videos</h2>
          <p className="section-subtitle text-center mb-5">
            Watch our latest content on YouTube and stay updated with our work
          </p>
          
          <div className="row">
            {videoData.map((video) => (
              <div key={video.id} className="col-lg-6 mb-4">
                <div className="video-card bg-white shadow-sm animate__animated">
                  <div className="video-thumbnail">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-100"
                    />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="video-content p-3">
                    <h5>{video.title}</h5>
                    <p>{video.description}</p>
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="youtube-channel text-center mt-5">
            <h4>Subscribe to our YouTube Channel</h4>
            <p className="mb-3">Stay updated with our latest videos and documentaries</p>
            <a 
              href="https://www.youtube.com/channel/UCZPxJeeIQqO-ZxT1IZY_0Kg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              <i className="fab fa-youtube me-2"></i> Visit Our Channel
            </a>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {isModalOpen && selectedPhoto && (
        <div className="photo-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-image-container">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} />
              
              <button className="modal-nav modal-prev" onClick={prevModalSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button className="modal-nav modal-next" onClick={nextModalSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="modal-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
              <div className="photo-counter">
                {modalCurrentSlide + 1} / {photoData.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <Contact />
      <Donate />
      <Footer />
    </div>
  );
};

export default Gallery;