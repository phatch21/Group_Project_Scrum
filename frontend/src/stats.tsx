import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoalsMenu.css";

const GoalsMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="menu-item">Current Goals</div>
      <hr />
      <div onClick={() => navigate("/GoalInput")} className="menu-item">
        New Goal
      </div>
      <hr />
      <div className="menu-item">Stats</div>
    </div>
  );
};

export default GoalsMenu;
