import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from '../Assests/shradhhalogo.png';

const Header = ({ isMenuOpen, toggleMenu }) => {
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
      toggleMenu(); // Close mobile menu only if open
    }
  };

  return (
    <header id="navbar" className={isHeaderVisible ? "visible" : "hidden"}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "home" ? "active" : ""}
              onSetActive={() => setActiveLink("home")}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="hproduct"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "hproduct" ? "active" : ""}
              onSetActive={() => setActiveLink("hproduct")}
              onClick={() => handleLinkClick("hproduct")}
            >
              Hero Product
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "products" ? "active" : ""}
              onSetActive={() => setActiveLink("products")}
              onClick={() => handleLinkClick("products")}
            >
              Products
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "about" ? "active" : ""}
              onSetActive={() => setActiveLink("about")}
              onClick={() => handleLinkClick("about")}
            >
              About
            </ScrollLink>
          </li>
          
          <li>
            <ScrollLink
              to="founder"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "founder" ? "active" : ""}
              onSetActive={() => setActiveLink("founder")}
              onClick={() => handleLinkClick("founder")}
            >
              Founders
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={activeLink === "contact" ? "active" : ""}
              onSetActive={() => setActiveLink("contact")}
              onClick={() => handleLinkClick("contact")}
            >
              Contact us
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
