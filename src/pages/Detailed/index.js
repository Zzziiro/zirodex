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

  console.log(pokeDetails);
  return (
    <>
      <NavBar />
      {pokeDetails.name && !loading ? (
        <>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>
              {pokeDetails.name.charAt(0).toUpperCase() +
                pokeDetails.name.slice(1)}
            </h1>
          </div>
          <div style={{ display: "inline-flex" }}>
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
                  width: 450,
                  height: 450,
                  margin: 16,
                  backgroundColor: "#deddde",
                  borderRadius: 10,
                  border: "solid",
                  borderColor: "#232323",
                }}
              />
              <div>
                <button
                  onClick={() => setShiny(!shiny)}
                  style={{
                    cursor: "pointer",
                    margin: 5,
                    marginLeft: 19,
                    borderRadius: 10,
                    border: "solid",
                    borderColor: "#232323",
                    width: 220,
                    height: 30,
                  }}
                >
                  {"Regular / Shiny"}
                </button>
                <button
                  onClick={() => setFront(!front)}
                  style={{
                    cursor: "pointer",
                    margin: 5,
                    borderRadius: 10,
                    border: "solid",
                    borderColor: "#232323",
                    width: 220,
                    height: 30,
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
                  margin: 16,
                  backgroundColor: "#deddde",
                  borderRadius: 10,
                  border: "solid",
                  borderColor: "#232323",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a style={{ marginLeft: "10%" }}>
                  <h2>Height</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.height * 10} cm
                  </p>
                </a>
                <a>
                  <h2>Weight</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.weight / 10} kg
                  </p>
                </a>
                <a style={{ marginRight: "10%", textAlign: "center" }}>
                  <h2>Type(s)</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {typeHandler()}
                  </p>
                </a>
              </div>
              <div
                style={{
                  width: 450,
                  margin: 16,
                  backgroundColor: "#deddde",
                  borderRadius: 10,
                  border: "solid",
                  borderColor: "#232323",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a style={{ marginLeft: "15%" }}>
                  <h2 style={{ textAlign: "center" }}>HP</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[0].base_stat}
                  </p>
                  <h2 style={{ textAlign: "center" }}>Spd</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[3].base_stat}
                  </p>
                </a>
                <a>
                  <h2 style={{ textAlign: "center" }}>Atk</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[1].base_stat}
                  </p>
                  <h2 style={{ textAlign: "center" }}>Sp Atk</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[4].base_stat}
                  </p>
                </a>
                <a style={{ marginRight: "15%" }}>
                  <h2 style={{ textAlign: "center" }}>Def</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[2].base_stat}
                  </p>
                  <h2 style={{ textAlign: "center" }}>Sp Def</h2>
                  <p style={{ textAlign: "center", fontSize: 20 }}>
                    {pokeDetails.stats[5].base_stat}
                  </p>
                </a>
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
