const mongoose = require("mongoose");

mongoose.connect(process.env.PORT || `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });

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
  }
}));

module.exports = Order;