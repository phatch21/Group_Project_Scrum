import React from "react";
import "./GoalsMenu.css"; // You can customize styling here

const GoalsMenu: React.FC = () => {
  return (
    <div className="container">
      <div className="menu-item">Current Goals</div>
      <hr />
      <div className="menu-item">New Goal</div>
      <hr />
      <div className="menu-item">Stats</div>
    </div>
  );
};

export default GoalsMenu;
