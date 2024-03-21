/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ name, rarity, img, occupation }) => {
  const img_src = `${img}`;

  return (
    <div key={name + "_" + rarity}>
      <h1>{name}</h1>
      <p>{occupation + " | " + rarity}</p>
      <img
        src={img_src}
        alt={"image of " + name + "_" + rarity}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Card;
