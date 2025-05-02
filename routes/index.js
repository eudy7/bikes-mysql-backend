const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.get('/bikes', bikeController.getBikes);

router.post('/bikes', upload.single('image'), bikeController.addBike);

router.put('/bikes/:id', bikeController.updateBike);

router.delete('/bikes/:id', bikeController.deleteBike);

module.exports = router;
