import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPokemon = currentPage + currentPage * 100 - 100;
  const lastPokemon = currentPage + currentPage * 100 + 1;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        paginate,
        getPokemon,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
