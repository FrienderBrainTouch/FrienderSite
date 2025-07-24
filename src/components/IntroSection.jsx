import React from 'react';
import { IMAGES } from '../constants/images';

const IntroSection = () => {
  const values = [
    {
      id: 'creativity',
      name: '창의성',
      icon: IMAGES.COMPANY_VALUES.CREATIVITY,
      description: '혁신적인 아이디어로 새로운 가치를 창출합니다'
    },
    {
      id: 'innovation',
      name: '혁신',
      icon: IMAGES.COMPANY_VALUES.INNOVATION,
      description: '기술과 교육의 융합으로 혁신을 이끌어갑니다'
    },
    {
      id: 'community',
      name: '지역 협력',
      icon: IMAGES.COMPANY_VALUES.COMMUNITY_COLLABORATION,
      description: '지역사회와 함께 성장하는 파트너십을 구축합니다'
    },
    {
      id: 'education',
      name: '교육',
      icon: IMAGES.COMPANY_VALUES.EDUCATION,
      description: '양질의 교육을 통해 미래 인재를 양성합니다'
    },
    {
      id: 'sustainability',
      name: '지속 가능성',
      icon: IMAGES.COMPANY_VALUES.SUSTAINABILITY,
      description: '지속 가능한 미래를 위한 솔루션을 제공합니다'
    }
  ];

  return (
    <section className="w-full h-screen flex items-center bg-white">
      <div className="max-w-[90%] mx-auto w-full h-full pb-16 sm:pb-[7rem]">
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-8 xl:gap-16 2xl:gap-24 3xl:gap-32 items-center h-full">
          {/* 왼쪽 컨텐츠 */}
          <div className="flex flex-col h-full justify-between xl:justify-between">
            <div className="h-3/5 flex flex-col justify-end xl:justify-end items-center xl:items-start">
              <h2
                className="
                  font-bold text-lg sm:text-3xl md:text-4xl
                  2xl:text-[2.75rem] 2xl:leading-[1.5]
                  text-black mb-6 text-center xl:text-left
                "
                style={{ fontFamily: 'KakaoSmallSans' }}
              >
                프랜더는 <span className="text-[#517728]">기술과 교육의 융합</span>을 통해 <br />함께 성장합니다.
              </h2>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-9 mb-8 justify-center xl:justify-start">
                <span className="bg-white shadow-xl rounded-full px-4 py-2 md:px-6 md:py-2 flex items-center">
                  <span className="text-[#769940] font-normal text-lg md:text-xl xl:text-xl text-center xl:text-left" style={{ fontFamily: 'KakaoSmallSans' }}>
                    #예비 사회적 기업
                  </span>
                </span>
                <span className="bg-white shadow-xl rounded-full px-4 py-2 md:px-6 md:py-2 flex items-center">
                  <span className="text-[#769940] font-normal text-lg md:text-xl xl:text-xl text-center xl:text-left" style={{ fontFamily: 'KakaoSmallSans' }}>
                    #벤처기업
                  </span>
                </span>
                <span className="bg-white shadow-xl rounded-full px-4 py-2 md:px-6 md:py-2 flex items-center">
                  <span className="text-[#769940] font-normal text-lg md:text-xl xl:text-xl text-center xl:text-left" style={{ fontFamily: 'KakaoSmallSans' }}>
                    #기업부설 연구소
                  </span>
                </span>
              </div>
              <p 
                className="text-black font-medium text-md sm:text-lg md:text-xl xl:text-2xl mb-8 text-center xl:text-left"
                style={{ fontFamily: 'Inter', lineHeight: '3rem' }}
              >
                 첨단 기술과 창의의 교육 콘텐츠를 결합해 <br />학생, 교사, 지역사회를 연결하는 솔루션을 제공합니다.
              </p>
            </div>
            
            {/* 회사 가치 아이콘들 */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 flex-1 items-center justify-center xl:justify-start max-w-4xl">
              {values.map((value, idx) => (
                <div
                  key={value.id}
                  className={`flex flex-col items-center justify-center xl:justify-start ${idx === values.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="w-[7rem] h-[7rem] flex items-center justify-center xl:justify-start">
                    <img
                      src={value.icon}
                      alt={`${value.name} 아이콘`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p
                    className="text-gray-800 font-medium text-lg md:text-xl mt-2 text-center"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {value.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 오른쪽 이미지 */}
          <div className="hidden xl:block relative w-full h-full flex flex-wrap content-end pb-8 max-w-2xl">
            <div className="relative w-full">
              <img
                src={IMAGES.COMPANY_VALUES.CENTER_IMAGE}
                alt="프랜더 소개 이미지"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 