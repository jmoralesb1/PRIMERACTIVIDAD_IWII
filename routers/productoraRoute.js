const { Router } = require('express')

const { 
    crearProductora,
    consultarProductora,
    consultarProductoraID,
    editarProductoraID
 } = require('../controllers/productoraController')

const router = Router()

//endpoint crear productora
router.post('/', crearProductora)

//endpoint consultar productora
router.get('/', consultarProductora)

//endpoint consultar productora por ID
router.get('/:id', consultarProductoraID)

//endpoint editar productora por ID
router.put('/:id', editarProductoraID)



module.exports = router