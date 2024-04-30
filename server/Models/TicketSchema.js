const mongoose = require('mongoose');
const validator = require('validator');

const TicketSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  id_passager: { type: mongoose.Schema.Types.ObjectId, ref: 'voyager', required: true },
  flight_id: { type: mongoose.Schema.Types.ObjectId, ref: 'flight', required: true },
  numTicket: { type: String, required: true,max:10 },
  type: { type: String, required: true },
  classe: { type: String, enum: ['economique', 'affaire', 'première'], required: true },
  prix: { type: Number, required: true },
  destination: { type: String, required: true },
  promotion: { type: String, }
  
  // : { type: mongoose.Schema.Types.ObjectId, ref: '', required: true },

},   {timestamps:true}
);

module.exports = mongoose.model('ticket', TicketSchema);
