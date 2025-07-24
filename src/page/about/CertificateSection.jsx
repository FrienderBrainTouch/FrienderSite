import React from "react";
import { IMAGES } from "../../constants/images";

const certImages = [
  IMAGES.ABOUT.ONE,
  IMAGES.ABOUT.TWO,
  IMAGES.ABOUT.THREE,
];

const ITEM_WIDTH = 200;
const GAP = 32; // gap-8 = 2rem = 32px
const TOTAL_WIDTH = certImages.length * (ITEM_WIDTH + GAP) * 2;

export default function CertificateSection() {
  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24 max-w-5xl 2xl:max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">회사 인증서</h2>
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-3xl overflow-hidden relative">
          {/* 양쪽 흐림 효과 - 롤링 배너 div의 양쪽 */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, white 70%, transparent)'}} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, white 70%, transparent)'}} />
          <div
            className="flex gap-8 rolling-banner"
            style={{
              width: `${TOTAL_WIDTH}px`,
              animation: `rollingBanner 30s linear infinite`,
            }}
          >
            {certImages.concat(certImages).map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-[200px] h-[180px] flex justify-center items-center bg-gray-100 rounded-xl shadow-md">
                <img src={src} alt={`인증서${(idx % certImages.length) + 1}`} className="max-h-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes rollingBanner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
} 