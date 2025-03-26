import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";

import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";
import Stats from "./stats";
import Customization from "./Customization";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import GoalInput from "./GoalInput";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orchard" element={<Orchard />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/GoalInput" element={<GoalInput />} />
      </Routes>
      {/* Only show nav bar on certain pages */}
      <BottomNavigation />
    </div>
  );
}

export default App;