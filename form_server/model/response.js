const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  answers: {
    type: [String],
    required: true,
  }
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;