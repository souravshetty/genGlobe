import React from "react";

const About = () => {
  const aboutCards = [
    {
      title: "Our Mission",
      content: "Founded on the belief that AI should be accessible and impactful, Genglobe Analytics bridges the gap between cutting-edge technology and business value."
    },
    {
      title: "Our Approach",
      content: "Our approach combines deep technical expertise with strategic business acumen to deliver AI solutions that don't just impress—they perform."
    },
    {
      title: "The Challenge We Solve",
      content: "As the AI landscape rapidly evolves, organizations across industries—from innovative startups to established enterprises—face the challenge of navigating complex technological decisions while ensuring measurable business outcomes. Genglobe Analytics was created to be that trusted guide."
    },
    {
      title: "Boutique Excellence",
      content: "Our boutique approach ensures personalized attention and tailored solutions that align with your unique goals and challenges. We believe in building lasting partnerships, not just delivering projects."
    },
    {
      title: "Your AI Partner",
      content: "We pride ourselves on being more than consultants—we're your dedicated partners in the AI revolution, committed to your success every step of the way."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="orange">Genglobe Analytics</span>
          </h2>
          <p className="section-description">
            Your trusted partner in the AI revolution, delivering measurable business value through cutting-edge technology and strategic implementation.
          </p>
        </div>

        {/* Two-column layout with text and image */}
        <div className="about-hero">
          <div className="about-text-content">
            <h3>Genglobe Analytics</h3>
            <p>Founded on the belief that AI should be accessible and impactful, Genglobe Analytics bridges the gap between cutting-edge technology and business value.</p>
            <p>Our approach combines deep technical expertise with strategic business acumen to deliver AI solutions that don't just impress—they perform.</p>
            <p>As the AI landscape rapidly evolves, organizations across industries—from innovative startups to established enterprises—face the challenge of navigating complex technological decisions while ensuring measurable business outcomes. Genglobe Analytics was created to be that trusted guide.</p>
            <p>Our boutique approach ensures personalized attention and tailored solutions that align with your unique goals and challenges. We believe in building lasting partnerships, not just delivering projects.</p>
            <p>We pride ourselves on being more than consultants—we're your dedicated partners in the AI revolution, committed to your success every step of the way.</p>
          </div>
          <div className="about-image-content">
            <div className="workspace-image">
              <div className="desk-setup">
                <div className="laptop">
                  <div className="screen">
                    <div className="data-visualization">
                      <div className="chart bar-chart"></div>
                      <div className="chart pie-chart"></div>
                      <div className="chart line-chart"></div>
                    </div>
                  </div>
                </div>
                <div className="accessories">
                  <div className="mug"></div>
                  <div className="notebook"></div>
                  <div className="keyboard"></div>
                  <div className="mouse"></div>
                  <div className="headphones"></div>
                </div>
              </div>
              <div className="wall-art">
                <div className="art-piece"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <div key={index} className="about-card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 