const Medicine = require("../models/Medicine");

// 🔍 Search by name
const searchMedicines = async (req, res) => {
  try {
    const name = req.query.name || "";
    const medicines = await Medicine.find({
      name: { $regex: name, $options: "i" },
    });
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Error searching medicines", error });
  }
};

// 📋 Get all medicines
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicines", error });
  }
};

// ➕ Add new medicine
const addMedicine = async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json(medicine);
  } catch (error) {
    res.status(400).json({ message: "Error adding medicine", error });
  }
};

// ✏️ Update existing medicine
const updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Medicine.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating medicine", error });
  }
};

// ❌ Delete medicine
const deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Medicine.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json({ message: "Medicine deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting medicine", error });
  }
};

module.exports = {
  searchMedicines,
  getAllMedicines,
  addMedicine,
  updateMedicine,
  deleteMedicine,
};
