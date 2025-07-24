import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";

export default function VisionSection() {
  const navigate = useNavigate();

  const handleDownload = (filename) => {
    // 다운로드 링크 생성
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16 lg:px-24 max-w-5xl 2xl:max-w-6xl mx-auto">
      {/* 네비게이션 */}
      <div className="flex items-center mb-6 md:ml-10">
        <img 
          src={IMAGES.ABOUT.HOME} 
          alt="홈" 
          className="w-6 h-6 mr-2 opacity-50 cursor-pointer hover:opacity-75 transition-opacity" 
          onClick={() => navigate('/')}
        />
        <span className="text-gray-500 text-sm font-['GmarketSans'] font-light flex items-center">
          <span className="mr-2 opacity-50 cursor-pointer hover:opacity-75 transition-opacity" onClick={() => navigate('/')}>홈</span>
          <span className="opacity-50 mr-2">&gt;</span>
          <span className="text-base font-bold">회사소개</span>
        </span>
      </div>
      {/* 소개 문구 */}
      <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-3xl font-['GmarketSans'] font-medium mb-4 text-center lg:text-left">
        기술 기반의 창의교육,
        <br className="block lg:hidden" /> <span className="hidden lg:inline"> </span>
        모두가 성장하는 내일을 만듭니다
      </h2>
      <p className="text-md sm:text-2xl text-gray-500 mb-6 font-['GmarketSans'] text-center lg:text-left">
        프랜더는 융합형 교육 콘텐츠로 학생의 상상력과
        <br className="hidden sm:inline"/>
        지역사회의 가능성을 함께 키워가는 교육 파트너입니다.
      </p>
      {/* 소개 책자 다운 버튼 */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={() => handleDownload('Friender.pdf')}
          className="text-2xl flex items-center bg-[#517728] text-white px-6 py-3 rounded-full font-['GmarketSans'] font-medium hover:bg-[#40601e] transition-colors"
        >
          <img src={IMAGES.ABOUT.FILE_DOWNLOAD} alt="다운로드" className="w-6 h-6 mr-2" />
          소개 책자 다운 받기
        </button>
      </div>
      {/* 프랜더의 비전 */}
      <div className="text-center mb-10 mt-[8.5rem]">
        <h2 className="text-2xl md:text-4xl lg:text-3xl font-['GmarketSans'] font-medium mb-4">프랜더의 비전</h2>
        <p className="text-md sm:text-2xl lg:text-xl text-gray-500 font-['GmarketSans'] leading-relaxed">
          창의성과 기술이 만나는 공간, VR 교육 콘텐츠를 통해
          <br className="hidden sm:inline" />
          세상을 더 나은 방향으로 바꾸는 지속가능한 교육 생태계를 만들어 갑니다.
        </p>
      </div>
      {/* 비전 3가지 */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        <div className="flex-1 flex flex-col items-center text-center">
          <img src={IMAGES.ABOUT.ONE} alt="지속가능한 성장" className="w-32 h-32 mb-4" />
          <h3 className="font-['GmarketSans'] font-medium text-3xl md:text-2xl mb-2 font-bold">지속가능한 성장</h3>
          <p className="text-gray-600 text-lg md:text-base font-['GmarketSans']">누구나 접근 가능한<br />미래형 교육 인프라 구축</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <img src={IMAGES.ABOUT.TWO} alt="최고의 가치" className="w-32 h-32 mb-4" />
          <h3 className="font-['GmarketSans'] font-medium text-3xl md:text-2xl mb-2 font-bold">최고의 가치</h3>
          <p className="text-gray-600 text-lg md:text-base font-['GmarketSans']">창의 융합 콘텐츠로<br />교육의 가치를 확장</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <img src={IMAGES.ABOUT.THREE} alt="포용과 건강한 삶" className="w-32 h-32 mb-4" />
          <h3 className="font-['GmarketSans'] font-medium text-3xl md:text-2xl mb-2 font-bold">포용과 건강한 삶</h3>
          <p className="text-gray-600 text-lg md:text-base font-['GmarketSans']">모든 학습자에게<br />안전하고 즐거운 경험 제공</p>
        </div>
      </div>
    </section>
  );
} 