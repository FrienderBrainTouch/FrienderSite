import React from 'react';
import { IMAGES } from '../constants/images';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO.BACKGROUND} 
          alt="프랜더 메인 배너" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      {/* 컨텐츠 */}
      <div className="relative z-10 text-black pl-0 xl:pl-6 xl:sm:pl-12 xl:md:pl-20 xl:lg:pl-20 text-center xl:text-left flex flex-col items-center xl:items-start justify-center xl:justify-start w-full">
        <h1 className="
          text-6xl md:text-6xl font-bold mb-6
          leading-[1.5] md:leading-[1.5]
          text-center xl:text-left
        ">
          창의력으로 미래를 디자인하는
          <br />
          창의 융합 교육 기업, 프렌더
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center xl:text-left">
          VR을 구현한 창의 교육 콘텐츠를 초등·중등 누구나 쉽게, 어디서나 자유롭게
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start w-full">
          <button 
            className="
              bg-[#517728] text-white
              px-8 py-4 rounded-xl
              sm:px-10 sm:py-5 sm:rounded-2xl
              md:px-12 md:py-6 md:rounded-3xl
              text-xl sm:text-2xl md:text-3xl
              font-bold leading-[1.5]
              hover:bg-[#40601e] transition-colors
            "
            aria-label="회사 소개 보기"
          >
            회사소개보기
          </button>
          <button 
            className="
              bg-white text-[#517728]
              px-8 py-4 rounded-xl
              sm:px-10 sm:py-5 sm:rounded-2xl
              md:px-12 md:py-6 md:rounded-3xl
              text-xl sm:text-2xl md:text-3xl
              font-bold leading-[1.5]
              border-none hover:bg-gray-100 transition-colors
            "
            aria-label="콘텐츠 둘러보기"
          >
            콘텐츠 둘러보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 