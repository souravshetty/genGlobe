import React from "react";
import ReactDOM from "react-dom/client";

// Import components
import { Header, Hero, Features, WhyUs, About, Contact, Footer } from "./components";

// Main App Component
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

// Render App into #root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
