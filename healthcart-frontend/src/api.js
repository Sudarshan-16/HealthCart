import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Medicines API
export const searchMedicines = (name) =>
  API.get(`/medicines/search?name=${name}`);

export const addMedicine = (medicine) =>
  API.post("/admin/medicines", medicine);

export const updateMedicine = (id, medicine) =>
  API.put(`/admin/medicines/${id}`, medicine);

export const deleteMedicine = (id) =>
  API.delete(`/admin/medicines/${id}`);
