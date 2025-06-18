"use client"; // necesario para usar hooks en App Router

import { useEffect, useState } from "react";
import "./page.css"; // si usas CSS modular, o edita globals.css si prefieres
import Searcher from "./components/searcher";

export default function HomePage() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/api/spotifyr")
      .then(res => res.json())
      .then(data => setMensaje(data.access_token));
  }, []);

  return (
    <main>
      <h1 className="saludo">{mensaje}</h1>
      <Searcher />
    </main>
  );
}