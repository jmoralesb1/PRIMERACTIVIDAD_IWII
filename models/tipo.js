const { Schema, model } = require('mongoose');

const TipoSchema = Schema ({

    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
    },

    descripcion: {
        type: String,
        required: [true, 'Descripción requerida']
    }

});

module.exports = model('Tipo', TipoSchema);