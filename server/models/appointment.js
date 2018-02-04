var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'Date is required'], 
            validate: [dateValidator, 'Date must be in future']
        },
        shortDate: {
            type: String
        },
        time: {
            type: String,
            required: [true, 'Time is required'],
            validate: [timeValidator, 'Time should be between 8a and 5p']
        },
        complaint: {
            type: String,
            required: [true, 'Complaint is required'],
            minlength: [10, 'Complaints should be at least 10 characters'],
            maxlength: 200
        },
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);

function dateValidator(date) {
    return (date >= Date.now());
}

function timeValidator(time) {
    return (time >= "08:00" && time <= "17:00");
}