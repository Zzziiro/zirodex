import * as React from "react";

const PokeCard = ({ name, sprite, id, types }) => {
  const upperName = name.charAt(0).toUpperCase() + name.slice(1);

  const typeHandler = (types) => {
    if (types[1]) {
      return types[0].type.name + " & " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <div
      // onClick={}
      content="width=device-width, initial-scale=1.0"
      className="PokeCard"
    >
      <img
        style={{
          height: 170,
          maxWidth: 170,
          minWidth: 170,
          backgroundColor: "#deddde",
          borderRadius: 10,
          marginBottom: 5,
        }}
        src={sprite}
      />
      <a
        className="CardTitle"
        style={{
          top: 0,
          marginLeft: 10,
          fontSize: 20,
        }}
      >
        {upperName}
      </a>
      <a style={{ color: "#454545" }}> - n° {id}</a>
      <body style={{ marginLeft: 10, marginBottom: 10 }} color="text.secondary">
        {typeHandler(types)}
      </body>
    </div>
  );
};

export default PokeCard;
