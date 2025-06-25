function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Bem-vindo ao Tiller & Grain
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Esta é uma tela inicial criada com TailwindCSS.
        </p>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Começar
        </button>
      </div>
    </div>
  );
}

export default App