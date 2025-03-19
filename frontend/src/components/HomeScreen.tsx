import "../styles/HomeScreen.css";
import { useEffect, useState } from "react";

// Uncomment when the `Goal` type is available
// import { Goal } from './types/goal'

/**
 * HomeScreen Component
 * @returns {JSX.Element} The rendered HomeScreen component
 */
function HomeScreen() {
  // Initialize state for goals
  const [goals, setGoals] = useState([
    { GName: "Read More Books" },
    { GName: "Exercise Daily" },
    { GName: "Learn React" }
  ]);

  return (
    <>
      <div className="home-screen">
        {/* Status Bar Section */}
        <div className="status-bar">
          <div className="status-bar-frame">
            {/* Time Display */}
            <div className="status-bar-time">
              <span>9:41</span>
            </div>
            {/* Dynamic Island Spacer */}
            <div className="dynamic-island-spacer" />
            {/* Status Icons */}
            <div className="status-bar-levels">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/030048f7aa93a5d33cb0b57339c12e227beecf32?placeholderIfAbsent=true"
                className="status-bar-image-1"
                alt="Status icon"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61281c4d4d724c496bcdf46c744aa62a943dd8b?placeholderIfAbsent=true"
                className="status-bar-image-2"
                alt="Status icon"
              />
            </div>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="home-content">
          {/* Background Image */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/869054bed4e5b42fdd2de7faadbfd6cedee6f0cb?placeholderIfAbsent=true"
            className="background-image"
            alt="Background"
          />
          {/* Goals Container */}
          <div className="goals-container">
            {/* Goals Header */}
            <div className="goals-header">
              <div className="goals-title">
                <span>Your Goals:</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1f0a5aa5edda19af6d1f2baaf0869836bf0e55?placeholderIfAbsent=true"
                className="goals-icon"
                alt="Goals icon"
              />
            </div>

            {/* ✅ Displaying Goals Dynamically */}
            <div className="goal-description">
              {goals.map((g, index) => (
                <div className="goal-item" key={index}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2903440140316ef22dc9aa945452956ac62282ad?placeholderIfAbsent=true"
                    className="goal-icon"
                    alt="Goal icon"
                  />
                  <h4>{g.GName}</h4>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* Spacer Element */}
        <div className="spacer" />
        {/* Home Indicator Section */}
        <div className="home-indicator">
          <div className="home-indicator-inner">
            <div className="home-indicator-container">
              <div className="home-indicator-wrapper"></div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default HomeScreen;
