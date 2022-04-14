const express = require('express');
const { Electronic } = require('../../db');
const router = express.Router();

// Find All Electronics
router.get('/', async (req, res) => {
    try {
        const electronics = await Electronic.find({});
        res.send(electronics);
    } catch(error) {
        console.error(error)
    }
})

// Find One Order
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const electronic = await Electronic.findById(id);
        res.send(electronic);
    } catch(error) {
        console.error(error)
    }
})

// Create New Electronic
router.post('/', async (req, res) => {
    try {
        const newElectronic = await Electronic.create(req.body);
        res.send(newElectronic);
    } catch {
        console.error(error)
    }
})

// Update By Electronic By ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedElectronic = await Electronic.findByIdAndUpdate(id, req.body);
        res.send(updatedElectronic);
    } catch(error) {
        console.error(error)
    }
})

// Delete Electronic
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const deletedElectronic = await Electronic.findByIdAndDelete(id);
        res.send(deletedElectronic);
    } catch(error) {
        console.error(error)
    }
})

module.exports = router;
