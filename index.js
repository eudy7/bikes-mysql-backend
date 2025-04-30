require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 8080;

app.listen(8081, () => {
 console.log('🚴 Servidor de bicicletas escuchando en http://localhost:8081');
});
