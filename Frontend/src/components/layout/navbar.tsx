import { NavLink } from "react-router-dom";

const NavItens = [
  { label: "Home", href: "/" },
  { label: "Galeria", href: "/gallery", border: "rounded-full" },
  { label: "Sobre", href: "/about" },
  { label: "Contacto", href: "/contact", border: "rounded-full" }
];

function Navbar() {
  return (
    <nav>
      <ul className="bg-[transparent] border-b border-[#8D2B00] w-full flex space-x-4 text-white p-4 justify-center">

        {NavItens.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `${item.border ?? ""} p-2 rounded transition-all duration-300 hover:bg-white/10
                ${isActive ? "text-[#8D2B00]" : "text-white"}`}>
                {item.label}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>
  );
}

export default Navbar;