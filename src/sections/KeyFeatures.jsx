import React from "react";
import "../styles/KeyFeatures.css";

const features = [
  "Real-time copy trading",
  "AI-powered insights",
  "Works with any MT4/MT5 broker",
  "Smart risk control",
  "Transparent performance",
];

const KeyFeatures = () => (
  <section className="key-features-section">
    <div className="key-features-heading">
      <h2 className="key-features-title">Key Features</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
    </div>
    <p className="key-features-desc">
      Discover the strongest advantages of our platform, designed to make
      trading smarter, safer, and accessible for everyone.
    </p>
    <div className="feature-cards">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <span className="feature-icon">★</span>
          <div className="feature-text">{feature}</div>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFeatures;
