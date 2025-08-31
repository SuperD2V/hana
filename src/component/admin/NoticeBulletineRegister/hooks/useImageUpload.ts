import { useCallback } from "react";
import { uploadFile } from "../../Bulletin/api";

export const useImageUpload = () => {
  // 이미지 서버 업로드 함수
  const handleImageUpload = useCallback(
    async (file: File): Promise<string | null> => {
      try {
        console.log("이미지 업로드 시작:", {
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified
        });

        // 파일 크기 제한 (10MB)
        if (file.size > 10 * 1024 * 1024) {
          alert("이미지 파일 크기는 10MB 이하여야 합니다.");
          return null;
        }

        // 이미지 파일 타입 확인
        if (!file.type.startsWith("image/")) {
          alert("이미지 파일만 업로드 가능합니다.");
          return null;
        }

        // 파일이 손상되지 않았는지 확인
        if (file.size === 0) {
          alert("파일이 비어있거나 손상되었습니다.");
          return null;
        }

        const url = await uploadFile(file);
        console.log("업로드 API 응답:", url);

        // URL 형식 확인 및 정리
        if (url && typeof url === "string" && url.trim().length > 0) {
          const cleanUrl = url.trim();
          console.log("유효한 이미지 URL 반환:", cleanUrl);

          // URL 유효성 검사 (기본적인 형식 확인)
          try {
            new URL(
              cleanUrl.startsWith("http") ? cleanUrl : `https://${cleanUrl}`
            );
            return cleanUrl;
          } catch (urlError) {
            console.error("URL 형식이 올바르지 않습니다:", cleanUrl);
            alert("서버에서 올바르지 않은 URL 형식을 반환했습니다.");
            return null;
          }
        } else {
          console.error("유효하지 않은 URL 반환:", url);
          alert("서버에서 유효한 이미지 URL을 반환하지 않았습니다.");
          return null;
        }
      } catch (error: any) {
        console.error("이미지 업로드 실패:", error);

        // 상세한 에러 정보 로깅
        console.error("에러 상세:", {
          name: error?.name,
          message: error?.message,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          data: error?.response?.data,
          stack: error?.stack
        });

        // 사용자에게 더 구체적인 에러 메시지 제공
        let errorMessage = "이미지 업로드에 실패했습니다.";

        if (error?.response?.status === 413) {
          errorMessage =
            "파일 크기가 너무 큽니다. 더 작은 파일을 선택해주세요.";
        } else if (error?.response?.status === 415) {
          errorMessage =
            "지원하지 않는 파일 형식입니다. 이미지 파일을 선택해주세요.";
        } else if (error?.response?.status >= 500) {
          errorMessage = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
        } else if (error?.message?.includes("timeout")) {
          errorMessage =
            "업로드 시간이 초과되었습니다. 네트워크 연결을 확인하고 다시 시도해주세요.";
        } else if (error?.message?.includes("Network Error")) {
          errorMessage =
            "네트워크 연결에 문제가 있습니다. 연결을 확인하고 다시 시도해주세요.";
        }

        alert(errorMessage);
        return null;
      }
    },
    []
  );

  return { handleImageUpload };
};
