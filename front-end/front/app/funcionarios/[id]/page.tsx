'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getFuncionario } from '@/lib/funcionariosApi'; 

type Funcionario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  departamento: {
    id: number;
    nome: string;
  };
  cargo?: {
    id: number;
    titulo: string;
  } | null;
};

export default function FuncionarioDetalhePage() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null;

  const [funcionario, setFuncionario] = useState<Funcionario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchFuncionario = async () => {
        try {
          const response = await getFuncionario(id);
          setFuncionario(response.data);
        } catch (err) {
          setError("Não foi possível carregar os dados do funcionário.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchFuncionario();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Carregando dados do funcionário...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Ocorreu um Erro</h2>
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!funcionario) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Funcionário não encontrado.</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      
        <div className="bg-blue-600 p-6 sm:p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{funcionario.nome}</h1>
            <Link href="/funcionarios">
              <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                Voltar
              </button>
            </Link>
          </div>
          <p className="text-lg text-blue-200 mt-2">{funcionario.cargo?.titulo || 'Cargo não definido'}</p>
        </div>


        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-500">Email</h3>
              <p className="text-lg text-gray-800">{funcionario.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Telefone</h3>
              <p className="text-lg text-gray-800">{funcionario.telefone}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-500">CPF</h3>
              <p className="text-lg text-gray-800">{funcionario.cpf}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Departamento</h3>
              <p className="text-lg text-gray-800">{funcionario.departamento.nome}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
