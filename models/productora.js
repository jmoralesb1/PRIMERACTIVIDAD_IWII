const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema ({

    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },

    estado: {
        type: Boolean,
        default: true
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
    },

    slogan: {
        type: String,
        required: [true, 'Slogan requerido']
    },

    descripcion: {
        type: String,
        required: [true, 'Descripción requerida']
    }
});

module.exports = model('Productora', ProductoraSchema);
