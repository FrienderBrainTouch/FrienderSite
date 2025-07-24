# EmailJS 설정 가이드

## 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 에서 무료 계정 생성
2. 이메일 인증 완료

## 2. 이메일 서비스 설정
1. EmailJS 대시보드에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. Gmail 선택 (또는 다른 이메일 서비스)
4. Gmail 계정으로 로그인하여 권한 부여
5. 서비스 ID 복사 (예: service_xxxxxxx)

## 3. 이메일 템플릿 생성
1. "Email Templates" 클릭
2. "Create New Template" 클릭
3. 다음 내용으로 템플릿 작성:

```
제목: [프렌더] 새로운 문의가 접수되었습니다

내용:
새로운 문의가 접수되었습니다.

성함: {{from_name}}
소속/직책: {{from_position}}
연락처: {{from_phone}}
이메일: {{from_email}}

문의사항:
{{message}}
```

4. 템플릿 ID 복사 (예: template_xxxxxxx)

## 4. 코드 업데이트
`src/page/Contact.jsx` 파일에서 다음 부분을 실제 값으로 교체:

```javascript
// EmailJS 초기화
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS 공개키로 교체
}, []);

// 이메일 전송 부분
const result = await emailjs.send(
  'YOUR_SERVICE_ID', // 실제 서비스 ID로 교체
  'YOUR_TEMPLATE_ID', // 실제 템플릿 ID로 교체
  {
    from_name: form.name,
    from_position: form.position,
    from_phone: form.phone,
    from_email: form.email,
    message: form.message,
  }
);
```

## 5. 공개키 찾기
1. EmailJS 대시보드에서 "Account" 클릭
2. "API Keys" 섹션에서 Public Key 복사

## 6. 테스트
1. 로컬 서버 실행: `npm run dev`
2. Contact 페이지에서 폼 작성 후 전송
3. 브라우저 콘솔에서 성공/실패 메시지 확인
4. 설정한 이메일로 문의 내용 수신 확인

## 주의사항
- 무료 플랜은 월 200건까지 제한
- 실제 배포 시에는 환경변수로 키 관리 권장 