const express = require('express');
const morgan = require('morgan');
const mongoose = requiere('mongoose');
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);
mongoose.connect('')
    .then(db => console.log('Database connected'))
    .catch(err => console.error(err));

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Static Files
app.use(express.static(__dirname + "/public"));

//routes
app.use('/tasks',require('./routes/tasks'));

//Server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});