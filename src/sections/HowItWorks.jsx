import React from "react";
import "../styles/HowItWorks.css";
import { FaRegUser, FaLink, FaExchangeAlt } from "react-icons/fa";

const steps = [
  {
    title: "Open Your Trading Account",
    description:
      "Sign up with your preferred broker and complete KYC in just minutes to get started.",
    icon: <FaRegUser />,
  },
  {
    title: "Connect MT4/MT5 Account",
    description:
      "Easily and securely link your MetaTrader account—no tech experience required.",
    icon: <FaLink />,
  },
  {
    title: "Choose Trader/Strategy",
    description:
      "Pick a top trader or strategy and activate real-time auto-copy. Sit back and track your results.",
    icon: <FaExchangeAlt />,
  },
];

const HowItWorks = () => (
  <section className="how-itworks-minimal">
    <div className="how-itworks-header">
      <h2 className="how-itworks-title">How It Works</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
    </div>
    <p className="how-itworks-desc">
      A simple, step-by-step process to start your automated copy trading
      journey.
    </p>
    <div className="steps-vertical">
      {steps.map((step, idx) => (
        <div className="step-min-card" key={idx}>
          <div className="step-min-icon">{step.icon}</div>
          <div className="step-min-info">
            <div className="step-min-title">{step.title}</div>
            <div className="step-min-desc">{step.description}</div>
          </div>
          {idx < steps.length - 1 && <div className="step-min-connector"></div>}
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
