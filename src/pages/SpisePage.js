import React from "react";
import { NavLink } from "react-router-dom";

export default function SpisePage() {

  return (
    <div>
      <main>
        <h1>Restauranter</h1>
      </main>
      <div className="kategorier">
        <NavLink className="nav-link" to="/Restaurants">
          <button className="kategori-btn">Restauranter</button>
        </NavLink>

        <NavLink className="nav-link" to="/Cafes" >
          <button className="kategori-btn">Cafeer</button>
        </NavLink>
      </div>
    </div>
  )
}
