import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-center mb-5 lead">Get in touch with us for collaboration, information, or support</p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow contact-card">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-info text-center">
                      <p>We welcome partnerships, media inquiries, and support from individuals and organizations who share our vision for a more equitable Afghanistan.</p>
                      
                      <div className="row mt-5">
                        <div className="col-md-4">
                          <div className="contact-detail">
                            <div className="icon-box">
                              <i className="fas fa-user"></i>
                            </div>
                            <div className="detail-content">
                              <h5>Director</h5>
                              <p>Mawloda Tawana</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="contact-detail">
                            <div className="icon-box">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <div className="detail-content">
                              <h5>Email</h5>
                              <p>pfoam.afghanistan@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="contact-detail">
                            <div className="icon-box">
                              <i className="fas fa-phone"></i>
                            </div>
                            <div className="detail-content">
                              <h5>Phone</h5>
                              <p>+49 1573 1629920</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="contact-detail">
                            <div className="icon-box">
                              <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="detail-content">
                              <h5>LinkedIn</h5>
                              <p>
                                <a
                                  href="https://www.linkedin.com/in/progressive-forces-of-afghanistan-movement"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Connect with us
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="contact-detail">
                            <div className="icon-box">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="detail-content">
                              <h5>Address</h5>
                              <p>
                                Haupstraße 126, 26810 Westoverledingen, Niedersachsen
                                Germany
                              </p>
                            </div>
                          </div>
                        </div>
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