import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            하나비전교회에 오신 것을 환영합니다
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            하나님의 사랑과 은혜로 함께하는 공동체입니다. 
            우리는 예수 그리스도를 통해 하나님의 비전을 이루어 나갑니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">예배 시간</h3>
              <p className="text-gray-600">주일 오전 11:00</p>
              <p className="text-gray-600">수요 저녁 7:30</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">위치</h3>
              <p className="text-gray-600">서울특별시 강남구</p>
              <p className="text-gray-600">하나비전빌딩 3층</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">연락처</h3>
              <p className="text-gray-600">02-1234-5678</p>
              <p className="text-gray-600">info@hanavision.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
