const express = require("express");
const router = express.Router();
const { createEnrollment, getMyEnrollments, updateProgress,completeLesson } = require("../controllers/Enrollment");
const { verifyTokenMiddleware } = require("../middleware/auth");
// Create enrollment (اشترك في كورس)
router.post("/", verifyTokenMiddleware, createEnrollment);

// Get all my enrollments
router.get("/", verifyTokenMiddleware, getMyEnrollments);

// Update my progress in a course
router.put("/progress", verifyTokenMiddleware, updateProgress);

router.put("/complete-lesson", verifyTokenMiddleware, completeLesson);

module.exports = router;