const mongoose = require('mongoose');
const { Schema } = mongoose;

const Expense = new Schema({
    price: Number,
    description: String,
    date: Date,
    userId: String,
    category: String
});

module.exports = mongoose.model('Expense', Expense);