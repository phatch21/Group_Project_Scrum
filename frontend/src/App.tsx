import "./App.css";
import HomeScreen from "./components/HomeScreen";
import BottomNavigation from "./BottomNavigation";


function App() {
  return (
    <div className="app-container">
      <HomeScreen />
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}

export default App;
