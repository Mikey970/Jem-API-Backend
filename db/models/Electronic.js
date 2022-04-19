const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI|| `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });

let Electronic = mongoose.model("Electronic", new mongoose.Schema({
  "Type": {
    type: String
  },
  "Model": {
    type: String
  },
  "Brand": { 
    type: String 
  },
  "Year": { 
    type: String
  },
  "Price": { 
    type: Number 
  },
  "Image": { 
    type: String 
  },
  "Quantity": {
    type: String,
    default: 1
  }
}));

module.exports = Electronic;
