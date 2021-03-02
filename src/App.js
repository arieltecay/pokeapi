import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Pokedex from "./components/Pokedex/Pokedex";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <SearchBar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
