const express = require('express');
const router = express.Router();
const { verifyTokenMiddleware } = require('../middleware/auth');
const courseController = require('../controllers/courseController'); // استيراد متحكم الكورسات
const upload = require("../controllers/cloudinary");

// تعريف مسارات الكورسات
router.post('/create', verifyTokenMiddleware, upload.single("coverImage"), courseController.createCourse);  
router.get('/get-package/:id', courseController.getPackageById); 
router.get('/get-all-packages', verifyTokenMiddleware, courseController.getallpackages);              // GET /api/courses -> لجلب كل الكورسات
router.get('/all', verifyTokenMiddleware, courseController.getAllCourses);                         // GET /api/courses -> لجلب كل الكورسات
router.get('/get/:id', verifyTokenMiddleware, courseController.getCourseById);          // GET /api/courses/:id -> لجلب كورس واحد بالـ ID
router.get('/my-courses', verifyTokenMiddleware, courseController.getMyCourses); // GET /api/courses/my-courses -> لجلب كورسات المدرب
router.put('/update/:id', verifyTokenMiddleware, courseController.updateCourse);           // PUT /api/courses/:id -> لتحديث كورس بالـ ID
router.delete('/delete/:id', verifyTokenMiddleware, courseController.deleteCourse);        // DELETE /api/courses/:id -> لحذف كورس بالـ ID
router.post('/fix-course-prices', verifyTokenMiddleware, courseController.fixCoursePrices); // تحديث أسعار الكورسات الفردية

module.exports = router; 