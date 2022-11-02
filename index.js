//console.log("Hi there")

const express = require('express')

require('dotenv').config()

const { dbConnection } = require('./database/config')
const cors = require('cors')

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

//cors
app.use( cors() )

app.use( express.static('public'))

//lectura y parseo del body 
app.use( express.json() )

//rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/task', require('./routes/task'))

//escuchar en puerto 4000
// app.listen(4000, ()=> {
//     console.log('Servidor corriendo en puerto', 4000)
// })

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})