//TODO configure the eslint first
const utilities = {
    Joi: require('joi'),
    _: require('lodash'),
    pckg: require('./package.json')
}

global.config = {
    utilities: utilities
}

trace = require('./log')

const server = require('./server')

const mongodb = require('./mongodb')


server.start((err) => {
    if (err)
        console.log(err)
    else {
        trace.info(`Server running at ${server.info.uri}`)
    }
})