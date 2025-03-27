import React, { useState, useEffect } from "react";
import akrot from '../Assests/akrot.jpg';
import cardeom from '../Assests/cardeom.jpg';
import sesuseed from '../Assests/sesuseed.jpg';
import jeera from '../Assests/jeerra.webp';
import logo from '../Assests/masale.webp';
import cardeom1 from '../Assests/cardeom.jpg';

const images = [
  { src: akrot, text: "Akrot Spices" },
  { src: cardeom, text: "Cardamom Spices" },
  { src: sesuseed, text: "Sesuseed Spices" },
  { src: jeera, text: "Jeera Spices" },
  { src: logo, text: "Masale Spices" },
  { src: cardeom1, text: "Cardamom Spices" },
];

const ImageGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  // Dynamically import mobile CSS
  useEffect(() => {
    if (isMobile) {
      import("./ImageGridMobile.css");
    }
  }, [isMobile]);

  // Internal CSS styles
  const styles = {
    imageGridContainer: {
      maxWidth: "1200px",
      margin: "10vh auto",
      padding: "20px",
    },
    imageGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      alignItems: "start",
    },
    longImageContainer: {
      width: "40%",
      height: "800px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "10px",
      cursor: "pointer",
    },
    longImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease, filter 0.4s ease",
    },
    longImageHover: {
      transform: "scale(1.1)", // Zoom effect
      filter: "brightness(0.7)", // Darken the image on hover
    },
    columnGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "20px",
      width: "40%",
    },
    subImageContainer: {
      position: "relative",
      width: "100%",
      height: "390px",
      overflow: "hidden",
      borderRadius: "10px",
      cursor: "pointer",
    },
    subImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease, filter 0.4s ease",
    },
    subImageHover: {
      transform: "scale(1.1)", // Zoom effect
      filter: "brightness(0.7)", // Darken the image on hover
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      opacity: 0,
      transition: "opacity 0.4s ease",
    },
    overlayActive: {
      opacity: 1,
    },
  };

  return (
    <div style={styles.imageGridContainer}>
      <div style={styles.imageGrid}>
        {/* Left Long Image */}
        <div
          style={styles.longImageContainer}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[0].src}
            alt="Main"
            style={{
              ...styles.longImage,
              ...(hoveredIndex === 0 && styles.longImageHover),
            }}
          />
          <div
            style={{
              ...styles.overlay,
              ...(hoveredIndex === 0 && styles.overlayActive),
            }}
          >
            {images[0].text}
          </div>
        </div>

        {/* Two Column Images */}
        <div style={styles.columnGrid}>
          {[1, 2].map((index) => (
            <div
              key={index}
              style={styles.subImageContainer}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={images[index].src}
                alt={`Spices ${index}`}
                style={{
                  ...styles.subImage,
                  ...(hoveredIndex === index && styles.subImageHover),
                }}
              />
              <div
                style={{
                  ...styles.overlay,
                  ...(hoveredIndex === index && styles.overlayActive),
                }}
              >
                {images[index].text}
              </div>
            </div>
          ))}
        </div>

        {/* Middle Long Image */}
        <div
          style={styles.longImageContainer}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[3].src}
            alt="Middle"
            style={{
              ...styles.longImage,
              ...(hoveredIndex === 3 && styles.longImageHover),
            }}
          />
          <div
            style={{
              ...styles.overlay,
              ...(hoveredIndex === 3 && styles.overlayActive),
            }}
          >
            {images[3].text}
          </div>
        </div>

        {/* Another Two Column Images */}
        <div style={styles.columnGrid}>
          {[4, 5].map((index) => (
            <div
              key={index}
              style={styles.subImageContainer}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={images[index].src}
                alt={`Spices ${index}`}
                style={{
                  ...styles.subImage,
                  ...(hoveredIndex === index && styles.subImageHover),
                }}
              />
              <div
                style={{
                  ...styles.overlay,
                  ...(hoveredIndex === index && styles.overlayActive),
                }}
              >
                {images[index].text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;