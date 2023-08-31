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
