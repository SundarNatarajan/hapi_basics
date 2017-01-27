const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017`)

//load the schemas
const Person = require('./schemas/person')
const Author = require('./schemas/author')
Person.find().exec((err, docs) => {
    if (err)
        trace.error(err)
    trace.log(JSON.stringify(docs))
})


Author.find().exec((err, docs) => {
    if (err)
        trace.error(err)
    trace.log(JSON.stringify(docs))
})