import React from "react";

// navlink from react-router
import { NavLink } from "react-router-dom";

//style
import "../../styles/navbar.scss";


//navbar separated 
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/">
          <button href="">Home</button>
        </NavLink>
        <NavLink exact to="/welcome">
          <button>About</button>
        </NavLink>
        <NavLink exact to="/cokolwiek">
          <button>Contact</button>
        </NavLink>
        <NavLink exact to="/ktokolwiek">
          <button>Projects</button>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
