import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon/Pokemon";
import "./pokedex.css";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nexPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="contenedor">
      <div className="header">
        <h1>Pokedex</h1>
        <div>
          <Pagination
            page={page + 1}
            totalPages={total}
            leftClick={lastPage}
            rightClick={nexPage}
          />
        </div>
      </div>
      <div>
        <div className="full-card">
          {loading ? (
            <div>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="pokedex-grid">
              {pokemons.map((pok, id) => {
                return <Pokemon pokemon={pok} key={pok.name} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
