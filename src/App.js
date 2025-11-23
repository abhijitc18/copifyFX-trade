import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import Services from "./sections/Services";
import OurPartner from "./sections/OurPartner";
import TradingViewWidget from "./components/TradingViewWidget";
import Client from "./sections/Client";
// import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import KeyFeatures from "./sections/KeyFeatures";
import HowItWorks from "./sections/HowItWorks";
import TradingViewTicker from "./components/TradingViewTicker";
import Footer from "./components/Footer";
import FAQ from "./sections/FAQ";
import FloatingButtons from "./components/FloatingButtons";
import PopupModel from "./components/PopupModal";
import partners from "./data/partners";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar openModal={() => setShowModal(true)} />
      <main>
        <HeroSlider />
        <TradingViewTicker />
        <About />
        <VisionMission />
        <Services />
        <OurPartner openModal={() => setShowModal(true)} />
        <TradingViewWidget />
        <Client />
        {/* <Contact /> */}
        <Gallery />
        <KeyFeatures />
        <HowItWorks />
        <FAQ />
        <PopupModel
          show={showModal}
          onClose={() => setShowModal(false)}
          partners={partners}
        />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
