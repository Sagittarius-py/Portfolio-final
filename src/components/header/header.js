import React from "react";
// style
import "../../styles/header.scss";
// draws for animations
import baloons from "../../images/undraw_Floating_re_xtcj.svg";
import ship from "../../images/undraw_Yacht_re_kkai.svg";
// elements of React Router, for "Lets GO" link
import { useHistory } from "react-router-dom";
// Arrow icon from material-ui
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// function-component, first page
const Header = () => {
  const [style, setStyle] = React.useState({
    clip: {},
    welcome: {},
    baloons: {},
    letsGo: {},
  });

  const history = useHistory();

  const handleClick = () => {
    setStyle({
      clip: {
        width: "200vw",
        overflowX: "hidden",
        transition: "4s",
      },
      welcome: {
        marginLeft: "-80vw",
        transition: "2s",
      },
      baloons: {
        marginTop: "-100vh",
        transition: "2s",
      },
      letsGo: {
        opacity: "0",
        transition: "0.5s",
      },
    });
    setTimeout(() => {
      history.push("/welcome");
    }, 1500);
  };

  return (
    <>
      <header className="header">
        {/* graphic element of left side of page */}
        <div className="clip" style={style.clip}></div>
        {/* main content of page */}
        <div className="header">
          {/* container with greating and  "lets go" button*/}
          <div className="title">
            {/*  left side of page, welcome and lets go */}
            <div id="left">
              <h1 style={style.welcome}>Welcome</h1>
              <br />
              {/* lets go */}
              <div className="letsGo">
                {/* <NavLink exact to="/welcome" className="navlink"> */}
                <a span={null} onClick={handleClick} id="letsGo">
                  <h2 style={style.letsGo}>
                    Lets GO!{" "}
                    <span id="arrow">
                      {/* arrow from material-ui */}
                      <ArrowForwardIcon fontSize="large" />
                    </span>
                  </h2>
                </a>
                {/* </NavLink> */}
              </div>
            </div>
            {/* right side, "Stranger" */}
            <div id="right">
              <h1>Stranger!</h1>
            </div>
          </div>
        </div>
        {/* Drawings for animations */}
        <img
          src={baloons}
          id="baloons"
          alt="Baloons"
          style={style.baloons}
        ></img>
        <img src={ship} id="ship" alt="Ship"></img>
      </header>
    </>
  );
};

export default Header;
