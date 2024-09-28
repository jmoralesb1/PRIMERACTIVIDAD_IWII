const app = require('./app')


app.set('port', process.env.PORT)


app.get('*', (req, res) => {
    return res.status(400).json({msj: 'No found'})
})

app.listen(app.get('port'), () => {
    console.log(`Arranqué bien el puerto ${app.get('port')}`)
})