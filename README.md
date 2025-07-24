# Friender - 창의 융합 교육 기업 웹사이트

## 📖 프로젝트 개요

**프렌더(Friender)**는 창의력으로 미래를 디자인하는 창의 융합 교육 기업의 공식 웹사이트입니다. VR을 구현한 창의 교육 콘텐츠를 초등·중등 누구나 쉽게, 어디서나 자유롭게 이용할 수 있도록 하는 서비스를 제공합니다.

## 🎯 주요 특징

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **모던 UI/UX**: Tailwind CSS를 활용한 현대적인 디자인
- **인터랙티브 요소**: 호버 효과와 슬라이드 기능이 포함된 동적 콘텐츠
- **VR 교육 콘텐츠**: 다양한 분야의 몰입형 VR 교육 콘텐츠 소개

## 🏢 회사 정보

- **기업 유형**: 예비 사회적 기업, 벤처기업, 기업부설 연구소
- **핵심 가치**: 창의성, 혁신, 지역 협력, 교육, 지속 가능성
- **서비스 분야**: 교육 콘텐츠 기획, 플랫폼 구축, 갤러리

## 🛠️ 기술 스택

### Frontend
- **React 18.2.0** - 사용자 인터페이스 구축
- **Vite 4.3.9** - 빠른 개발 환경 및 빌드 도구
- **Tailwind CSS 3.3.4** - 유틸리티 기반 CSS 프레임워크
- **PostCSS 8.4.31** - CSS 후처리기

### 개발 도구
- **TypeScript 5.1.3** - 타입 안전성
- **Styled Components 6.1.13** - CSS-in-JS
- **Emotion React 11.14.0** - 스타일링 라이브러리

## 📁 프로젝트 구조

```
FrienderSite/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Header.jsx      # 헤더/네비게이션
│   │   ├── HeroSection.jsx # 메인 히어로 섹션
│   │   ├── IntroSection.jsx # 회사 소개 섹션
│   │   ├── ServicesSection.jsx # 서비스 소개 섹션
│   │   └── Footer.jsx      # 푸터
│   ├── constants/
│   │   └── images.js       # 이미지 리소스 경로 상수
│   ├── FrienderResources/  # 이미지 및 폰트 리소스
│   ├── page/
│   │   ├── index.jsx       # 메인 페이지 컴포넌트
│   │   └── index.css       # 페이지 스타일
│   ├── App.jsx             # 루트 컴포넌트
│   └── main.jsx            # 애플리케이션 진입점
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 의존성 및 스크립트
├── tailwind.config.js      # Tailwind CSS 설정
├── vite.config.js          # Vite 설정
└── postcss.config.js       # PostCSS 설정
```

## 🚀 시작하기

### 필수 요구사항
- Node.js (버전 14 이상)
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone [repository-url]
   cd FrienderSite
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **프로덕션 빌드**
   ```bash
   npm run build
   ```

5. **빌드 미리보기**
   ```bash
   npm run preview
   ```

## 🎨 주요 섹션

### 1. Hero Section
- 회사의 핵심 메시지와 비전 소개
- "회사소개보기" 및 "콘텐츠 둘러보기" CTA 버튼
- 반응형 배경 이미지

### 2. Intro Section
- 회사의 5가지 핵심 가치 소개
- 기술과 교육의 융합에 대한 설명
- 회사 이미지와 함께한 레이아웃

### 3. Services Section
- **교육 콘텐츠 기획**: VR 기반 창의 융합형 수업 콘텐츠
- **플랫폼 구축**: IT 솔루션 개발 및 웹·앱 구축 컨설팅
- **갤러리**: 실제 교육 현장 VR 수업 장면
- **VR 교육 콘텐츠 슬라이드**: 환경과학, 드론, 마약 예방, 세계 여행, 블록 코딩

## 🎯 제공 서비스

### VR 교육 콘텐츠
- **환경과학**: 환경 보호 및 과학 교육
- **드론**: 드론 기술 및 활용 교육
- **마약 예방**: 청소년 마약 예방 교육
- **세계 여행**: 문화 및 지리 교육
- **블록 코딩**: 프로그래밍 기초 교육

## 📱 반응형 디자인

- **모바일**: 세로 레이아웃 최적화
- **태블릿**: 중간 크기 화면에 맞춘 레이아웃
- **데스크톱**: 전체 화면 활용 최적화

## 🎨 디자인 시스템

### 색상 팔레트
- **주요 색상**: #517728 (프렌더 그린)
- **보조 색상**: #769940, #395E00
- **배경**: 흰색, 회색 계열

### 타이포그래피
- **주요 폰트**: KakaoSmallSans (카카오 폰트)
- **보조 폰트**: Inter (Google Fonts)

## 🔧 개발 스크립트

```json
{
  "dev": "vite",           # 개발 서버 실행
  "build": "vite build",   # 프로덕션 빌드
  "preview": "vite preview" # 빌드 결과 미리보기
}
```

## 📄 라이선스

이 프로젝트는 프렌더(Friender) 회사의 공식 웹사이트입니다.

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:
1. 이슈를 생성하여 개선사항을 제안해주세요
2. 포크를 생성하여 개발 후 풀 리퀘스트를 보내주세요

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 통해 연락해주세요.

---

## ⚙️ 프로젝트 설정 및 환경

### 1. Vite 설정 (`vite.config.js`)
- **base**: './' (상대 경로 기반 빌드)
- **플러그인**: `@vitejs/plugin-react` 사용

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
});
```

### 2. Tailwind CSS 설정 (`tailwind.config.js`)
- **content**: `./src/**/*.{js,ts,jsx,tsx}`
- **darkMode**: 'class' (다크모드 지원)
- **theme**: xs(320px), 2xl(1440px) 등 커스텀 브레이크포인트
- **플러그인**: `@tailwindcss/typography`

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '320px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

### 3. PostCSS 설정 (`postcss.config.js`)
- **플러그인**: tailwindcss, autoprefixer

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 4. 주요 의존성 (`package.json`)

#### dependencies
- react, react-dom, react-router-dom
- @emailjs/browser, emailjs-com (이메일 전송)

#### devDependencies
- @emotion/react, styled-components, styled-jsx (스타일링)
- @tailwindcss/typography, tailwindcss, postcss, autoprefixer
- typescript, vite, @vitejs/plugin-react

#### scripts
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

**프렌더(Friender)** - 창의력으로 미래를 디자인하는 창의 융합 교육 기업
