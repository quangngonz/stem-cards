/* eslint-disable react/prop-types */
import "./CardGrid.css";
import PersonCard from "../PersonCard/PersonCard";

const CardGrid = ({ people, collectedCount, setCollectedCount }) => {
  return (
    <div className="grid">
      {people.map((person) => {
        return (
          <PersonCard
            className="card"
            key={person.name + "_" + person.rarity}
            person={person}
            collectionState={person.collected}
            collectedCount={collectedCount}
            setCollectedCount={setCollectedCount}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
