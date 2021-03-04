import React, { useState } from "react";
import Detalles from "../Detalles/Detalles";
import "./pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [modalShow] = useState(true);

  const details = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card header">
      <div className="pokemon-card">
        <div className="id">{pokemon.id} </div>
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top pokemon-img"
          alt={pokemon.name}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
        </div>
        <div>
          {showDetails ? (
            <div>
              {
                <Detalles
                  pokemon={pokemon}
                  show={modalShow}
                  showDetails={showDetails}
                  setShowDetails={setShowDetails}
                />
              }
            </div>
          ) : (
            <div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => details()}
              >
                Detalles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
