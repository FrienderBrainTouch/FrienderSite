# 프랜더 이미지 리소스 가이드

이 문서는 프랜더 프로젝트에서 사용되는 이미지 리소스들의 정보를 제공합니다.

## 📁 폴더 구조

```
src/FrienderResources/
├── fonts/                    # 폰트 파일들
├── Logo.png                  # 회사 로고
├── main_banner_pic.png       # 히어로 섹션 배경
├── VR_Learning_Icons.png     # 교육 콘텐츠 기획
├── Tech_UI_Icon.png          # 플랫폼 구축
├── pic_icon.png              # 갤러리 메인
├── camera_gallery.png        # 갤러리 카메라
├── intro_friender.png        # 회사 소개 중앙 이미지
├── Environmental_Science.png # 슬라이드 1: 환경과학
├── Drone.png                 # 슬라이드 2: 드론
├── Drug_Prevention.png       # 슬라이드 3: 마약 예방
├── World_Travel.png          # 슬라이드 4: 세계 여행
├── Block_Coding.png          # 슬라이드 5: 블록 코딩
├── Creativity.png            # 회사 가치: 창의성
├── Innovation.png            # 회사 가치: 혁신
├── Community Collaboration.png # 회사 가치: 지역 협력
├── Education.png             # 회사 가치: 교육
└── Sustainability.png        # 회사 가치: 지속 가능성
```

## 🖼️ 이미지 상세 정보

### 로고 및 브랜딩
- **Logo.png**: 회사 로고 (84KB)
  - 사용 위치: 헤더, 푸터
  - 경로: `/src/FrienderResources/Logo.png`

### 히어로 섹션
- **main_banner_pic.png**: 메인 배너 이미지 (2.1MB)
  - 사용 위치: 히어로 섹션 배경
  - 경로: `/src/FrienderResources/main_banner_pic.png`

### 서비스 섹션
- **VR_Learning_Icons.png**: VR 학습 아이콘 (1.6MB)
  - 사용 위치: 교육 콘텐츠 기획 카드
  - 경로: `/src/FrienderResources/VR_Learning_Icons.png`

- **Tech_UI_Icon.png**: 기술 UI 아이콘 (1.5MB)
  - 사용 위치: 플랫폼 구축 카드
  - 경로: `/src/FrienderResources/Tech_UI_Icon.png`

- **pic_icon.png**: 갤러리 아이콘 (1.3MB)
  - 사용 위치: 갤러리 카드
  - 경로: `/src/FrienderResources/pic_icon.png`

- **camera_gallery.png**: 카메라 갤러리 (28KB)
  - 사용 위치: 갤러리 관련
  - 경로: `/src/FrienderResources/camera_gallery.png`

### VR 교육 콘텐츠 슬라이드
- **Environmental_Science.png**: 환경과학 (2.2MB)
  - 슬라이드 1번
  - 경로: `/src/FrienderResources/Environmental_Science.png`

- **Drone.png**: 드론 (2.1MB)
  - 슬라이드 2번
  - 경로: `/src/FrienderResources/Drone.png`

- **Drug_Prevention.png**: 마약 예방 (2.2MB)
  - 슬라이드 3번
  - 경로: `/src/FrienderResources/Drug_Prevention.png`

- **World_Travel.png**: 세계 여행 (2.2MB)
  - 슬라이드 4번
  - 경로: `/src/FrienderResources/World_Travel.png`

- **Block_Coding.png**: 블록 코딩 (2.2MB)
  - 슬라이드 5번
  - 경로: `/src/FrienderResources/Block_Coding.png`

### 회사 가치 섹션
- **intro_friender.png**: 프랜더 소개 중앙 이미지 (111KB)
  - 사용 위치: 회사 가치 섹션 중앙
  - 경로: `/src/FrienderResources/intro_friender.png`

- **Creativity.png**: 창의성 아이콘 (1.4MB)
  - 회사 가치 아이콘 1번
  - 경로: `/src/FrienderResources/Creativity.png`

- **Innovation.png**: 혁신 아이콘 (1.4MB)
  - 회사 가치 아이콘 2번
  - 경로: `/src/FrienderResources/Innovation.png`

- **Community Collaboration.png**: 지역 협력 아이콘 (1.4MB)
  - 회사 가치 아이콘 3번
  - 경로: `/src/FrienderResources/Community Collaboration.png`

- **Education.png**: 교육 아이콘 (1.3MB)
  - 회사 가치 아이콘 4번
  - 경로: `/src/FrienderResources/Education.png`

- **Sustainability.png**: 지속 가능성 아이콘 (1.3MB)
  - 회사 가치 아이콘 5번
  - 경로: `/src/FrienderResources/Sustainability.png`

## 🎨 폰트

- **fonts/**: 폰트 파일들이 저장된 폴더
  - 경로: `/src/FrienderResources/fonts/`

## 📝 사용법

### React 컴포넌트에서 사용
```javascript
import { IMAGES } from '../constants/images';

// 이미지 사용 예시
<img src={IMAGES.LOGO.FRIENDER} alt="프랜더 로고" />
<img src={IMAGES.HERO.BACKGROUND} alt="히어로 배경" />
<img src={IMAGES.SLIDES.ENVIRONMENTAL_SCIENCE} alt="환경과학" />
```

### CSS에서 사용
```css
.hero-section {
  background-image: url('/src/FrienderResources/main_banner_pic.png');
}
```

## ⚠️ 주의사항

1. **이미지 최적화**: 대용량 이미지들은 웹 성능을 위해 최적화를 권장합니다.
2. **접근성**: 모든 이미지에 적절한 alt 속성을 추가해야 합니다.
3. **반응형**: 다양한 화면 크기에서 적절히 표시되도록 이미지 크기를 조정해야 합니다.
4. **폰트**: fonts 폴더의 폰트 파일들을 CSS에서 올바르게 로드해야 합니다.

## 🔄 업데이트 내역

- 2024년: FrienderResources 폴더의 실제 이미지들로 업데이트
- 이미지 경로를 상수로 관리하도록 개선
- 컴포넌트별 이미지 사용 구조 정리 