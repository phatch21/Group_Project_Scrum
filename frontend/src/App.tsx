import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
import "./App.css";
import Customization from "./Customization";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customization" element={<Customization />} />
        </Routes>
        {/* Bottom Navigation always shows */}
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
