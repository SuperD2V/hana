import { QueryClient } from '@tanstack/react-query';

interface NavigationResult {
  success: boolean;
  message?: string;
  nextId?: string;
}

// 현재 글의 위치를 찾는 함수
const findCurrentItemPosition = (
  queryClient: QueryClient,
  queryKey: string,
  currentId: string,
  maxPages: number = 10
): { page: number; index: number } | null => {
  for (let page = 1; page <= maxPages; page++) {
    const listData = queryClient.getQueryData([queryKey, page]) as any;
    if (listData?.content) {
      const currentIndex = listData.content.findIndex(
        (item: any) => item.announcementId.toString() === currentId
      );
      
      if (currentIndex !== -1) {
        return { page, index: currentIndex };
      }
    }
  }
  return null;
};

// 이전글 찾기
export const findPreviousItem = (
  queryClient: QueryClient,
  queryKey: string,
  currentId: string,
  maxPages: number = 10
): NavigationResult => {
  try {
    const position = findCurrentItemPosition(queryClient, queryKey, currentId, maxPages);
    
    if (!position) {
      return { success: false, message: "현재 글을 찾을 수 없습니다." };
    }

    const { page, index } = position;

    // 같은 페이지에서 이전 글 찾기
    if (index > 0) {
      const currentPageData = queryClient.getQueryData([queryKey, page]) as any;
      const previousItem = currentPageData.content[index - 1];
      return { 
        success: true, 
        nextId: previousItem.announcementId.toString() 
      };
    }

    // 첫 번째 글인 경우 이전 페이지 마지막 글 찾기
    if (page > 1) {
      const prevPageData = queryClient.getQueryData([queryKey, page - 1]) as any;
      if (prevPageData?.content && prevPageData.content.length > 0) {
        const previousItem = prevPageData.content[prevPageData.content.length - 1];
        return { 
          success: true, 
          nextId: previousItem.announcementId.toString() 
        };
      }
    }

    return { success: false, message: "이전 글이 없습니다." };
  } catch (error) {
    console.error("이전글 찾기 실패:", error);
    return { success: false, message: "이전글을 찾을 수 없습니다." };
  }
};

// 다음글 찾기
export const findNextItem = (
  queryClient: QueryClient,
  queryKey: string,
  currentId: string,
  maxPages: number = 10
): NavigationResult => {
  try {
    const position = findCurrentItemPosition(queryClient, queryKey, currentId, maxPages);
    
    if (!position) {
      return { success: false, message: "현재 글을 찾을 수 없습니다." };
    }

    const { page, index } = position;

    // 같은 페이지에서 다음 글 찾기
    const currentPageData = queryClient.getQueryData([queryKey, page]) as any;
    if (index < currentPageData.content.length - 1) {
      const nextItem = currentPageData.content[index + 1];
      return { 
        success: true, 
        nextId: nextItem.announcementId.toString() 
      };
    }

    // 마지막 글인 경우 다음 페이지 첫 번째 글 찾기
    const nextPageData = queryClient.getQueryData([queryKey, page + 1]) as any;
    if (nextPageData?.content && nextPageData.content.length > 0) {
      const nextItem = nextPageData.content[0];
      return { 
        success: true, 
        nextId: nextItem.announcementId.toString() 
      };
    }

    return { success: false, message: "다음 글이 없습니다." };
  } catch (error) {
    console.error("다음글 찾기 실패:", error);
    return { success: false, message: "다음글을 찾을 수 없습니다." };
  }
}; 