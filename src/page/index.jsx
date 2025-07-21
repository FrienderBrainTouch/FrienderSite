import React from "react";
import "./index.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <main className="w-full min-h-screen">
      {/* Header/Navigation */}
      <Header />
      
      {/* 첫 번째 섹션 - Hero */}
      <HeroSection />
      
      {/* 두 번째 섹션 - 소개 */}
      <IntroSection />
      
      {/* 세 번째 섹션 - 서비스 */}
      <ServicesSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
