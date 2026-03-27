import bg from '../assets/EstacaoMazaneda.jpg';
import Navbar from '../components/layout/navbar';

function gotoGallery() {
  window.location.href = '/gallery';
}

function Home() {
    
  return ( <>
    <div className="min-h-screen text-white" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      <h1 className="text-4xl font-bold text-center pt-10 pb-3 italic text-5xl md:text-7xl lg:text-8xl">Camilla Santos</h1>
      <div className="w-full h-64">
        <div>
        <button className="bg-[#8D2B00]/70 text-white p-2 rounded-lg hover:bg-[#8D2B00] transition-colors duration-300 mx-auto block" onClick={gotoGallery}>
          Explorar
        </button>
        </div>
      </div>
    </div>
  </>);
}

export default Home;
