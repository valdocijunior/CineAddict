import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Popcorn from "../../assets/popcorn.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CineAddict</h1>
      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          Populares <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Mais bem avaliados
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Próximos lançamentos{" "}
          <img src={Popcorn} alt="popcorn emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
