// app/cargo/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCargo, Cargo } from '@/lib/cargoApi'; 

export default function CargoDetalhePage() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null; 

  const [cargo, setCargo] = useState<Cargo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchCargo = async () => {
        try {
          const response = await getCargo(id);
          setCargo(response.data);
        } catch (err) {
          setError("Não foi possível carregar os dados do cargo.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchCargo();
    }
  }, [id]); 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Carregando dados do cargo...</p>
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

  if (!cargo) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <p className="text-xl text-gray-600">Cargo não encontrado.</p>
        </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Cabeçalho */}
        <div className="bg-blue-600 p-6 sm:p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{cargo.titulo}</h1> 
                <Link href="/cargo"> 
                    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                        Voltar
                    </button>
                </Link>
            </div>
        </div>
        
        {/* Corpo com as informações */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Coluna da Esquerda */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-500">Título</h3> {/* Campo Título */}
              <p className="text-lg text-gray-800">{cargo.titulo}</p>
            </div>
          </div>

          {/* Coluna da Direita */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-500">Descrição</h3> {/* Campo Descrição */}
              <p className="text-lg text-gray-800">{cargo.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
