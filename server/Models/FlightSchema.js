//structure de l'entité vols
const mongoose = require('mongoose');
const validator = require('validator');

const flightSchema = new mongoose.Schema({
  compagnie: { type: String, required: true , max:100 },
  airport_start: { type: String, required: true },
  airport_end: { type: String, required: true },
  date_depart: { type: Date, required: true },
  date_arrivee: { type: Date, required: true },
  distance: { type: Number, required: true },
  place: {type:Number ,required:true},
  dure:{type:Number , required :true}
},{timestamps:true}
);

module.exports = mongoose.model('flight', flightSchema);
