const api = require('../api/examples.js')
const schemas = require('../schemas/examples')

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: { //INFO config part is for swagger
            handler: api.helloWorld,
            description: 'Get Hello World',
            notes: 'returns Hello world!',
            tags: ['examples','api'] //INFO tag will be useful for filtering the endpoints -- /documentation?tags=api
        },
    }, {
        method: 'GET',
        path: '/{number}',
        config: { //INFO config part is for swagger
            handler: api.replyParam,
            description: 'Get Hello World with the param returned',
            notes: 'return Hello params.arg[1]!',
            tags: ['examples','api'], //INFO tag will be useful for filtering the endpoints -- /documentation?tags=api
            validate: schemas.replyParam //INFO schema validation can be done by using Joi
        }
    }
]