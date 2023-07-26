import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { AuthContext } from "../../context";
import Loading from "../../components/Loading";

function Main() {
  const {
    pokemon,
    setPokemon,
    paginate,
    currentPage,
    getPokemon,
    loading,
    setLoading,
  } = React.useContext(AuthContext);
  const firstPokemon = currentPage + currentPage * 100 - 100;

  useEffect(() => {
    getPokemon();
  }, [firstPokemon]);

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
        <Loading />
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
