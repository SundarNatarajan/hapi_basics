const api = require('../api/examples.js')
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: api.helloWorld
    }, {
        method: 'GET',
        path: '/{name}',
        handler: api.replyParam
    }
]