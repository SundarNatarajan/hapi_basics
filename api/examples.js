//TODO usage of classes with constructor
class Examples {
    static helloWorld(request, reply){
        reply(`Hello World!`)
    }

    static replyParam(request, reply){
        reply(`Hello ${encodeURIComponent(request.params.name)}!`)//INFO use encodeURIComponent for request params
    }
}

module.exports = Examples