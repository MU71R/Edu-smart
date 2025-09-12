const express = require('express');
const router = express.Router();
const { verifyTokenMiddleware , isAdmin } = require('../middleware/auth');
const adminController = require('../controllers/admin');
// Get pending instructors
router.get("/pending-instructors", verifyTokenMiddleware, isAdmin, adminController.getPendingInstructors);

// Approve / Reject instructor
router.post("/instructors/approve/:id", verifyTokenMiddleware, isAdmin, adminController.approveInstructor);
router.post("/instructors/reject/:id", verifyTokenMiddleware, isAdmin, adminController.rejectInstructor);

// Get pending courses
router.get("/pending-courses", verifyTokenMiddleware, isAdmin, adminController.getPendingCourses);

// Approve / Reject course
router.post("/courses/approve/:id", verifyTokenMiddleware, isAdmin, adminController.approveCourse);
router.post("/courses/reject/:id", verifyTokenMiddleware, isAdmin, adminController.rejectCourse);

// Add user
router.post("/add-user", verifyTokenMiddleware, isAdmin, adminController.addUser);
// Get all users
router.get("/users", verifyTokenMiddleware, isAdmin, adminController.getAllUsers);
// Get user details
router.get("/users/:id", verifyTokenMiddleware, isAdmin, adminController.userDetails);
// Search users
router.get("/search-users", verifyTokenMiddleware, isAdmin, adminController.searchUsers);
// Delete user
router.delete("/users/:id", verifyTokenMiddleware, isAdmin, adminController.deleteUser);
// Get all courses
router.get("/courses", verifyTokenMiddleware, isAdmin, adminController.getAllCourses);
// Delete course
router.delete("/courses/:id", verifyTokenMiddleware, isAdmin, adminController.deleteCourse);
module.exports = router;
