// src/sections/About.jsx
import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about-us.png";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-text">
      <h2 className="about-title">
        About CopifyFX
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      <p>
        CopifyFX is a trusted name in Forex trading, backed by 5+ years of
        proven experience and consistent performance across global markets. We
        combine smart strategies with deep market understanding to help traders
        unlock real, measurable profits.
      </p>
      <p>
        From high-accuracy trading signals to one-on-one coaching and daily
        market insights, our services are designed to fast-track your growth.
        Whether you're a beginner looking to start trading confidently or an
        experienced trader aiming for bigger wins, CopifyFX gives you the tools
        to level up.
      </p>
      <p>
        Our commitment to transparency, reliable results, and hands-on guidance
        has built us a strong reputation among traders worldwide. With CopifyFX,
        you’re not just trading—you’re trading with confidence, clarity, and a
        partner who wants you to win.
      </p>

      <div className="social-icons">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/copifyfx/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61584286101023"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://t.me/CopifyFX_Bot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
    <div className="about-image">
      <img src={aboutImg} alt="CopifyFX Trade" />
    </div>
  </section>
);

export default About;
