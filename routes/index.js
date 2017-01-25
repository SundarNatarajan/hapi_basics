//TODO load all the js files in this folder
const _ = require('lodash')

const {merge, concat} = global.config.utilities._

const publicPages = require('./publicPages')
const examples = require('./examples')

module.exports = concat(publicPages, examples)
