import React from "react";

const MedicineList = ({ medicines }) => {
  return (
    <div>
      <h2>Available Medicines</h2>
      {medicines.length === 0 ? (
        <p>Paracetamol,

Ibuprofen,

Amoxicillin,

Cetirizine,

Azithromycin<br/>

Metformin,

Atorvastatin,

Losartan,

Aspirin,

Vitamin D3<br/>

Calcium Tablets,

Cough Syrup,
Insulin,

Multivitamins,

Omeprazole<br/>

Pantoprazole,

Levothyroxine,

Hydroxychloroquine,

Iron Tablets,

Zinc Supplements</p>
      ) : (
        <ul className="medicine-list">
          {medicines.map((med) => (
            <li key={med._id}>
              <strong>{med.name}</strong> - ₹{med.price}
              <br />
              <span>Stock: {med.stock > 0 ? `${med.stock} available ✅` : "Out of stock ❌"}</span>
              <br />
              <small>
                Pharmacy: {med.pharmacy_id?.name || "N/A"} <br />
                Address: {med.pharmacy_id?.address || "N/A"} <br />
                Hours: {med.pharmacy_id?.hours || "N/A"} <br />
                Availability: {med.available ? "In Stock ✅" : "Out of Stock ❌"}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicineList;
