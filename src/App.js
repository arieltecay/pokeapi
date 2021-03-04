import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Pokedex from "./components/Pokedex/Pokedex";
import { getPokemons, getPokemonData } from "./api";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(5, 5 * page);
      const promises = data.results.map(async (pok) => {
        return await getPokemonData(pok.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Pokedex
            pokemons={pokemon}
            page={page}
            setPage={setPage}
            total={total}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
