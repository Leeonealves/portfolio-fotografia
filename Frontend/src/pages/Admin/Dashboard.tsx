const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#859B48] to-[#1D361F] p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-[#1D361F] text-center">
          Olá Camilla, bem‑vinda ao seu painel
        </h2>

        <p className="text-gray-700 text-center">
          Aqui podes gerir as tuas fotos, mensagens e muito mais!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Card Fotos */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#8D2B00] mb-2">
              📸 Gerir Fotos
            </h3>
            <p className="text-gray-600">
              Carrega novas fotos, organiza álbuns e atualiza o teu portfólio.
            </p>
          </div>

          {/* Card Mensagens */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#8D2B00] mb-2">
              💬 Mensagens
            </h3>
            <p className="text-gray-600">
              Consulta e responde às mensagens enviadas pelos teus clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
