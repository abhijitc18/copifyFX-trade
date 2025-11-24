import React from "react";
import "../styles/Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Placeholder images
import client1 from "../assets/Testimonial_male.jpg";
import client2 from "../assets/Testimonial_female.jpeg";

const StarRating = ({ count }) => (
  <span className="star-rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star active" : "star"}>
        ★
      </span>
    ))}
  </span>
);

const clients = [
  {
    name: "Arjun Mehta",
    image: client1,
    profit: "120% ROI",
    quote:
      "CopifyFX ने माझ्या ट्रेडिंगला स्थिरता दिली. आता निर्णय अधिक स्पष्ट आणि आत्मविश्वासाने घेतो.",
    rating: 4,
  },
  {
    name: "Ritik Sharma",
    image: client1,
    profit: "150% ROI",
    quote:
      "The automated setup saves a lot of time and keeps profits steady. Perfect for busy traders.",
    rating: 5,
  },
  {
    name: "Varun Patil",
    image: client1,
    profit: "140% ROI",
    quote:
      "High accuracy, no stress, and very smooth execution. CopifyFX has upgraded my trading style.",
    rating: 5,
  },
  {
    name: "Nisha Kulkarni",
    image: client2,
    profit: "95% ROI",
    quote:
      "Signals अगदी स्पष्ट आहेत, guidance सोपी आहे, आणि नफा सातत्याने मिळत आहे. छान अनुभव.",
    rating: 5,
  },
  {
    name: "Sagar Nair",
    image: client1,
    profit: "130% ROI",
    quote:
      "Clean analysis, steady results, and honest support. Truly reliable for consistent forex growth.",
    rating: 5,
  },
];

const Clients = () => (
  <section id="clients" className="clients-section">
    <div className="client-heading">
      <h2 className="happy-clients-title">
        Success Stories from Happy Clients
      </h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
      <p className="clients-subtext">
        Trusted by traders who demand accuracy, consistency, and real financial
        growth.
      </p>
    </div>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        900: { slidesPerView: 2 },
        1320: { slidesPerView: 3 },
      }}
    >
      {clients.map((client, idx) => (
        <SwiperSlide key={idx}>
          <div className="client-card-glass">
            <div className="client-image-wrap">
              <img
                src={client.image}
                className="client-image-glass"
                alt={client.name}
              />
            </div>
            <div className="client-card-content">
              <FaQuoteLeft className="quote-icon" />
              <div className="client-quote-glass">“{client.quote}”</div>
              <div className="client-name-glass">{client.name}</div>
              <div className="client-profit-glass">{client.profit}</div>
              <StarRating count={client.rating} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Clients;
