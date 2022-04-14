const mongoose = require('mongoose');
const electronics = require('./db/data/electronicsData.json');
const { Electronic } = require('./db');

Electronic.deleteMany({})
.then(res => Electronic.create(electronics))
.then(electronics => {
    console.log('seeded electronics');
    process.exit();
})

