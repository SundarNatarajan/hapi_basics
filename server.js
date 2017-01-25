'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

// server connection details
server.connection({ host: 'localhost', port: '8080' })

//hapi registers plugins
const serverRegisters = require('./register')
const routes = require('./routes')

//server routes
server.register(serverRegisters, (err) => {
    if (err) {
        console.log(`Error on registering Good plugin ${err.stack || err}`)
    }
});

server.route(routes);

module.exports = server;
