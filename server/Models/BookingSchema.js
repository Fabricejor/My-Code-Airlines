const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  flight_id: { type: mongoose.Schema.Types.ObjectId, ref: 'flight', required: true },
  num_ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'ticket', required: true },
  id_voyager: { type: mongoose.Schema.Types.ObjectId, ref: 'voyager', required: true },
},{timestamps:true}
);

module.exports = mongoose.model('booking', bookingSchema);
