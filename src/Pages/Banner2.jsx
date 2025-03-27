import React from "react";
import './Banner2.css'; // Import the CSS file

const NewComponent = () => {
  return (
    <div className="new-component-container">
      <div className="new-component-background"></div>
      <div className="overlay"></div> {/* Thin black layer */}
      <div className="new-component-content">
        <h1>Cardamon / Clove / Cumin</h1>
        <h2>50% OFF</h2>
        <h3>ALL PRODUCTS</h3>
        <div className="buttons">
          <button className="shop-now">Shop Now</button>
          <button className="view-more">View More</button>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;