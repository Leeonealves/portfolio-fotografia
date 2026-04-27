import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      console.error("🔥 MULTER ERROR:", err);
      return res.status(500).json({ message: err.message });
    }

    try {
      console.log("✅ passou pelo multer");
      console.log("FILE:", req.file);

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "photos" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            },
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await streamUpload();

      const photo = await Photo.create({
        url: result.secure_url,
        public_id: result.public_id,
      });

      res.status(201).json({
        message: "Photo uploaded",
        photo,
      });
    } catch (error) {
      console.error("🔥 UPLOAD ERROR:", error);
      res.status(500).json({ message: "Upload failed" });
    }
  });
});
