import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
import "./App.css";
import Customization from "./Customization";
import Stats from "./Stats";

function App() {
  return (
    <div className="app-container">
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
    </div>
  );
}

export default App;
