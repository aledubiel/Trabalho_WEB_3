// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Bem-vindo a Aplicação da Ale
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Navegue pelas diferentes seções para visualizar funcionários, departamentos e cargos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/funcionarios">
            <button className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
              Funcionários
            </button>
          </Link>
          <Link href="/departamento">
            <button className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
              Departamentos
            </button>
          </Link>
          <Link href="/cargo">
            <button className="w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
              Cargos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
