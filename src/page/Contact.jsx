import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS 초기화
  useEffect(() => {
    emailjs.init("WWyMIXqM2iNYzWPTr"); // EmailJS 공개키로 교체 필요
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "이메일을 입력해주세요.";
    if (!form.message) newErrors.message = "문의사항을 입력해주세요.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    setErrors({});

    try {
      // EmailJS를 사용한 이메일 전송
      const result = await emailjs.send(
        'service_rk6l7dj', // EmailJS 서비스 ID
        'template_w1b3hww', // EmailJS 템플릿 ID
        {
          from_name: form.name,
          from_position: form.position,
          from_phone: form.phone,
          from_email: form.email,
          message: form.message,
        }
      );
      
      console.log('SUCCESS!', result.text);
      setSubmitted(true);
      setForm({
        name: "",
        position: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.log('FAILED...', error.text);
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

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
    <section className="pt-32 w-full min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-12">
        {/* 왼쪽 문구 */}
        <div className="w-full lg:w-1/2 flex-shrink-0 mb-8 lg:mb-0 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-[#222]">프랜더와 함께</h2>
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#222]">콘텐츠를 설계해 보세요.</h3>
          <div className="text-lg lg:text-xl text-[#222] font-normal space-y-1">
            <div>진심을 담아야</div>
            <div>전달력이 생깁니다.</div>
            <div>지금, 정확한 니즈를 알려주세요.</div>
          </div>
          
          {/* 다운로드 섹션 추가 */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-[#222]">소개 자료 다운로드</h4>
            <div className="space-y-3">
              <button
                onClick={() => handleDownload('Friender.pdf')}
                className="w-full bg-[#517728] text-white font-semibold py-2 px-4 rounded hover:bg-[#40601e] transition-colors"
              >
                📄 프랜더 소개서 다운로드
              </button>
            </div>
          </div>
        </div>
        
        {/* 오른쪽 폼 */}
        <div className="w-full lg:w-1/2">
          {submitted ? (
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="text-green-700 text-xl font-semibold mb-2">문의가 정상적으로 접수되었습니다.</div>
              <div className="text-green-600">빠른 시일 내에 연락드리겠습니다.</div>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#517728] text-white px-4 py-2 rounded hover:bg-[#40601e] transition-colors"
              >
                새 문의 작성
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full bg-gray-50 rounded-xl shadow-md p-8 space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">성함</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#517728]" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">소속/직책</label>
                <input type="text" name="position" value={form.position} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#517728]" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">연락처</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#517728]" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">이메일 <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#517728]" required />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">문의사항 <span className="text-red-500">*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#517728]" required />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#517728] text-white font-bold py-3 rounded-lg hover:bg-[#40601e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '전송 중...' : '보내기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
} 