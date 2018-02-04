var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Title is required'], 
            minlength: [4, 'Minimum name length is 4']
        },
        appointments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);