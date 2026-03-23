const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// ✅ IMPORT YOUR MODEL (THIS WAS MISSING)
const Booking = require("./models/Booking");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

// 🔥 TEST ROUTE
app.get("/api/test", (req, res) => {
  console.log("✅ TEST API HIT");
  res.send("Test working");
});

// Booking API
app.post("/api/bookings", async (req, res) => {
  try {
    console.log("🔥 Booking API HIT");

    console.log("📩 DATA:", req.body);

    const booking = new Booking(req.body);

    console.log("🧪 BEFORE SAVE:", booking);

    const saved = await booking.save();

    console.log("💾 SAVED SUCCESS:", saved);

    res.json({ message: "Booking Successful 💖" });

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ message: "Server error ❌" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});