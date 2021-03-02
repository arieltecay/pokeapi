import React from "react";
import "./pokedex.css";

const Pokedex = (props) => {
  const pokemons = props.pokemon
  console.log(pokemons);
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <div>Paginación</div>
      </div>
      <div>
        <div>
          {pokemons.map((pok) => {
            return (
              <div>{pok.name}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
