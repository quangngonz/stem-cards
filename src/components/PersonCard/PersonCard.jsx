/* eslint-disable react/prop-types */
import "./PersonCard.css";
import { useState } from "react";
import { Card, CardContent } from "@mui/material";

import tick from "../../assets/tick.png";

const PersonCard = ({
  person,
  collectionState,
  collectedCount,
  setCollectedCount,
}) => {
  const [collected, setCollected] = useState(collectionState);

  const { name, rarity, img, occupation } = person;
  const person_local_storage = `${name}_${rarity}_${img}_${occupation}`;
  const img_src = `${img}`;

  const handleCollected = () => {
    setCollected(!collected);
    if (collected) {
      // console.log("Removed: ", name);
      const data = {
        name,
        rarity,
        img,
        occupation,
        collected: false,
      };
      localStorage.setItem(person_local_storage, JSON.stringify(data));
      setCollectedCount((collectedCount) => collectedCount - 1);
      console.log("Collected Count: ", collectedCount);
    } else {
      // console.log("Collected: ", name);
      const data = {
        name,
        rarity,
        img,
        occupation,
        collected: true,
      };
      localStorage.setItem(person_local_storage, JSON.stringify(data));
      setCollectedCount((collectedCount) => collectedCount + 1);
      console.log("Collected Count: ", collectedCount);
    }
  };

  return (
    <Card
      key={name + "_" + rarity}
      className="card-person"
      onClick={handleCollected}
    >
      <CardContent>
        {collected && <img className="cover" src={tick} alt={"tick"} />}
        <img
          className={`card-image ${collected ? "collected" : ""}`}
          src={img_src}
          alt={"image of " + name + "_" + rarity}
        />
        <h1 className={`name ${collected ? "collected" : ""}`}>{name}</h1>
        <p className={`occupation ${collected ? "collected" : ""}`}>
          {occupation}
        </p>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
