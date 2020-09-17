const mongoose = require('mongoose');
const { Schema } = mongoose;

const Expense = new Schema({
    price: Number,
    description: String,
    date: Date
});

module.exports = mongoose.model('Expense', Expense);