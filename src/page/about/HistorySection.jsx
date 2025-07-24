import React from "react";

export default function HistorySection() {
  const history = [
    { 
      year: '2020', 
      months: [
        {
          month: '09월',
          items: ['주식회사 프랜더 법인 설립']
        },
        {
          month: '12월',
          items: [
            '한국사회적기업진흥원 사회적기업 육성사업 우수기업 선정',
            "'프랜더' IP 콘텐츠 저작권 8개 등록",
            "'프랜더' 상표 등록",
            "중소벤처기업부 '청년전용창업자금' 선정"
          ]
        }
      ]
    },
    { 
      year: '2021', 
      months: [
        {
          month: '01월',
          items: ["'프랜더' 크라우드펀딩 580% 달성"]
        },
        {
          month: '03월',
          items: ['한국사회적기업진흥원 사회적기업 컨소시엄 기업 선정']
        },
        {
          month: '08월',
          items: ['보건복지부 헬스케어 창업경진대회 우수상']
        },
        {
          month: '09월',
          items: ['경기콘텐츠진흥원 IP 콘텐츠 결합형 제품 지원 선정']
        },
        {
          month: '10월',
          items: [
            '부천시 문화콘텐츠 성장지원 플랫폼 선정',
            '경기지식재산서비스센터 자격모용성지원사업 선정',
            '고용노동부 예비사회적기업 지정'
          ]
        },
        {
          month: '12월',
          items: ['중소벤처기업부 R&D 멘토링 캠프 우수기업 선정']
        }
      ]
    },
    { 
      year: '2022', 
      months: [
        {
          month: '06월',
          items: ['기업부설연구소 설립']
        },
        {
          month: '12월',
          items: [
            '산학공동 R&D 과제 선정',
            '부천시 사회적기업 기술개발비 선정'
          ]
        }
      ]
    },
    { 
      year: '2023', 
      months: [
        {
          month: '01월',
          items: [
            '특허 5개 등록',
            '4개 출원',
            '상표 2개 등록'
          ]
        }
      ]
    },
    { 
      year: '2024', 
      months: [
        {
          month: '추후',
          items: ['추후 추가 예정']
        }
      ]
    },
    { 
      year: '2025', 
      months: [
        {
          month: '추후',
          items: ['추후 추가 예정']
        }
      ]
    },
  ];
  
  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24 xl:px-0 max-w-5xl 2xl:max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">회사 연혁</h2>
      <div className="relative flex flex-col items-center">
        {/* 세로선 */}
        <div className="absolute left-1/2 top-0 w-1 bg-[#517728] h-full z-0" style={{ transform: 'translateX(-50%)' }}></div>
        {/* 연혁 아이템들 */}
        {history.map((yearData, yearIdx) => (
          <div key={yearData.year} className="w-full grid grid-cols-10 grid-rows-2 items-start mb-12 last:mb-0" style={{ position: 'relative', zIndex: 1, gridTemplateRows: '96px 1fr' }}>
            {/* 년도 마크 - 1-2행 중앙 고정 */}
            <div className="col-span-2 col-start-5 row-start-1 md:row-start-1 md:row-span-2 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#517728] bg-[#517728] text-white font-bold text-2xl shadow-lg relative z-10" style={{ border: '4px solid white', boxShadow: '0 0 0 2px #517728' }}>
                {yearData.year}
              </div>
            </div>
            {/* 연혁 설명 - 2행에 배치 */}
            <div className={`col-span-10 col-start-1 row-start-3 lg:col-span-4 lg:row-start-2 mt-6 lg:mt-0 flex justify-center lg:justify-${yearIdx % 2 === 0 ? 'start' : 'end'} ${yearIdx % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1'}`}> 
              <div className="w-full sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-md px-6 py-4 text-lg font-medium border border-gray-200 inline-block">
                {yearData.months.map((monthData, monthIdx) => (
                  <div key={monthData.month} className="mb-4 last:mb-0">
                    {/* 녹색 다이아몬드 글머리 기호와 월 */}
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-[#517728] transform rotate-45 mr-3"></div>
                      <span className="font-bold text-[#517728]">{monthData.month}</span>
                    </div>
                    {/* 월별 항목들 */}
                    <ul className="ml-6 space-y-1">
                      {monthData.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-gray-700 leading-relaxed text-left flex items-start">
                          <span className="mr-2 text-[#517728] block">●</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 