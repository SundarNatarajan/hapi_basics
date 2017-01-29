//TODO usage of classes with constructor
class Examples {
    static helloWorld(request, reply) {
        reply('Hello World!')
    }

    static replyParam(request, reply) {
        reply(`Hello ${encodeURIComponent(request.params.number)}!`)//INFO use encodeURIComponent for request params
    }
}

module.exports = Examples