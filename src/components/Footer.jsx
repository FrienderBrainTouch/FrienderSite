import React from 'react';
import { IMAGES } from '../constants/images';

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start mb-6">
          <img 
            src={IMAGES.LOGO.FRIENDER_FOOTER} 
            alt="프랜더 로고" 
            className="h-24 w-auto mr-4"
          />
          <div className="text-sm space-y-2 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-2">
              <span>주식회사 프랜더</span>
              <span className="hidden md:inline">|</span>
              <span>경기도 부천시 부천로 198번길 18, 202동 1508호</span>
              <span className="hidden md:inline">|</span>
              <span>대표자 유재창</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Tel</span>
              <span>|</span>
              <span>010-4263-2747</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>E-mail</span>
              <span>|</span>
              <span>sunwockd@naver.com</span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-300 mb-4">
          <p>사업자등록번호: 671-87-01914</p>
          <p className="mt-2">
            (주)프랜더는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 
            상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
          </p>
        </div>
        
        <div className="text-center text-xs">
          <p>COPYRIGHT © 2025 프랜더. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 