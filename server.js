'use strict'

const Hapi = require('hapi')

const serverRegisters = require('./register')


const server = new Hapi.Server()

server.connection({ host: 'localhost', port: '8080' })

server.register(serverRegisters, (err) => {
    if (err) {
        console.log(`Error on registering Good plugin ${err.stack || err}`)
    } else {

    }
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply.file('./public/hello.md');
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!'); //INFO use encodeURIComponent for request params
    }
});

server.start((err) => {
    if (err)
        console.log(err)
    else {
        console.log(`Server running at ${server.info.uri}`)
    }
})