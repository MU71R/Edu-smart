const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIo = require("socket.io");
const http = require("http");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.set("io", io);

// Socket.io events
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Routes
app.use("/user", require("./routes/User"));
app.use("/enrollments", require("./routes/Enrollment"));
app.use("/quizzes", require("./routes/quizRoutes (2)"));
app.use("/quizResults", require("./routes/quizResultRoutes"));
app.use("/certificates", require("./routes/certificate"));
app.use("/payments", require("./routes/Payment"));
app.use("/coupons", require("./routes/coupon"));
app.use("/chatbot", require("./routes/chatbot"));
app.use("/google", require("./routes/google"));
app.use("/lessons", require("./routes/lesson"));
app.use("/courses", require("./routes/courseRoutes"));
app.use("/conversations", require("./routes/conversation"));
app.use("/messages", require("./routes/message"));
app.use("/search", require("./routes/Search"));
app.use("/ratings", require("./routes/Rating"));
app.use("/sort_or_filter", require("./routes/Sort_and_filter"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/admin", require("./routes/admin"));

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);

// Local run
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
