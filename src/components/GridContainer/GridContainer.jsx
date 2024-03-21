/* eslint-disable react/prop-types */
import CardGrid from "../CardGrid/CardGrid";

import "./GridContainer.css";

const GridContainer = ({ rarity, cards }) => {
  return (
    <>
      <h2>{rarity}</h2>
      <div className="grid-container">
        <CardGrid people={cards} />
      </div>
    </>
  );
};

export default GridContainer;
