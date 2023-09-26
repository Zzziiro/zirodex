import * as React from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ name, sprite, id, types }) => {
  const upperName = name.charAt(0).toUpperCase() + name.slice(1);
  const navigate = useNavigate();

  const typeHandler = (types) => {
    if (types[1]) {
      return types[0].type.name + " & " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <div
      content="width=device-width, initial-scale=1.0"
      className="PokeCard"
      onClick={() => navigate(`/details/${id}`)}
    >
      <img
        style={{
          height: 170,
          maxWidth: 170,
          minWidth: 170,
          backgroundColor: "#deddde",
          marginLeft: 15,
          marginBottom: 5,
        }}
        src={sprite}
      />
      <h4
        className="CardTitle"
        style={{
          top: 0,
          marginLeft: 10,
          marginTop: 0,
          marginBottom: 5,
        }}
      >
        {upperName}
      </h4>
      <a
        style={{
          color: "#454545",
          marginLeft: 10,
          fontSize: 10,
        }}
      >
        n° {id}
      </a>
      <body
        style={{
          backgroundColor: "#deddde",
          marginLeft: 10,
          marginTop: 5,
          fontSize: 10,
        }}
        color="text.secondary"
      >
        {typeHandler(types)}
      </body>
    </div>
  );
};

export default PokeCard;
