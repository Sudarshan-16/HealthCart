// src/components/AdminLogin.js
import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Hardcoded username/password (you can later connect to backend)
    if (form.username === "admin" && form.password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password ❌");
    }
  };

  if (isLoggedIn) {
    return <AdminPanel />; // Show portal after login
  }

  return (
    <div className="admin-login">
      <h2>🔑 Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AdminLogin;
