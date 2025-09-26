import React from 'react';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="animate__animated animate__fadeInDown">Progressive Forces of Afghanistan</h1>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          Defending women's rights, promoting gender equality, and fighting for
          justice
        </p>
        <a href="#donate" className="btn btn-primary btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s"
          >Support Our Cause</a
        >
      </div>
    </section>
  );
};

export default Hero;