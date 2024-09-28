const { Router } = require('express');

const {
    crearTipo,
    consultarTipos,
    consultarTipoID,
    editarTipoID,
    eliminarTipoID
    } = require('../controllers/tipoController');

const router = Router();

router.post('/', crearTipo);
router.get('/', consultarTipos);
router.get('/:id', consultarTipoID);
router.put('/:id', editarTipoID);
router.delete('/:id', eliminarTipoID);

module.exports = router;