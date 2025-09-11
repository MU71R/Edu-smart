const express = require('express');
const router = express.Router();
const { verifyTokenMiddleware , isAdmin } = require('../middleware/auth');
const { stats, recentActivities, getAllNotifications, markNotificationsRead,deleteNotification,clearAllNotifications,getPendingInstructors,approveInstructor,addNotification,pushNotification } = require('../controllers/dashboard');

router.get('/stats', verifyTokenMiddleware, isAdmin, stats);
router.get('/recent-activities', verifyTokenMiddleware, isAdmin, recentActivities);
router.get('/notifications', verifyTokenMiddleware, isAdmin, getAllNotifications);
router.post('/notifications/read', verifyTokenMiddleware, isAdmin, markNotificationsRead);
router.delete('/notifications/delete/:id', verifyTokenMiddleware, isAdmin, deleteNotification);
router.delete('/notifications/clear', verifyTokenMiddleware, isAdmin, clearAllNotifications);
router.get('/instructors/pending', verifyTokenMiddleware, isAdmin, getPendingInstructors);
router.post('/instructors/approve/:id', verifyTokenMiddleware, isAdmin, approveInstructor);
router.post('/notifications/add', verifyTokenMiddleware, isAdmin, addNotification);
router.post('/notifications/push', verifyTokenMiddleware, isAdmin, pushNotification);
module.exports = router;