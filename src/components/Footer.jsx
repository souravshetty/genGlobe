import React from "react";

const Footer = () => {
  const services = [
    "AI & Machine Learning",
    "Cloud Solutions", 
    "Software Development",
    "Quality Assurance",
    "Technical Training"
  ];

  const companyLinks = [
    "About Us",
    "Why Choose Us", 
    "Case Studies",
    "Contact",
    "Careers"
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Column - Genglobe Analytics Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <i className="fas fa-globe"></i>
              </div>
              <span>Genglobe Analytics</span>
            </div>
            <p className="footer-description">
              Your trusted partner for AI transformation, delivering end-to-end solutions that drive measurable business value through cutting-edge technology.
            </p>
            <a href="#contact" className="footer-cta-btn">
              Start Your AI Journey Today
            </a>
          </div>

          {/* Middle Column - Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Company */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© 2024 Genglobe Analytics. All rights reserved. Transforming businesses through AI innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 