import { api } from "../lib/axios";

const getAllPayment = (id) => api.get(`/payment/client/${id}`);
const getPaymentService = (id) => api.get(`/payment/${id}`);
const updatePayment = (id, data) => api.patch(`/payment/${id}`, data);
const deletePayment = (id) => api.delete(`/payment/${id}`);

export const PaymentService = {
  getAllPayment,
  getPaymentService,
  updatePayment,
  deletePayment
}