import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { api } from "@/component/shared";
import { Bulletin } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  registerBulletin,
  updateBulletin,
  BulletinRegisterDTO
} from "@/component/notice/api/api";

export interface BulletinListParams {
  page: number;
  size: number;
}

export const getBulletinList = async (params: BulletinListParams) => {
  const { page = 0, size = 10 } = params;
  try {
    const response = await api.request<
      ApiResponse<PaginatedResponse<Bulletin>>
    >({
      url: "/api/admin/bulletin/list",
      method: "GET",
      params: {
        page,
        size
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteBulletin = async (id: number) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/bulletin/${id}`,
      method: "DELETE"
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 뮤테이션에서 처리할 수 있도록 함
  }
};

export const uploadFile = async (file: File) => {
  try {
    console.log("uploadFile 호출:", {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      lastModified: file.lastModified
    });

    // 파일이 유효한지 확인
    if (!file || file.size === 0) {
      throw new Error("Invalid file: 파일이 비어있거나 유효하지 않습니다.");
    }

    // 파일 타입 검증
    if (!file.type.startsWith("image/")) {
      throw new Error("Invalid file type: 이미지 파일만 업로드 가능합니다.");
    }

    // FormData 생성
    const formData = new FormData();
    formData.append("file", file);

    // FormData 내용 확인
    console.log("FormData 생성 완료:", {
      hasFile: formData.has("file"),
      fileInfo: formData.get("file")
    });

    // API 요청 전 로그
    console.log("API 요청 시작:", {
      url: "/api/admin/bulletin/file",
      method: "POST",
      fileSize: file.size,
      fileName: file.name
    });

    const response = await api.request<ApiResponse<any>>({
      url: "/api/admin/bulletin/file",
      method: "POST",
      data: formData,
      timeout: 60000, // 60초 타임아웃으로 증가
      headers: {
        "Content-Type": undefined // FormData 사용 시 Content-Type을 undefined로 설정
      }
    });

    console.log("업로드 성공:", {
      message: response.message,
      data: response.data
    });

    // 응답 데이터 검증
    if (!response.data || !response.data.data) {
      throw new Error("서버 응답이 올바르지 않습니다: data 필드가 없습니다.");
    }

    // URL 추출
    const imageUrl = response.data.data.BULLETIN;
    console.log("추출된 이미지 URL:", imageUrl);

    // URL 유효성 검사
    if (
      !imageUrl ||
      typeof imageUrl !== "string" ||
      imageUrl.trim().length === 0
    ) {
      throw new Error("서버에서 유효한 이미지 URL을 반환하지 않았습니다.");
    }

    const cleanUrl = imageUrl.trim();

    // URL 형식 기본 검증
    if (!cleanUrl.includes(".")) {
      throw new Error("올바르지 않은 URL 형식입니다.");
    }

    return cleanUrl;
  } catch (error: any) {
    console.error("uploadFile API 에러:", error);

    // 에러 타입별 세부 로깅
    if (error.response) {
      console.error("서버 응답 에러:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers
      });

      // 특정 HTTP 상태 코드에 대한 사용자 친화적 에러 메시지
      if (error.response.status === 413) {
        throw new Error(
          "파일 크기가 너무 큽니다. 더 작은 파일을 선택해주세요."
        );
      } else if (error.response.status === 415) {
        throw new Error("지원하지 않는 파일 형식입니다.");
      } else if (error.response.status === 429) {
        throw new Error("요청이 너무 많습니다. 잠시 후 다시 시도해주세요.");
      } else if (error.response.status >= 500) {
        throw new Error("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } else if (error.request) {
      console.error("요청 실패:", error.request);
      throw new Error(
        "네트워크 연결에 문제가 있습니다. 연결을 확인하고 다시 시도해주세요."
      );
    } else {
      console.error("설정 에러:", error.message);
    }

    console.error("에러 설정:", {
      url: error?.config?.url,
      method: error?.config?.method,
      timeout: error?.config?.timeout
    });

    // 기본 에러 메시지
    throw error;
  }
};

// Fetch API를 사용한 대안 업로드 함수
const uploadFileWithFetch = async (file: File): Promise<string> => {
  console.log("fetch API로 업로드 시도...");

  const formData = new FormData();
  formData.append("file", file);

  const baseURL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
  const url = `${baseURL}/api/admin/bulletin`;

  console.log("fetch 요청 URL:", url);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
    credentials: "include" // 쿠키 포함
    // Content-Type을 명시하지 않음 (브라우저가 자동 설정)
  });

  console.log("fetch 응답:", {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("fetch 에러 응답:", errorText);
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  console.log("fetch 성공 결과:", result);

  // URL 추출 및 검증
  const imageUrl = result.data?.data.BULLETINE || result.data || result.message;
  console.log("추출된 이미지 URL:", imageUrl);

  // if (imageUrl.length > 0) {
  // URL이 http나 https로 시작하지 않으면 기본 도메인 추가
  if (!imageUrl.startsWith("http")) {
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const fullUrl = `${baseURL}${
      imageUrl.startsWith("/") ? imageUrl : "/" + imageUrl
    }`;
    console.log("상대 경로를 절대 경로로 변환:", fullUrl);
    return fullUrl;
  }
  return imageUrl;
  // } else {
  //   console.error('유효하지 않은 URL 형식:', imageUrl);
  //   throw new Error('서버에서 유효한 이미지 URL을 반환하지 않았습니다.');
  // }
};

export const useDeleteBulletin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBulletin,
    onSuccess: () => {
      // 삭제 성공 후 모든 bulletinList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["bulletinList"],
        exact: false
      });
    },
    onError: error => {
      console.error("삭제 실패:", error);
    }
  });
};

// 주보 등록 mutation 훅
export const useCreateBulletin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      bulletinDTO,
      files
    }: {
      bulletinDTO: BulletinRegisterDTO;
      files: File[];
    }) => registerBulletin(bulletinDTO, files),
    onSuccess: () => {
      // 등록 성공 후 모든 bulletinList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["bulletinList"],
        exact: false
      });
    },
    onError: error => {
      console.error("등록 실패:", error);
    }
  });
};

// 주보 수정 mutation 훅
export const useUpdateBulletin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      bulletinDTO,
      deletedFileIds,
      files
    }: {
      id: string;
      bulletinDTO: BulletinRegisterDTO;
      deletedFileIds: number[];
      files: File[];
    }) => updateBulletin(id, bulletinDTO, deletedFileIds, files),
    onSuccess: () => {
      // 수정 성공 후 모든 bulletinList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["bulletinList"],
        exact: false
      });
      // 상세 페이지 쿼리도 무효화
      queryClient.invalidateQueries({
        queryKey: ["detail"],
        exact: false
      });
    },
    onError: error => {
      console.error("수정 실패:", error);
    }
  });
};
