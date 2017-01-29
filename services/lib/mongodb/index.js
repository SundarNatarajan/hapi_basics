const mongoose = require('mongoose')

class MongoDb{
    constructor(conn){
        this.mongoose.connect(conn) //'mongodb://localhost:27017'
    }

    static connectedMongoose(){
        return this.mongoose
    }
}

module.exports = MongoDb



//load the schemas
/*const Person = require('./schemas/person')
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
})*/

