const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bikeRoutes = require('./routes');
const bikeController = require('./controllers/bikeController');

const app = express();

app.use(cors({
  origin: 'https://bikes-mysql-frontend.onrender.com'
}));

app.use(express.json());

// ✅ 4. Configuración de multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/bikes', upload.single('image'), bikeController.addBike);
app.use('/api', bikeRoutes);

module.exports = app;
