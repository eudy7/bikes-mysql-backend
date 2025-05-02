const db = require('../models');
const Bike = db.Bike;

// GET - Obtener todas las bicicletas
const getBikes = async (req, res) => {
  try {
    const bikes = await Bike.findAll();
    res.json({ bikes });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bicicletas' });
  }
};

// POST - Agregar una nueva bicicleta
const addBike = async (req, res) => {
  try {
    const { brand, model, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBike = await Bike.create({ brand, model, price, description, image });
    res.status(201).json(newBike);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar bicicleta' });
  }
};

// PUT - Actualizar una bicicleta
const updateBike = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, model, price, description } = req.body;

    const [updated] = await Bike.update(
      { brand, model, price, description },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({ error: 'Bicicleta no encontrada' });
    }

    const updatedBike = await Bike.findByPk(id);
    res.json(updatedBike);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar bicicleta' });
  }
};

// DELETE - Eliminar una bicicleta
const deleteBike = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bike.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ error: 'Bicicleta no encontrada' });
    }

    res.json({ message: '✅ Bicicleta eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar bicicleta' });
  }
};

module.exports = {
  getBikes,
  addBike,
  updateBike,
  deleteBike
};
