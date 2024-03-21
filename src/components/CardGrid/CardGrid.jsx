/* eslint-disable react/prop-types */
import "./CardGrid.css";
import PersonCard from "../PersonCard/PersonCard";

const CardGrid = ({ people }) => {
  return (
    <div className="grid">
      {people.map((person) => {
        return (
          <PersonCard
            className="card"
            key={person.name + "_" + person.rarity}
            name={person.name}
            rarity={person.rarity}
            img={person.img}
            occupation={person.occupation}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
