module.exports = [
    {
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/hello.md');
        }
    }
]