import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";

export interface NoticeDetail {
  announcementId: number;
  title: string;
  content: string;
  topExposureTag: string;
  files: Files[];
  views: number;
  updatedAt: string;
}

interface Files {
  fileId: number;
  fileName: string;
  fileUrl: string;
}

export const getNoticeDetail = async (id: string) => {
  try {
    const response = await api.request<ApiResponse<NoticeDetail>>({
      url: `/api/common/main/announcement/${id}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBulletinDetail = async (id: string) => {
  try {
    const response = await api.request<ApiResponse<NoticeDetail>>({
      url: `/api/common/main/bulletin/${id}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }

 
};

// 공지사항 등록을 위한 DTO 타입
export interface AnnouncementRegisterDTO {
  title: string;
  content: string;
  topExposure: boolean;
  topExposureTag: string;
  isVisible: boolean;
}

// 공지사항 등록 API
export const registerAnnouncement = async (
  announcementDTO: AnnouncementRegisterDTO,
  files: File[] = []
) => {
  try {
    const formData = new FormData();
    
    // announcementDTO를 JSON 문자열로 변환하여 추가
    formData.append('announcementDTO', JSON.stringify(announcementDTO));
    
    // 파일들 추가
    files.forEach((file, index) => {
      formData.append('files', file);
    });

    const response = await api.request<ApiResponse<any>>({
      url: `/api/admin/announcement/register`,
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('공지사항 등록 실패:', error);
    throw error;
  }
};

// 주보 등록을 위한 DTO 타입 (공지사항과 동일한 구조로 추정)
export interface BulletinRegisterDTO {
  title: string;
  content: string;
  topExposure: boolean;
  topExposureTag: string;
  isVisible: boolean;
}

// 주보 등록 API
export const registerBulletin = async (
  bulletinDTO: BulletinRegisterDTO,
  files: File[] = []
) => {
  try {
    const formData = new FormData();
    
    // bulletinDTO를 JSON 문자열로 변환하여 추가
    formData.append('announcementDTO', JSON.stringify(bulletinDTO));
    
    // 파일들 추가
    files.forEach((file, index) => {
      formData.append('files', file);
    });

    const response = await api.request<ApiResponse<any>>({
      url: `/api/admin/bulletin/register`,
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('주보 등록 실패:', error);
    throw error;
  }
};