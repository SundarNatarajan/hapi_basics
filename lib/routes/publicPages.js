module.exports = [{
    method: 'GET',
    path: '/public/{param*}',
    config: {
        handler: {
            directory: {
                path: '../public',
                redirectToSlash: true,
                index: true
            }
        },
        description: 'Return the hello.md',
        notes: 'Return hello.md',
        tags: ['api', 'publicpages']
    }
}]