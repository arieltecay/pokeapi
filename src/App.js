import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Pokedex from "./components/Pokedex/Pokedex";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPokemons } from "./api";
function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemon(data.results);
      // console.log(data);
    } catch (error) {}
  };
  // console.log("Los Pokemones Son:", pokemon);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <SearchBar />
        <Pokedex pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
