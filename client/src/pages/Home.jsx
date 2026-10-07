import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import Trailers from "../components/Trailers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <Trailers />
    </>
  );
};

export default Home;
