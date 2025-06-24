import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/funcionarios",
});

export const getFuncionarios = () => api.get('/');
export const getFuncionario = (id: number) => api.get(`/${id}`);
export const buscarFuncionariosPorNome = (nome: string) => api.get(`/buscar?nome=${nome}`);
