import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detailed from "../pages/Detailed";

export default function Router() {
  const [pokeData, setPokeData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setPokeData={setPokeData} />} />;
        <Route path="/details" element={<Detailed pokeData={pokeData} />} />
      </Routes>
    </BrowserRouter>
  );
}
