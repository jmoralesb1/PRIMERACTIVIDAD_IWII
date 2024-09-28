const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const { mongoConn } = require('./databases/configuration')
mongoConn()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors({
    origin : '*'
}))

//genero
const generos = require('./routers/generoRoute') //importa la ruta
app.use('/api/v1/generos', generos) //Usa ruta

//productora
const productoras = require('./routers/productoraRoute')
app.use('/api/v1/productoras', productoras)

//director
const directores = require('./routers/directorRoute')
app.use('/api/v1/directores', directores)

//tipo
const tipos = require('./routers/tipoRoute')
app.use('/api/v1/tipos', tipos)

// media
const medias = require('./routers/mediaRouter');
app.use('/api/v1/medias', medias);

// Manejo de rutas no encontradas
app.get('*', (req, res) => {
    return res.status(400).json({ msj: 'No encontrado' });
});

module.exports = app