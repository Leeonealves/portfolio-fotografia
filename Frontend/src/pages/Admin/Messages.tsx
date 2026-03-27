import { useEffect, useState } from "react";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Buscar mensagens
  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/messages");
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setMessages([]);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Apagar mensagem
  const handleDelete = async (id: string) => {
    if (!confirm("Tens a certeza que queres apagar esta mensagem?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Erro ao apagar mensagem");
        return;
      }

      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro de ligação");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859B48] to-[#1D361F] p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-[#1D361F] text-center mb-6">
          Mensagens Recebidas
        </h1>

        {/* Caso não tenha mensagens */}
        {messages.length === 0 && (
          <div className="text-center text-gray-600 bg-white/80 p-6 rounded-lg shadow-md border border-gray-200">
            Você não tem mensagens ainda.
          </div>
        )}

        {/* Lista de mensagens */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white rounded-lg shadow-md p-5 border border-gray-200"
            >
              <div className="mb-2">
                <p className="font-bold text-[#8D2B00]">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.email}</p>
              </div>

              <p className="text-gray-700 mb-3">{msg.message}</p>

              {msg.createdAt && (
                <p className="text-xs text-gray-400 mb-3">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              )}

              <button
                onClick={() => handleDelete(msg._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
              >
                Apagar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
