import React from "react";
import "../styles/VisionMission.css";

const VisionMission = () => (
  <section className="vision-mission-section">
    <div className="vision-mission-heading">
      <h2 className="vision-mission-title">Our Vision & Mission</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
    </div>
    <div className="vm-wrapper">
      <div className="vm-card vision-card">
        <h3 className="vm-heading">Vision</h3>
        <p className="vm-text">
          To make smart, automated trading accessible to everyone through simple
          technology and trusted strategies.
        </p>
      </div>
      <div className="vm-card mission-card">
        <h3 className="vm-heading">Mission</h3>
        <p className="vm-text">
          To empower users with easy MT4/MT5 connectivity, expert copy trading,
          and AI-driven insights that help them trade smarter and more
          confidently.
        </p>
      </div>
    </div>
  </section>
);

export default VisionMission;
