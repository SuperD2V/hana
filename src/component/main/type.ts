export interface NewsItem {
  announcementId: number;
  title: string;
  topExposureTag: string;
  files: null;
  views: number;
  updatedAt: string;
}

export interface NewsSectionProps {
  title?: string;
  onItemClick?: (item: NewsItem) => void;
}
