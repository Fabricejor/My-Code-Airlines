const mongoose = require('mongoose');
const validator = require('validator');

// schema du user ( structure de la table si c t du SQL)
const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true , max:100 ,  
          validate:{validator: validator.isEmail,message: '{VALUE} is not a valid email',isAsync: false}
          },
  tel: { type:String, required: true},
  mdp: { type: String, required: true },
  numPassport: { type: String, required: true },
  age:{type:Number, required: true ,default:18},
  role:{type:Number, default:0},
  userData:{type:Date,required:true, default: Date.now() }
},
{timestamps:true}
);

module.exports = mongoose.model('user', userSchema);
