import React from "react";

export default function NavBar({ pokemonFilter, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(1010 / 101); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ height: 70, backgroundColor: "black" }}>
      <img
        src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
        style={{ height: 50, marginTop: 8, marginLeft: 8 }}
      />
      <a style={{ color: "white" }}>made by</a>
      <a href="https://github.com/Zzziiro" style={{ color: "cyan" }}>
        Zzziiro
      </a>
      <nav
        style={{
          position: "absolute",
          right: 0,
          marginRight: 20,
          top: 0,
          backgroundColor: "black",
          paddingLeft: 30,
          display: "inline-flex",
        }}
      >
        <h2 style={{ color: "white" }}>Pages:</h2>
        <ul style={{ paddingLeft: 10 }} className="pagination">
          {pageNumbers.map((number) => (
            <li
              style={{ display: "inline-block" }}
              key={number}
              className="page-item"
            >
              <a
                onClick={() => paginate(number)}
                class={"active"}
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
            marginTop: 17,
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
