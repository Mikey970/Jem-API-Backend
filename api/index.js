const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 6000;
const bodyParser = require('body-parser');
module.exports = app;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})