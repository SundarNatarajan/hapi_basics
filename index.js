const server = require('./server')

server.start((err) => {
    if (err)
        console.log(err)
    else {
        console.log(`Server running at ${server.info.uri}`)
    }
})