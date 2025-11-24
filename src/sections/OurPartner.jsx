import React, { useEffect, useRef } from "react";
import partners from "../data/partners";
import "../styles/OurPartner.css";

const OurPartner = ({ openModal }) => {
  const carouselRef = useRef(null);
  const slideWidth = 220 + 36; // logo min-width + margin OR padding
  const tripledPartners = [...partners, ...partners, ...partners];
  const visibleSlides = 5; // Number of logos visible at once

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = partners.length * slideWidth; // Start at the middle block
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    let speed = 1;
    let animationFrameId;

    const scrollCarousel = () => {
      scrollAmount += speed;
      carousel.style.transition = "transform 0.03s linear";
      carousel.style.transform = `translateX(-${scrollAmount}px)`;

      // When reaching the end of the 2nd block (i.e. middle set), reset instantly to start of 2nd block
      if (scrollAmount >= (partners.length * 2) * slideWidth) {
        // No animation for reset
        carousel.style.transition = "none";
        scrollAmount = partners.length * slideWidth;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
      }

      animationFrameId = requestAnimationFrame(scrollCarousel);
    };

    animationFrameId = requestAnimationFrame(scrollCarousel);

    return () => cancelAnimationFrame(animationFrameId);
  }, [partners.length]);

  return (
    <section id="our-partners" className="partners-section">
      <h2 className="partners-title">
        Our Partners
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      {/* Carousel */}
      <div className="carousel-container" style={{ margin: "40px 0" }}>
        <div className="carousel" ref={carouselRef}>
          {tripledPartners.map((p, idx) => (
            <div className="partner-logo-container" key={idx}>
              <img src={p.logo} alt={p.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
      <p className="partners-subtitle">
        We collaborate with trusted global brokers
      </p>
      <p className="partners-overview">
        Our carefully selected partners are leading names in the trading industry, each chosen for their reliability, global reach, and commitment to secure, innovative financial solutions. By partnering with these reputable brokers, we help you access world-class opportunities and tailored support, giving confidence to your trading journey.
      </p>
      <button className="open-account-btn" onClick={openModal}>
        Open an account with us
      </button>
    </section>
  );
};

export default OurPartner;
