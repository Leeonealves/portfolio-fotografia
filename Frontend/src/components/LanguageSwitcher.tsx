import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "pt" | "en" | "es") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="hidden md:block">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as "pt" | "en" | "es")}
        className="
          appearance-none
          bg-transparent
          border border-[#8D2B00]
          text-[#8D2B00]
          text-sm
          px-2 py-1
          rounded-md
          cursor-pointer
          focus:outline-none
          hover:bg-[#fff5f0]
          transition
        "
      >
        <option value="pt">PT</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
