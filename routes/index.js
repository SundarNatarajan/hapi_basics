const _ = require('lodash')

const {merge, concat} = global.config.utilities._

const publicPages = require('./publicPages')
const examples = require('./examples')

// console.log(JSON.stringify(concat(publicPages, examples))) TODO merge the arrays as an another arrays

module.exports = concat(publicPages, examples)
