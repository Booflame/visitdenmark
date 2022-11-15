import React from "react";
import { NavLink } from "react-router-dom";

export default function Atraktioner() {
  return (
    <div>
      <main>
        <h1>Atraktioner</h1>
      </main>
      <div className="kategorier">
        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Musik</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Ude i det fri</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Museumer</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Kunst</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Underholdning</button>
        </NavLink>
      </div>
    </div>
  );
}
