const mongoose = require('mongoose')
const {Schema} = mongoose

const blogPostSchema = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
})

module.exports = mongoose.model('author', blogPostSchema)