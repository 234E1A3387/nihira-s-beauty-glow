const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.send("Booking route working");
});

// ✅ MAIN BOOKING API (IMPORTANT)
router.post("/", async (req, res) => {
  try {

    console.log("Data received:", req.body); // debug

    const booking = new Booking(req.body);
    await booking.save();

    res.json({ message: "Booking Successful 💖" });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: "Server error ❌" });
  }
});

module.exports = router;