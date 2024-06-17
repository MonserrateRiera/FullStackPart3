const mongoose = require('mongoose'); 

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number, it must be 9 digits long.`,
    },
    required: true,
  },
});

//Esborram valors que te a sa bbdd.
entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Entry', entrySchema)