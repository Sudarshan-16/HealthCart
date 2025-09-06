import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [medicine, setMedicine] = useState({ name: "", price: "", stock: "" });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const addMedicine = async () => {
    try {
      await axios.post("http://localhost:5000/api/admin/medicines", medicine);
      alert("Medicine added successfully ✅");
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Portal</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="stock" placeholder="Stock" onChange={handleChange} />
      <button onClick={addMedicine}>Add Medicine</button>
    </div>
  );
}

export default AdminPanel;
