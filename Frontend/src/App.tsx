import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Login from "./pages/Admin/Login";
import Admin from "./pages/Admin/Admin";
import Upload from "./pages/Admin/Upload";
import Edit from "./pages/Admin/Edit";
import Messages from "./pages/Admin/Messages";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Rota pai do Admin */}
        <Route path="/admin" element={<Admin />}>
          {/* Rota padrão dentro do admin */}
          <Route index element={<Dashboard />} />

          {/* Outras páginas do admin */}
          <Route path="upload" element={<Upload />} />
          <Route path="edit" element={<Edit />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
