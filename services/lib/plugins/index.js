//TODO authentication plugin

const Inert = require('inert') //INFO for static page serving
const Vision = require('vision') //Template for hapi-swagger
const HapiSwagger = require('hapi-swagger')
const HapiTracer = require('./hapi-tracer') // INFO customized plugin using tracer

const pckg = global.config.utilities.pckg
const swaggerInfo = {
    info: {
        title: pckg.name,
        version: pckg.version,
        contact: {
                name: pckg.author,
                email: pckg.authorEmail
        }
    },
    tags: [{
        name: 'examples',
        description: 'Example Apis'
    }, {
        name: 'publicpages',
        description: 'Returning the static HTML pagesfrom md'
    }]/*,
    sortTags: 'name',
    sortEndpoints: 'ordered'*/
}

const hapiPlugins = [{
    register: Inert,
    options: {}
}, {
    register: Vision
}, {
    register: HapiSwagger,
    options: swaggerInfo
}]


module.exports = hapiPlugins.concat(HapiTracer)