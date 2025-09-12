const express = require('express');
const router = express.Router();
const {createOrder,captureOrder} = require('../controllers/Payment');
const { verifyTokenMiddleware } = require('../middleware/auth');
router.post('/create-order',verifyTokenMiddleware,createOrder);
router.get('/capture-order',verifyTokenMiddleware,captureOrder);
module.exports = router;
