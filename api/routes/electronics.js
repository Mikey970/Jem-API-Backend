const express = require('express');
const { Electronic } = require('../../db');
const router = express.Router();

// Find All
router.get('/', async (req, res) => {
    try {
        const electronics = await Electronic.find({});
        res.send(electronics);
    } catch(error) {
        console.log(error)
    }
},

// Find one by Id
router.get('/:id', async (req, res) => {
    try {
        const electronicId= req.params.id;
        const electronic = await Electronic.findById({});
        res.send(electronic);
    } catch(error) {
        console.log(error)
    }
},

// Create one 
router.post('/', async (req, res) => {
    try {
        const { Type, Model, Brand, Year, Price, Image } = req.body;
        const newElectronic = {
            "Type": Type,
            "Model": Model,
            "Brand": Brand,
            "Year": Year,
            "Price": Price,
            "Image": Image
        }
    } catch {
        console.log(error)
    }
},

// Update by Id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { Type, Model, Brand, Year, Price, Image } = req.body;
        const newElectronic = {
            "Type": Type,
            "Model": Model,
            "Brand": Brand,
            "Year": Year,
            "Price": Price,
            "Image": Image
        } 
        const updatedElectronic = await Electronic.findByIdAndUpdate(id, newElectronic);
        res.send(updatedElectronics);
    } catch(error) {
        console.log(error)
    }
},

// Delete 
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const deletedElectronic = await Electronic.findByIdAndDelete(id);
        res.send(deleteElectronic);
    } catch(error) {
        console.log(error)
    }
}

module.exports = router;
