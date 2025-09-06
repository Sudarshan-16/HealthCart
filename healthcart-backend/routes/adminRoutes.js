const express = require("express");
const Medicine = require("../models/Medicine");
const router = express.Router();

// Add new medicine
router.post("/medicines", async (req, res) => {
  try {
    const med = new Medicine(req.body);
    await med.save(); // ✅ Save into MongoDB
    res.json(med);
  } catch (error) {
    res.status(500).json({ message: "Error adding medicine", error });
  }
});

// Update medicine
router.put("/medicines/:id", async (req, res) => {
  try {
    const updated = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating medicine", error });
  }
});

// Delete medicine
router.delete("/medicines/:id", async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: "Medicine deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting medicine", error });
  }
});

module.exports = router;
