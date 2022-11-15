import "../css/navigation.css";
import { NavLink } from "react-router-dom";
import homeicon from "./homeicon1.png";
import atraktionericon from "./atraktionericon1.png";
import hotelicon from "./hotelicon1.png";
import restauranticon from "./restauranticon1.png";
import gemteicon from "./gemteicon1.png";

export default function Navigation() {
  return (
    <nav className="primary-nav">
      <ul>
        <li>
          <NavLink className="home" to="/">
            <img className="homeicon" src={homeicon} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Atraktioner">
            <img className="atraktionericon" src={atraktionericon} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Hoteller">
            <img className="hotellericon" src={hotelicon} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Spise">
            <img className="restaurantericon" src={restauranticon} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gemte">
            <img className="gemteicon" src={gemteicon} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
