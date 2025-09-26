import React from 'react';

const Values = () => {
  return (
    <section id="values" className="py-5 values-section">
      <div className="container">
        <h2 className="section-title value">Our Values</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="value-card bg-white shadow-sm animate__animated">
              <div className="card-icon-container">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5>Right to Choice</h5>
              <p>
                Supporting the freedom of women and girls in personal,
                professional, and social decision-making. We believe every woman
                should have autonomy over her life, body, and future without
                coercion or limitation.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="value-card bg-white shadow-sm animate__animated">
              <div className="card-icon-container">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5>Equality & Non-Discrimination</h5>
              <p>
                Supporting full equality between women and men and eliminating
                all forms of gender-based discrimination. We challenge patriarchal
                norms and work to create systems that treat everyone with equal
                dignity and respect.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="value-card bg-white shadow-sm animate__animated">
              <div className="card-icon-container">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8v6M23 11h-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5>Collaboration & Solidarity</h5>
              <p>
                Building national and international cooperation to promote
                women's rights and strengthen social solidarity. We believe in
                the power of collective action and diverse partnerships to
                create lasting change.
              </p>
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
};

export default Values;