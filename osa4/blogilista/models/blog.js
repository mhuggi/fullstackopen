const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: {
    type : String,
    required : true
  },
  author: String,
  url: {
    type : String,
    required : true
  },
  user: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)