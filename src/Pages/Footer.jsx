import React from "react";
import "./Footer.css";
import logo from "../Assests/shradhhalogo.png";
import { Link as ScrollLink } from "react-scroll";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src={logo} alt="Sahil Group Logo" className="footer-logo" />
          <p>
          At the heart of Hetika Masale lies a story of passion, tradition, and family. Founded by Mr. Manoj Kangude, a seasoned expert with over 10 years of experience in the spice industry, our brand is built on the values of authenticity and heritage.


          </p>
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://www.instagram.com/shradhha_kangude_masale?igsh=ZG5tdW42aGU1NXB0"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/16KwYxA7fD/"><i className="fab fa-facebook"></i></a>

          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
  <li>
    <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
      About Us
    </ScrollLink>
  </li>
  <li>
    <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
      Contact
    </ScrollLink>
  </li>
  <li>
    <ScrollLink to="hproduct" smooth={true} duration={500} offset={-70}>
      Hero Product
    </ScrollLink>
  </li>
  <li>
    <ScrollLink to="products" smooth={true} duration={500} offset={-70}>
      Products
    </ScrollLink>
  </li>
</ul>

        </div>

        <div className="footer-section products">
          <h3>Support</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Information</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <div className="get-in-touch">
    <i className="fas fa-map-marker-alt"></i>
    <p>“Rau”, 365 / 5, Sakpal <br/>Colony, Warje, Pune, India.</p>
  </div>
          <p> <i className="fas fa-phone"></i>+91 7720011220</p>
          <p><i className="fas fa-envelope"></i>support@hetika.in</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Shraddha Masale
        Design & Developed by <strong><a style={{color:'yellow',textDecoration:'none'}} href="https://www.instagram.com/imagination.co.in?igsh=Nmp1Zm9tc3d2dm9w" target="_blank">Imagination Marketing and Solutions</a></strong></p>
      </div>
    </footer>
  );
};

export default Footer;
