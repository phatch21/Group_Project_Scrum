
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
import "./App.css";

import HomeScreen from "./components/HomeScreen";
import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";

function App() {

  const [activeScreen, setActiveScreen] = useState<"home" | "orchard">("home");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>


      {/* Must be inside BrowserRouter to use useNavigate() */}
      <BottomNavigation />
    </BrowserRouter>

    <div className="app-container">
      {activeScreen === "home" ? <HomeScreen /> : <Orchard />}
      <BottomNavigation setActiveScreen={setActiveScreen} />
    </div>
  );
}

export default App;
