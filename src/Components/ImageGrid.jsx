import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import "./ImageGrid.css";

const ImageGrid = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dfaidqbft" } });

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define images with correct titles
    const imageList = [
      { id: "sasuo4gjgvdah8iibgzq", title: "Spicy Special", description: "Exclusive flavors" },
      { id: "o2hjmxb6olpgehqtsult", title: "Cardamom", description: "Pure and aromatic" },
      { id: "hg8vccpoaqyb1dfawfvf", title: "Sesame Seeds", description: "Healthy & natural" },
      { id: "zq65m5yhjqangvimesrs", title: "Jeera (Cumin)", description: "Rich in taste & aroma" },
      { id: "sasuo4gjgvdah8iibgzq", title: "Walnut Delight", description: "Premium quality" }
    ]; 

    const fetchedImages = imageList.map((img) => ({
      ...img, // Keep title and description from object
      url: cld.image(img.id).resize(auto().width(500).height(400)), // Cloudinary transformation
    }));

    setImages(fetchedImages);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(".main-image-container, .sub-image-container");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div className="image-grid">
      {images.length > 0 ? (
        <>
          <div className="main-image-container">
            <AdvancedImage cldImg={images[0].url} className="main-image" />
            <div className="overlay"></div>
            <div className="content">
              <h4>{images[0].title}</h4>
              <p dangerouslySetInnerHTML={{ __html: images[0].description }}></p>
            </div>
          </div>
          <div className="sub-grid">
            {images.slice(1).map((image, index) => (
              <div key={index} className="sub-image-container">
                <AdvancedImage cldImg={image.url} className="sub-image" />
                <div className="overlay"></div>
                <div className="content">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default ImageGrid;
