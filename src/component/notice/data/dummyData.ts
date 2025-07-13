import { DashboardData, NoticeItem } from "../type";

export const noticeDummyData: NoticeItem[] = [
  { no: 1, title: "홈페이지 새단장", date: "2024.12.20", views: 156 },
  { no: 2, title: "2025년 하계 전교인 리트릿", date: "2024.12.19", views: 89 },
  { no: 3, title: "2024년 성탄절 예배 안내", date: "2024.12.18", views: 234 },
  { no: 4, title: "2025년 새해 예배 안내", date: "2024.12.17", views: 178 },
  { no: 5, title: "교회학교 교사 모집", date: "2024.12.16", views: 67 }
];

export const worshipDummyData: NoticeItem[] = [
  { no: 1, title: "2024년 12월 22일 주보", date: "2024.12.22", views: 45 },
  { no: 2, title: "2024년 12월 15일 주보", date: "2024.12.15", views: 38 },
  { no: 3, title: "2024년 12월 8일 주보", date: "2024.12.08", views: 42 },
  { no: 4, title: "2024년 12월 1일 주보", date: "2024.12.01", views: 35 },
  { no: 5, title: "2024년 11월 24일 주보", date: "2024.11.24", views: 41 }
];

export const dashboardDummyData: DashboardData = {
  notice: noticeDummyData,
  worship: worshipDummyData
};
