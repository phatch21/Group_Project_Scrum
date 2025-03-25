import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import Settings from "./Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>

      {/* Must be inside BrowserRouter to use useNavigate() */}
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
