import React from "react";

// navlink from react-router
import { NavLink } from "react-router-dom";

//style
import "../../styles/navbar.scss";

//navbar separated
const Navbar = () => {
  const [style, setStyle] = React.useState({
    clip: {
      width: "100vw",
      height: "120vh",
      position: "absolute",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)",
      backgroundColor: "#222629",
      top: "0",
      left: "0",
      zIndex: "20",
    },
  });

  const handleLoad = () => {
    setTimeout(() => {
      setStyle({
        clip: {
          width: "100vw",
          height: "0vh",
          position: "absolute",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)",
          backgroundColor: "#222629",
          top: "-20vh",
          left: "0",
          zIndex: "20",
          transition: "4s",
        },
      });
    }, 1);
  };

  window.onload = handleLoad();

  return (
    <>
      <div id="clip" style={style.clip}></div>

      <nav className="navbar">
        <NavLink exact to="/">
          <button href="">Home</button>
        </NavLink>
        <NavLink exact to="/welcome">
          <button>About</button>
        </NavLink>
        <NavLink to="/contact">
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
