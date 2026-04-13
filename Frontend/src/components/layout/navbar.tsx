import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavItens = [
  { label: "homepage.navbar.home", href: "/" },
  { label: "homepage.navbar.gallery", href: "/gallery", border: "rounded-full" },
  { label: "homepage.navbar.about", href: "/about" },
  { label: "homepage.navbar.contact", href: "/contact", border: "rounded-full" },
];

function Navbar() {
  const { t } = useTranslation();

  return (

    <nav>
      <div className="absolute left-4 top-4">
        <LanguageSwitcher />
      </div>
      <ul className="bg-[transparent] border-b border-[#8D2B00] w-full flex space-x-4 text-white p-4 justify-center">
        {NavItens.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `${item.border ?? ""} p-2 rounded transition-all duration-300 hover:bg-white/10
                ${isActive ? "border-b-2 border-[#8D2B00] text-white font-semibold" : "text-white opacity-80 hover:opacity-100"}`
              }
            >
              {t(item.label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
