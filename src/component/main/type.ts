export interface NewsItem {
  announcementId: number;
  title: string;
  topExposureTag: string;
  files: null;
  views: number;
  updatedAt: string;
}

export interface NewsSectionProps {
  titles?: string;
  onItemClick?: (item: NewsItem) => void;
}
