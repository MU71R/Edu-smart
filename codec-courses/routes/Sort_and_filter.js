const express = require('express');
const router = express.Router();
const { sort_and_filter } = require('../controllers/Sort_and_filters');
const { verifyTokenMiddleware } = require('../middleware/auth');
router.get('/', verifyTokenMiddleware, sort_and_filter);

module.exports = router;