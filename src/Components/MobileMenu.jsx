import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import '../Components/css/MobileView.css';

const MobileMenu = ({ isMenuOpen, toggleMenu, currentPath }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Handle scroll event to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu only on mobile when clicking a link
  const handleLinkClick = (section) => {
    setActiveLink(section);
    if (window.innerWidth < 768 && isMenuOpen) {
      toggleMenu();
    }
  };

  // Navigation link component factory
  const NavLink = ({ to, children, section }) => {
    if (currentPath === "/product") {
      return (
        <RouterLink 
          to={`/home#${to}`}
          className={activeLink === section ? "active" : ""}
          onClick={() => handleLinkClick(section)}
        >
          {children}
        </RouterLink>
      );
    }
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        offset={-70}
        className={activeLink === section ? "active" : ""}
        onSetActive={() => setActiveLink(section)}
        onClick={() => handleLinkClick(section)}
      >
        {children}
      </ScrollLink>
    );
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`} id="mobileMenu">
      <div className="close-btn" onClick={toggleMenu}>
        ×
      </div>
      <ul>
        <li>
          <NavLink to="home" section="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="hproduct" section="hproduct">Hero Product</NavLink>
        </li>
        <li>
          <NavLink to="products" section="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="about" section="about">About</NavLink>
        </li>
        <li>
          <NavLink to="founder" section="founder">Founders</NavLink>
        </li>
        <li>
          <NavLink to="contact" section="contact">Contact us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;