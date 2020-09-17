const express = require('express');
const router = express.Router();

const Expense = require('../models/Expense');

router.get('/', async (req, res) =>{
    const expenses = await Expense.find();
    res.json(expenses);
});

router.post('/', async (req, res) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.json({
        status: 'Expense Saved'
    });
});

router.put('/:id', async (req, res) => {
    await Expense.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Expense Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Expense.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Expense Deleted'
    });
});

module.exports = router;