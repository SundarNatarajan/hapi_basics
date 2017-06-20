const onRequest = {
    register: function (server, options, next) {

        server.ext('onRequest', function (request, reply) {
            logger.info(request.method.toLowerCase())
            if (request.method.toLowerCase() == 'options') {
                logger.info(`Returned the options method call with success response`)
                return reply('success')
            } else {
                return reply.continue();
            }
        })
        next()
    }
}

onRequest.register.attributes = {
  name: 'onRequest',
  version: '1.0.0'
}

module.exports = [{ register: onRequest }]