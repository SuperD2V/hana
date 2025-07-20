import { useCallback, useMemo, useRef } from 'react';
import { useImageUpload } from './useImageUpload';

export const useQuillEditor = () => {
  const quillRef = useRef<any>(null);
  const { handleImageUpload } = useImageUpload();

  // 이미지 핸들러 함수
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // React Quill 인스턴스 가져오기
      const quill = quillRef.current?.getEditor();
      if (!quill) return;

      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();

      // 로딩 placeholder 삽입
      quill.insertText(index, '이미지 업로드 중...', 'italic', true);
      
      // 서버에 이미지 업로드
      const imageUrl = await handleImageUpload(file);
      
      // placeholder 제거
      quill.deleteText(index, '이미지 업로드 중...'.length);
      
      if (imageUrl) {
        console.log('에디터에 이미지 삽입 시도:', imageUrl);
        
        try {
          // 이미지 삽입 전 에디터 상태 확인
          console.log('에디터 내용 삽입 전:', quill.getContents());
          
          // 이미지 삽입
          quill.insertEmbed(index, 'image', imageUrl);
          console.log('이미지 삽입 완료');
          
          // 삽입 후 에디터 상태 확인
          setTimeout(() => {
            console.log('에디터 내용 삽입 후:', quill.getContents());
            
            const editorElement = quill.root;
            const allImages = editorElement.querySelectorAll('img');
            console.log('현재 에디터의 모든 이미지들:');
            allImages.forEach((img: Element, index: number) => {
              console.log(`이미지 ${index}:`, (img as HTMLImageElement).src);
            });
            
            // URL에 특수문자가 있어서 querySelector가 안될 수 있으니 직접 찾기
            const targetImages: Element[] = [];
            for (let i = 0; i < allImages.length; i++) {
              const img = allImages[i] as HTMLImageElement;
              if (img.src === imageUrl) {
                targetImages.push(img);
              }
            }
            
            console.log('에디터 내 전체 이미지 수:', allImages.length);
            console.log('삽입한 이미지 요소 수:', targetImages.length);
            console.log('에디터 HTML:', editorElement.innerHTML);
            
            // 이미지가 삽입되었는지 확인
            if (targetImages.length === 0) {
              console.error('이미지가 에디터에 삽입되지 않았습니다!');
              // 다른 방법으로 이미지 삽입 시도
              const delta = quill.getContents();
              const newDelta = delta.insert({image: imageUrl});
              quill.setContents(newDelta);
              console.log('대안 방법으로 이미지 삽입 시도');
            } else {
              targetImages.forEach((img: Element) => {
                const htmlImg = img as HTMLImageElement;
                
                // alt 속성 설정
                htmlImg.setAttribute('alt', 'photo-in-text-cloudfront-src');
                
                // CORS 문제 해결을 위한 crossorigin 속성 추가
                htmlImg.setAttribute('crossorigin', 'anonymous');
                
                // 이미지 스타일 설정 (로딩 중일 때 표시)
                htmlImg.style.maxWidth = '100%';
                htmlImg.style.height = 'auto';
                
                console.log('이미지 속성 설정 완료:', {
                  src: htmlImg.src,
                  alt: htmlImg.alt,
                  crossorigin: htmlImg.crossOrigin
                });
                
                // 이미지 로드 이벤트 리스너
                htmlImg.onerror = (event) => {
                  console.error('이미지 로드 실패:', {
                    url: imageUrl,
                    event: event,
                    naturalWidth: htmlImg.naturalWidth,
                    naturalHeight: htmlImg.naturalHeight
                  });
                  
                  // 이미지 로드 실패 시 대체 텍스트 표시
                  htmlImg.style.display = 'inline-block';
                  htmlImg.style.width = '200px';
                  htmlImg.style.height = '100px';
                  htmlImg.style.backgroundColor = '#f0f0f0';
                  htmlImg.style.border = '1px solid #ccc';
                  htmlImg.style.textAlign = 'center';
                  htmlImg.style.lineHeight = '100px';
                  htmlImg.alt = '이미지 로드 실패';
                };
                
                htmlImg.onload = () => {
                  console.log('이미지 로드 성공:', {
                    url: imageUrl,
                    naturalWidth: htmlImg.naturalWidth,
                    naturalHeight: htmlImg.naturalHeight,
                    displayWidth: htmlImg.width,
                    displayHeight: htmlImg.height
                  });
                };
                
                // 이미지가 이미 로드된 경우 (캐시된 경우)
                if (htmlImg.complete && htmlImg.naturalHeight !== 0) {
                  console.log('이미지가 이미 로드됨 (캐시):', imageUrl);
                }
              });
            }
          }, 100);
          
          // 커서를 이미지 다음 위치로 이동
          quill.setSelection(index + 1);
          
        } catch (embedError) {
          console.error('이미지 삽입 실패:', embedError);
          alert('이미지를 에디터에 삽입하는데 실패했습니다.');
        }
      } else {
        console.error('유효한 이미지 URL이 없어서 삽입할 수 없습니다.');
        alert('이미지 URL을 받아오지 못했습니다.');
      }
    };
  }, [handleImageUpload]);

  // react-quill 설정
  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  }), [imageHandler]);

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list',         
    'align',
    'link',
    'image',
  ];

  return {
    quillRef,
    quillModules,
    quillFormats,
    imageHandler
  };
}; 