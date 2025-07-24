import { useQueryClient } from '@tanstack/react-query';
import { useShallow } from 'zustand/shallow';
import { useAdminStore } from '../../../../hooks/store/useAdminStore';

// 데이터 타입 정의
interface NoticeItem {
  no: number;
  title: string;
  date: string;
  views: number;
  files: any;
  [key: string]: any;
}

interface DashboardData {
  notice: NoticeItem[];
  worship: NoticeItem[];
}

export const useNavigation = (
  currentId: string, 
  type: 'notice' | 'worship',
  dashboardData?: DashboardData,
  setCurrentId?: (id: string) => void
) => {
  const queryClient = useQueryClient();
  const { setState } = useAdminStore(
    useShallow(state => ({
      setState: state.setState
    }))
  );

  // 타입에 따른 설정
  const getConfig = () => {
    if (type === 'notice') {
      return {
        queryKey: 'noticeList',
        targetCategory: 7 as const, // Notice Detail 페이지
        listCategory: 2 as const, // Notice List 페이지
        dataKey: 'notice' as keyof DashboardData
      };
    } else if (type === 'worship') {
      return {
        queryKey: 'bulletinList',
        targetCategory: 7 as const, // Bulletin Detail 페이지
        listCategory: 3 as const, // Bulletin List 페이지
        dataKey: 'worship' as keyof DashboardData
      };
    } else {
      // 기본값 (공지사항)
      return {
        queryKey: 'noticeList',
        targetCategory: 7 as const,
        listCategory: 2 as const,
        dataKey: 'notice' as keyof DashboardData
      };
    }
  };

  const config = getConfig();

  // 현재 아이템의 인덱스를 찾는 함수
  const findCurrentItemIndex = (data: NoticeItem[]): number => {
    return data.findIndex(item => item.no.toString() === currentId);
  };

  // 이전글 이동
  const handlePrevious = async () => {
    try {
      console.log(`[${type}] 이전글 이동 시도 - 현재 ID: ${currentId}`);
      
      if (!dashboardData) {
        console.log(`[${type}] Dashboard 데이터가 없습니다.`);
        alert('이전글로 이동할 수 없습니다.');
        return;
      }

      const currentData = dashboardData[config.dataKey];
      if (!currentData || currentData.length === 0) {
        console.log(`[${type}] 해당 카테고리의 데이터가 없습니다.`);
        alert('이전글로 이동할 수 없습니다.');
        return;
      }

      // no 기준으로 오름차순 정렬
      const sortedData = [...currentData].sort((a, b) => a.no - b.no);
      const currentIndex = findCurrentItemIndex(sortedData);

      if (currentIndex === -1) {
        console.log(`[${type}] 현재 아이템을 찾을 수 없습니다.`);
        alert('이전글로 이동할 수 없습니다.');
        return;
      }

      // 이전글 인덱스 (오름차순 정렬이므로 인덱스가 작은 것이 이전글)
      const previousIndex = currentIndex - 1;

      if (previousIndex < 0) {
        console.log(`[${type}] 이전글이 없습니다.`);
        alert('이전글이 없습니다.');
        return;
      }

      const previousItem = sortedData[previousIndex];
      console.log(`[${type}] 이전글 이동: ${currentId} -> ${previousItem.no}, 카테고리: ${config.targetCategory}`);
      
      // setCurrentId 콜백 호출 (새로운 ID로 업데이트)
      if (setCurrentId) {
        setCurrentId(previousItem.no.toString());
      }
      
      // selectedId 먼저 설정
      setState('selectedId', previousItem.no.toString());
      
      // 약간의 지연 후 카테고리 설정 (상태 동기화 문제 방지)
      setTimeout(() => {
        setState('selectedCateogry', config.targetCategory);
      }, 10);

    } catch (error) {
      console.error(`[${type}] 이전글 이동 실패:`, error);
      alert('이전글로 이동할 수 없습니다.');
    }
  };

  // 다음글 이동
  const handleNext = async () => {
    try {
      console.log(`[${type}] 다음글 이동 시도 - 현재 ID: ${currentId}`);
      
      if (!dashboardData) {
        console.log(`[${type}] Dashboard 데이터가 없습니다.`);
        alert('다음글로 이동할 수 없습니다.');
        return;
      }

      const currentData = dashboardData[config.dataKey];
      if (!currentData || currentData.length === 0) {
        console.log(`[${type}] 해당 카테고리의 데이터가 없습니다.`);
        alert('다음글로 이동할 수 없습니다.');
        return;
      }

      // no 기준으로 오름차순 정렬
      const sortedData = [...currentData].sort((a, b) => a.no - b.no);
      const currentIndex = findCurrentItemIndex(sortedData);

      if (currentIndex === -1) {
        console.log(`[${type}] 현재 아이템을 찾을 수 없습니다.`);
        alert('다음글로 이동할 수 없습니다.');
        return;
      }

      // 다음글 인덱스 (오름차순 정렬이므로 인덱스가 큰 것이 다음글)
      const nextIndex = currentIndex + 1;

      if (nextIndex >= sortedData.length) {
        console.log(`[${type}] 다음글이 없습니다.`);
        alert('다음글이 없습니다.');
        return;
      }

      const nextItem = sortedData[nextIndex];
      console.log(`[${type}] 다음글 이동: ${currentId} -> ${nextItem.no}, 카테고리: ${config.targetCategory}`);
      
      // setCurrentId 콜백 호출 (새로운 ID로 업데이트)
      if (setCurrentId) {
        setCurrentId(nextItem.no.toString());
      }
      
      // selectedId 먼저 설정
      setState('selectedId', nextItem.no.toString());
      
      // 약간의 지연 후 카테고리 설정 (상태 동기화 문제 방지)
      setTimeout(() => {
        setState('selectedCateogry', config.targetCategory);
      }, 10);

    } catch (error) {
      console.error(`[${type}] 다음글 이동 실패:`, error);
      alert('다음글로 이동할 수 없습니다.');
    }
  };

  // 목록으로 이동
  const handleList = () => {
    setState('selectedCateogry', config.listCategory);
    setState('selectedId', null);
  };

  return {
    handlePrevious,
    handleNext,
    handleList
  };
}; 