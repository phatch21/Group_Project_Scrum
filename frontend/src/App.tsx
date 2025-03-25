import { useState } from "react";
import "./App.css";

import HomeScreen from "./components/HomeScreen";
import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";

function App() {
  const [activeScreen, setActiveScreen] = useState<"home" | "orchard">("home");

  return (
    <div className="app-container">
      {activeScreen === "home" ? <HomeScreen /> : <Orchard />}
      <BottomNavigation setActiveScreen={setActiveScreen} />
    </div>
  );
}

export default App;
