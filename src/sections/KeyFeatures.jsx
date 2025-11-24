import React from "react";
import "../styles/KeyFeatures.css";
import {
  FaExchangeAlt,
  FaBrain,
  FaPlug,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    label: "Real-time copy trading",
    icon: <FaExchangeAlt className="icon-exchange" />,
  },
  {
    label: "AI-powered insights",
    icon: <FaBrain className="icon-ai" />,
  },
  {
    label: "Works with any MT4/MT5 broker",
    icon: <FaPlug className="icon-plug" />,
  },
  {
    label: "Smart risk control",
    icon: <FaShieldAlt className="icon-shield" />,
  },
  {
    label: "Transparent performance",
    icon: <FaChartLine className="icon-chart" />,
  },
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
      Experience next-level trading with features designed for clarity, control,
      and genuine results—so every trader can thrive, securely and efficiently,
      in any market.
    </p>
    <div className="feature-cards">
      {features.map((feature, idx) => (
        <div className="feature-card glass" key={feature.label}>
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-text">{feature.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFeatures;
