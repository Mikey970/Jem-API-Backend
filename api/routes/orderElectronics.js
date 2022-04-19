const { OrderElectronic } = require("../../db");
const express = require("express");
const router = express.Router();

// Find All OrderElectronics
router.get("/", async (req, res) => {
  try {
    const orderElectronics = await OrderElectronic.find({})
    res.send(orderElectronics);
  } catch (error) {
    console.error(error)
  }
})

// Find One OrderElectronics By Electronic ID and Order ID
router.get('/:orderId/:electronicId', async (req, res) => {
  try {
    const { orderId, electronicId } = req.params;
    const orderElectronic = await OrderElectronic.findOne({orderId: orderId, electronicId, electronicId});
    res.send(orderElectronic);
  } catch (error) {
    console.error(error);
  }
  
})

// Create New OrderElectronics
router.post('/', async (req, res)=> {
  try {
    const newOrderElectronic = await OrderElectronic.create(req.body);
    console.log(newOrderElectronic)
    res.json(newOrderElectronic);
  } catch (error) {
    console.error(error);
  }
})

// Update By OrderElectronics By Electronic ID and Order ID
router.put('/:orderId/:electronicId', async (req, res)=> {
  try {
    const { orderId, electronicId } = req.params;
    const updatedOrder =
      await OrderElectronic.findOneAndUpdate({ orderId: orderId, electronicId, electronicId }, req.body);
    res.send(updatedOrder);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;