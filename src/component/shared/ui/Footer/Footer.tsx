import Link from "next/link";

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <h3 className='text-xl font-bold mb-4'>하나비전교회</h3>
            <p className='text-gray-300 mb-4'>
              하나님의 사랑과 은혜로 함께하는 공동체입니다.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-300 hover:text-white'>
                인스타그램
              </Link>
              <Link href='#' className='text-gray-300 hover:text-white'>
                페이스북
              </Link>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>연락처</h4>
            <div className='space-y-2 text-gray-300'>
              <p>서울특별시 강남구 하나비전로 123</p>
              <p>전화: 02-1234-5678</p>
              <p>이메일: info@hanavision.org</p>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>예배 시간</h4>
            <div className='space-y-2 text-gray-300'>
              <p>주일 오전 11:00</p>
              <p>수요 저녁 7:30</p>
              <p>금요 기도회 8:00</p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
          <p>&copy; 2024 하나비전교회. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
