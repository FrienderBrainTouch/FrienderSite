import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants/images";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuickMenuVisible, setIsQuickMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = 162.699; // 헤더 높이
      
      // 스크롤이 헤더 높이보다 아래로 내려가면 퀵메뉴 표시
      if (currentScrollY > headerHeight) {
        setIsQuickMenuVisible(true);
      } else {
        setIsQuickMenuVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 퀵메뉴가 다시 활성화될 때 패널을 닫음(초기화)
  useEffect(() => {
    if (isQuickMenuVisible) {
      setIsMenuOpen(false);
    }
  }, [isQuickMenuVisible]);

  return (
    <>
      {/* 기존 헤더 */}
      <header className={`flex w-full h-[105.7px] pt-[38px] pb-[38px] px-[10px] sm:px-[62px] justify-between items-center flex-nowrap absolute top-0 left-0 z-[65] ${location.pathname.startsWith('/about') ? 'bg-white' : ''}`}>
        {/* 로고 섹션 */}
        <div className="flex items-center shrink-0 flex-nowrap relative z-[66]">
          <img 
            src={IMAGES.LOGO.FRIENDER_MAIN} 
            alt="프렌더 로고" 
            className="h-24 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.location.href = '/'}
          />
        </div>
        
        {/* 네비게이션 메뉴 - md 이상에서만 표시 */}
        <nav className="hidden lg:flex w-[693px] gap-[54px] items-center shrink-0 flex-nowrap relative z-[71] justify-end">
          <a href="/about" className={`h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-black leading-[29px] text-[#1f3a31] relative text-left whitespace-nowrap z-[73] transition-colors ${location.pathname === '/' ? 'hover:text-white' : 'hover:text-[#517728]'}`}>
            회사소개
          </a>
          <a href="#content" className={`h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-black leading-[29px] text-[#1f3a31] relative text-left whitespace-nowrap z-[73] transition-colors ${location.pathname === '/' ? 'hover:text-white' : 'hover:text-[#517728]'}`}>
            콘텐츠
          </a>
          <a href="#training" className={`hidden xl:block h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-black leading-[29px] text-[#1f3a31] relative text-left whitespace-nowrap z-[74] transition-colors ${location.pathname === '/' ? 'hover:text-white' : 'hover:text-[#517728]'}`}>
            전문가 양성
          </a>
          <a href="#gallery" className={`hidden xl:block h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-black leading-[29px] text-[#1f3a31] relative text-left whitespace-nowrap z-[75] transition-colors ${location.pathname === '/' ? 'hover:text-white' : 'hover:text-[#517728]'}`}>
            활동 갤러리
          </a>
          <a href="/contact" className={`h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-black leading-[29px] text-[#1f3a31] relative text-left whitespace-nowrap z-[76] transition-colors ${location.pathname === '/' ? 'hover:text-white' : 'hover:text-[#517728]'}`}>
            문의하기
          </a>
        </nav>
        {/* 햄버거 메뉴 버튼 - md 이하에서만 표시 */}
        <button
          className="block lg:hidden z-[80] w-12 h-12 rounded-full bg-[#517728] flex items-center justify-center shadow-lg"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="모바일 메뉴 열기"
        >
          <div className="flex flex-col items-center justify-center w-7 h-7">
            <span className="block w-7 h-1 bg-white rounded mb-1"></span>
            <span className="block w-7 h-1 bg-white rounded mb-1"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
          </div>
        </button>
        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <>
            {/* 오버레이 */}
            <div className="fixed inset-0 bg-black bg-opacity-40 z-[99]" onClick={closeMobileMenu}></div>
            {/* 메뉴 패널 */}
            <div className="fixed top-0 left-0 w-full bg-white z-[100] shadow-lg animate-fadeInDown">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <img 
                  src={IMAGES.LOGO.FRIENDER_MAIN} 
                  alt="프렌더 로고" 
                  className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => {
                    window.location.href = '/';
                    closeMobileMenu();
                  }}
                />
                <button onClick={closeMobileMenu} className="w-8 h-8 flex items-center justify-center" aria-label="모바일 메뉴 닫기">
                  <span className="block w-6 h-1 bg-[#1f3a31] rotate-45 absolute"></span>
                  <span className="block w-6 h-1 bg-[#1f3a31] -rotate-45 absolute"></span>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-6 py-4">
                <a href="/about" onClick={closeMobileMenu} className="py-3 text-lg font-bold text-[#1f3a31] border-b border-gray-100">회사소개</a>
                <a href="#content" onClick={closeMobileMenu} className="py-3 text-lg font-bold text-[#1f3a31] border-b border-gray-100">콘텐츠</a>
                <a href="#training" onClick={closeMobileMenu} className="py-3 text-lg font-bold text-[#1f3a31] border-b border-gray-100">전문가 양성</a>
                <a href="#gallery" onClick={closeMobileMenu} className="py-3 text-lg font-bold text-[#1f3a31] border-b border-gray-100">활동 갤러리</a>
                <a href="/contact" onClick={closeMobileMenu} className="py-3 text-lg font-bold text-[#1f3a31]">문의하기</a>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* 리모컨 형식 퀵메뉴 */}
      <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-300 ease-in-out ${isQuickMenuVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        {/* 메인 리모컨 버튼 */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="w-16 h-16 bg-[#517728] rounded-full shadow-lg hover:bg-[#3d5a1f] transition-all duration-300 flex items-center justify-center group"
            aria-label="퀵메뉴 열기"
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 mt-0.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 mt-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
          
          {/* 툴팁 */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            메뉴
          </div>
        </div>

        {/* 메뉴 패널 */}
        {isMenuOpen && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[200px]">
            {/* 메뉴 헤더 */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-sm font-bold text-[#1f3a31]" style={{ fontFamily: 'KakaoSmallSans' }}>
                퀵메뉴
              </h3>
              <button
                onClick={closeMenu}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="메뉴 닫기"
              >
                {/* SVG X 아이콘 */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="4" x2="16" y2="16" stroke="#1f3a31" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="4" x2="4" y2="16" stroke="#1f3a31" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* 메뉴 아이템들 */}
            <div className="p-2">
              <a 
                href="/about" 
                onClick={closeMenu}
                className="block px-3 py-2 text-sm font-bold text-[#1f3a31] hover:bg-gray-100 rounded transition-colors"
                style={{ fontFamily: 'KakaoSmallSans' }}
              >
                회사소개
              </a>
              <a 
                href="#content" 
                onClick={closeMenu}
                className="block px-3 py-2 text-sm font-bold text-[#1f3a31] hover:bg-gray-100 rounded transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                콘텐츠
              </a>
              <a 
                href="#training" 
                onClick={closeMenu}
                className="block px-3 py-2 text-sm font-bold text-[#1f3a31] hover:bg-gray-100 rounded transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                전문가 양성
              </a>
              <a 
                href="#gallery" 
                onClick={closeMenu}
                className="block px-3 py-2 text-sm font-bold text-[#1f3a31] hover:bg-gray-100 rounded transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                활동 갤러리
              </a>
              <a 
                href="/contact" 
                onClick={closeMenu}
                className="block px-3 py-2 text-sm font-bold text-[#1f3a31] hover:bg-gray-100 rounded transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                문의하기
              </a>
            </div>

            {/* 메뉴 푸터 */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <img 
                  src={IMAGES.LOGO.FRIENDER_MAIN} 
                  alt="프랜더 로고" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* 배경 오버레이 */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-[99]" 
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </>
  );
} 