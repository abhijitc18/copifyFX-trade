import React from "react";
import "../styles/Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import img1 from "../assets/gallery/gallery-01.jpeg";
import img2 from "../assets/gallery/gallery-02.jpeg";
import img3 from "../assets/gallery/gallery-03.jpeg";
import img4 from "../assets/gallery/gallery-04.jpeg";
import img5 from "../assets/gallery/gallery-05.jpeg";
import img6 from "../assets/gallery/gallery-06.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => (
  <section className="gallery-section">
    <div className="gallery-heading">
      <h2 className="gallery-title">Smart Trading. Simple Experience</h2>
      <span className="angled-underline">
        <span className="skew-bar"></span>
        <span className="circle-dot"></span>
      </span>
    </div>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={35}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1320: { slidesPerView: 3 },
      }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="gallery-slide">
            <img src={src} alt={`Gallery image ${idx + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Gallery;
