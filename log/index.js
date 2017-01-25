const colors = require('colors')
const fs = require('fs')

const logOptions = {
    level: ['log', 'trace', 'debug', 'info', 'warn', 'error'],
    format: [
        "{{timestamp}} <{{title}}> {{message}} (in {{path}}:{{line}})",
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
            var stream = fs.createWriteStream("./log-output/stream.log", {
                flags: "a",
                encoding: "utf8",
                mode: 0666
            }).write(data.output+"\n");
        },
        function(data) {
            console.log(data.output);
        }
    ]
}
module.exports = require('tracer').colorConsole(logOptions)