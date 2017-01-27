module.exports = [
    {
        method: 'GET',
        path: '/hello',
        config: {
            handler: function (request, reply) {
                reply.file('./public/hello.md')
                // reply.send({name: 'Sundar'})
            },
            description: 'Return the hello.md',
            notes: 'Return hello.md',
            tags: ['api','publicpages']
        }
    }
]