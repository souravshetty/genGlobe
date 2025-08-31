import React from "react";

const WhyUs = () => {
  const differenceFeatures = [
    {
      icon: "fas fa-bullseye",
      title: "Industry Agnostic",
      description: "Our AI methodologies adapt across sectors, delivering solutions that understand your unique business context."
    },
    {
      icon: "fas fa-chart-line",
      title: "Scalable Solutions",
      description: "Built on cloud-native architectures that grow with your ambitions, from pilot projects to enterprise-wide deployments."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Future-Ready Foundation",
      description: "Implementations designed to evolve with advancing AI technology, protecting and extending your investment."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover & Assess",
      description: "Comprehensive analysis of your current state, identifying AI opportunities that align with strategic goals and deliver maximum ROI.",
      color: "blue"
    },
    {
      number: "02",
      title: "Design & Strategy",
      description: "Customized AI roadmap development with clear milestones, technology recommendations, and implementation timelines.",
      color: "purple"
    },
    {
      number: "03",
      title: "Develop & Deploy",
      description: "Agile implementation with continuous testing, optimization, and stakeholder feedback integration throughout the build process.",
      color: "orange"
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Performance monitoring, continuous improvement, and systematic scaling of successful solutions across your organization.",
      color: "green"
    }
  ];

  const chooseUsFeatures = [
    {
      icon: "fas fa-user-tie",
      title: "Senior-Level Expertise",
      description: "Work directly with AI practitioners who have built and scaled systems at leading technology companies and research institutions."
    },
    {
      icon: "fas fa-comments",
      title: "Boutique Flexibility",
      description: "Personalized attention and rapid response times that only a focused boutique firm can provide, without enterprise overhead."
    },
    {
      icon: "fas fa-clock",
      title: "Knowledge Transfer",
      description: "We empower your teams with skills and knowledge to maintain, expand, and optimize AI systems independently."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Ethical AI Leadership",
      description: "Every solution prioritizes fairness, transparency, and responsible AI practices, protecting your brand and stakeholder trust."
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        {/* The Genglobe Analytics Difference */}
        <div className="difference-section">
          <div className="section-header">
            <p className="tagline">Where AI expertise meets business transformation</p>
            <h2 className="section-title">
              The Genglobe Analytics <span className="orange">Difference</span>
            </h2>
            <p className="section-description">
              We don't just build solutions—we build your competitive advantage. From strategic AI assessment to production deployment, we guide every phase of your transformation journey.
            </p>
          </div>
          
          <div className="difference-grid">
            {differenceFeatures.map((feature, index) => (
              <div key={index} className="difference-card">
                <div className="difference-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Proven Process Timeline */}
        <div className="process-section">
          <div className="section-header">
            <h2 className="section-title">
              Our Proven <span className="orange">Process Timeline</span>
            </h2>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-line"></div>
                <div className={`process-card ${step.color}`}>
                  <div className="process-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Leading Organizations Choose Us */}
        <div className="choose-us-section">
          <div className="section-header">
            <h2 className="section-title">
              Why Leading Organizations <span className="orange">Choose Us</span>
            </h2>
          </div>
          
          <div className="choose-us-grid">
            {chooseUsFeatures.map((feature, index) => (
              <div key={index} className="choose-us-card">
                <div className="choose-us-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="choose-us-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 