
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./src/config/db');
const productoRoutes = require('./src/routes/productoRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Conectar rutas de productos
app.use('/api/productos', productoRoutes);

conectarDB();

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
