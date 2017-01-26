// TODO have to load the mongoose each and every time, cant share it
const mongoose = require('mongoose')
const {Schema} = mongoose

const personSchema = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('person', personSchema)