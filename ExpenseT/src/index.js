const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb+srv://juan123:Ch5uUG52FW6Bfrby@cluster0.ye50n.mongodb.net/ExpenseTracker?retryWrites=true&w=majority')
    .then(db => console.log('Database connected'))
    .catch(err => console.error(err));

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Static Files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + "/public/"));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//routes
app.use('/tasks',require('./routes/tasks'));

//Server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});