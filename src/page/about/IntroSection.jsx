import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../../constants/images";

export default function IntroSection() {
  const [step, setStep] = useState(0); // 0: 기본, 1: 오버레이, 2: 다음 섹션
  const [readyForStep2, setReadyForStep2] = useState(false); // step2 진입 가능 여부
  const sectionRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const isInView = useRef(false);

  // 섹션이 뷰포트에 들어오거나 벗어날 때 step을 0으로 초기화
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isInView.current = true;
        } else {
          isInView.current = false;
          setStep(0); // 섹션 벗어나면 무조건 step=0
          setReadyForStep2(false);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.3 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // step이 1이 되면 스크롤을 강제로 맨 위로 고정하고, step2 진입 가능 플래그를 false로 초기화
  useEffect(() => {
    if (step === 1) {
      setReadyForStep2(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [step]);

  // step이 1인 상태에서 스크롤이 0에 도달하면 step2 진입 가능 플래그를 true로 변경
  useEffect(() => {
    if (step === 1) {
      const onScrollToTop = () => {
        if (window.scrollY === 0) {
          setReadyForStep2(true);
        }
      };
      window.addEventListener("scroll", onScrollToTop);
      // 혹시 이미 0에 있다면 바로 true
      if (window.scrollY === 0) setReadyForStep2(true);
      return () => window.removeEventListener("scroll", onScrollToTop);
    }
  }, [step]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollDown = currentY > lastScrollY.current;
      // 1단계: 반드시 맨 위(30px 이하)에서 아래로 내릴 때만 오버레이 표시
      if (isInView.current && step === 0 && lastScrollY.current <= 30 && isScrollDown && currentY > 30) {
        setStep(1);
      }
      // 2단계: 오버레이가 보이는 상태에서(readyForStep2가 true일 때) 한 번 더 스크롤하면 step만 2로 변경 (자동 이동 없음)
      else if (isInView.current && step === 1 && readyForStep2 && isScrollDown && currentY > 30) {
        setStep(2);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [step, readyForStep2]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <img
        src={IMAGES.ABOUT.MAIN}
        alt="회사소개 메인"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl"
      />
      {/* 스크롤 유도 이미지 */}
      <div className="relative z-10 mb-10 flex flex-col items-center">
        <img
          src={IMAGES.ABOUT.SCROLL}
          alt="스크롤"
          className="w-16 h-16 animate-bounce"
        />
      </div>
      {/* 오버레이 문구 */}
      {step >= 1 && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 transition-all duration-500 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-['GmarketSans'] font-medium text-center px-4">
            기술과 교육의 융합으로,<br /> 모두의 성장을 설계합니다.
          </h2>
        </div>
      )}
    </section>
  );
} 