import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import './App.css';

// Import components
import TopLogo from "./Components/TopLogo";
import Header from "./Components/Header";
import MobileMenu from "./Components/MobileMenu";
import Banner from "./Components/Banner";
import Footer from "./Pages/Footer.jsx";
import About from "./Pages/AboutUs";
import SingleProduct from "./Components/SingleProduct";
import OurRange from "./Pages/OurRange";
import SplashScreen from "./Components/Splash";
import Founder from './Pages/Founder';
import Contact from './Pages/Contact';
import ProductPage from "./Components/ProductPage/ProductPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage2 from "./Components/ProductPage/ProductPage2.jsx";
import ProductPage3 from "./Components/ProductPage/ProductPage3.jsx";
import ProductPage4 from "./Components/ProductPage/ProductPage4.jsx";

import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import HelpSupport from "./Pages/HelpSupport.jsx";
import Information from "./Pages/Information.jsx";
import Animation from "./Components/Demo/Animation.js";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle("menu-open");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreenWithPreload isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/*" element={
          <MainLayout 
            isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            showNavbar={showNavbar} 
            setShowNavbar={setShowNavbar} 
          />
        } />
      </Routes>
    </Router>
  );
};

const SplashScreenWithPreload = ({ isMenuOpen, toggleMenu }) => (
  <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    <SplashScreen />
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <MainLayout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} showNavbar={false} setShowNavbar={() => {}} />
    </div>
  </div>
);

const MainLayout = ({ isMenuOpen, toggleMenu, showNavbar, setShowNavbar }) => {
  const location = useLocation();
  const isProductPage = ['/haldi', '/coriander', '/mirchi', '/kala'].includes(location.pathname);

  useEffect(() => {
    // Don't show navbar on product pages
    if (isProductPage) {
      setShowNavbar(false);
      return;
    }

    // Scroll behavior for other pages
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const topLogo = document.getElementById("topLogo");

      if (window.scrollY > 50) {
        navbar?.classList.add("sticky");
        if (topLogo) topLogo.style.opacity = "0";
        setShowNavbar(true);
      } else {
        navbar?.classList.remove("sticky");
        if (topLogo) topLogo.style.opacity = "1";
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, setShowNavbar, isProductPage]);

  // Scroll to section if URL has hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="main-layout">
      {/* {!isProductPage && <TopLogo />} */}
      
      {/* Only show Header on non-product pages */}
      {/* {!isProductPage && (
        <Header 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          showNavbar={showNavbar} 
          currentPath={location.pathname}
        />
      )}
      
      {!isProductPage && (
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} currentPath={location.pathname} />
      )} */}

      {/* <div className="content-area">
        <Routes>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/haldi" element={<ProductPage />} />
          <Route path="/coriander" element={<ProductPage2/>}/>
          <Route path="/mirchi" element={<ProductPage3/>}/>
          <Route path="/kala" element={<ProductPage4/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/helpsupport" element={<HelpSupport/>}/>
          <Route path="/information" element={<Information/>}/>
          <Route path="*" element={<HomeContent />} />
        </Routes>
      </div> */}
      <Animation/>

      {/* <Footer /> */}
    </div>
  );
};

const HomeContent = () => (
  <>
    <Element name="home">
      <Banner />
    </Element>
    <Element name="hproduct">
      <SingleProduct />
    </Element>
    <Element name="products">
      <OurRange />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="founder">
      <Founder />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </>
);

export default App;