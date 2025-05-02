const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController');

// GET - Obtener todas las bicicletas
router.get('/bikes', bikeController.getBikes);

// POST - Agregar una bicicleta
router.post('/bikes', bikeController.addBike);

// PUT - Actualizar una bicicleta
router.put('/bikes/:id', bikeController.updateBike);

// DELETE - Eliminar una bicicleta
router.delete('/bikes/:id', bikeController.deleteBike);

module.exports = router;
