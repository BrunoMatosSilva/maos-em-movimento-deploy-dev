import { api } from "../lib/axios";

const sendPacient = (data) => api.post('/client', data);
const updatePacientById = (id, data) => api.patch(`/client/${id}`, data);
const getPacient = () => api.get('/client');
const getPacientById = (id) => api.get(`/client/${id}`);
const deletePacientById = (id) => api.delete(`/client/${id}`);

export const PacientServices = {
  sendPacient,
  updatePacientById,
  getPacient,
  getPacientById,
  deletePacientById
};