const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");

// تحميل dotenv فقط في البيئة المحلية
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ debug: true });
}

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/user", require("./routes/user"));
app.use("/enrollments", require("./routes/Enrollment"));
app.use("/quizzes", require("./routes/quizRoutes (2)")); // عدّل الاسم إذا لزم الأمر
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

// تصحيح لـ Socket.io في البيئة المحلية فقط
if (process.env.NODE_ENV !== "production") {
  const http = require("http");
  const socketIo = require("socket.io");
  const server = http.createServer(app);
  const io = socketIo(server, { cors: { origin: "*" } });

  app.set("io", io);

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);