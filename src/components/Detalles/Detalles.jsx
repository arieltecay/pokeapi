import React from "react";
import { Modal } from "react-bootstrap";
import "./detalles.css";

const Detalles = (props) => {
  const { pokemon, show, showDetails, setShowDetails } = props;

  const closeDetails = () => {
    setShowDetails(!showDetails);
  };
  console.log(pokemon.forms[0].name);
  return (
    show && (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="title">
            <Modal.Header>{pokemon.name}</Modal.Header>
          </div>
          <div>
            <img src={pokemon.sprites.back_default} alt="" />
            <img src={pokemon.sprites.back_shiny} alt="" />
            <img src={pokemon.sprites.front_shiny} alt="" />
            <img src={pokemon.sprites.front_default} alt="" />
          </div>

          <div>Detalles</div>
          <div>Peso:{pokemon.weight} kg</div>
          <div>
            Habilidades
            {/* <div>Tipo:{pokemon.abilities[0].ability.name}</div> */}
            <div>
              {pokemon.abilities.map((abiliti, id) => {
                return (
                  <div>
                    <div key={id}>{abiliti.ability.name}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="power">Poderes:</div>
          <div className="pokemons">
            {pokemon.types.map((type, id) => {
              return (
                <div>
                  <div key={id}>{type.type.name}</div>
                </div>
              );
            })}
          </div>
          <div className="button-close">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => closeDetails()}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    )
  );
};

export default Detalles;
