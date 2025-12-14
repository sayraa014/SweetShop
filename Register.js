import React, { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post("/auth/register", {
        username,
        password,
      });
      alert("Registered successfully");
      window.location.href = "/";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={register}>Register</button>
    </div>
  );
}
