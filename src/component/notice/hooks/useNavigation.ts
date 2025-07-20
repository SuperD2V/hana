import { useQueryClient } from '@tanstack/react-query';
import { useShallow } from 'zustand/shallow';
import { useAdminStore } from '../../../../hooks/store/useAdminStore';
import { findPreviousItem, findNextItem } from '../utils/navigationUtils';

export const useNavigation = (currentId: string, type: 'notice' | 'bulletin') => {
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
        listCategory: 2 as const // Notice List 페이지
      };
    } else if (type === 'bulletin') {
      return {
        queryKey: 'bulletinList',
        targetCategory: 7 as const, // Bulletin Detail 페이지
        listCategory: 3 as const // Bulletin List 페이지
      };
    } else {
      // 기본값 (공지사항)
      return {
        queryKey: 'noticeList',
        targetCategory: 7 as const,
        listCategory: 2 as const
      };
    }
  };

  const config = getConfig();

  // 이전글 이동
  const handlePrevious = async () => {
    try {
      console.log(`[${type}] 이전글 이동 시도 - 현재 ID: ${currentId}, 쿼리키: ${config.queryKey}`);
      
      const result = findPreviousItem(queryClient, config.queryKey, currentId);
      
      if (result.success && result.nextId) {
        // 상태 업데이트 전에 유효성 검사
        console.log(`[${type}] 이전글 이동: ${currentId} -> ${result.nextId}, 카테고리: ${config.targetCategory}`);
        
        // selectedId 먼저 설정
        setState('selectedId', result.nextId);
        
        // 약간의 지연 후 카테고리 설정 (상태 동기화 문제 방지)
        setTimeout(() => {
          setState('selectedCateogry', config.targetCategory);
        }, 10);
      } else {
        console.log(`[${type}] 이전글 없음: ${result.message}`);
        alert(result.message || '이전글로 이동할 수 없습니다.');
      }
    } catch (error) {
      console.error(`[${type}] 이전글 이동 실패:`, error);
      alert('이전글로 이동할 수 없습니다.');
    }
  };

  // 다음글 이동
  const handleNext = async () => {
    try {
      console.log(`[${type}] 다음글 이동 시도 - 현재 ID: ${currentId}, 쿼리키: ${config.queryKey}`);
      
      const result = findNextItem(queryClient, config.queryKey, currentId);
      
      if (result.success && result.nextId) {
        // 상태 업데이트 전에 유효성 검사
        console.log(`[${type}] 다음글 이동: ${currentId} -> ${result.nextId}, 카테고리: ${config.targetCategory}`);
        
        // selectedId 먼저 설정
        setState('selectedId', result.nextId);
        
        // 약간의 지연 후 카테고리 설정 (상태 동기화 문제 방지)
        setTimeout(() => {
          setState('selectedCateogry', config.targetCategory);
        }, 10);
      } else {
        console.log(`[${type}] 다음글 없음: ${result.message}`);
        alert(result.message || '다음글로 이동할 수 없습니다.');
      }
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