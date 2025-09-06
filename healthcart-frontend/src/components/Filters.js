// src/components/Filters.js
import React from "react";

function Filters({ filters, setFilters }) {
  return (
    <div className="filters">
      <h3>Filter Medicines</h3>

      {/* Price Filter */}
      <label>
        Price:
        <select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="">Default</option>
          <option value="low-high">Lowest to Highest</option>
          <option value="high-low">Highest to Lowest</option>
          <option value="affordable">Affordable Range (₹0 - ₹200)</option>
        </select>
      </label>

      {/* Distance Filter */}
      <label>
        Distance:
        <select
          value={filters.distance}
          onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
        >
          <option value="">Any</option>
          <option value="nearest">Nearest Pharmacies</option>
          <option value="within-5km">Within 5km</option>
          <option value="within-10km">Within 10km</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;
