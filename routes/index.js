const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController');

router.get('/bikes', bikeController.getBikes);
router.post('/bikes', bikeController.addBike);

module.exports = router;
