import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Components/css/OurProduct.css";

const PremiumQualityProducts = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;



    const products = [
        {
            id: 1,
            title: "Turmeric Powder",
            image: "https://res.cloudinary.com/djlhicadd/image/upload/v1743597659/chd29qttwpsyfq94ifuf.png",
            route: "haldi",
        },
        {
            id: 2,
            title: "Coriander Powder",
            image: "https://res.cloudinary.com/djlhicadd/image/upload/v1743597661/lit4rrlq5la1xyfnutg6.png",
            route: "coriander",
        },
        {
            id: 3,
            title: "Kala Masala",
            image: "https://res.cloudinary.com/djlhicadd/image/upload/v1743597664/u0j9j50upphj4q68zesw.png",
            route: "kala",
        },
        {
            id: 4,
            title: "Mirchi Powder",
            image: "https://res.cloudinary.com/djlhicadd/image/upload/v1743598085/ckpe0z1cjcw6cqldgkqj.png",
            route: "mirchi",
        }
    ];

    const handleProductClick = (product) => {
        navigate(`/${product.route}`, { state: { product } });
    };

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                overflow: "hidden",
            }}
        >
          {/* Left decoration image from Cloudinary */}



            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="animated-heading"
                style={{ position: "relative", zIndex: 1 }}
            >
                Premium Quality Products
            </motion.h1>

            <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="animated-subtitle"
                style={{ position: "relative", zIndex: 1 }}
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
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={isInView && !isMobile ? { scale: 1, opacity: 1 } : {}}
                        whileInView={isMobile ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: isMobile ? index * 0.3 : index * 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="card"
                        onClick={() => handleProductClick(product)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img 
                            src={product.image} 
                            alt={product.title}
                            onError={(e) => {
                                e.target.src = "https://res.cloudinary.com/your-cloud-name/image/upload/w_300,q_auto,f_auto/v1234567/placeholder-product.png";
                            }}
                        />
                        <h2>{product.title}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PremiumQualityProducts;