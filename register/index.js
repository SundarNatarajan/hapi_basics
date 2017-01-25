const Good = require('good')
const Inert = require('inert') //INFO for static page serving
const Vision = require('vision') //Template for hapi-swagger
const HapiSwagger = require('hapi-swagger')

const pckg = global.config.utilities.pckg

module.exports = [
    {
        register: Good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    },
    {
        register: Inert,
        options: {}
    }, {
        register: Vision
    }, {
        register: HapiSwagger,
        options: {
            info: {
                title: pckg.name,
                version: pckg.version
            }
        }
    }]