'use client';

import { getFuncionarios, buscarFuncionariosPorNome } from "@/lib/funcionariosApi";
import { useEffect, useState, FormEvent } from "react";
import Link from 'next/link';

type Funcionario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  departamento: {
    nome: string;
  };
  cargo?: {
    titulo: string;
  } | null;
};

export default function Page() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchResult, setIsSearchResult] = useState(false);

  const fetchAllFuncionarios = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getFuncionarios();
      setFuncionarios(response.data);
      setIsSearchResult(false);
    } catch (err) {
      setError("Não foi possível carregar os funcionários. Verifique se a API está rodando e o CORS está habilitado.");
      console.error(err);
      setFuncionarios([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllFuncionarios();
  }, []);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await buscarFuncionariosPorNome(searchTerm);
      setFuncionarios(response.data);
      setIsSearchResult(true);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError(`Nenhum funcionário encontrado com o nome "${searchTerm}".`);
      } else {
        setError("Ocorreu um erro ao realizar a busca.");
      }
      setFuncionarios([]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    fetchAllFuncionarios();
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-600">A processar...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-20">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      );
    }

    if (funcionarios.length === 0) {
      return (
        <div className="text-center py-20">
          <p className="text-lg text-gray-500">Nenhum funcionário para exibir.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funcionarios.map((funcionario) => (
          <div
            key={funcionario.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {funcionario.nome}
              </h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Email:</strong> {funcionario.email}</p>
                <p><strong>Telefone:</strong> {funcionario.telefone}</p>
                <p><strong>Departamento:</strong> {funcionario.departamento.nome}</p>
                <p><strong>Cargo:</strong> {funcionario.cargo?.titulo || 'Não definido'}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href={`/funcionarios/${funcionario.id}`}>
                <button className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                  Visualizar
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Lista de Funcionários
        </h1>
        <div className="flex gap-4">
          <Link href="/">
            <button className="bg-gray-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-sm">
              Voltar ao Menu Principal
            </button>
          </Link>
          <Link href="/funcionarios/new">
            <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm">
              Novo Funcionário
            </button>
          </Link>
        </div>
      </div>

      {/* Barra de Pesquisa */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Procurar por nome..."
            className="flex-grow w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Buscar
          </button>
          {isSearchResult && (
            <button type="button" onClick={handleClearSearch} className="w-full sm:w-auto bg-gray-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              Limpar
            </button>
          )}
        </form>
      </div>

      {renderContent()}
    </div>
  );
}
