import React, { useState } from "react";
import { searchMedicines } from "../api";
import Filters from "./Filters";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({ price: "", distance: "" });

  const handleSearch = async () => {
    try {
      const res = await searchMedicines(query);
      setResults(res.data); // store data in state
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  // Apply filters on results
  const filteredResults = results
    .filter((med) => {
      // Affordable medicines under ₹200
      if (filters.price === "affordable") {
        return med.price <= 200;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.price === "low-high") return a.price - b.price;
      if (filters.price === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="abc">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search medicine..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Results BELOW search bar */}
      <ul className="medicine-list">
        {filteredResults.map((med) => (
          <li key={med._id}>
            <strong>{med.name}</strong> <br />
            ₹{med.price}
            <br />
            <small>
              Pharmacy: {med.pharmacy?.name || "N/A"} <br />
              Address: {med.pharmacy?.address || "N/A"} <br />
              Hours: {med.pharmacy?.hours || "N/A"} <br />
              Availability: {med.available ? "In Stock ✅" : "Out of Stock ❌"}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
