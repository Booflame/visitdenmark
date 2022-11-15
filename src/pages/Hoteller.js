import React from "react";
import { NavLink } from "react-router-dom";

export default function Hoteller() {
  return (
    <div>
      <main>
        <h1>Hoteller</h1>
      </main>
      <div className="kategorier">
        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Hoteller</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className="kategori-btn">Moteller</button>
        </NavLink>
      </div>
    </div>
  );
}
