import React from "react";
import "../styles/Services.css";

import signalImg from "../assets/Trading-Signals.png";
import riskImg from "../assets/Risk-Management.png";
import coachingImg from "../assets/Personal-Coaching.png";

const services = [
  {
    title: "Trading Signals",
    description:
      "Get high-quality, market-tested forex signals that highlight profitable opportunities and help you enter trades with confidence.",
    image: signalImg,
  },
  {
    title: "Risk Management",
    description:
      "Implement proven risk-control methods that safeguard your capital while enhancing long-term profitability and stability.",
    image: riskImg,
  },
  {
    title: "Personal Coaching",
    description:
      "Receive tailored one-on-one mentoring designed to strengthen your trading approach, mindset, and performance.",
    image: coachingImg,
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <div className="service-heading">
      <h2 className="services-title">
        Services
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      <p>
        CopifyFX.trade delivers professional-grade forex solutions designed to
        elevate your trading journey. Our Trading Signals give you precise,
        market-backed entries and exits so you can trade confidently and stay
        ahead of market shifts. With advanced Risk Management support, we help
        you protect your capital and grow steadily with smart, disciplined
        strategies.
      </p>
      <p>
        For those seeking deeper mastery, our Personal Coaching sessions provide
        direct, customized mentoring—helping you sharpen your skills, strengthen
        psychology, and trade with clarity and control.
      </p>
    </div>
    <div className="services-grid">
      {services.map((service) => (
        <div className="service-card" key={service.title}>
          <img
            src={service.image}
            className="service-image"
            alt={service.title}
          />
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
