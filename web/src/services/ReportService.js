import { api } from "../lib/axios";

const getReportDay = (date) => api.get(`/report?date=${date}`);

export const ReportService = {
  getReportDay
}