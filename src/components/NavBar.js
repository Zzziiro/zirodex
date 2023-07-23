import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ pokemonFilter, paginate, hideSearch }) {
  const pageNumbers = [];
  const navigate = useNavigate();

  for (let i = 1; i <= Math.ceil(1010 / 101); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ height: 70, backgroundColor: "black" }}>
      <img
        src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
        style={{ height: 50, marginTop: 8, marginLeft: 8, cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <a style={{ color: "white" }}>made by </a>
      <a href="https://github.com/Zzziiro" style={{ color: "cyan" }}>
        Zzziiro
      </a>
      <nav hidden={hideSearch} className="Nav">
        <h3 style={{ color: "white", marginTop: 22 }}>Pages:</h3>
        <ul style={{ paddingLeft: 10 }} className="pagination">
          {pageNumbers.map((number) => (
            <li
              style={{ display: "inline-block" }}
              key={number}
              className="page-item"
            >
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
        <input
          style={{
            marginRight: 0,
            marginLeft: 20,
            marginTop: 16,
            height: 30,
            width: 300,
            borderRadius: 6,
            paddingLeft: 10,
          }}
          placeholder="Search by name"
          onInput={(e) => pokemonFilter(e.target.value)}
        />
      </nav>
    </div>
  );
}
