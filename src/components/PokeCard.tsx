import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export type PokeCardProps = {
  name: string;
  sprite: string;
  id: number;
  type: string;
  type2?: string;
};

const PokeCard = ({ name, sprite, id, type, type2 }: PokeCardProps) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={sprite}
          alt="foto do bicho"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {id} - {type} {type2 && ` / ${type2}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokeCard;
