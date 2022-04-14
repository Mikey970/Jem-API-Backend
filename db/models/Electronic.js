const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });

let Electronic = mongoose.model("Electronic", new mongoose.Schema({
  "type": {
    type: String
  },
  "model": {
    type: String
  },
  "brand": { 
    type: String 
  },
  "year": { 
    type: Number 
  },
  "price": { 
    type: Number 
  },
  "image": { 
    type: String 
  },
}));

module.exports = Electronic;
