let {Order} = require("../../db")
const express = require("express")
const router = express.Router()
//import router


//create
router.post('/', (request, response)=> {
  console.log(Order)
  console.log("hello world")
  try {
    Order
    .create(request.body)
    .then(data=> response.json(data)) 
  } catch (error) {
    console.error(error)
  }
  
})

//find by id
router.get('/:id', (request, response) => {
  let orderId = request.params.id;
  Order
    .findById(orderId)
    .then(data=> response.json(data))
})

router.get("/", (request, response) => {
  console.log(Order, "order")
  Order
    .find({})
  .then(data=> response.json(data))
})
//update order by id
router.put('/:id', (request, response)=> {
  let itemId = request.params.id
  let newItemData = request.body

  Order
    .findByIdAndUpdate(itemId, newItemData, { new: true })
    .then(updatedItem=> response.json(updatedItem))
})

module.exports = router;