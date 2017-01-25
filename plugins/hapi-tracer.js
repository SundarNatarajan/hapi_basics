const hapiTracer = {
  register: function (server, options, next) {

    server.on('response', function (request) {
      trace.info(`From ${request.info.remoteAddress}: ${request.method.toUpperCase()} -- ${request.connection.info.uri}${request.url.path} -- ${request.response.statusCode} in (${Date.now() - request.info.received}ms)`
      )
     /* trace.info('Request payload:', request.payload);
      trace.info('Response payload:', request.response.source);
      //TODO these logs too needed*/
    });

    next()
  }
}

hapiTracer.register.attributes = {
  name: 'hapi-tracer',
  version: '1.0.0'
}

module.exports = hapiTracer 