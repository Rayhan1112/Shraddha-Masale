import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import "../Components/css/Banner.css";
import { motion, AnimatePresence } from "framer-motion";

const changingTexts = [
  "a soulful journey!",
  "an explosion of flavors!",
  "a taste of tradition!",
  "crafted for perfection!"
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Initialize Cloudinary
  const cld = new Cloudinary({ cloud: { cloudName: "dfaidqbft" } });

  // Get Cloudinary Image with Optimization
  const bannerImage = cld
    .image("gnjzohwbuhtwpf1y71kp") // 🔹 Replace with your Cloudinary image ID
    .format("auto")
    .quality("auto")
    .resize(auto().width(1920).height(1080)); // 🔹 Resize for banner

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
    <div className="banner-image">
      {/* 🔹 Cloudinary Image */}
      <AdvancedImage cldImg={bannerImage} className="banner-img" />
  
      {/* 🔹 Overlay for better text visibility */}
      <div className="overlay"></div>  
  
      {/* 🔹 Banner Text */}
      <div className="banner-text">
        <h1>Test The Real Taste</h1>
        <AnimatePresence mode="wait">
          <motion.span 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {changingTexts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  </section>
  
  );
};

export default Banner;