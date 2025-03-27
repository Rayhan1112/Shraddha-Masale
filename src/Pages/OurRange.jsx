import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../Assests/Product1.png";
import img2 from "../Assests/Product2.png";
import img3 from "../Assests/Product3.png";
import img4 from "../Assests/Product4.png";
import "../Components/css/OurProduct.css"; // Import the CSS fil

const PremiumQualityProducts = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    const isMobile = window.innerWidth < 768; // Detect mobile screen

    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
            }}
        >
            {/* Title Animation */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="animated-heading"
            >
                Premium Quality Products
            </motion.h1>

            <motion.p
    initial={{ scale: 0.8, opacity: 0 }}
    animate={isInView ? { scale: 1, opacity: 1 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="animated-subtitle"
>
    At the heart of Hetika Masale lies a story of passion, tradition, and family
</motion.p>


            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                {[img1, img2, img3, img4].map((image, index) => {
                    const titles = ["Turmeric Powder", "Coriander Powder", "Kala Masala", "Mirchi Masala"];
                    const descriptions = [
                        "Turmeric Powder (हळद)Bright, golden, and packed with natural goodness! Our Hetika Turmeric Powder is made from hand-picked turmeric roots, slow-roasted on a traditional Chulha to retain its deep color, earthy aroma, and natural oils. It’s not just a spice—it’s a health booster with anti-inflammatory and healing properties that have been trusted for generations.",
                        " Chulha-roasted for authentic flavor No preservatives, no additives Rich in curcumin, boosting immunity naturally Coriander Powder (धने पावडर) Experience the subtle sweetness and citrusy aroma of Hetika Coriander Powder. We roast premium coriander seeds over the Chulha flame, allowing the spice to develop a depth of flavor that brings any dish to life—be it curries, gravies, or chutneys.",
                        "Hand-ground after traditional roasting Fresh aroma with a smooth, fine texture 100% pure, no artificial colors or fillers Kala Masala (काळा मसाला) Our signature Kala Masala is a classic Maharashtrian spice blend, carefully curated with over 15 hand-selected spices. Each ingredient is slow-roasted on the Chulha, infusing the masala with a smoky, earthy flavor that’s perfect for sabzis, dals, and curries.",
                        "Traditional recipe passed through generations Roasted on Chulha for an authentic smoky taste No shortcuts—just pure, homemade flavor in every pinch Mirchi Masala (मिरची मसाला) Spice up your meals with our fiery yet flavorful Mirchi Masala! Made from sun-dried red chilies and slow-roasted spices, this masala adds the perfect heat and kick to your favorite dishes.",
                    ];

                    return (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.6, opacity: 0 }} // Start small and invisible
                            animate={isInView && !isMobile ? { scale: 1, opacity: 1 } : {}} // Desktop: Trigger once
                            whileInView={isMobile ? { scale: 1, opacity: 1 } : {}} // Mobile: Trigger when in view
                            transition={{ duration: 0.8, delay: isMobile ? index * 0.3 : index * 0.2 }} // Staggered delay for mobile
                            viewport={{ once: false, amount: 0.3 }} // Ensures mobile triggers while scrolling
                            className="card" // Use the CSS class
                        >
                            {/* Product Image */}
                            <img src={image} alt={titles[index]} />

                            {/* Product Title */}
                            <h2>{titles[index]}</h2>

                            {/* Hover Overlay */}
                            <div className="overlay">
                                <p>{descriptions[index]}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default PremiumQualityProducts;