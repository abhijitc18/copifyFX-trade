import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";
import "../styles/VisionMission.css";

const VisionMission = () => (
  <section className="vision-mission-section">
    <div className="vision-mission-heading">
      <h2 className="vision-mission-title">Our Vision & Mission</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
      <p className="vision-mission-subtitle">
        Shaping the future of smart, accessible trading for everyone-one
        innovation at a time.
      </p>
    </div>
    <div className="vm-wrapper">
      <div className="vm-card vision-card">
        <div className="vm-icon vision-icon">
          <FaEye />
        </div>
        <h3 className="vm-heading">Vision</h3>
        <p className="vm-text">
          To reshape trading into an intuitive experience where
          everyone-regardless of background-can access smart, automated
          financial strategies, unlock new opportunities, and feel empowered by
          transparent, AI-driven guidance for lifelong financial growth.
        </p>
      </div>
      <div className="vm-card mission-card">
        <div className="vm-icon mission-icon">
          <FaRocket />
        </div>
        <h3 className="vm-heading">Mission</h3>
        <p className="vm-text">
          Our mission is to bridge complex trading platforms with seamless
          technology, providing users with secure MT4/MT5 access, real-time copy
          trading, and expertly curated AI insights that support confident
          decisions and sustainable progress for every trader.
        </p>
      </div>
    </div>
  </section>
);

export default VisionMission;
