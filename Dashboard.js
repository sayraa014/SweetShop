import React, { useEffect, useState } from "react";
import api from "../services/api";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    api.get("/sweets")
      .then((res) => setSweets(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div>
      <h2>Sweets</h2>
      {sweets.map((s) => (
        <SweetCard key={s.id} sweet={s} />
      ))}
    </div>
  );
}
