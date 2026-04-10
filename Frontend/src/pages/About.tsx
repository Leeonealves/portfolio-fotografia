import Navbar from "../components/layout/navbar";
import Foto from "../assets/camilla.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#859B48] to-[#1D361F]">
      <Navbar />

      {/* Wrapper para centralização vertical */}
      <div className="flex-1 flex items-center justify-center px-4">
        
        {/* Container principal */}
        <div className="max-w-7xl w-full text-white">
          
          {/* Título */}
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl pb-10 text-center">
            {t("homepage.about.title")}
          </h2>

          {/* Conteúdo */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            
            {/* Foto */}
            <div className="flex-shrink-0">
              <img
                src={Foto}
                alt="Camilla Teixeira Santos"
                className="rounded-lg w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Texto */}
            <div className="text-center md:text-left space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                {t("homepage.about.text1")}
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                {t("homepage.about.text2")}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
