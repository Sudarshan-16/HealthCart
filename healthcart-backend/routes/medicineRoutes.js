const express = require("express");
const {
  searchMedicines,
  getAllMedicines,
  addMedicine,
  updateMedicine,
  deleteMedicine
} = require("../controllers/medicineController");

const router = express.Router();

// /api/medicines/search?name=Paracetamol
router.get("/search", searchMedicines);

// /api/medicines -> Get all
router.get("/", getAllMedicines);

// /api/medicines -> Add new medicine
router.post("/", addMedicine);

// /api/medicines/:id -> Update existing medicine
router.put("/:id", updateMedicine);

// /api/medicines/:id -> Delete medicine
router.delete("/:id", deleteMedicine);

module.exports = router;
