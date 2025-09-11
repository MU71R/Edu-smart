// message routes
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message");
const { verifyTokenMiddleware } = require('../middleware/auth');
// Send message
router.post("/", verifyTokenMiddleware, messageController.sendMessage);
router.get("/:conversationId", verifyTokenMiddleware, messageController.getMessagesByConversation);
router.delete("/:id", verifyTokenMiddleware, messageController.deleteMessage);


module.exports = router;
