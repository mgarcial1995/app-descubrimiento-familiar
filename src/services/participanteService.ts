import type { IParticipante } from "../interfaces/participantes";
import apiClient from "./apiClient";

export const registrarParticipante = async (data: IParticipante) => {
  const response = await apiClient.post("/participante/registrar", data);
  return response.data;
};

// Listar participantes
// export const listarParticipantes = async () => {
//   const response = await apiClient.get("/users");
//   return response.data;
// };
