import React from "react";
import { logout } from "../utils/auth";

export default function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <span style={{ marginRight: "20px" }}>🍬 Sweet Shop</span>

      <button
        onClick={() => {
          logout();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}
