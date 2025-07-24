import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
  return (
    <Router>
      <main className="w-full min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <IntroSection />
              <ServicesSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
