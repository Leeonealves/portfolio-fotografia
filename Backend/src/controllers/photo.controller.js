import Photo from "../models/photo.model.js";

// buscar todas as fotos
export const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar fotos" });
  }
};

// criar foto
export const createPhoto = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    const newPhoto = new Photo({
      title,
      description,
      imageUrl,
    });

    await newPhoto.save();

    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar foto" });
  }
};

// atualizar foto
export const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Photo.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar foto" });
  }
};

// apagar foto
export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    await Photo.findByIdAndDelete(id);

    res.json({ message: "Foto apagada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao apagar foto" });
  }
};
