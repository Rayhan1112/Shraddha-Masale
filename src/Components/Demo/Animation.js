import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animation.css';

const Animation = () => {
  const [showLanding, setShowLanding] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Animation values
  const pCircleScale = useTransform(scrollYProgress, [0, 0.2], [1, 30]);
  const pCircleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  // Content animation
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.3) {
        setShowLanding(false);
      } else if (latest === 0) {
        setShowLanding(true);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showLanding && (
          <motion.div 
            className="landing-page"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="company-name"
              style={{ opacity: pCircleOpacity }}
            >
              Shil<motion.span 
                className="p-circle" 
                style={{ 
                  scale: pCircleScale,
                  backgroundColor: '#ffffff',
                }}
              >p</motion.span>akar
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="main-content"
        style={{
          opacity: contentOpacity,
          y: contentY
        }}
      >
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1>Shilpakar Interior Designs</h1>
              <p>Transforming spaces with exquisite craftsmanship</p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <div className="container">
            <h2>Our Work</h2>
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="col-md-4 mb-4" key={item}>
                  <motion.div 
                    className="portfolio-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={`https://source.unsplash.com/random/600x400/?interior,design${item}`} 
                      alt={`Interior design ${item}`} 
                      className="img-fluid"
                    />
                    <h3>Project {item}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>About Shilpakar</h2>
              <p>We are a premier interior design firm specializing in residential and commercial spaces. Our team of talented designers brings years of experience creating beautiful, functional spaces that reflect our clients' personalities and needs.</p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Shilpakar Interiors. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Animation;