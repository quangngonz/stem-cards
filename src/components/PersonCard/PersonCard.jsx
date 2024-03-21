/* eslint-disable react/prop-types */
import "./PersonCard.css";
import { Card, CardContent } from "@mui/material";

const PersonCard = ({ name, rarity, img, occupation }) => {
  const img_src = `${img}`;

  return (
    <Card key={name + "_" + rarity} className="card-person">
      <CardContent>
        <img
          className="card-image"
          src={img_src}
          alt={"image of " + name + "_" + rarity}
        />
        <h1 className="name">{name}</h1>
        <p className="occupation">{occupation}</p>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
