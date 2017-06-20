'use strict'

const Path = require('path')
const Hapi = require('hapi')


//hapi registers plugins
const plugins = require('../lib/plugins')
const routes = require('../lib/routes')

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'lib', 'public')
            }
        }
    }
})

// server connection details
server.connection({ host: 'localhost', port: process.env.PORT || '8080' })

//server routes
server.register(plugins, (err) => {
    if (err) {
        logger.error(`Error on registering Good plugin ${err.stack || err}`)
    }

    logger.log(`running env is ${process.env.NODE_ENV}`)
})

server.route(routes)

module.exports = server