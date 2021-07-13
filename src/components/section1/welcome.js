import React from "react";
import Navbar from "../navbar/nav";

import "../../styles/welcome.scss";

const Welcome = () => {
  return (
    <>
      <section id="section1">
        {/* Div odpowiadający tylko za tprzycięte tło */}
        <div id="clip"></div>
        {/* Poniżej fale w dolnej części w svg */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61892f"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* dołączenie navbaru poza sekcją żeby był niezależny 
      od wewnętrznych stylów */}
      <Navbar />
    </>
  );
};

export default Welcome;
