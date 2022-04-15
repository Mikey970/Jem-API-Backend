const express = require('express');
const app = express();
const MONGODB_URI = process.env.PORT || 6000;
const bodyParser = require('body-parser');
module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(MONGODB_URI, () => {
  console.log(`listening on port ${MONGODB_URI}`);
})