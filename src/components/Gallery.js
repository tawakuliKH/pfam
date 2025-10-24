import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Donate from "./Donate";
import Contact from "./Contact";
import { useSeo } from "../hooks/useSeo";



const Gallery = () => {
  useSeo({
    title: "Photo Gallery - PFA Movement",
    description:
      "Explore our gallery showcasing PFA Movement's events, activities, and community impact.",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentSlide, setModalCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Photo data with translations
  const photoData = [
  {
    id: 1,
    title: t("gallery.photos.ir1.title"),
    description: t("gallery.photos.ir1.description"),
    image: "/images/gallery/ir1.jpeg",
    category: "Activity",
  },
  {
    id: 2,
    title: t("gallery.photos.ir2.title"),
    description: t("gallery.photos.ir2.description"),
    image: "/images/gallery/ir2.jpeg",
    category: "Activity",
  },
  {
    id: 3,
    title: t("gallery.photos.kbl1.title"),
    description: t("gallery.photos.kbl1.description"),
    image: "/images/gallery/kbl1.jpeg",
    category: "Activity",
  },
  {
    id: 4,
    title: t("gallery.photos.pkl.title"),
    description: t("gallery.photos.pkl.description"),
    image: "/images/gallery/pkl1.jpeg",
    category: "Activity",
  },
  {
    id: 5,
    title: t("gallery.photos.pkl2.title"),
    description: t("gallery.photos.pkl2.description"),
    image: "/images/gallery/pkl2.jpeg",
    category: "Activity",
  },
  {
    id: 6,
    title: t("gallery.photos.alb.title"),
    description: t("gallery.photos.alb.description"),
    image: "/images/gallery/alb1.jpeg",
    category: "Activity",
  },
  {
    id: 7,
    title: t("gallery.photos.cnf.title"),
    description: t("gallery.photos.cnf.description"),
    image: "/images/gallery/cnf1.jpeg",
    category: "Activity",
  },
  {
    id: 8,
    title: t("gallery.photos.pkl4.title"),
    description: t("gallery.photos.pkl4.description"),
    image: "/images/gallery/pkl4.jpeg",
    category: "Activity",
  },
  {
    id: 9,
    title: t("gallery.photos.pklkh1.title"),
    description: t("gallery.photos.pklkh1.description"),
    image: "/images/gallery/pkl-kh1.jpeg",
    category: "Activity",
  },
  {
    id: 10,
    title: t("gallery.photos.pklkh2.title"),
    description: t("gallery.photos.pklkh2.description"),
    image: "/images/gallery/pkl-kh2.jpeg",
    category: "Activity",
  },
  {
    id: 11,
    title: t("gallery.photos.pklkh3.title"),
    description: t("gallery.photos.pklkh3.description"),
    image: "/images/gallery/pkl-kh3.jpeg",
    category: "Activity",
  },
  {
    id: 12,
    title: t("gallery.photos.mrf1.title"),
    description: t("gallery.photos.mrf1.description"),
    image: "/images/gallery/mrf1.jpeg",
    category: "Activity",
  },
  {
    id: 13,
    title: t("gallery.photos.mrf2.title"),
    description: t("gallery.photos.mrf2.description"),
    image: "/images/gallery/mrf2.jpeg",
    category: "Activity",
  },
  {
    id: 14,
    title: t("gallery.photos.islm1.title"),
    description: t("gallery.photos.islm1.description"),
    image: "/images/gallery/islm1.jpeg",
    category: "Activity",
  },
  {
    id: 15,
    title: t("gallery.photos.islm2.title"),
    description: t("gallery.photos.islm2.description"),
    image: "/images/gallery/islm2.jpeg",
    category: "Activity",
  },
  {
    id: 16,
    title: t("gallery.photos.prot.title"),
    description: t("gallery.photos.prot.description"),
    image: "/images/gallery/prot1.jpeg",
    category: "Activity",
  },
  {
    id: 17,
    title: t("gallery.photos.glb1.title"),
    description: t("gallery.photos.glb1.description"),
    image: "/images/gallery/glb1.jpeg",
    category: "Activity",
  },
  {
    id: 18,
    title: t("gallery.photos.glb2.title"),
    description: t("gallery.photos.glb2.description"),
    image: "/images/gallery/glb2.jpeg",
    category: "Activity",
  },
  {
    id: 19,
    title: t("gallery.photos.irr1.title"),
    description: t("gallery.photos.irr1.description"),
    image: "/images/gallery/irr1.jpeg",
    category: "Activity",
  },
  {
    id: 20,
    title: t("gallery.photos.irr2.title"),
    description: t("gallery.photos.irr2.description"),
    image: "/images/gallery/irr2.jpeg",
    category: "Activity",
  },
  {
    id: 21,
    title: t("gallery.photos.irr3.title"),
    description: t("gallery.photos.irr3.description"),
    image: "/images/gallery/irr3.jpeg",
    category: "Activity",
  },
  {
    id: 22,
    title: t("gallery.photos.hmb1.title"),
    description: t("gallery.photos.hmb1.description"),
    image: "/images/gallery/hmb1.jpeg",
    category: "Activity",
  },
  {
    id: 23,
    title: t("gallery.photos.geneva.title"),
    description: t("gallery.photos.geneva.description"),
    image: "/images/gallery/geneva.jpeg",
    category: "Activity",
  },
  {
    id: 24,
    title: t("gallery.photos.prt1.title"),
    description: t("gallery.photos.prt1.description"),
    image: "/images/gallery/prt1.jpeg",
    category: "Activity",
  },
  {
    id: 25,
    title: t("gallery.photos.off1.title"),
    description: t("gallery.photos.off1.description"),
    image: "/images/gallery/off1.jpeg",
    category: "Activity",
  },
  {
    id: 26,
    title: t("gallery.photos.adv1.title"),
    description: t("gallery.photos.adv1.description"),
    image: "/images/gallery/adv1.jpeg",
    category: "Activity",
  },
  {
    id: 27,
    title: t("gallery.photos.adv2.title"),
    description: t("gallery.photos.adv2.description"),
    image: "/images/gallery/adv2.jpeg",
    category: "Activity",
  },
  {
    id: 28,
    title: t("gallery.photos.three1.title"),
    description: t("gallery.photos.three1.description"),
    image: "/images/gallery/three1.jpeg",
    category: "Activity",
  },
  {
    id: 29,
    title: t("gallery.photos.islam1.title"),
    description: t("gallery.photos.islam1.description"),
    image: "/images/gallery/islam1.jpeg",
    category: "Activity",
  },
  {
    id: 30,
    title: t("gallery.photos.dakh1.title"),
    description: t("gallery.photos.dakh1.description"),
    image: "/images/gallery/dakh1.jpeg",
    category: "Activity",
  },
  {
    id: 31,
    title: t("gallery.photos.adova1.title"),
    description: t("gallery.photos.adova1.description"),
    image: "/images/gallery/adova1.jpeg",
    category: "Activity",
  },
  {
    id: 32,
    title: t("gallery.photos.prot2.title"),
    description: t("gallery.photos.prot2.description"),
    image: "/images/gallery/prot2.jpeg",
    category: "Activity",
  },
  {
    id: 33,
    title: t("gallery.photos.prot3.title"),
    description: t("gallery.photos.prot3.description"),
    image: "/images/gallery/prot3.jpeg",
    category: "Activity",
  },
  {
    id: 34,
    title: t("gallery.photos.apa1.title"),
    description: t("gallery.photos.apa1.description"),
    image: "/images/gallery/apa1.jpeg",
    category: "Activity",
  },
  {
    id: 35,
    title: t("gallery.photos.prot4.title"),
    description: t("gallery.photos.prot4.description"),
    image: "/images/gallery/prot4.jpeg",
    category: "Activity",
  },
  {
    id: 36,
    title: t("gallery.photos.conf1.title"),
    description: t("gallery.photos.conf1.description"),
    image: "/images/gallery/conf1.jpeg",
    category: "Activity",
  },
  {
    id: 37,
    title: t("gallery.photos.conf1.title"),
    description: t("gallery.photos.conf1.description"),
    image: "/images/gallery/conf2.jpeg",
    category: "Activity",
  },
  {
    id: 38,
    title: t("gallery.photos.conf1.title"),
    description: t("gallery.photos.conf1.description"),
    image: "/images/gallery/conf3.jpeg",
    category: "Activity",
  },
  {
    id: 39,
    title: t("gallery.photos.conf1.title"),
    description: t("gallery.photos.conf1.description"),
    image: "/images/gallery/conf4.jpeg",
    category: "Activity",
  },
  {
    id: 40,
    title: t("gallery.photos.conf1.title"),
    description: t("gallery.photos.conf1.description"),
    image: "/images/gallery/conf5.jpeg",
    category: "Activity",
  },
  {
    id: 41,
    title: t("gallery.photos.massoud1.title"),
    description: t("gallery.photos.massoud1.description"),
    image: "/images/gallery/massoud1.jpeg",
    category: "Activity",
  },
  {
    id: 42,
    title: t("gallery.photos.massoud1.title"),
    description: t("gallery.photos.massoud1.description"),
    image: "/images/gallery/massoud2.jpeg",
    category: "Activity",
  },
];
  // Video data with translations
  const videoData = [
    {
      id: 1,
      title: t("gallery.videos.video1.title"),
      description: t("gallery.videos.video1.description"),
      youtubeId: "zG2-bjfVVFE",
      thumbnail: "https://img.youtube.com/vi/zG2-bjfVVFE/hqdefault.jpg",
    },
    {
      id: 2,
      title: t("gallery.videos.video2.title"),
      description: t("gallery.videos.video2.description"),
      youtubeId: "qou9ZRuGlHQ",
      thumbnail: "https://img.youtube.com/vi/qou9ZRuGlHQ/hqdefault.jpg",
    },
    {
      id: 3,
      title: t("gallery.videos.video3.title"),
      description: t("gallery.videos.video3.description"),
      youtubeId: "myfiT9zb1h0",
      thumbnail: "https://img.youtube.com/vi/myfiT9zb1h0/hqdefault.jpg",
    },
    {
      id: 4,
      title: t("gallery.videos.video4.title"),
      description: t("gallery.videos.video4.description"),
      youtubeId: "joHXE-e2oWw",
      thumbnail: "https://img.youtube.com/vi/joHXE-e2oWw/hqdefault.jpg",
    },
    {
      id: 5,
      title: t("gallery.videos.video5.title"),
      description: t("gallery.videos.video5.description"),
      youtubeId: "Z4Ph8JhZqvk",
      thumbnail: "https://img.youtube.com/vi/Z4Ph8JhZqvk/hqdefault.jpg",
    },
    {
      id: 6,
      title: t("gallery.videos.video6.title"),
      description: t("gallery.videos.video6.description"),
      youtubeId: "Oe1X4udU3vk",
      thumbnail: "https://youtube.com/shorts/Oe1X4udU3vk?si=ASxlpguGd772FBdR",
    },
  ];

  // Featured photos for the slideshow (first 5 photos)
  const featuredPhotos = photoData.slice(0, 5);

  // Initialize slideshow with longer interval (7 seconds instead of 5)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPhotos.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [featuredPhotos.length]);

  // Animation on scroll for photo cards
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".photo-card, .video-card"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInUp");
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
    setCurrentSlide(
      (prev) => (prev - 1 + featuredPhotos.length) % featuredPhotos.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Modal navigation functions
  const nextModalSlide = () => {
    if (selectedPhoto) {
      const currentIndex = photoData.findIndex(
        (photo) => photo.id === selectedPhoto.id
      );
      const nextIndex = (currentIndex + 1) % photoData.length;
      setSelectedPhoto(photoData[nextIndex]);
      setModalCurrentSlide(nextIndex);
    }
  };

  const prevModalSlide = () => {
    if (selectedPhoto) {
      const currentIndex = photoData.findIndex(
        (photo) => photo.id === selectedPhoto.id
      );
      const prevIndex =
        (currentIndex - 1 + photoData.length) % photoData.length;
      setSelectedPhoto(photoData[prevIndex]);
      setModalCurrentSlide(prevIndex);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    const photoIndex = photoData.findIndex((p) => p.id === photo.id);
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
    navigate("/");
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="gallery-page">
      <Navbar />

      {/* Featured Slideshow Section */}
      <section className="featured-slideshow-section">
        <div className="container">
          <h1 className="page-title text-center mb-4">{t("gallery.title")}</h1>
          <p className="page-subtitle text-center mb-5">
            {t("gallery.subtitle")}
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
                  className={`gallery-control ${
                    index === currentSlide ? "active" : ""
                  }`}
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
          <h2 className="section-title">{t("gallery.photoGallery")}</h2>

          <div className="row">
            {currentPhotos.map((photo) => (
              <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div
                  className="photo-card bg-white shadow-sm animate__animated clickable-card"
                  onClick={() => handlePhotoClick(photo)}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.transition = "transform 0.3s ease";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="card-img-container">
                    <img src={photo.image} alt={photo.title} />
                    <div className="photo-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5
                      className="clickable-title"
                      style={{ color: "#007bff" }}
                    >
                      {photo.title}
                    </h5>
                    <p className="photo-description">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-container d-flex justify-content-center mt-5">
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {t("gallery.pagination.previous")}
                  </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    {t("gallery.pagination.next")}
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
          <h2 className="section-title">{t("gallery.videos.title")}</h2>
          <p className="section-subtitle text-center mb-5">
            {t("gallery.videos.subtitle")}
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
                      {t("gallery.videos.watchButton")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="youtube-channel text-center mt-5">
            <h4>{t("gallery.videos.subscribeTitle")}</h4>
            <p className="mb-3">{t("gallery.videos.subscribeDescription")}</p>
            <a
              href="https://www.youtube.com/channel/UCZPxJeeIQqO-ZxT1IZY_0Kg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              <i className="fab fa-youtube me-2"></i>{" "}
              {t("gallery.videos.visitChannel")}
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
