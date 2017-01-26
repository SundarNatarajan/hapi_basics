const mongoose = require('../conn')
const {Schema, ObjectId, model} = mongoose

const commentSchema = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

// INFO a setter 
commentSchema.path('name').set(function (v) {
  return capitalize(v);
});
 
// INFO middleware 
commentSchema.pre('save', function (next) {
  notify(this.get('email'));
  next();
});

module.exports = model('comment', commentSchema)