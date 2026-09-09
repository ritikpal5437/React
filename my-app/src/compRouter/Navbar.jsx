import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;