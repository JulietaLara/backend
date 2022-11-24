const express = require('express');
require('dotenv').config()
const { dbConnection } = require('../database/config')
const cors = require('cors')

class Server {
    constructor(){
        //crear express app
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            task: '/api/task',
        }

        this.connectToDB();
        this.addMidlewares();
        this.setRoutes();

        //sockets
        this.sockets()
    }

    // base datos
    async connectToDB() {
        await dbConnection();
    }

    addMidlewares() {
        //cors
        thiss.app.use( cors() )
        //lectura y parseo del body
        thiss.app.use( express.json() );
        //folder público
        this.app.use( express.static('public') )
    }

    setRoutes() {
        //rutas
        this.app.use( this.paths.auth, require('../routes/auth'))
        this.app.use( this.paths.task, require('../routes/task'))
    }

    listen() {
        //escuchar en puerto 400
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }

    
}

module.exports = Server; 