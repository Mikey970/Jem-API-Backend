const express = require('express');
const router = express.Router();

router.use('/orders', require('./orders'));
router.use('/electronics', require('./electronics'));
router.use('/orderElectronics', require('./orderElectronics'));

module.exports = router;