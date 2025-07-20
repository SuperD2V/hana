import { useCallback } from 'react';
import { uploadFile } from "../../Bulletin/api";

export const useImageUpload = () => {
  // 이미지 서버 업로드 함수
  const handleImageUpload = useCallback(async (file: File): Promise<string | null> => {
    try {
      // 파일 크기 제한 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('이미지 파일 크기는 10MB 이하여야 합니다.');
        return null;
      }

      // 이미지 파일 타입 확인
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return null;
      }

      console.log('업로드할 파일:', {
        name: file.name,
        size: file.size,
        type: file.type
      });

      const url = await uploadFile(file);
      console.log('업로드 성공, URL:', url);
      
      // URL 형식 확인 및 정리
      if (url && typeof url === 'string') {
        console.log('유효한 이미지 URL 반환:', url);
        return url;
      } else {
        console.error('유효하지 않은 URL 반환:', url);
        return null;
      }
    } catch (error: any) {
      console.error('이미지 업로드 실패:', error);
      console.error('에러 상세:', {
        message: error?.message,
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        data: error?.response?.data
      });
      alert('이미지 업로드에 실패했습니다.');
      return null;
    }
  }, []);

  return { handleImageUpload };
}; 