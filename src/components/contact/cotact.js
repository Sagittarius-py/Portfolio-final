import React from "react";
import Navbar from "../navbar/nav";


import "../../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <div className="mainContact">
        <div id="clip"></div>
        <Navbar />
        <div className="content">
          <div className="contactIconontainer">
            <div className="contactIconDiv">
            </div>
            <div className="contactIconDiv"></div>
            <div className="contactIconDiv"></div>
            <div className="contactIconDiv"></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61892f"
            fill-opacity="1"
            d="M0,0L20,5.3C40,11,80,21,120,69.3C160,117,200,203,240,224C280,245,320,203,360,192C400,181,440,203,480,224C520,245,560,267,600,245.3C640,224,680,160,720,144C760,128,800,160,840,192C880,224,920,256,960,245.3C1000,235,1040,181,1080,186.7C1120,192,1160,256,1200,240C1240,224,1280,128,1320,96C1360,64,1400,96,1420,112L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Contact;
