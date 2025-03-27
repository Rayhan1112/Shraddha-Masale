import React from 'react';
import TopLogo from "../Components/TopLogo";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import Banner from "../Components/Banner";
import Footer from "../Pages/Footer";
import BestProducts from "../Pages/BestProduct";
import About from "../Pages/AboutUs";
import Banner2 from "../Pages/Banner2";
import ImageGrid from "../Components/ImageGrid";
import ImageGrid2 from "../Pages/ImagesGrid2";
import SingleProduct from "../Components/SingleProduct";
import OurRange from "../Pages/OurRange";

const Home = () => {
  return (
    <div>
      <TopLogo />
      <Header />
      <MobileMenu />
      <Banner />
      <SingleProduct />
      <OurRange />
      <About />
      <ImageGrid />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;
