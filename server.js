const express = require('express');
const app = express();
const bikeRoutes = require('./routes');

app.use(express.json());

app.use('/api', bikeRoutes);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`🚴 Servidor de bicicletas escuchando en http://localhost:${PORT}`);
});
