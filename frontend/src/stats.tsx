import BottomNavigation from "./BottomNavigation";
import "./GoalsMenu.css";
import { useNavigate } from "react-router-dom";

function Stats() {
  const navigate = useNavigate();
  return (
    <>
    <div className="container">
      <div className="menu-item">Current Goals</div>
      <hr />
      <div className="menu-item" onClick={() => navigate("/GoalInput")}>
        New Goal
      </div>
      <hr />
      <div className="menu-item" onClick={() => navigate("/stats")}>
        Stats
      </div>
    </div>
    <BottomNavigation/>
    </>
  );
}

export default Stats;
