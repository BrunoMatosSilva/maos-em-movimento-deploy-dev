import { api } from "../lib/axios";

const sendAnamnese = (id, data) => api.post(`/anamnesis/${id}`, data);
const updateAnamneseById = (id, data) => api.patch(`/anamnesis/${id}`, data);
const getAnamnese = (id) => api.get(`/anamnesis/client/${id}`);
const getAnamneseById = (id) => api.get(`/anamnesis/${id}`);
const deleteAnamneseById = (id) => api.delete(`/anamnesis/${id}`);

export const AnamneseServices = {
  sendAnamnese,
  updateAnamneseById,
  getAnamneseById,
  getAnamnese,
  deleteAnamneseById
};