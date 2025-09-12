const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const { verifyTokenMiddleware } = require('../middleware/auth');

router.post('/', verifyTokenMiddleware, quizController.createQuiz);           // إنشاء كويز جديد
router.get('/', verifyTokenMiddleware, quizController.getAllQuizzes);         // جلب كل الكويزات
router.get('/:id', verifyTokenMiddleware, quizController.getQuizById);        // جلب كويز واحد
router.put('/:id', verifyTokenMiddleware, quizController.updateQuiz);         // تحديث كويز
router.delete('/:id', verifyTokenMiddleware, quizController.deleteQuiz);      // حذف كويز
router.get('/course/:courseId', verifyTokenMiddleware, quizController.getQuizzesByCourse); // جلب كل الكويزات لكورس معين

module.exports = router;
