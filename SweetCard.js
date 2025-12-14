import React from "react";
import api from "../services/api";

export default function SweetCard({ sweet }) {
  const buy = async () => {
    await api.post(`/sweets/${sweet.id}/purchase`);
    alert("Purchased!");
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h4>{sweet.name}</h4>
      <p>₹{sweet.price}</p>
      <p>Available: {sweet.quantity}</p>
      <button disabled={sweet.quantity === 0} onClick={buy}>
        Buy
      </button>
    </div>
  );
}
