// in built functions TODO load the mongoose in one place and access it
// TODO how about having all the Schema, mongoose defined in a class and inherit for for different models
const mongoose = require('../conn')
const {Schema, ObjectId, model} = mongoose
 
const blogPostSchema = new Schema({
    author    : String,
    title     : String,
    body      : String,
    date      : Date
});


//define the mongoose model based on the defined Schema
//module.exports = mongoose.model('blogpost', blogPostSchema)

const BlogPost = model('comment', blogPostSchema)