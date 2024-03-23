import "./App.css";
import {
  commonCards,
  uncommonCards,
  rareCards,
  legendaryCards,
} from "./assets/data";

import GridContainer from "./components/GridContainer/GridContainer";

function App() {
  return (
    <div>
      <h1>ISPH STEM Cards Checklist</h1>
      <GridContainer rarity="Common" cards={commonCards} />
      <GridContainer rarity="Uncommon" cards={uncommonCards} />
      <GridContainer rarity="Rare" cards={rareCards} />
      <GridContainer rarity="Legendary" cards={legendaryCards} />
      <p>By: Quang Ngo | Y12</p>
    </div>
  );
}

export default App;
