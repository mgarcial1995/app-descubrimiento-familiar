import type { IParticipante } from "../interfaces/participantes";
import apiClient from "./apiClient";

export const registrarParticipante = async (data: IParticipante) => {
  const response = await apiClient.post("/participante/registrar", data);
  return response.data;
};

export const traerDatosParticipante = async (id: string) => {
  const response = await apiClient.get(`/participante/obtenerParticipante/${id}`);
  return response.data;
};

export const traerParticipantes = async () => {
  const response = await apiClient.get(`/participante/obtenerParticipantes`);
  return response.data;
};

export const asistenciaParticipante = async (id: string) => {
  const response = await apiClient.put(`/participante/asistenciaParticipante/${id}`);
  return response.data;
};

