"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  useEffect(() => {
    if (activo) {
      const reloj = setInterval(() => setTiempo((t) => t+1), 1000);
      return () => clearInterval(reloj);
    }
  }, [activo]);
  function submit() {
    if (!username || !fullname || !age) {
      alert("hay que llenar todos los campos");
    }
    if (isNaN(Number(age)) || Number(age) <= 0) {
      alert("la edad mayor a 0");
    }
    alert(JSON.stringify({ username, fullname, age }));
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
      <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="fullname" onChange={(e) => setFullname(e.target.value)} />
      <input placeholder="age" onChange={(e) => setAge(e.target.value)} />
      <button style={{ border: "1px solid black", padding: "4px 12px" }} onClick={submit}>submit</button>
      <input type="number" min={0} max={100} placeholder="porcentaje" onChange={(e) => setPorcentaje(e.target.value)} />
      <progress value={Number(porcentaje)} max={100} />
      <h2>timer</h2>
      <p>{Math.floor(tiempo/60)} mins {tiempo%60} secs</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={{ background: "green" }} onClick={() => setActivo(true)}>start</button>
        <button style={{ background: "red" }} onClick={() => setActivo(false)}>stop</button>
        <button style={{ background: "yellow" }} onClick={() => { setActivo(false); setTiempo(0); }}>reset</button>
      </div>
    </div>
  );
}
