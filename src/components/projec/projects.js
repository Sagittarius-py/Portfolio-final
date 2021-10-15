import React from "react";
import Navbar from "../navbar/nav";

import "../../styles/projects.scss";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="mainProjects">
        {" "}
        <div id="clip"> </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61892f"
            fill-opacity="1"
            d="M0,64L40,101.3C80,139,160,213,240,224C320,235,400,181,480,181.3C560,181,640,235,720,218.7C800,203,880,117,960,90.7C1040,64,1120,96,1200,112C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Projects;
