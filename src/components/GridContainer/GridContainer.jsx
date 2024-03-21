import CardGrid from "../CardGrid/CardGrid";

import "./GridContainer.css";

import PropTypes from "prop-types";

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

GridContainer.propTypes = {
  rarity: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default GridContainer;
