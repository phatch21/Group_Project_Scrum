
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
import CreateAccount from "./CreateAccount";
import "./App.css";

<<<<<<< HEAD
=======
import HomeScreen from "./components/HomeScreen";
import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";

>>>>>>> bb7b6e7918215b2240aeefc945b17078b47a73ea
function App() {

  const [activeScreen, setActiveScreen] = useState<"home" | "orchard">("home");

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>

        {/* Must be inside BrowserRouter to use useNavigate() */}
        <BottomNavigation />
      </div>
    </BrowserRouter>
<<<<<<< HEAD
=======

    <div className="app-container">
      {activeScreen === "home" ? <HomeScreen /> : <Orchard />}
      <BottomNavigation setActiveScreen={setActiveScreen} />
    </div>
>>>>>>> bb7b6e7918215b2240aeefc945b17078b47a73ea
  );
}

export default App;
