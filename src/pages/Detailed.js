import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detailed() {
  const { id } = useParams();
  const [pokeDetails, setPokeDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(id);
  useEffect(() => {
    getPokemonDetails();
  }, []);

  const getPokemonDetails = () => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokeDetails(res.data));
    setLoading(false);
  };

  console.log(pokeDetails);

  return (
    <>
      <NavBar />
      {loading ? (
        <></>
      ) : (
        <>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <h1>
              {pokeDetails.name.charAt(0).toUpperCase() +
                pokeDetails.name.slice(1)}
            </h1> */}
          </div>
          <div style={{ display: "inline-grid" }}>
            <img
              // src={pokeDetails.sprites.front_default}
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
                style={{
                  margin: 5,
                  marginLeft: 19,
                  borderRadius: 10,
                  border: "solid",
                  borderColor: "#232323",
                  width: 220,
                  height: 30,
                }}
              >
                {"<"}
              </button>
              <button
                style={{
                  margin: 5,
                  borderRadius: 10,
                  border: "solid",
                  borderColor: "#232323",
                  width: 220,
                  height: 30,
                }}
              >
                {">"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
