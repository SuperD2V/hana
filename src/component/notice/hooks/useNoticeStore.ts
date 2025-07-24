import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import lodashSet from "lodash/set";

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

export type NoticeStore = {
    selectedCateogry: 'notice' | 'worship';
    dashboardData?: DashboardData;
};

const initState: NoticeStore = {
  selectedCateogry: 'notice',
  dashboardData: undefined
};

export const useNoticeStore = create(
  immer(
    combine(initState, (set, get) => ({
      setState: (path: string, value: any) => {
        set(state => {
          lodashSet(state, path, value);
        });
      },
      reset: () => {
        set(state => {
          Object.assign(state, initState);
        });
      }
    }))
  )
);
