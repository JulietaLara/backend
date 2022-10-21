//console.log("Hi there")

const express = require('express')

require('dotenv').config()

const { dbConnection } = require('./database/config')

//crear express app

const app = express();

//rutas
// app.get('/',(req, res) => {
//     res.json({
//         ok: true
//     })
// } )

//base de datos
dbConnection();

app.use( express.static('public'))

//lectura y parseo del body 
app.use( express.json() )

//rutas
app.use('/api/auth', require('./routes/auth'))

//escuchar en puerto 4000
// app.listen(4000, ()=> {
//     console.log('Servidor corriendo en puerto', 4000)
// })

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})