const mongoose = require('mongoose');
const validator = require('validator');

const voyagerSchema = new mongoose.Schema({

  nom: { type: String, required: true },
  numPassport: { type: String, required: true, unique: true },
  numeroSiege: { type: String, required: true },
  age: { type: Number, required: true },
  dateNaissance: { type: Date, required: true },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  flight_id: { type: mongoose.Schema.Types.ObjectId, ref: 'flight', required: true },
  // ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
});

module.exports = mongoose.model('voyager', voyagerSchema);
