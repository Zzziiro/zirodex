import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import axios from "axios";
import Loading from "../../components/Loading";

export default function Detailed() {
  const { id } = useParams();
  const [pokeDetails, setPokeDetails] = useState({});
  const [front, setFront] = useState(true);
  const [shiny, setShiny] = useState(false);
  const { loading, setLoading } = React.useContext(AuthContext);

  useEffect(() => {
    getPokemonDetails();
  }, []);

  const getPokemonDetails = () => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokeDetails(res.data))
      .finally(() => setLoading(false));
  };

  const typeHandler = () => {
    if (pokeDetails.types[1]) {
      return (
        pokeDetails.types[0].type.name + " & " + pokeDetails.types[1].type.name
      );
    }
    return pokeDetails.types[0].type.name;
  };

  return (
    <>
      <NavBar />
      {pokeDetails.name && !loading ? (
        <>
          <div className="detailed-grid">
            <h1>
              {pokeDetails.name.charAt(0).toUpperCase() +
                pokeDetails.name.slice(1)}
              <a
                style={{
                  color: "#454545",
                  marginLeft: 10,
                  fontSize: 16,
                }}
              >
                - n° {id}
              </a>
            </h1>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={
                  front
                    ? shiny
                      ? pokeDetails.sprites.front_shiny
                      : pokeDetails.sprites.front_default
                    : shiny
                    ? pokeDetails.sprites.back_shiny
                    : pokeDetails.sprites.back_default
                }
                style={{
                  width: 300,
                  height: 300,
                  margin: 16,
                  backgroundColor: "#deddde",
                  border: "solid",
                  borderColor: "#232323",
                }}
              />
              <div>
                <button
                  className="sprite-button"
                  onClick={() => setShiny(!shiny)}
                  style={{
                    cursor: "pointer",
                    margin: 5,
                    marginLeft: 18,
                    border: "solid",
                    borderColor: "#232323",
                    width: 146,
                    height: 30,
                    fontFamily: "PokemonGb",
                    fontSize: 8,
                  }}
                >
                  {"Regular / Shiny"}
                </button>
                <button
                  className="sprite-button"
                  onClick={() => setFront(!front)}
                  style={{
                    cursor: "pointer",
                    margin: 5,
                    border: "solid",
                    borderColor: "#232323",
                    width: 146,
                    height: 30,
                    fontFamily: "PokemonGb",
                    fontSize: 8,
                  }}
                >
                  {"Front / Back"}
                </button>
              </div>
            </div>
            <div>
              <div
                style={{
                  width: 450,
                  margin: 20,
                  backgroundColor: "#deddde",
                  border: "solid",
                  borderColor: "#232323",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a
                  className="stats-title"
                  style={{ textAlign: "center", marginLeft: "5%" }}
                >
                  <h3 style={{ textAlign: "center" }}>Height</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.height * 10}cm
                  </p>
                </a>
                <a>
                  <h3
                    className="stats-title"
                    style={{ textAlign: "center", marginLeft: "5%" }}
                  >
                    Weight
                  </h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.weight / 10}kg
                  </p>
                </a>
                <a
                  className="stats-title"
                  style={{ marginRight: "5%", textAlign: "center" }}
                >
                  <h3 style={{ textAlign: "center" }}>Type(s)</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {typeHandler()}
                  </p>
                </a>
              </div>
              <div
                style={{
                  width: 450,
                  margin: 20,
                  backgroundColor: "#deddde",
                  border: "solid",
                  borderColor: "#232323",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a style={{ marginLeft: "8%" }}>
                  <h3 style={{ textAlign: "center" }}>HP</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[0].base_stat}
                  </p>
                  <h3 style={{ textAlign: "center" }}>Spd</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[3].base_stat}
                  </p>
                </a>
                <a>
                  <h3 style={{ textAlign: "center" }}>Atk</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[1].base_stat}
                  </p>
                  <h3 style={{ textAlign: "center" }}>Sp Atk</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[4].base_stat}
                  </p>
                </a>
                <a style={{ marginRight: "8%" }}>
                  <h3 style={{ textAlign: "center" }}>Def</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[2].base_stat}
                  </p>
                  <h3 style={{ textAlign: "center" }}>Sp Def</h3>
                  <p style={{ textAlign: "center", fontSize: 14 }}>
                    {pokeDetails.stats[5].base_stat}
                  </p>
                </a>
              </div>
              <div
                hidden={!pokeDetails.abilities[0].ability.name}
                style={{
                  width: 450,
                  margin: 20,
                  backgroundColor: "#deddde",
                  border: "solid",
                  borderColor: "#232323",
                }}
              >
                <h3 style={{ paddingLeft: 20 }}>
                  {pokeDetails.abilities.length < 2 ? "Ability" : "Abilities"}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <a style={{ display: "list-item" }}>
                    {pokeDetails.abilities[0].ability.name}
                    {pokeDetails.abilities[0].ability.is_hidden && "(Hidden)"}
                  </a>
                  <a style={{ display: "list-item" }}>
                    {pokeDetails.abilities[1].ability.name &&
                      pokeDetails.abilities[1].ability.name}
                    {pokeDetails.abilities[1].ability.is_hidden && "(Hidden)"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
