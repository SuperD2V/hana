export interface NoticeItem {
  no: number;
  title: string;
  date: string;
  views: number;
  files: any;
  tag: string;
}

export interface DashboardData {
  notice: NoticeItem[];
  worship: NoticeItem[];
}

export interface DashboardProps {
  data: DashboardData;
  titles?: string;
  onItemClick?: (item: NoticeItem) => void;
  onPageChange?: (page: number) => void;
  onCategoryChange?: (category: string) => void;
  currentPage?: number;
  totalPages?: number;
}
