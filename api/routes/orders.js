let Order = require("../../db")
const express = require("express")
const router = express.Router()
//import router


//create
router.post('/', (request, response)=> {
 
  Order
    .create(request.body)
    .then(data=> response.json(data)) 
})

//find by id
router.get('/:id', (request, response) => {
  let orderId = request.params.id;
  Order
    .findById(orderId)
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
