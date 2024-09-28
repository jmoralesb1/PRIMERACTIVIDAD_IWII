const { Schema, model } = require('mongoose');

const MediaSchema = Schema ({
    
    serial: {
        type: String,
        unique: [true, 'Serial ya existe'], 
        required: [true, 'Serial requerido']
    },

    titulo: {
        type: String,
        required: [true, 'Titulo requerido']
    },

    sinopsis: {
        type: String,
        required: [true, 'Sipnosis requerida']
    },

    url: {
        type: String,
        unique: [true, 'Url ya existe'],
        required: [true, 'Url requerido']
    },

    imagenPortada: {
        type: String, 
        required: [true, 'Portada requerida']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
    },

    fechaEstreno: {
        type: Number,
        required: [true, 'Año requerido']
    },

    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero', 
        required: true
    },

    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director', 
        required: true
    },

    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora', 
        required: true
    },

    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo', 
        required: true
    }
});

module.exports = model('Media', MediaSchema);
