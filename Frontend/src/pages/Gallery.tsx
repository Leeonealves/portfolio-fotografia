import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Navbar from "../components/layout/navbar";

interface Photo {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

// Função para otimizar URLs do Cloudinary
function optimize(url: string, width: number, quality: number) {
  return url.replace("/upload/", `/upload/w_${width},q_${quality},f_auto/`);
}

function Gallery() {
  const [images, setImages] = useState<Photo[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/photos")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#859B48] to-[#1D361F] min-h-screen">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
        {images.map((img, i) => {
          const thumb = optimize(img.imageUrl, 600, 70);

          return (
            <img
              key={img._id}
              src={thumb}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          );
        })}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((img) => ({
            src: optimize(img.imageUrl, 1600, 80), // imagem grande
            thumbnail: optimize(img.imageUrl, 200, 50), // thumbnail leve
          }))}
          plugins={[Thumbnails]}
        />
      </div>
    </div>
  );
}

export default Gallery;
