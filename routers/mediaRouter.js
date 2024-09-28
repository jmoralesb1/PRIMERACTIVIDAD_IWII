const { Router } = require('express');

const {
    crearMedia,
    consultarMedias,
    consultarMediaID,
    editarMediaID,
    eliminarMediaID
} = require('../controllers/mediaController');

const router = Router();

// Endpoint para crear Media
router.post('/', crearMedia);

// Endpoint para consultar todas las Medias
router.get('/', consultarMedias);

// Endpoint para consultar Media por ID
router.get('/:id', consultarMediaID);

// Endpoint para editar Media por ID
router.put('/:id', editarMediaID);

// Endpoint para eliminar Media por ID
router.delete('/:id', eliminarMediaID);

module.exports = router;