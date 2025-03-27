import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/SplashScreen.css'; // Include your splash CSS
import background from '../Assests/shradhhalogo.png'; // Your splash logo

const SplashScreen = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isExiting, setIsExiting] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger the splash screen animation (fade in)
    setFadeIn(true);

    // After 3 seconds, start the exit animation (moving up)
    const exitTimer = setTimeout(() => {
      setIsExiting(true); // Start exit animation for splash screen
      setTimeout(() => {
        navigate("/home"); // Navigate after exit animation
      }, 1000); // Wait for the exit animation to finish before navigating
    }, 3000); // Wait for splash screen to be visible for 3 seconds

    return () => clearTimeout(exitTimer);
  }, [navigate]);

  return (
    <div className={`splash-screen ${fadeIn ? "fade-in" : ""} ${isExiting ? "exit-animation" : ""}`}>
      <div className="logo-container">
        <img src={background} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
