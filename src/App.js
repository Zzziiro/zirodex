import React from "react";
import "./App.css";
import PokeCard from "./components/PokeCard.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <PokeCard />
        </p>
      </header>
    </div>
  );
}

export default App;
