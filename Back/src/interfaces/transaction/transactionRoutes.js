const express = require('express');
const router = express.Router();
const service = require('../../application/transaction/transactionService');

router.post('/', async (req, res) => {
    try {
        const result = await service.CreateTransaction(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});
router.put('/update/:id', async (req, res) => {
    try {
        const result = await service.updateTransaction(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const result = await service.getAllTransaction();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const result = await service.deleteTransaction(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;