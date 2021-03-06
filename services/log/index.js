//TODO clear the existing file and then log, what if file line count goes wrong
//TODO transport MongoDb, Redis
const mongo = require('mongoskin');
const colors = require('colors')
const fs = require('fs')

const db = mongo.db('mongodb://localhost:27017/log'); //TODO MongoDB Connections

const logCollections = { //TODO from config
    log: "loginfo",
    trace: "logtrace",
    debug: "logdebug",
    info: "loginfo",
    warn: "logwarn",
    error: "logerror"
}

const logOptions = {
    level: ['log', 'trace', 'debug', 'info', 'warn', 'error'],
    format: [
        "{{timestamp}} <{{title}}> {{message}} (in {{path}}:{{line}})",
        { info: "{{timestamp}} <{{title}}> {{message}}" },
        { error: "{{timestamp}} <{{title}}> {{message}} (in {{path}:{{line}}) \nCall Stack:\n{{stack}}" }
    ],
    filters: {
        //log : colors.black, 
        trace: colors.magenta,
        debug: colors.blue,
        info: colors.green,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    },
    dateformat: "dd-mm-yyyy HH:MM:ss.L",
    transport: [
        function (data) {
            const stream = fs.createWriteStream(`./log-output/${logCollections[data.title] || 'logcollections'}.log`, {
                flags: "a",
                encoding: "utf8",
                mode: 0666
            }).write(data.output + "\n");
        },
        function (data) {
            console.log(data.output)
        },
        function (data) {
            db.collection(logCollections[data.title] || 'logcollections').insert(data, function (err, log) {
                if (err) {
                    console.error(err);
                }
            })
        }
    ]
}
module.exports = require('tracer').colorConsole(logOptions)