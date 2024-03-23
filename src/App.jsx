import "./App.css";
import {
  commonCards,
  uncommonCards,
  rareCards,
  legendaryCards,
} from "./assets/data";

import { useEffect, useState } from "react";
import loadData from "./scripts/loadData";

import GridContainer from "./components/GridContainer/GridContainer";

function App() {
  const [common, setCommon] = useState([]);
  const [uncommon, setUncommon] = useState([]);
  const [rare, setRare] = useState([]);
  const [legendary, setLegendary] = useState([]);

  useEffect(() => {
    setCommon(loadData(commonCards));
    setUncommon(loadData(uncommonCards));
    setRare(loadData(rareCards));
    setLegendary(loadData(legendaryCards));
  }, []);

  // console.log("Common: ", common);
  // console.log("Uncommon: ", uncommon);
  // console.log("Rare: ", rare);
  // console.log("Legendary: ", legendary);

  return (
    <div>
      <h1>ISPH STEM Cards Checklist</h1>
      <GridContainer rarity="Common" cards={common} setCards={setCommon} />
      <GridContainer
        rarity="Uncommon"
        cards={uncommon}
        setCards={setUncommon}
      />
      <GridContainer rarity="Rare" cards={rare} setCards={setRare} />
      <GridContainer
        rarity="Legendary"
        cards={legendary}
        setCards={setLegendary}
      />
      <p>
        By: Quang Ngo | Y12 |{" "}
        <a
          href="https://github.com/quangngonz/stem-cards"
          target="_blank"
          title="Go to GitHub repository of this project"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
