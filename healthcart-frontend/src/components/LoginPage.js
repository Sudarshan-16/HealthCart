import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MedicineList from "./MedicineList";
import AdminPanel from "./AdminPanel";
import { searchMedicines } from "../api";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [role, setRole] = useState("");   // "user" | "admin"
  const [error, setError] = useState("");
  const [medicines, setMedicines] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Hardcoded creds for demo (replace with DB later)
    if (form.username === "admin" && form.password === "admin123") {
      setRole("admin");
      setError("");
    } else if (form.username === "user" && form.password === "user123") {
      setRole("user");
      setError("");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  const handleSearch = async (query) => {
    const { data } = await searchMedicines(query);
    setMedicines(data);
  };

  const handleLogout = () => {
    setRole("");
    setForm({ username: "", password: "" });
  };

  // ✅ Admin view
  if (role === "admin") {
    return (
      <div>
        <h1>⚙️ Admin Portal</h1>
        <AdminPanel />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // ✅ User view
  if (role === "user") {
    return (
      <div className="hea">
       <div className="health"> <h1>💊 HealthCart</h1></div>
        <SearchBar onSearch={handleSearch} />
        <MedicineList medicines={medicines} />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // ✅ Default → Login form
  return (
    <div className="login-box">
      <h2>🔑 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
