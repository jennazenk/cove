/* jshint node:true */

'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));
router.use('/locations', require('./locations'));
router.use('/orders', require('./orders'));
router.use('/orderitems', require('./orderItems'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
