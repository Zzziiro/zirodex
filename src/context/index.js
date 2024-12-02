import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hiddenNav, setHiddenNav] = useState(false);
  const firstPokemon = currentPage + currentPage * 100 - 100;
  const lastPokemon = currentPage + currentPage * 100 + 1;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPokeList = () => {
    setLoading(true);
    var urls = [];
    urls.push(`https://pokeapi.co/api/v2/pokemon?limit=1010&offset=`);
    axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => setPokeList(res))
      .finally(() => setLoading(false));
    console.log(pokeList);
  };

  const getPokemon = () => {
    setLoading(true);
    var urls = [];
    for (var u = firstPokemon; u < lastPokemon; u++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${u}`);
    }
    axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => setPokemon(res))
      .finally(() => setLoading(false));
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        pokemon,
        setPokemon,
        currentPage,
        setCurrentPage,
        hiddenNav,
        setHiddenNav,
        paginate,
        getPokemon,
        getPokeList,
        pokeList,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
