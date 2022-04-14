const express = require('express');
const router = express.Router();

router.use('/orders', require('./orders'));
router.use('/electronics', require('./electronics'));

module.exports = router;