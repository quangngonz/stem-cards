/* eslint-disable react/prop-types */
import "./PersonCard.css";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";

import tick from "../../assets/tick.png";

function checkCollectionData(name, rarity, img, occupation) {
  return (
    name === name &&
    rarity === rarity &&
    img === img &&
    occupation === occupation
  );
}

const PersonCard = ({ name, rarity, img, occupation }) => {
  const [collected, setCollected] = useState(false);
  const img_src = `${img}`;

  //TODO: Change the whole local storage to a single object
  const person_local_storage = `${name}_${rarity}_${img}_${occupation}`;

  useEffect(() => {
    const storedData = localStorage.getItem(person_local_storage);

    if (storedData) {
      const { name, rarity, img, occupation, collected } =
        JSON.parse(storedData);

      if (checkCollectionData(name, rarity, img, occupation)) {
        setCollected(collected);
      } else {
        setCollected(false);
      }
    } else {
      setCollected(false);
    }
  }, [person_local_storage]);

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
