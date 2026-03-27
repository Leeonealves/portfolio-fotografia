import Navbar from "../components/layout/navbar";
import Foto from "../assets/foto.jpg";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859B48] to-[#1D361F]">
      <Navbar />

      {/* Container principal com padding e cor de texto */}
      <div className="max-w-6xl mx-auto items-center justify-center p-8 text-white">
        <h2 className="font-semibold text-2xl pb-12 text-center">Sobre</h2>

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
              Camilla Teixeira Santos é uma artista brasileira residente em
              Portugal, estudante de Artes e Impressão Digital. Seu trabalho é
              influenciado pela fotografia, pelas viagens e pelo diálogo entre
              história e cultura. Sua produção busca unir sensibilidade estética
              e narrativa visual, explorando a imagem como forma de expressão e
              identidade.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Obrigado por estar aqui. Este espaço é um convite para enxergar a
              vida através da minha lente — onde paisagens ganham voz, detalhes
              esquecidos se tornam protagonistas e cada sorriso revela uma
              história. Entre traços, luzes e momentos que quase passam
              despercebidos, compartilho meus trabalhos favoritos e a forma como
              transformo o cotidiano em arte. Sinta-se à vontade para explorar,
              descobrir e se inspirar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
