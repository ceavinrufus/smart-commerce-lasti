import React from "react";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <Hero />
      <NewArrival />
      <Footer />
    </div>
  );
}

export default HomePage;
