function Footer() {
  return (
    <footer className="mt-auto text-white bg-black/30 backdrop-blur-sm py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm tracking-wide">
          © 2026 • Camilla Santos • Todos os direitos reservados
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition">Instagram</a>
          <a href="#" className="hover:text-gray-300 transition">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
