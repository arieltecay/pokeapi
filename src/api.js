export const searchPokemon = async (pok) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pok}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("No existe:", error);
  }
};
export const getPokemons = async (limit = 5, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLanguage = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/language/{es}/");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
