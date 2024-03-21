import "./App.css";
import { people } from "./assets/data";

import CardGrid from "./components/CardGrid/CardGrid";

function App() {
  return <CardGrid people={people} />;
}

export default App;
