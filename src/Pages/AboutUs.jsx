import React from "react";
import { useInView } from "react-intersection-observer";
import './Aboutus.css'; // Import the CSS file

const Banner1 = () => {
  const { ref: containerRef, inView } = useInView({
    threshold: 0.1, // Trigger when 50% of the component is visible
    triggerOnce: false, // Allow animations to replay
  });

  const videoUrl = "https://res.cloudinary.com/dfaidqbft/video/upload/f_auto:video,q_auto/tbmwtwfl0lsxpwwry159"; // Replace with your Cloudinary video URL

  console.log("Is component in view?", inView); // Debugging

  return (
    <div className="parallax-container" ref={containerRef}>
      <video autoPlay loop muted className="parallax-background" src={videoUrl}></video>

      <div className="parallax-overlay"></div> {/* Overlay to improve text contrast */}

      <div className="parallax-content">
        <h1 className={inView ? "visible" : ""}>About Us</h1>
        <h3 className={inView ? "visible" : ""}>Shraddha Masale</h3>
        {/* <p className={inView ? "visible" : ""}>
        At the heart of Hetika Masale lies a story of passion, tradition, and family. Founded by Mr. Manoj Kangude, a seasoned expert with over 10 years of experience in the spice industry, our brand is built on the values of authenticity and heritage. His journey began with a deep-rooted love for Maharashtrian flavors, inspiring him to create Shraddha Masale—a brand that brings the rich and aromatic essence of traditional spices to every kitchen.

        </p> */}
        <p className={inView ? "visible" : ""}>

          At Shradhha Masale, we believe in preserving the rich culinary heritage of Maharashtra by bringing to you 
          100% organic and traditionally processed spices. As a proud subsidiary of the Shradhha Masale, 
          stands out in Pune’s competitive spice market with our unwavering commitment to purity, 
          quality, and authenticity. Our spices are not just ingredients; they are a gateway to the flavors of 
          tradition, handcrafted using the age-old Organic Chulha (Hinge) method, ensuring a distinct 
          aroma and taste that sets us apart.
        </p>
      </div>
    </div>
  );
};

export default Banner1;
