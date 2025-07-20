import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";

export interface IBanner {
  type: string;
  displayOrder: number;
  url: string;
}
export const getBanner = async () => {
  const response = await api.request<ApiResponse<IBanner[]>>({
    url: "/api/common/main/banner/list",
    method: "GET"
  });
  return response.data.data[0];
};

export interface ICalenderEvent {
  title: string;
  startDate: string;
  endDate: string;
}

export interface ISummaryDay {
  [key: string]: boolean;
}

export interface IMonthlyEvents {
  summaryDays: ISummaryDay[];
  calendarEvents: ICalenderEvent[];
}

export const getGoolgeSchedule = async ({
  year,
  month
}: {
  year: number;
  month: number;
}) => {
  const response = await api.request<ApiResponse<IMonthlyEvents>>({
    url: `/api/common/main/monthly-events?year=${year}&month=${month}`,
    method: "GET"
  });
  return response.data;
};
