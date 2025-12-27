import { useCallback, useMemo, useRef } from "react";
import { useImageUpload } from "./useImageUpload";

export const useQuillEditor = () => {
  const quillRef = useRef<any>(null);
  const { handleImageUpload } = useImageUpload();

  // 이미지 핸들러 함수
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // React Quill 인스턴스 가져오기
      const quill = quillRef.current?.getEditor();
      if (!quill) {
        console.error("Quill 에디터를 찾을 수 없습니다.");
        return;
      }

      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();

      // 로딩 placeholder 삽입
      quill.insertText(index, "이미지 업로드 중...", "italic", true);

      try {
        // 서버에 이미지 업로드
        const imageUrl = await handleImageUpload(file);

        // placeholder 제거
        quill.deleteText(index, "이미지 업로드 중...".length);

        if (imageUrl) {
          console.log("에디터에 이미지 삽입 시도:", imageUrl);

          // CloudFront URL인 경우 Next.js 이미지 프록시를 통해 처리
          let processedImageUrl = imageUrl;
          if (imageUrl.includes("dpsm0twgatw84.cloudfront.net")) {
            processedImageUrl = `/api/image-proxy?url=${encodeURIComponent(
              imageUrl
            )}`;
          }

          // 이미지 삽입
          const insertSuccess = quill.insertEmbed(
            index,
            "image",
            processedImageUrl
          );
          console.log("이미지 삽입 결과:", insertSuccess);

          // 커서를 이미지 다음 위치로 이동
          quill.setSelection(index + 1);

          // 삽입 후 검증 (비동기적으로 수행)
          setTimeout(() => {
            const editorElement = quill.root;
            const allImages = editorElement.querySelectorAll("img");

            console.log("에디터 내 전체 이미지 수:", allImages.length);

            // 방금 삽입한 이미지 찾기
            let imageFound = false;
            allImages.forEach((img: HTMLImageElement, imgIndex: number) => {
              console.log(`이미지 ${imgIndex}:`, img.src);

              // 절대 URL, 상대 URL, 프록시 URL 등 다양한 케이스 체크
              const srcMatches =
                img.src === processedImageUrl ||
                img.src === imageUrl ||
                img.src.includes(encodeURIComponent(imageUrl)) ||
                (processedImageUrl.includes("/api/image-proxy") &&
                  img.src.includes("/api/image-proxy"));

              if (srcMatches) {
                imageFound = true;

                // 이미지 속성 설정
                img.setAttribute("alt", "photo-in-text-cloudfront-src");
                img.style.maxWidth = "100%";
                img.style.height = "auto";

                // CloudFront 이미지가 아닌 경우에만 crossorigin 속성 추가
                if (!imageUrl.includes("dpsm0twgatw84.cloudfront.net")) {
                  img.setAttribute("crossorigin", "anonymous");
                }

                // 이미지 로드 이벤트 리스너
                img.onerror = event => {
                  console.error("이미지 로드 실패:", {
                    url: imageUrl,
                    event: event,
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight
                  });

                  // 이미지 로드 실패 시 대체 텍스트 표시
                  img.style.display = "inline-block";
                  img.style.width = "200px";
                  img.style.height = "100px";
                  img.style.backgroundColor = "#f0f0f0";
                  img.style.border = "1px solid #ccc";
                  img.style.textAlign = "center";
                  img.style.lineHeight = "100px";
                  img.alt = "이미지 로드 실패";
                };

                img.onload = () => {
                  console.log("이미지 로드 성공:", {
                    url: imageUrl,
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight,
                    displayWidth: img.width,
                    displayHeight: img.height
                  });
                };

                // 이미지가 이미 로드된 경우 (캐시된 경우)
                if (img.complete && img.naturalHeight !== 0) {
                  console.log("이미지가 이미 로드됨 (캐시):", imageUrl);
                }
              }
            });

            if (!imageFound) {
              console.warn("삽입한 이미지를 에디터에서 찾을 수 없습니다.");
              // 이미지는 이미 삽입되었으므로 다시 삽입하지 않음
              // (중복 삽입 방지)
            } else {
              console.log("이미지가 성공적으로 에디터에 삽입되었습니다.");
            }
          }, 100);
        } else {
          console.error("유효한 이미지 URL이 없어서 삽입할 수 없습니다.");
          alert("이미지 URL을 받아오지 못했습니다.");
        }
      } catch (embedError) {
        console.error("이미지 삽입 실패:", embedError);

        // placeholder 제거
        try {
          quill.deleteText(index, "이미지 업로드 중...".length);
        } catch (deleteError) {
          console.error("placeholder 제거 실패:", deleteError);
        }

        alert("이미지를 에디터에 삽입하는데 실패했습니다.");
      }
    };
  }, [handleImageUpload]);

  // react-quill 설정
  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"]
        ],
        handlers: {
          image: imageHandler
        }
      }
    }),
    [imageHandler]
  );

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "align",
    "link",
    "image"
  ];

  return {
    quillRef,
    quillModules,
    quillFormats,
    imageHandler
  };
};
