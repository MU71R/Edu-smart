const express = require("express");
const { verifyTokenMiddleware } = require("../middleware/auth");
const router = express.Router();
const conversationController = require("../controllers/conversation");

// ✅ إنشاء محادثة جديدة أو جلب الموجودة
router.post("/", verifyTokenMiddleware, conversationController.createConversation);

// ✅ جلب كل المحادثات الخاصة بمستخدم
router.get("/", verifyTokenMiddleware, conversationController.getUserConversations);

// ✅ تحديث آخر رسالة
router.put("/last-message", verifyTokenMiddleware, conversationController.updateLastMessage);

// ✅ حذف محادثة
router.delete("/:id", verifyTokenMiddleware, conversationController.deleteConversation);

module.exports = router;
