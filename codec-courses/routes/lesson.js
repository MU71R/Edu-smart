const express = require('express');
const router = express.Router();
const {createLesson,getAllLessons,getLessonsByCourse,getLessonById,updateLesson,deleteLesson} = require('../controllers/lessonController');
const { verifyTokenMiddleware } = require('../middleware/auth');
// إنشاء درس جديد
router.post('/', verifyTokenMiddleware, createLesson);

// جلب كل الدروس
router.get('/', verifyTokenMiddleware, getAllLessons);

// جلب كل دروس كورس معين
router.get('/course/:courseId', verifyTokenMiddleware, getLessonsByCourse);
    
// جلب درس واحد بالـ ID
router.get('/:id', verifyTokenMiddleware, getLessonById);

// تحديث درس بالـ ID
router.put('/:id', verifyTokenMiddleware, updateLesson);

// حذف درس بالـ ID
router.delete('/:id', verifyTokenMiddleware, deleteLesson);

module.exports = router;
