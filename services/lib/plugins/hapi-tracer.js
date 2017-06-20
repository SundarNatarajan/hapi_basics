const hapiTracer = {
  register: function (server, options, next) {

    server.on('response', function (request) {
      logger.info(`From ${request.info.remoteAddress}: ${request.method.toUpperCase()} -- ${request.connection.info.uri}${request.url.path} -- ${request.response.statusCode} in (${Date.now() - request.info.received}ms)`
      )
      /* logger.info('Request payload:', request.payload);
       logger.info('Response payload:', request.response.source);
       //TODO these logs too needed*/
    });

    next()
  }
}

hapiTracer.register.attributes = {
  name: 'hapi-tracer',
  version: '1.0.0'
}


//error handling for failed requests
const fileNotFound = {
  register: function (server, options, next) {
    server.ext('onPostHandler', function (request, reply) {

      const response = request.response;
      //console.log(`isBoom: ${response.isBoom}, statusCode :${response.output.statusCode}`)
      if (response.isBoom && response.output &&
        response.output.statusCode === 404) {
          console.log(`fadgfasghdfah`)
        return reply.file('404.html').code(404);
      }
      return reply.continue();
    });
    next()
  }
}

fileNotFound.register.attributes = {
  name: 'file-not-found',
  version: '1.0.0'
}

module.exports = [{ register: hapiTracer },{ register: fileNotFound }]