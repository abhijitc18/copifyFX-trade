import React from "react";
import TraderBannerImg from "../assets/copify-trade-banner.jpeg";
import FeedbackImg from "../assets/Testimonial_male.jpg";
import CopifyLogo from "../assets/CopifyFX_logo.png";
import { FaBullseye, FaBolt, FaHeadset, FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import copifyTestimonials from "../data/copifyTestimonials";
import "../styles/CopifyTrade.css";

const CopifyTrade = () => {
  const telegramLink = "https://t.me/Copifyfx_bot2025";
  const siteUrl = "https://copifyfx.com";
  const pageUrl = `${siteUrl}/trader`;

  return (
    <>
      {/* SEO & Meta Tags - Keep as is */}
      <title>
        CopifyFX Trading Signals • High-Accuracy Forex & Crypto Insights • Start
        Earning Daily
      </title>
      <meta
        name="description"
        content="Access premium Forex & Crypto trading signals powered by market analysis and precision entries. Traders are consistently turning small deposits into solid weekly profits. Join CopifyFX and start trading smarter."
      />
      <meta
        name="keywords"
        content="forex trading signals, crypto signals, high accuracy signals, trading mentorship, vip trading channel, intraday forex, profitable trading strategies"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Grow Your Capital with High-Accuracy Forex & Crypto Signals | CopifyFX"
      />
      <meta
        property="og:description"
        content="Experience consistent results with CopifyFX’s premium trading signals. Thousands of traders rely on our accurate entries, disciplined risk management & real-time insights."
      />
      {/* <meta property="og:image" content={`${siteUrl}/trader-og.jpg`} /> */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CopifyFX" />

      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CopifyFX • Premium Forex & Crypto Trading Signals",
          description:
            "ExcCopifyFX provides high-accuracy Forex and Crypto trading signals backed by market analysis, smart risk management, and data-driven execution.",
          url: pageUrl,
          potentialAction: {
            "@type": "JoinAction",
            name: "Join CopifyFX Telegram Channel",
            url: telegramLink,
            target: {
              "@type": "EntryPoint",
              urlTemplate: telegramLink,
            },
          },
          publisher: {
            "@type": "Organization",
            name: "CopifyFX",
            url: siteUrl,
          },
        })}
      </script>

      <div className="trader-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <img
              src={TraderBannerImg}
              alt="Trading Signals Hero"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            {/* Logo on top */}
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="copify-logo-wrap"
            >
              <img
                src={CopifyLogo}
                alt="CopifyFX Logo"
                className="copify-logo"
              />
            </a>

            <h1 className="hero-title">
              Trade with Precision
              <br />
              <span className="hero-highlight">
                Accelerate Your Financial Growth.
              </span>
            </h1>

            {/* About CopifyFX */}
            <p className="hero-desc">
              CopifyFX delivers elite-level Forex and Crypto signals powered by
              advanced market analysis, strict risk control, and real-time
              strategy refinement. Every setup is engineered for accuracy—so you
              trade confidently, efficiently, and with zero guesswork.
            </p>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
            >
              Join Telegram Channel 🚀
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.5 19l7-7-7-7v14z" />
              </svg>
            </a>

            {/* Feature cards */}
            <div className="features-grid">
              <div className="features-card">
                <div className="features-icon">
                  <FaBullseye />
                </div>
                <h3>Accurate Signals</h3>
                <p>
                  Curated setups with clear entry, stop-loss, and take-profit
                  levels so you always know exactly what to do.
                </p>
              </div>

              <div className="features-card">
                <div className="features-icon">
                  <FaBolt />
                </div>
                <h3>Instant Updates</h3>
                <p>
                  Real-time alerts on new trades, adjustments, and exits
                  delivered straight to your Telegram.
                </p>
              </div>

              <div className="features-card">
                <div className="features-icon">
                  <FaHeadset />
                </div>
                <h3>24x7 Support</h3>
                <p>
                  Get help anytime from a responsive team dedicated to guiding
                  you through each market condition.
                </p>
              </div>

              <div className="features-card">
                <div className="features-icon">
                  <FaChartLine />
                </div>
                <h3>Proven Results</h3>
                <p>
                  Built on live-market performance with transparent tracking and
                  a focus on long-term account growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="testm-header">
              <h2 className="testm-title">
                What Traders Are Achieving with CopifyFX
              </h2>
              <div className="testm-subtitle">
                Consistent, structured, data-backed performance delivered
                through precise entry signals and disciplined risk control.
              </div>
            </div>
            {/* Testimonial 3 */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                900: { slidesPerView: 2 },
                1320: { slidesPerView: 3 },
              }}
              className="testimonials-swiper"
            >
              {copifyTestimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testimonial-card">
                    {/* avatar */}
                    <div className="testimonial-avatar">
                      <img src={FeedbackImg} alt={item.name} />
                    </div>

                    {/* content */}
                    <div className="testimonial-content">
                      <p>"{item.text}"</p>
                    </div>

                    {/* Bottom row: name + stars + profit badge */}
                    <div className="testimonial-footer">
                      <div className="testimonial-user">
                        <span className="testimonial-name">{item.name}</span>
                        <div className="testimonial-stars">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span className="star-dim">★</span>
                        </div>
                      </div>
                      <div className="profit-badge-pill">
                        <span className="profit-label">Profit</span>
                        <span className="profit-value">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Footer */}
        <footer className="disclaimer-section">
          <div className="container">
            <span className="disclaimer-text">
              Disclaimer: Content provided by CopifyFX is strictly for
              educational use and should not be interpreted as financial advice.
              Trading the markets involves significant risk. Always evaluate
              your own risk tolerance and perform independent research before
              placing trades.
            </span>
            <p>
              🚀 Join our private Telegram community for structured insights and
              real-time updates. | © 2025&nbsp;
              <strong>CopifyFX</strong>&nbsp;- All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CopifyTrade;
