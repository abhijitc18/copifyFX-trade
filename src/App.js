import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import Services from "./sections/Services";
import OurPartner from "./sections/OurPartner";
import TradingViewWidget from "./components/TradingViewWidget";
import Client from "./sections/Client";
import Gallery from "./sections/Gallery";
import KeyFeatures from "./sections/KeyFeatures";
import HowItWorks from "./sections/HowItWorks";
import TradingViewTicker from "./components/TradingViewTicker";
import Footer from "./components/Footer";
import FAQ from "./sections/FAQ";
import FloatingButtons from "./components/FloatingButtons";
import PopupModel from "./components/PopupModal";
import partners from "./data/partners";
import CopifyTrade from "./sections/CopifyTrade";
import "./App.css";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          
          {/* CopifyTrade Landing Page */}
          <Route path="/copifytrade" element={<CopifyTrade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
