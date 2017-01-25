module.exports = [
    {
        method: 'GET',
        path: '/hello',
        config: {
            handler: function (request, reply) {
                reply.file('./public/hello.md');
            },
            description: 'Return the hello.md',
            notes: 'Return hello.md',
            tags: ['publicpages']
        }
    }
]