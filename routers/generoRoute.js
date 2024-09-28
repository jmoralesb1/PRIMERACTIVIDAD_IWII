const { Router } = require('express')

const { 
    crearGenero,
    consultarGenero,
    consultarGeneroID,
    editarGeneroID } = require('../controllers/generoController')

const router = Router()

//GENERO
//se importa el endpoint crear
router.post('/', crearGenero)
//endpoint consultar todos
router.get('/', consultarGenero)
//endpoint consultar por ID
router.get('/:id', consultarGeneroID)
//endpoint actualizar por ID
router.put('/:id', editarGeneroID)


module.exports = router