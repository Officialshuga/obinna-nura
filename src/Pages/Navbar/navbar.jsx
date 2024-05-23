// import "./Pages/Navbar/navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";
import "./navbar.css";
import { navItems } from "../data";
import Dropdown from "../dropdown/dropdown";
import * as Icons from "react-icons/im";



function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="This is the Logo"/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Projects") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="responsive-menu">
          <Icons.ImMenu  />
        </div>
      </nav>
    </>
  );
}

export default Navbar;




