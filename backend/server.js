require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();

// CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Database
connectDB();

// Middleware
app.use(express.json());

// Serve uploaded files
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});