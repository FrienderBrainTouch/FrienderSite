import React, { useState } from "react";
import { IMAGES } from "../constants/images";
import "./index.css";
import IntroSection from './about/IntroSection.jsx';
import VisionSection from './about/VisionSection.jsx';
import HistorySection from './about/HistorySection.jsx';
import CertificateSection from './about/CertificateSection.jsx';
import LocationSection from './about/LocationSection.jsx';

export default function About() {
  const [showOverlay, setShowOverlay] = useState(false);

  // 스크롤 이벤트 핸들러
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 인증서 롤링용 상태 및 샘플 이미지
  const certImages = [
    IMAGES.ABOUT.ONE, // 샘플: 실제 인증서 이미지로 교체 필요
    IMAGES.ABOUT.TWO,
    IMAGES.ABOUT.THREE,
  ];
  const [currentCert, setCurrentCert] = useState(0);
  // 자동 롤링 효과
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCert((prev) => (prev + 1) % certImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [certImages.length]);

  return (
    <div className="w-full min-h-screen bg-white font-['GmarketSans']">
      <IntroSection />
      <VisionSection />
      <HistorySection />
      <CertificateSection />
      <LocationSection />
    </div>
  );
} 