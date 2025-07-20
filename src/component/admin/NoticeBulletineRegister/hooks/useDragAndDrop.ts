import { useCallback } from 'react';
import { useImageUpload } from './useImageUpload';

export const useDragAndDrop = (quillRef: React.RefObject<any>) => {
  const { handleImageUpload } = useImageUpload();

  // 드래그앤드롭 핸들러
  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    const range = quill.getSelection(true) || { index: quill.getLength() };

    for (const file of imageFiles) {
      // 로딩 placeholder 삽입
      quill.insertText(range.index, '이미지 업로드 중...', 'italic', true);
      
      const url = await handleImageUpload(file);
      
      // placeholder 제거
      quill.deleteText(range.index, '이미지 업로드 중...'.length);
      
      if (url) {
        console.log('드래그드롭으로 이미지 삽입 시도:', url);
        
        try {
          quill.insertEmbed(range.index, 'image', url);
          console.log('드래그드롭 이미지 삽입 완료');
          
          // 삽입된 이미지에 alt 속성 추가
          setTimeout(() => {
            const editorElement = quill.root;
            const allImages = editorElement.querySelectorAll('img');
            
            // URL 매칭으로 이미지 찾기
            const targetImages: Element[] = [];
            for (let i = 0; i < allImages.length; i++) {
              const img = allImages[i] as HTMLImageElement;
              if (img.src === url) {
                targetImages.push(img);
              }
            }
            
            console.log('드래그드롭 삽입된 이미지 요소 수:', targetImages.length);
            
            targetImages.forEach((img: Element) => {
              const htmlImg = img as HTMLImageElement;
              
              // alt 속성 설정
              htmlImg.setAttribute('alt', 'photo-in-text-cloudfront-src');
              
              // CORS 문제 해결을 위한 crossorigin 속성 추가
              htmlImg.setAttribute('crossorigin', 'anonymous');
              
              // 이미지 스타일 설정
              htmlImg.style.maxWidth = '100%';
              htmlImg.style.height = 'auto';
              
              console.log('드래그드롭 이미지 속성 설정 완료:', htmlImg.src);
            });
          }, 100);
          
          range.index += 1;
          
        } catch (embedError) {
          console.error('드래그드롭 이미지 삽입 실패:', embedError);
          alert('드래그한 이미지를 에디터에 삽입하는데 실패했습니다.');
        }
      } else {
        console.error('드래그드롭: 유효한 이미지 URL이 없습니다.');
      }
    }
  }, [handleImageUpload, quillRef]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return {
    handleDrop,
    handleDragOver
  };
}; 