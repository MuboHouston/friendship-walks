const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const registrationSchema = new Schema({
    prefix: {
        type: String,
        required: false,
        enum: ['Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Mx.']
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    contact: {
        type: Number,
        required: false,
        // validate: {
        //     validator: function(v) {
        //         return /d{10}/.test(v)
        //     },
        //     message: '{VALUE} is not a valid 10 digit number!'
        // }
    }, 
    company: {
        type: String,
        required: false
    },
    walkShirt: {
        type: Boolean,
        default: false
    },
    shirt: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['XS for children', 'XS for adults', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
        required: function() {
            return this.walkShirt || this.shirt === true
        }
    },
    address: {
        type: String,
        required: function() {
            return this.walkShirt || this.shirt === true
        }
        //regex for address
    },
    referral: {
        type: String,
        enum: ['newsletter', 'friend/family', 'congregation', 'employer', 'social media', 'search', 'radio', 'publication', 'caseworker', 'homeless services'],
        required: false
    }
});

const Registration = model('Registration', registrationSchema);

module.exports = Registration;