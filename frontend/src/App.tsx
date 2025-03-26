<<<<<<< HEAD

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
=======
>>>>>>> tessa
import "./App.css";
<<<<<<< HEAD
import Customization from "./Customization";
import Stats from "./Stats";
=======
import BottomNavigation from "./BottomNavigation";
import GoalInput from "./GoalInput";

import HomeScreen from "./components/HomeScreen";
import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";
>>>>>>> 0f8bcb075f09365ba162e7acdd8fa1985309d643

function App() {
<<<<<<< HEAD

  const [activeScreen, setActiveScreen] = useState<"home" | "orchard">("home");

  return (
    <div className="app-container">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        {/* Bottom Navigation always shows */}
        <BottomNavigation />
      </BrowserRouter>
=======
      {activeScreen === "home" ? <HomeScreen /> : <Orchard />}
      <BottomNavigation setActiveScreen={setActiveScreen} />
>>>>>>> 0f8bcb075f09365ba162e7acdd8fa1985309d643
    </div>
=======
  return (
    <>
      <GoalInput />
      <BottomNavigation/>
    </>
>>>>>>> tessa
  );
}

export default App;
