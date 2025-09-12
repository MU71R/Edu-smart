const express = require('express');
const router = express.Router();
const { createRating, createOrUpdateRating } = require('../controllers/rating');
const { verifyTokenMiddleware } = require('../middleware/auth');
router.post('/create', verifyTokenMiddleware, createRating);
router.post('/update', verifyTokenMiddleware, createOrUpdateRating);

module.exports = router;