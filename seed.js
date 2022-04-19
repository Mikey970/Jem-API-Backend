const mongoose = require('mongoose');
const electronics = require('./db/data/electronicsData.json');
const { Electronic, Order, OrderElectronic } = require('./db');
const orders = require('./db/data/ordersData.json');
const orderElectronic = require('./db/data/orderElectronicsData.json')



Electronic.deleteMany({})
.then(res => Electronic.create(electronics))
.then(electronics => {
    console.log('seeded electronics');
    process.exit();
})

Order.deleteMany({})
  .then(res => Order.create(orders))
  .then(orders =>{
    console.log('seeded orders');
  })

  OrderElectronic.deleteMany({})
  .then(res => OrderElectronic.create(orderElectronic))
  .then(orderElectronic =>{
    console.log('seeded order-electronics');
})


