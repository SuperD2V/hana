import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { Notice } from "../type";
import { api } from "@/component/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  registerAnnouncement,
  updateAnnouncement,
  AnnouncementRegisterDTO
} from "@/component/notice/api/api";

export interface NoticeListParams {
  page?: number;
  size?: number;
}

export const getNoticeList = async (params: NoticeListParams = {}) => {
  try {
    const { page = 0, size = 10 } = params;
    const response = await api.request<ApiResponse<PaginatedResponse<Notice>>>({
      url: "/api/admin/announcement/list",
      method: "GET",
      params: {
        page,
        size
      }
    });
    return response.data.data; // 실제 데이터는 response.data.data에 있음
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteNotice = async (id: number) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/announcement/${id}`,
      method: "DELETE"
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 뮤테이션에서 처리할 수 있도록 함
  }
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotice,
    onSuccess: () => {
      // 삭제 성공 후 모든 noticeList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["noticeList"],
        exact: false
      });
    },
    onError: error => {
      console.error("삭제 실패:", error);
    }
  });
};

// 공지사항 등록 mutation 훅
export const useCreateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      announcementDTO,
      files
    }: {
      announcementDTO: AnnouncementRegisterDTO;
      files: File[];
    }) => registerAnnouncement(announcementDTO, files),
    onSuccess: () => {
      // 등록 성공 후 모든 noticeList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["noticeList"],
        exact: false
      });
    },
    onError: error => {
      console.error("등록 실패:", error);
    }
  });
};

// 공지사항 수정 mutation 훅
export const useUpdateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      announcementDTO,
      deletedFileIds,
      files
    }: {
      id: string;
      announcementDTO: AnnouncementRegisterDTO;
      deletedFileIds: number[];
      files: File[];
    }) => updateAnnouncement(id, announcementDTO, deletedFileIds, files),
    onSuccess: () => {
      // 수정 성공 후 모든 noticeList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["noticeList"],
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
