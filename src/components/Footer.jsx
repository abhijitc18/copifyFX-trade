import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      {/* About Us */}
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          CopifyFX is a smart copy-trading platform that helps you follow expert
          traders with ease. Connect your MT4/MT5 account, copy top strategies,
          and trade with confidence powered by AI.
        </p>
      </div>

      {/* Corporate Office */}
      <div className="footer-column">
        <h3>Address</h3>
        <address>
          473 Mundet Place
          <br />
          Hillside New Jersey
          <br />
          07205 United States
        </address>
      </div>
      {/* Follow On Us */}
      <div className="footer-column">
        <h3>Follow On Us</h3>
        <div className="footer-social">
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
      {/* Connect Us */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <div className="map-container">
          <p>copifyfx@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      Copyright &copy; {new Date().getFullYear()} All rights reserved | Design
      and Developed by Alivean Tech Solutoins
    </div>
  </footer>
);

export default Footer;
