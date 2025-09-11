const express = require('express');
const router = express.Router();
const quizResultController = require('../controllers/quizResultController');
const { verifyTokenMiddleware } = require('../middleware/auth');
// تسجيل نتيجة كويز
router.post('/', verifyTokenMiddleware, quizResultController.submitQuizResult);

// جلب نتايج كويز معين
router.get('/quiz/:quizId', verifyTokenMiddleware, quizResultController.getQuizResults);

// جلب نتيجة طالب معين لكويز معين
router.get('/quiz/:quizId/student/:studentId', verifyTokenMiddleware, quizResultController.getStudentQuizResult);

module.exports = router;