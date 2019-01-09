const express = require('express');
const router = express.Router();

router.use('/fearsome', require('./fearsome'));
router.use('/stripes', require('./stripes'));
router.use('/quiteTall', require('./quiteTall'));

module.exports = router;