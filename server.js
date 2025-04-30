const express = require('express');
const multer = require('multer');
const path = require('path');
const bikeRoutes = require('./routes');
const app = express();

// Middleware para JSON
app.use(express.json());

// Configurar carpeta de subida de imágenes
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Carpeta estática para servir imágenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta con subida de imagen
const bikeController = require('./controllers/bikeController');
app.post('/api/bikes', upload.single('image'), bikeController.addBike);

// Ruta GET
app.use('/api', bikeRoutes);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`🚴 Servidor de bicicletas escuchando en http://localhost:${PORT}`);
});
