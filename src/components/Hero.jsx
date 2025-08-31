import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              <span className="hero-line">From Idea to</span>
              <span className="hero-line">Impact:</span>
              <span className="hero-line orange">Your AI</span>
              <span className="hero-line orange">Transformation</span>
              <span className="hero-line orange">Partner</span>
            </h1>
            <p className="hero-description">
              Genglobe Analytics delivers end-to-end AI, ML, and cloud solutions that help startups and enterprises unlock measurable value through cutting-edge technology and strategic implementation.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary">
                Start Your AI Journey <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#services" className="cta-button secondary">
                See Services
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="info-box">
              <h3>Transform Your Business with AI</h3>
              <ul className="info-list">
                <li>
                  <span className="bullet orange"></span>
                  End-to-end AI & ML Solutions
                </li>
                <li>
                  <span className="bullet orange"></span>
                  Strategic Technology Implementation
                </li>
                <li>
                  <span className="bullet orange"></span>
                  Measurable Business Value
                </li>
                <li>
                  <span className="bullet orange"></span>
                  Cloud-Native Architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 