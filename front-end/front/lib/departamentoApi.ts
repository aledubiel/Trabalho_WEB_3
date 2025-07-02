import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000/departamento",
});
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export type Departamento = {
  id: number;
  nome: string;
  descricao: string;
};

export const getDepartamentos = () => api.get('/');

export const getDepartamento = (id: number) => api.get(`/${id}`);


export const buscarDepartamentosPorNome = (nome: string) => api.get(`/buscar?nome=${nome}`);