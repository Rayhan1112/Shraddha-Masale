import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import './App.css';

import TopLogo from "./Components/TopLogo";
import Header from "./Components/Header";
import MobileMenu from "./Components/MobileMenu";
import Banner from "./Components/Banner";
import Footer from "./Pages/Footer.jsx";
// import BestProducts from "./Pages/BestProduct";
import About from "./Pages/AboutUs";
// import Banner2 from "./Pages/Banner2";
// import ImageGrid from "./Components/ImageGrid";
// import ImageGrid2 from "./Pages/ImagesGrid2";
import SingleProduct from "./Components/SingleProduct";
import OurRange from "./Pages/OurRange";
import SplashScreen from "./Components/Splash";
import Founder from './Pages/Founder';
import Contact from './Pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    document.body.classList.toggle("menu-open"); // Prevents background scrolling
    setIsMenuOpen(!isMenuOpen);
  };
  

  // Sticky navbar and hide top logo on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const topLogo = document.getElementById("topLogo");

      if (window.scrollY > 50) {
        navbar?.classList.add("sticky");
        if (topLogo) topLogo.style.opacity = "0";
      } else {
        navbar?.classList.remove("sticky");
        if (topLogo) topLogo.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Splash Screen Route */}
        <Route path="/" element={<SplashScreenWithPreload isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        
        {/* Main Website Content Route */}
        <Route path="/home" element={<HomeContent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
      </Routes>
    </Router>
  );
};

// Splash screen with home preloading
const SplashScreenWithPreload = ({ isMenuOpen, toggleMenu }) => (
  <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    <SplashScreen />
    {/* Preload Home Screen in the Background */}
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <HomeContent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  </div>
);

// HomeContent component with scrollable sections
const HomeContent = ({ isMenuOpen, toggleMenu }) => (
  <div>
    <TopLogo />
    <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

    {/* Scrollable Sections */}
    <Element name="home">
      <Banner />
    </Element>

    <Element name="hproduct">
      <SingleProduct />
    </Element>
    <Element name="products">
    <OurRange/>
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="founder">
      <Founder/>
    </Element>

    <Element name="contact">
      <Contact/>
    </Element>


    <Footer />
  </div>
);

export default App;
