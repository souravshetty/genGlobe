import React from "react";

const Features = () => {
  const features = [
    {
      icon: "fas fa-brain",
      title: "LLMs & Generative AI",
      description: "Transform your business with custom large language models and generative AI solutions. From chatbots to content generation, we build AI that understands your domain and drives results.",
      bullets: [
        "Right model, right purpose",
        "Architecture that clicks into your systems",
        "Fine-tuned intelligence for your industry",
        "Cost-smart performance optimization"
      ]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud-Native Analytics",
      description: "Harness the power of cloud computing with scalable analytics platforms. We design and deploy data pipelines that grow with your business and deliver real-time insights.",
      bullets: [
        "Scalable data pipeline architecture",
        "Real-time analytics and visualization",
        "Automated reporting and insights",
        "Cloud infrastructure optimization"
      ]
    },
    {
      icon: "fas fa-code",
      title: "AI Strategy & Implementation",
      description: "Navigate your AI transformation with confidence. We provide strategic guidance, roadmap development, and hands-on implementation to ensure your AI initiatives succeed.",
      bullets: [
        "Strategic AI roadmap development",
        "Hands-on implementation support",
        "Change management consulting",
        "ROI measurement frameworks"
      ]
    },
    {
      icon: "fas fa-flask",
      title: "Machine Learning Solutions",
      description: "Build competitive advantage with custom machine learning models that turn your data into actionable insights. From predictive analytics to automated decision-making.",
      bullets: [
        "Custom ML model development",
        "Predictive analytics systems",
        "Automated decision frameworks",
        "MLOps pipeline implementation"
      ]
    },
    {
      icon: "fas fa-users",
      title: "Generative AI Solutions",
      description: "From content creation to code generation, our generative AI consulting helps you leverage the creative and productive capabilities of AI across your organization.",
      bullets: [
        "Content generation strategy",
        "Creative workflow automation",
        "Multi-modal AI integration",
        "Quality assurance systems"
      ]
    }
  ];

  return (
    <section id="services" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Transform Your Business with <span className="orange">End-to-End AI Solutions</span>
          </h2>
          <p className="section-description">
            From strategy to implementation, we deliver measurable results designed for real-world impact. Navigate your AI transformation with confidence and achieve outcomes that scale.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-bullets">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>
                    <span className="bullet orange"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="learn-more-btn">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 