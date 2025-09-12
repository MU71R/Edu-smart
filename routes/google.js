const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controllers/google');
const { verifyTokenMiddleware } = require('../middleware/auth');
router.post('/google-login', verifyTokenMiddleware, googleLogin);

module.exports = router;
