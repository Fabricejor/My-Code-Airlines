const mongoose = require('mongoose');
const validator = require('validator');

const NewsletterSchema = new mongoose.Schema({

    email: { type: String, required: true , max:100 ,  
        validate:{validator: validator.isEmail,message: '{VALUE} is not a valid email',isAsync: false}
        },
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);
