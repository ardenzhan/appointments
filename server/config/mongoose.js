const mongoose  = require('mongoose');
      db_name   = "appointments";

mongoose.connect(`mongodb://localhost/${db_name}`);