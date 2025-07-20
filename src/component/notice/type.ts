export interface NoticeItem {
  no: number;
  title: string;
  date: string;
  views: number;
}

export interface DashboardData {
  notice: NoticeItem[];
  worship: NoticeItem[];
}

export interface DashboardProps {
  data: DashboardData;
  title?: string;
  onItemClick?: (item: NoticeItem) => void;
  onPageChange?: (page: number) => void;
  onCategoryChange?: (category: string) => void;
  currentPage?: number;
  totalPages?: number;
}
