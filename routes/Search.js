const express = require('express');
const router = express.Router();
const {searchAll} = require('../controllers/search'); 
const { verifyTokenMiddleware } = require('../middleware/auth');
router.get('/', verifyTokenMiddleware, searchAll); 
module.exports = router;
