import CardGrid from "../CardGrid/CardGrid";

import "./GridContainer.css";

import PropTypes from "prop-types";
import countCollected from "../../scripts/countCollected";

import { useEffect, useState } from "react";

const GridContainer = ({ rarity, cards }) => {
  const [collectedCount, setCollectedCount] = useState(0);
  const [collectedCardNo, total] = countCollected(cards);

  useEffect(() => {
    setCollectedCount(collectedCardNo);
  }, [cards, collectedCardNo]);

  // console.log("Collected: ", collectedCardNo);
  // console.log("Total: ", total);
  // console.log("All Cards: ", cards);

  return (
    <>
      <h2>
        {rarity} | {collectedCount}/{total}
      </h2>
      <div className="grid-container">
        <CardGrid
          people={cards}
          collected={collectedCount}
          setCollectedCount={setCollectedCount}
        />
      </div>
    </>
  );
};

GridContainer.propTypes = {
  rarity: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  setCards: PropTypes.func.isRequired,
};

export default GridContainer;
