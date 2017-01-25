const api = require('../api/examples.js')

//module functions
const {number} = global.config.utilities.Joi

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: { //INFO config part is for swagger
            handler: api.helloWorld,
            description: 'Get Hello World',
            notes: 'returns Hello world!',
            tags: ['api'], //INFO tag will be useful for filtering the endpoints -- /documentation?tags=api
            validate: { //INFO schema validation can be done by using Joi
                params: {
                    id: number()
                        .required()
                        .description('the id for the todo item'),
                }
            }
        },
    }, {
        method: 'GET',
        path: '/{number}',
        config: { //INFO config part is for swagger
            handler: api.replyParam,
            description: 'Get Hello World with the param returned',
            notes: 'return Hello params.arg[1]!',
            tags: ['api'], //INFO tag will be useful for filtering the endpoints -- /documentation?tags=api
            validate: { //INFO schema validation can be done by using Joi
                params: {
                    number: number()
                        .required()
                        .description('the number for the todo item'),
                }
            }
        }
    }
]