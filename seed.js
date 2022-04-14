const mongoose = require('mongoose');
const electronics = require('./db/data/electronicsData.json');
const orders = require('./db/data/ordersData.json');
const { Electronic, Order } = require('./db');

Electronic.deleteMany({})
.then(res => Electronic.create(electronics))
.then(electronics => {
    console.log('seeded electronics');
    process.exit();
})

Order.deleteMany({})
.then(res => Order.create(orders))
.then(orders => {
    console.log('seeded orders');
})