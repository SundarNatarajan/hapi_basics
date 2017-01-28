const showdown  = require('showdown'),
    converter = new showdown.Converter()

   // converter.makeHtml(text); //TODO directory public pages serving

module.exports = [{
    method: 'GET',
    path: '/public/{param*}',
    config: {
        handler: {
            directory: {
                path: '../public',
                redirectToSlash: true,
                index: true,
                defaultExtension: 'md'
            }
        },
        description: 'Return the hello.md',
        notes: 'Return hello.md',
        tags: ['api', 'publicpages']
    }
}]