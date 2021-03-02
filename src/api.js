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
