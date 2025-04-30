require('dotenv').config();
const app = require('./server');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚴 Servidor de bicicletas escuchando en http://localhost:${PORT}`);
});
