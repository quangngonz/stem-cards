import "./App.css";
import { people } from "./assets/data";

import Card from "./components/Card/Card";

function App() {
  return (
    <>
      {people.map((person) => {
        return (
          <Card
            key={person.name + "_" + person.rarity}
            name={person.name}
            rarity={person.rarity}
            img={person.img}
            occupation={person.occupation}
          />
        );
      })}
    </>
  );
}

export default App;
