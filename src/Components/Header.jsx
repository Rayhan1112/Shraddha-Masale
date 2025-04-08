import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from '../Assests/shradhhalogo.png';

const Header = ({ isMenuOpen, toggleMenu, showNavbar }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Handle navigation based on current path
  const handleNavigation = (section) => {
    handleLinkClick(section);
    
    // If we're on a product page, navigate to home first
    if (location.pathname.includes('/product/')) {
      navigate('/home', { state: { scrollTo: section } });
    }
  };

  // Navigation link component factory
  const NavLink = ({ to, children, section }) => {
    if (location.pathname.includes('/product/')) {
      return (
        <RouterLink 
          to="/home"
          className={activeLink === section ? "active" : ""}
          onClick={() => handleNavigation(section)}
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
    <header 
      id="navbar" 
      className={`${isHeaderVisible || location.pathname.includes('/product/') ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="logo">
        <RouterLink to="/home">
          <img src={logo} alt="Logo" />
        </RouterLink>
      </div>

      {/* Navigation Menu */}
      <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
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