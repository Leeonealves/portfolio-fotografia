import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } else {
      alert(data.message || "Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859B48] to-[#1D361F] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 space-y-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
