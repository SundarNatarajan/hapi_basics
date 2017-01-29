//TODO load all the js files in this folder
const {concat} = global.config.utilities._

const publicPages = require('./publicPages')
const examples = require('./examples')

module.exports = concat(publicPages, examples)
