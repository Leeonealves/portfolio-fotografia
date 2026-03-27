import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Seleciona um ficheiro primeiro");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:3000/api/photos/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(errorText);
        alert("Failed to upload");
        return;
      }

      const data = await res.json();
      console.log(data);
      alert("Upload successful");
    } catch (err) {
      console.error(err);
      alert("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#859B48] to-[#1D361F] p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-[#1D361F]">
          Carregar nova foto
        </h2>

        <label className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:border-[#8D2B00] transition">
          <span className="text-gray-600">
            Clique para selecionar uma imagem
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {preview && (
          <div className="w-full flex justify-center">
            <img
              src={preview}
              className="w-64 h-64 object-cover rounded-lg shadow-md border"
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-[#8D2B00] hover:bg-[#1D361F] text-white font-semibold py-3 rounded-lg transition"
        >
          Fazer Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
