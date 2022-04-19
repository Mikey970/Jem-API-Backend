const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI|| `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });
let OrderElectronic = mongoose.model("OrderElectronic", new mongoose.Schema({
  "electronicId": {
    type: mongoose.Schema.Types.ObjectId
  },
  "orderId": {
    type: mongoose.Schema.Types.ObjectId
  },
  "quantity": {
    type: Number
  }
}));
module.exports = OrderElectronic;








