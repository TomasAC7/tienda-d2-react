const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String
    },
    categoria: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Producto', productoSchema);