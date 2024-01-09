import { api } from "../lib/axios";

const getAllTherapieService = () => api.get('/service');
const getFilterTherapieName = (therapieName) => api.get(`/service/therapie?name=${therapieName}`);
const updateTherapieIsConfirm = (id, data) => api.patch(`/service/therapie/${id}`, data);
const getClientServiceId = (id) => api.get(`/service/${id}`)
const createdServiceId = (id) => api.post(`/service/${id}`);
const createdTherapieService = (id, data) => api.post(`/service/therapie/${id}`, data);
const deletedTherapieService = (id) => api.delete(`/service/therapie/${id}`);

export const ClientService = {
getAllTherapieService,
getFilterTherapieName,
updateTherapieIsConfirm,
getClientServiceId,
createdServiceId,
createdTherapieService,
deletedTherapieService
}