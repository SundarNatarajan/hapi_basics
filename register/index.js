const Good = require('good')
const Inert = require('inert') //INFO for static page serving

module.exports = [{
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
},{
    register: Inert,
    options: {}
}]