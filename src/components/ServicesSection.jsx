import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/images';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      id: 'education',
      title: '교육 콘텐츠 기획',
      description: '프랜더는 창의 융합형 수업을 위한<br/> 몰입형 VR 콘텐츠를 기획하고 운영합니다.',
      image: IMAGES.SERVICES.EDUCATION_CONTENT,
      buttonText: '자세히 보기',
      bgColor: '#28332F'
    },
    {
      id: 'platform',
      title: '플랫폼 구축',
      description: 'IT 솔루션 개발 사례 보기<br /> or 웹·앱 구축 컨설팅',
      image: IMAGES.SERVICES.PLATFORM_CONSTRUCTION,
      buttonText: '솔루션 사례 보기',
      bgColor: '#314810'
    },
    {
      id: 'gallery',
      title: '갤러리',
      description: '교육 현장에서<br/> 실제 사용된 VR 수업 장면을 확인해보세요.',
      image: IMAGES.SERVICES.GALLERY_MAIN,
      buttonText: '활동 사진 보기',
      bgColor: '#152017'
    }
  ];

  const slides = [
    {
      id: 1,
      title: '환경과학',
      image: IMAGES.SLIDES.ENVIRONMENTAL_SCIENCE,
      description: '환경과학 교육 콘텐츠'
    },
    {
      id: 2,
      title: '드론',
      image: IMAGES.SLIDES.DRONE,
      description: '드론 기술 교육 콘텐츠'
    },
    {
      id: 3,
      title: '마약 예방',
      image: IMAGES.SLIDES.DRUG_PREVENTION,
      description: '마약 예방 교육 콘텐츠'
    },
    {
      id: 4,
      title: '세계 여행',
      image: IMAGES.SLIDES.WORLD_TRAVEL,
      description: '세계 여행 교육 콘텐츠'
    },
    {
      id: 5,
      title: '블록 코딩',
      image: IMAGES.SLIDES.BLOCK_CODING,
      description: '블록 코딩 교육 콘텐츠'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full h-screen flex items-center bg-gray-50">
      <div className="h-full w-full">


        {/*2스 그리드 */}
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          {/* 교육 콘텐츠 기획 */}
          <article
            className="relative h-full overflow-hidden group"
            style={{ backgroundColor: services[0].bgColor }}
            onMouseEnter={() => setHoveredService(services[0].id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="flex-3/4 flex items-center justify-center h-[75%]">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {hoveredService !== services[0].id && (
                  <div className="flex-1/5 flex items-center justify-center h-[20%]">
                    <h3 className="text-6xl font-bold text-center text-white"
                      style={{
                        fontFamily: 'KakaoSmallSans'
                      }}
                    >
                      {services[0].title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
            
            {/* Hover 오버레이 */}
            {hoveredService === services[0].id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-6xl font-bold text-center">{services[0].title}</h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-center text-2xl font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: services[0].description }}></p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <button className="bg-white text-[#395E00] px-16 pt-8 pb-9 rounded-full font-bold text-4xl shadow-lg hover:bg-[#517728] hover:text-white transition-colors"
                      style={{ fontFamily: 'KakaoSmallSans', fontWeight: '700' }}
                    >
                      {services[0].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* 플랫폼 구축 */}
          <article
            className="relative h-full overflow-hidden group"
            style={{ backgroundColor: services[1].bgColor }}
            onMouseEnter={() => setHoveredService(services[1].id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="flex-3/4 flex items-center justify-center h-[75%]">
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {hoveredService !== services[1].id && (
                  <div className="flex-1/5 flex items-center justify-center h-[20%]">
                    <h3 className="text-6xl font-bold text-center text-white"
                      style={{
                        fontFamily: 'KakaoSmallSans'
                      }}
                    >
                      {services[1].title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
            
            {/* Hover 오버레이 */}
            {hoveredService === services[1].id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-6xl font-bold text-center">{services[1].title}</h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-center text-2xl font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: services[1].description }}></p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <button className="bg-white text-[#395E00] px-12 pt-8 pb-9 rounded-full font-bold text-4xl shadow-lg hover:bg-[#517728] hover:text-white transition-colors"
                      style={{ fontFamily: 'KakaoSmallSans', fontWeight: '700' }}
                    >
                      {services[1].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* 갤러리 */}
          <article
            className="relative h-full overflow-hidden group"
            style={{ backgroundColor: services[2].bgColor }}
            onMouseEnter={() => setHoveredService(services[2].id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="flex-3/4 flex items-center justify-center h-[75%]">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {hoveredService !== services[2].id && (
                  <div className="flex-1/5 flex items-center justify-center h-[20%]">
                    <h3 className="text-6xl font-bold text-center text-white"
                      style={{
                        fontFamily: 'KakaoSmallSans'
                      }}
                    >
                      {services[2].title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
            
            {/* Hover 오버레이 */}
            {hoveredService === services[2].id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-6xl font-bold text-center">{services[2].title}</h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-center text-2xl font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: services[2].description }}></p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <button className="bg-white text-[#395E00] px-12 pt-8 pb-9 rounded-full font-bold text-4xl shadow-lg hover:bg-[#517728] hover:text-white transition-colors"
                      style={{ fontFamily: 'KakaoSmallSans', fontWeight: '700' }}
                    >
                      {services[2].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* VR 교육 콘텐츠 슬라이드 */}
          <div className="bg-white  shadow-lg p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900"
              style={{
                fontFamily: 'KakaoSmallSans'
              }}
            >
              다양한 분야
              <br />
              VR 교육 콘텐츠
            </h3>
            
            <div className="relative h-full">
              <div className="flex items-center justify-center h-full">
                <button
                  onClick={prevSlide}
                  className="absolute z-10 w-11 transition-opacity"
                  style={{ left: windowWidth <= 1024 ? 'calc(50% - 14rem)' : 'calc(50% - 16rem)' }}
                  aria-label="이전 슬라이드"
                >
                  <img
                    src="/src/FrienderResources/arrow-left.png"
                    alt="이전 슬라이드"
                    className="w-full h-full object-contain"
                  />
                </button>
                
                <div className="w-full max-w-xs mx-auto">
                  <div
                    className="relative bg-white rounded-lg overflow-hidden w-76 h-80"
                    style={{
                      boxShadow: '11px 13px 28.4px 0px rgba(0,0,0,0.25)'
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-8/10 flex items-center justify-center h-[80%]">
                        <img
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex-2/10 flex items-center justify-center h-[20%]">
                        <h4
                          className="text-black text-3xl font-extrabold text-center w-full"
                          style={{
                            fontFamily: 'KakaoSmallSans',
                            textShadow: '0 2px 8px rgba(0,0,0,0.18)'
                          }}
                        >
                          {slides[currentSlide].title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextSlide}
                  className="absolute z-10 w-11 transition-opacity"
                  style={{ right: windowWidth <= 1024 ? 'calc(50% - 14rem)' : 'calc(50% - 16rem)' }}
                  aria-label="다음 슬라이드"
                >
                  <img
                    src="/src/FrienderResources/arrow-right.png"
                    alt="다음 슬라이드"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
              
              {/* 슬라이드 인디케이터 */}
              <div className="flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-green-600' : 'bg-green-300'
                    }`}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 