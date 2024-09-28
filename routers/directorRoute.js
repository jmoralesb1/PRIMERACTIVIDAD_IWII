const { Router } = require('express');

const {
    crearDirector,
    consultarDirectores,
    consultarDirectorID,
    editarDirectorID,
    eliminarDirectorID
    } = require('../controllers/directorController');

const router = Router();

router.post('/', crearDirector);
router.get('/', consultarDirectores);
router.get('/:id', consultarDirectorID);
router.put('/:id', editarDirectorID);
router.delete('/:id', eliminarDirectorID);

module.exports = router;