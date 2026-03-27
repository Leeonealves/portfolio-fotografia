import { useEffect, useState } from "react";

interface Photo {
  _id: string;
  url: string;
}

const Edit = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  // 🔥 buscar fotos
  const fetchPhotos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/photos");
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // 🔥 apagar foto
  const handleDelete = async (id: string) => {
    if (!confirm("Tens a certeza que queres apagar esta foto?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/photos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Erro ao apagar");
        return;
      }

      // 🔥 atualizar UI sem reload
      setPhotos((prev) => prev.filter((photo) => photo._id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro de ligação");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gerir Fotos</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={photo.url} className="w-full h-48 object-cover" />

            <button
              onClick={() => handleDelete(photo._id)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2"
            >
              Apagar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edit;
