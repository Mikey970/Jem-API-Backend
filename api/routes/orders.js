const { Order } = require("../../db");
const express = require("express");
const router = express.Router();

// Find All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({})
    res.send(orders);
  } catch (error) {
    console.error(error)
  }
})

// Find One Order
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id);
    res.send(order);
  } catch (error) {
    console.error(error);
  }
  
})

// Create New Order
router.post('/', async (req, res)=> {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
  } catch (error) {
    console.error(error);
  }
  
})

// Update By Order By ID
router.put('/:id', async (req, res)=> {
  try {
    let id = req.params.id;
    let updatedOrder = await Order.findByIdAndUpdate(id, req.body);
    res.send(updatedOrder);
  } catch (error) {
    console.error(error);
  }
})

// Delete By Order By ID
router.delete('/:id', async (req, res)=> {
  try {
    let id = req.params.id;
    let deletedOrder = await Order.findByIdAndDelete(id);
    res.send(deletedOrder);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;