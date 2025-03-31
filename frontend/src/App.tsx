import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import OrchardPage from "./pages/OrchardPage";
import CustomizationsPage from "./pages/CustomizationsPage";
import StatsPage from "./pages/StatsPage";
import GoalsInputPage from "./pages/GoalsInputPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Orchard from "./Orchard";
import BottomNavigation from "./BottomNavigation";
import Stats from "./stats";
import Customization from "./Customization";
import Login from "./Login";
import CreateAccount from "../src/pages/CreateAccount";
import GoalInput from "./GoalInput";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/customization" element={<CustomizationsPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Orchard" element={<OrchardPage />} />
        <Route path="/CreateAccount" element={<CreateAccountPage />} />
        <Route path="/GoalInput" element={<GoalsInputPage />} />
      </Routes>
    </div>
  );
}

export default App;
