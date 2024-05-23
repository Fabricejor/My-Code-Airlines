const mongoose = require('mongoose');
const validator = require('validator');

const voyagerSchema = new mongoose.Schema({

  nom: { type: String, required: true },
  numPassport: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('voyager', voyagerSchema);
