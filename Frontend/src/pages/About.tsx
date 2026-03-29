import Navbar from "../components/layout/navbar";
import Foto from "../assets/foto.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859B48] to-[#1D361F]">
      <Navbar />

      {/* Container principal com padding e cor de texto */}
      <div className="max-w-6xl mx-auto items-center justify-center p-8 text-white">
        <h2 className="font-semibold text-2xl pb-12 text-center">
          {t("homepage.about.title")}
        </h2>

        {/* flex-col: Empilha em mobile
            md:flex-row: Lado a lado em telas médias/grandes
            items-center: Alinha verticalmente no centro quando em row
            gap-8: Espaço entre a foto e o texto
        */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Lado Esquerdo: Foto */}
          <div className="flex-shrink-0">
            <img
              src={Foto}
              alt="Camilla Teixeira Santos"
              className="rounded-lg w-64 h-82 object-contain border-4 border-white shadow-lg"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-lg leading-relaxed">
              {t("homepage.about.text1")}
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              {t("homepage.about.text2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
