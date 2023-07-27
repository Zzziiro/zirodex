import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NavBar({ pokemonFilter, paginate }) {
  const pageNumbers = [];
  const navigate = useNavigate();
  const { id } = useParams();

  for (let i = 1; i <= Math.ceil(1010 / 101); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ height: 70, backgroundColor: "black" }}>
      {/* <img
        src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
        style={{ height: 50, marginTop: 8, marginLeft: 8, cursor: "pointer" }}
        onClick={() => navigate("/")}
      /> */}
      <h1
        style={{
          color: "white",
          marginTop: 0,
          paddingTop: 25,
          fontSize: 30,
          marginLeft: 15,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <a>P</a>
        <a style={{ color: "red" }}>o</a>
        <a>kédex</a>
        {/* Pokédex */}
        <a style={{ color: "white", fontSize: 10 }}> made by </a>
        <a
          href="https://github.com/Zzziiro"
          style={{ color: "red", fontSize: 10 }}
        >
          Zzziiro
        </a>
      </h1>
      {id === undefined && (
        <nav className="Nav">
          <h3 style={{ color: "white", marginTop: 28, fontSize: 12 }}>
            Pages:
          </h3>
          <ul style={{ paddingLeft: 10, marginTop: 16 }} className="pagination">
            {pageNumbers.map((number) => (
              <li
                style={{ display: "inline-block" }}
                key={number}
                className="page-item"
              >
                <a
                  onClick={() => paginate(number)}
                  style={{ fontSize: 10, paddingTop: 6, paddingBottom: 6 }}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
          <input
            style={{
              marginRight: 0,
              marginLeft: 20,
              marginTop: 18,
              height: 25,
              width: 200,
              // borderRadius: 6,
              paddingLeft: 10,
              fontFamily: "PokemonGb",
              fontSize: 8,
            }}
            placeholder="search by name or id"
            onInput={(e) => pokemonFilter(e.target.value)}
          />
        </nav>
      )}
    </div>
  );
}
