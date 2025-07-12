export interface NewsItem {
  id: number;
  title: string;
  date: string;
  isNotice: boolean;
}

export interface NewsSectionProps {
  data: NewsItem[];
  title?: string;
  onItemClick?: (item: NewsItem) => void;
}
