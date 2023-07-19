import React, { useEffect, useState } from "react";
import "../App.css";
import PokeCard from "../components/PokeCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";

function Main() {
  const [pokemon, setPokemon] = useState([]);
  // const {pokeNumber, setPokeNumber} =useState(0)
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    var urls = [];
    for (var u = 1; u < 100; u++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${u}`);
    }
    var response = axios
      .all(urls.map((url) => axios.get(url)))
      .then((res: any) => setPokemon(res));
    return response;
  };

  console.log(pokemon);
  return (
    <div className="Main">
      <Container maxWidth={false}>
        <Grid container>
          {pokemon.map((poke: any) => (
            <Grid
              alignContent={"space-between"}
              style={{ marginTop: 10, marginBottom: 10 }}
              item
              xs={2}
            >
              <PokeCard
                type={poke.data.types[0].type.name}
                // type2={poke?.data?.types[1]?.type?.name}
                sprite={poke.data.sprites.front_default}
                name={poke.data.name}
                id={poke.data.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
