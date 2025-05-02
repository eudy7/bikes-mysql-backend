require('dotenv').config();
const app = require('./server');
const db = require('./models');

db.sequelize.getQueryInterface().addColumn('Bikes', 'image', {
  type: db.Sequelize.STRING,
  allowNull: true
}).then(() => {
  console.log('✅ Columna "image" agregada (o ya existente)');
}).catch((err) => {
  console.log('⚠️ No se pudo agregar columna "image":', err.message);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚴 Servidor de bicicletas escuchando en http://localhost:${PORT}`);
});
