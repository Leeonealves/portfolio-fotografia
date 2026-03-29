import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "pt" | "en" | "es") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="bg-[transparent] border-b border-[#8D2B00] text-black">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as "pt" | "en" | "es")}
      >
        <option value="pt">PT</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
