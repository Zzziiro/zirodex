import React from "react";
import NavBar from "../components/NavBar";

export default function Detailed({ pokeData }) {
  console.log(pokeData);
  return (
    <>
      <NavBar />
      <div>Detailed</div>
    </>
  );
}
