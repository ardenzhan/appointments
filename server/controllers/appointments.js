var session     = require('express-session');
    Appointment = require('../models/appointment');

module.exports = {
    index: (req, res) => {
        Appointment.find({})
        .sort('date')
        .populate('_user')
        .exec((err, appointments) => {
            if (err) { return res.status(400).json(err); }
            return res.json(appointments);
        });
    },

    create: (req, res) => {
        const appointment = new Appointment(req.body);
        console.log(req.body);
        appointment.time = req.body.datetime.slice(-5);
        appointment.date = req.body.datetime
        

        compareDate = req.body.datetime.slice(0,10);
        console.log(compareDate);
        appointment.shortDate = compareDate;

        appointment._user = session.user_id;

        Appointment.find({shortDate: compareDate})
        .exec( function (err,appointments) {
            var count = appointments.length;
            console.log(count);

            if (count >= 3) {
                return res.json(appointments);
            }
            appointment.save( (err) => {
                if (err) { return res.status(400).json(err); }
                return res.json(appointment);
            });

        })


        
    },

    delete: (req, res) => {
        Appointment.remove({_id: req.params.id})
        .exec((err, appointment) => {
            if (err) { return res.status(400).json(err); }
            return res.json(appointment);
        });
    }
};
