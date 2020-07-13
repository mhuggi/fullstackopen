const mongoose = require('mongoose')
<<<<<<< HEAD
=======
mongoose.set('useFindAndModify', false)

>>>>>>> 71b432fcd43455ffdee2ea6c9ad8c3b80e148ef6

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

<<<<<<< HEAD
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

=======
  const noteSchema = new mongoose.Schema({
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    date: { 
      type: Date,
      required: true
    },
    important: Boolean
  })
  
>>>>>>> 71b432fcd43455ffdee2ea6c9ad8c3b80e148ef6
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
