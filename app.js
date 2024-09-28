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
const generos = require('./routers/generoRoute')
app.use('/api/v1/generos', generos)

//productora
const productoras = require('./routers/productoraRoute')
app.use('/api/v1/productoras', productoras)


module.exports = app