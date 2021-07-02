import React from "react";
import "../../styles/header.scss";
import baloons from "../../images/undraw_Floating_re_xtcj.svg";
import ship from "../../images/undraw_Yacht_re_kkai.svg";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="clip"></div>
        <div className="header">
          <div className="title">
            <div id="left">
              <h1>Welcome</h1>
              <br />
              <div className="letsGo">
                <a href="#" id="letsGo">
                  <h2>
                    Lets GO!{" "}
                    <span id="arrow">
                      <ArrowForwardIcon fontSize="large" />
                    </span>
                  </h2>
                </a>
              </div>
            </div>
            <div id="right">
              <h1>Stranger!</h1>
            </div>
          </div>
        </div>

        <img src={baloons} id="baloons" alt="Baloons"></img>
        <img src={ship} id="ship" alt="Ship"></img>
      </header>
    </>
  );
};

export default Header;
