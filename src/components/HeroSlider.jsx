// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";
import banner1 from "../assets/banner01.jpg";
import banner2 from "../assets/banner02.jpg";
import banner3 from "../assets/banner03.jpg";
import banner4 from "../assets/banner04.jpeg";

const slides = [
  {
    id: 1,
    title: "Trusted Portfolio Management for Global Traders",
    subtext: "5+ Years of Consistent Forex Growth",
    cta: "",
    backgroundStyle: {
      backgroundImage: `url(${banner1}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#services",
  },
  {
    id: 2,
    title: "Trade Smarter with AI-Backed Insights",
    subtext: "Accurate Signals • Market Analysis • Smart Decisions",
    cta: "",
    backgroundStyle: {
      backgroundImage: `url(${banner2}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#services",
  },
  {
    id: 3,
    title: "Complete Forex Trading Solutions",
    subtext: "Signals | 1-on-1 Guidance | Beginner to Pro Training",
    cta: "",
    backgroundStyle: {
      backgroundImage: `url(${banner3}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "",
  },
  {
    id: 4,
    title: "Start Earning with Expert Support",
    subtext: "Join Our Growing Community of Profitable Traders",
    cta: "Join Now",
    backgroundStyle: {
      backgroundImage: `url(${banner4}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#our-partners",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ ...slide.backgroundStyle }}
        >
          <h1>{slide.title}</h1>
          {slide.subtext && <p>{slide.subtext}</p>}
          {slide.cta && (
            <a href={slide.ctaLink} className="cta-button">
              {slide.cta}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
