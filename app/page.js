"use client"; // necesario para usar hooks en App Router

import { useEffect, useState } from "react";
import "./page.css"; // si usas CSS modular, o edita globals.css si prefieres
import Searcher from "./components/searcher";

export default function HomePage() {

  return (
    <main>
      
      <Searcher />
    </main>
  );
}