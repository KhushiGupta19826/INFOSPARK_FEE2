import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <h1 className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            InfoSpark
          </Link>
        </h1>

        {/* Menu Icon (Mobile) */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? "✖" : "☰"}
        </div>

        {/* Nav Links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>

          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>

          

          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
