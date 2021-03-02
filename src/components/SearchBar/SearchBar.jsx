import React, { useState } from "react";
import { searchPokemon } from "../../api";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  console.log(pokemon);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <button onClick={() => onClick()}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
