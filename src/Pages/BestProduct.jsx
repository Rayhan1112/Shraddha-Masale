import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Navigation, Pagination } from "swiper/modules";
import './BestProduct.css'; // Import the CSS file
import image1 from '../Assests/10.webp';
import image2 from '../Assests/22.webp';
import image3 from '../Assests/26.webp';
import image4 from '../Assests/34.webp';
import image5 from '../Assests/42.webp';
import image6 from '../Assests/46.webp';

const BestProduct = () => {
  // Sample product data
  const products = [
    { name: "Dred seeds", price: "$649.00", image: image1 },
    { name: "Spicy Masalas", price: "$569.00", image: image2 },
    { name: "Black", price: "$286.00", image: image3 },
    { name: "Pippali", price: "$629.00", image: image4 },
    { name: "Roschip", price: "$790.00", image: image5 },
    { name: "Red Chilly", price: "$579.00", image: image6 },
    { name: "Cardamon", price: "$649.00", image: image1 },
    { name: "Mustard", price: "$569.00", image: image1 },
    { name: "Pepper", price: "$286.00", image: image1 },
    { name: "Repries", price: "$629.00", image: image1 },
  ];

  return (
    <div className="best-product">
      <h2>Best Products</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5} // Default for big screens
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3, // For tablets
          },
          320: {
            slidesPerView: 2, // For mobile
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestProduct;