const winston = require('winston')
require('winston-mongodb').MongoDB

const {merge} = require('lodash')


const defaultOptions = {
    db: 'mongodb://localhost:27017', //TODO mongo Connections
    storeHost:true,
    label: 'testLabel',
    capped:true,
    cappedMax:10000,
    tryReconnect : true, 
    decolorize: true
}

loggingOptions: [{
    level : 'info',
    collection: 'log_info',
    name: 'info_level',   
},{
    level : 'debug',
    collection: 'log_debug',
    name: 'debug_level',   
}]

const Logger ={}

loggingOptions.forEach(loggingOptions, (opt)=>{
    Logger[opt.level] = merge({},defaultOptions, opt)
})

var logger = new(winston.Logger)({
    transports : [
        new(winston.transports.MongoDB)({
            db : 'logs',
            host : '123456.mongolab.com',
            username : 'username',
            password : 'password'
        })
    ]
});



winston.add(winston.transports.MongoDB, options)