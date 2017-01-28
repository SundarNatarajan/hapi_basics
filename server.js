'use strict'

const Path = require('path')
const Hapi = require('hapi')

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname,'lib','public')
            }
        }
    }
})

// server connection details
server.connection({ host: 'localhost', port: '8080' })

//hapi registers plugins
const plugins = require('./lib/plugins')
const routes = require('./lib/routes')

//server routes
server.register(plugins, (err) => {
    if (err) {
        trace.error(`Error on registering Good plugin ${err.stack || err}`)
    }
})

server.route(routes)

module.exports = server
