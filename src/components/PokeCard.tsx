import * as React from "react";

export type PokeCardProps = {
  name: string;
  sprite: string;
  id: number;
  type: string;
  type2?: string;
};

const PokeCard = ({ name, sprite, id, type, type2 }: PokeCardProps) => {
  const upperName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      // onClick={}
      content="width=device-width, initial-scale=1.0"
      className="PokeCard"
      style={{
        width: 195,
        marginRight: "auto",
        // backgroundColor: "#dc092d",
      }}
    >
      <img
        style={{
          height: 180,
          width: 180,
          backgroundColor: "#deddde",
          borderRadius: 10,
          marginBottom: 5,
          // marginLeft: 40,
          // borderColor: "#232323",
          // border: "solid",
        }}
        src={sprite}
        alt="foto do bicho"
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
      <body style={{ marginLeft: 10, marginBottom: 10 }} color="text.secondary">
        {id} - {type} {type2 && ` / ${type2}`}
      </body>
    </div>
  );
};

export default PokeCard;
