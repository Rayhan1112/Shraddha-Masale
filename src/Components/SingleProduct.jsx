import React, { useRef, useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { motion, useAnimation, useInView } from "framer-motion";
import "./css/SingleProduct.css";
import topImage from '../Assests/masalepng.png'
import bottom from '../Assests/masalepn2.png'

export default function SingleProduct() {
  const productRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize Cloudinary
  const cld = new Cloudinary({ cloud: { cloudName: "dfaidqbft" } });

  // Fetch the Cloudinary image and optimize it
  const productImage = cld.image("v18jooefgvcincvez4zb")
    .format("auto")
    .quality("auto")
    .resize(auto().width(500).height(500));

  // Track if component is in view (removes once: true so it animates every time)
  const isInView = useInView(productRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 }); // Reset animation when out of view
    }
  }, [isInView, controls]);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="product-container" ref={productRef}>
      {/* Decorative PNGs */}
      <img src={topImage} alt="Decorative Element" className="decor-top-right" />
      <img src={bottom} alt="Decorative Element" className="decor-bottom-left" />

      {/* Background Text */}
      <motion.div
        className="background-text"
        initial={{ opacity: 0, y: -80 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="TopTitle">Discover Our Hero Product</h2>
      </motion.div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image - Slides in from Left */}
        <motion.div
          className="product-image-container"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <AdvancedImage cldImg={productImage} className="product-image" />
        </motion.div>

        {/* Product Details - Slides in from Right */}
        <motion.div
          className="product-details"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        >
          <h2 className="product-title">
            Our Hero Product - Bibba Godambi Spice (बिब्बा गोडम्बी मसाला)
          </h2>
          <p className="product-description">
            Bimba Godambi Spice is the heart of Hetika, a blend deeply rooted in Ayurvedic wisdom and
            packed with over 20 proven health benefits. This unique spice not only enhances the richness
            of gravies but also promotes digestion, boosts immunity, and adds an unmatched depth of flavor
            to any dish.
          </p>
          <h3 className="product-tagline">Why Bimba Godambi Masala?</h3>
          <ul className="product-benefits">
            <li>Ayurvedic formulation with 20+ health benefits</li>
            <li>Enhances taste while supporting digestive health</li>
            <li>Crafted using organic, chemical-free ingredients</li>
            <li>Ideal for curries, dals, and traditional Maharashtrian recipes</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
