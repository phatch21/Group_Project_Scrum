import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import OrchardPage from "./pages/OrchardPage";
import CustomizationsPage from "./pages/CustomizationsPage";
import StatsPage from "./pages/StatsPage";
import GoalsInputPage from "./pages/GoalsInputPage";
import CreateAccountPage from "./pages/CreateAccountPage";

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
