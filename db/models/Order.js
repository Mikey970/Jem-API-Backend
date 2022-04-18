const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });

let Order = mongoose.model("Order", new mongoose.Schema({
  "name": {
    type: String
  },
  "electronics": {
    type: [Object]
  },
  "paid": {
    type: Boolean
  },
  "total": {
    type: Number
  },
  "hash": {
    type: Object
  }
}));

module.exports = Order;