import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wedding from "@/components/Wedding";
import Jayanthi from "@/components/Jayanthi";
import Gallery from "@/components/Gallery";
import Transportation from "@/components/Transportation";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation Bar */}
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* Hero Stage Section */}
        <Hero />

        {/* Dynamic Services Cards */}
        <Services />

        {/* Royal Wedding Details */}
        <Wedding />



        {/* Respectful Jayanthi Stage Setups */}
        <Jayanthi />

        {/* Portfolio Showcase Masonry Grid */}
        <Gallery />

        {/* Transport Fleet & Custom Interactive Map */}
        <Transportation />

        {/* Corporate History & Record Stats */}
        <AboutUs />

        {/* Booking Form & Address Details */}
        <Contact />
      </main>

      {/* Luxury Floral Footer */}
      <Footer />
    </>
  );
}

