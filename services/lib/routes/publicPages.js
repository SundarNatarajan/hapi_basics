const Path = require('path')
const fs = require('fs')
const Boom = require('boom')
const showdown = require('showdown'),
    converter = new showdown.Converter()
const publicPagesPath = Path.join(__dirname, '../','public')

// converter.makeHtml(text); //TODO directory public pages serving

module.exports = [/*{
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
}*/
    {
        method: 'GET',
        path: '/public/{param*}',
        config: {
            handler: (request, reply) => {
                const path = request.params.param;
                const mdContent = Path.join(publicPagesPath,path )
                fs.readFile(`${mdContent}.md`, (err, text)=>{
                    if(!err)
                        return reply(converter.makeHtml(text.toString()))
                    else    
                        return Boom.notFound()
                })
            },
            description: 'Serves the public pages',
            notes: 'Serves the public pages using showdown to convert the md to html',
            tags: ['publicpages','api']
            // TODO response schemas
            // define for 200 and concat with other status code on server.preStart
        }
    }]