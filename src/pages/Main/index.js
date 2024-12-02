import React, { useEffect } from "react";
import PokeCard from "../../components/PokeCard";
import NavBar from "../../components/NavBar";
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
    getPokeList,
  } = React.useContext(AuthContext);
  const firstPokemon = currentPage + currentPage * 100 - 100;

  useEffect(() => {
    getPokemon();
    getPokeList();
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
        <Loading key="loading" />
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
          <div className="SubPagination">
            <button
              style={{ width: 55, height: 40, fontSize: 20 }}
              onClick={() =>
                currentPage !== 1 ? paginate(currentPage - 1) : paginate(10)
              }
              className="sprite-button"
            >
              {"<"}
            </button>
            <button
              style={{ width: 55, height: 40, fontSize: 20 }}
              onClick={() =>
                currentPage !== 10 ? paginate(currentPage + 1) : paginate(1)
              }
              className="sprite-button"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
