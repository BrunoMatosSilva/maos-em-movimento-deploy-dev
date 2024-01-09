import { api } from "../lib/axios";

const sendTherapie = (data) => api.post('/therapies', data);
const updateTherapieById = (id, data) => api.patch(`/therapies/${id}`, data);
const getTherapie = () => api.get(`/therapies`);
const getTherapieById = (id) => api.get(`/therapies/${id}`);
const deleteTherapieById = (id) => api.delete(`/therapies/${id}`);

export const TherapieServices = {
  sendTherapie,
  updateTherapieById,
  getTherapieById,
  getTherapie,
  deleteTherapieById
};