//TODO configure the eslint first
const utilities = {
    Joi: require('joi'),
    _: require('lodash'),
    pckg: require('./package.json')
}

global.config = {
    utilities: utilities
}

logger = require('./log')

const server = require('./lib')

server.start((err) => {
    if (err)
        logger.error(err)
    else {
        logger.info(`Server running at ${server.info.uri}`)
    }
})

// TODO is needed for testing ??
module.exports = server