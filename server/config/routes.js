const path          = require('path');
      users         = require('../controllers/users.js');
      appointments  = require('../controllers/appointments.js');
      sessions      = require('../controllers/sessions.js');

module.exports = (app) => {
    app.get('/users', users.index);
    app.post('/users', users.create);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.get('/appointments', appointments.index);
    app.post('/appointments', appointments.create);
    app.delete('/appointments/:id', appointments.delete);

    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}