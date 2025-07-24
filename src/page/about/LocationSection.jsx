import React, { useState } from "react";
import { IMAGES } from "../../constants/images";

export default function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(true);

  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24 xl:px-8 max-w-5xl 2xl:max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">오시는 길</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* 구글 지도 또는 대체 이미지 */}
        <div className="flex-1 w-full h-96 rounded-xl overflow-hidden shadow-md mb-8 md:mb-0 bg-gray-100 flex items-center justify-center">
          {mapLoaded ? (
            <iframe
              title="구글 지도"
              src="https://www.google.com/maps?q=(주)프랜더&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onError={() => setMapLoaded(false)}
            ></iframe>
          ) : (
            <img
              src={IMAGES.ABOUT.FRIENDER_MAP}
              alt="프랜더 위치 지도"
              className="w-full h-96 object-cover"
            />
          )}
        </div>
        {/* 오른쪽 안내 */}
        <div className="flex-1 flex flex-col items-start">
          <img src={IMAGES.ABOUT.ABOUT_LOGO} alt="로고" className="w-32 h-auto mb-4" />
          <div className="mb-6 text-lg font-semibold">경기도 부천시 부천로 198번길 18, 202동 1508호</div>
          {/* 교통수단 안내 */}
          <div className="flex flex-col gap-4 w-full">
            {/* 자차 */}
            <div className="flex items-center gap-4">
              <img src={IMAGES.ABOUT.CAR} alt="자차" className="w-10 h-10" />
              <div>
                <div className="font-bold">자차 이용</div>
                <div className="text-sm text-gray-700">네비게이션 검색: 경기도 부천시 부천로 198번길 18, 202동 1508호</div>
              </div>
            </div>
            {/* 버스 */}
            <div className="flex items-center gap-4">
              <img src={IMAGES.ABOUT.BUS} alt="버스" className="w-10 h-10" />
              <div>
                <div className="font-bold">버스 이용</div>
                <div className="text-sm text-gray-700">간선 5-1, 50, 지선 661 ‘부천테크노파크 정문’ 하차 후 도보 3분</div>
              </div>
            </div>
            {/* 지하철 */}
            <div className="flex items-center gap-4">
              <img src={IMAGES.ABOUT.TRAIN} alt="지하철" className="w-10 h-10" />
              <div>
                <div className="font-bold">지하철 이용</div>
                <div className="text-sm text-gray-700">7호선 춘의역 2번 출구 → 도보 10분</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 