import React from "react";
import "./navBar.css";

export const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <img src={imgUrl} alt="Img No Disponible" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
