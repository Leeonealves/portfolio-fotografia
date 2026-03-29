import { useState } from "react";
import Navbar from "../components/layout/navbar";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({name: "", email: "", message: "", });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar");
      }

      console.log(data);
      alert("Mensagem enviada ✨");

      // limpar formulário
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859B48] to-[#1D361F]">
      <Navbar />
      <div className="flex items-center justify-center px-6 py-4 ">
      
        <div className="w-full md:h-96 max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 ">
      
          <h2 className="text-3xl font-bold text-[#8D2B00] mb-6 text-center">
            {t("homepage.contact.title")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
      
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("homepage.contact.nome")}
              </label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D2B00] transition"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("homepage.contact.email")}
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D2B00] transition"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("homepage.contact.message")}
              </label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D2B00] transition resize-none"/>
            </div>

            <button type="submit" className="w-full bg-[#8D2B00] text-white font-semibold py-3 rounded-lg hover:bg-[#a33400] transition duration-300 shadow-md">
              {t("homepage.contact.button")}
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;