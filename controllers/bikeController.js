const db = require('../models');
const Bike = db.Bike;

// Obtener todas las bicicletas
const getBikes = async (req, res) => {
  try {
    const bikes = await Bike.findAll();
    res.json({ bikes });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bicicletas' });
  }
};

// Agregar una nueva bicicleta
const addBike = async (req, res) => {
  const { brand, model, price, description } = req.body;
  try {
    const newBike = await Bike.create({ brand, model, price, description });
    res.status(201).json(newBike);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar bicicleta' });
  }
};

module.exports = {
  getBikes,
  addBike
};
