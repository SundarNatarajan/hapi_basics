//TODO configure the eslint first
const utilities = {
    Joi: require('joi'),
    _: require('lodash'),
    pckg: require('./package.json')
}

global.config = {
    utilities: utilities
}

trace = require('./log')

const server = require('./server')

const co = require('co')
co(function* () {
    function findYield() { //INFO http://www.datchley.name/es6-promises/
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('textString')
                resolve('textString')
                console.log('After resolve')
            }, 5000)
            // setTimeout(resolve, 5000);
        })
    }
    console.log('Step1')
    yield findYield()
    console.log("Step2")
    server.start((err) => {
        if (err)
            trace.error(err)
        else {
            trace.info(`Server running at ${server.info.uri}`)
        }
    })
}).catch((err) => { console.log(err) })
/*console.log(yield Test.test())
console.log('hi2')*/



