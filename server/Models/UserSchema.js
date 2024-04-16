const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  Nom: { type: String, required: true },
  Email: { type: String, required: true },
  mdp: { type: String, required: true },
  Num_passport: { type: String, required: true }
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
