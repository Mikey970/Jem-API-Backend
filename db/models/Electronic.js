const mongoose = require('mongoose');

mongoose.connect(process.env.PORT || `mongodb://127.0.0.1:27017/jem`, { useNewURLParser: true, useUnifiedTopology: true });

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
}));

module.exports = Electronic;
