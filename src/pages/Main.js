import React, { useEffect, useState } from "react";
import "../App.css";
import PokeCard from "../components/PokeCard";
import NavBar from "../components/NavBar";
import axios from "axios";

function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPokemon = currentPage + currentPage * 100 - 100;
  const lastPokemon = currentPage + currentPage * 100 + 1;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    getPokemon();
    setLoading(false);
  }, [firstPokemon]);

  const getPokemon = () => {
    var urls = [];
    setLoading(true);
    for (var u = firstPokemon; u < lastPokemon; u++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${u}`);
    }
    var response = axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => setPokemon(res));
    setLoading(false);
  };

  const pokemonFilter = (name) => {
    setLoading(true);
    var filteredPokemon = [];
    if (name === "") {
      getPokemon();
    }
    for (var i in pokemon) {
      if (
        pokemon[i].data.name.includes(name) ||
        pokemon[i].data.id.toString().includes(name)
      ) {
        filteredPokemon.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemon);
    setLoading(false);
  };

  return (
    <>
      <NavBar paginate={paginate} pokemonFilter={pokemonFilter} />
      {loading ? (
        <div></div>
      ) : (
        <div className="Main">
          {pokemon.map((poke) => (
            <>
              <PokeCard
                types={poke.data.types}
                sprite={poke.data.sprites.front_default}
                name={poke.data.name}
                id={poke.data.id}
              />
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default Main;
