import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Progressive Forces of Afghanistan Movement</h5>
            <p>
              Defending women's rights, promoting gender equality, and fighting
              for justice
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>
              &copy; 2023 Progressive Forces of Afghanistan Movement. All rights
              reserved.
            </p>
            <p>
              <a href="#contact" className="text-white me-3">Contact Us</a>
              <a href="#" className="text-white">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;