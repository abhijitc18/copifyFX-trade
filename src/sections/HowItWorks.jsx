import React from "react";
import "../styles/HowItWorks.css";
import { FaRegUser, FaLink, FaExchangeAlt } from "react-icons/fa"; // react-icons package

const steps = [
  {
    title: "Open Your Trading Account",
    description:
      "Sign up with your preferred broker and complete the KYC process in minutes.",
    icon: <FaRegUser />,
  },
  {
    title: "Connect MT4/MT5 Account",
    description:
      "Securely link your MetaTrader account for seamless automated trading.",
    icon: <FaLink />,
  },
  {
    title: "Choose Trader/Strategy",
    description:
      "Pick a trusted trader or proven strategy and let trades copy automatically.",
    icon: <FaExchangeAlt />,
  },
];

const HowItWorks = () => (
  <section className="how-it-works-section">
    <div className="how-it-work-heading">
      <h2 className="how-it-works-title">How It Works</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
    </div>
    <p className="how-it-works-desc">
      Just three simple steps to start automated copy trading with confidence.
    </p>
    <div className="steps-timeline">
      {steps.map((step, idx) => (
        <div
          className={`timeline-step step-${idx % 2 === 0 ? "left" : "right"}`}
          key={idx}
        >
          <div className="timeline-content">
            <div className="timeline-number">{idx + 1}</div>
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-title">{step.title}</div>
            <div className="timeline-desc">{step.description}</div>
          </div>
          {idx < steps.length - 1 && <div className="timeline-connector"></div>}
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
