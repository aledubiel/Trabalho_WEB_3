import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000/cargo",
});

export type Cargo = {
  id: number;
  titulo: string;
  descricao: string;
};

export const getCargos = () => api.get('/');

export const getCargo = (id: number) => api.get(`/${id}`);

export const buscarCargosPorTitulo = (titulo: string) => api.get(`/buscar?titulo=${titulo}`);