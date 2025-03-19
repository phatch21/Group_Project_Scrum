import React from "react";
import "../styles/HomeScreen.css";

/**
 * HomeScreen Component
 *
 * Displays a stylish home screen with a status bar, goals section, and home indicator.
 * The component is fully responsive and optimized for both desktop and mobile devices.
 *
 * @returns {JSX.Element} The rendered HomeScreen component
 */
function HomeScreen() {
  return (
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
          {/* Goal Item 1 */}
          <div className="goal-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2903440140316ef22dc9aa945452956ac62282ad?placeholderIfAbsent=true"
              className="goal-icon"
              alt="Goal icon"
            />

            {/* Code for showing all the goals */}
            {/* {@foreach (var g in Model.Where(g => g.GOAL_PROGRESS.Status == false))
            {
                <p>@g.GName</p>
                <a class="btn btn-info" asp-controller="Home" asp-action="Edit" asp-route-id="@x.Id">Edit</a>
                <a class="btn btn-danger" asp-controller="Home" asp-action="Delete" asp-route-id="@x.Id">Delete</a>
                <a class="btn btn-info" asp-controller="Home" asp-action="Checkoff" asp-route-id="@x.Id">Mark As Complete</a>
            }} */}
            <div className="goal-description">
              <span>Goal 1 - description</span>
            </div>
          </div>
          {/* Goal Item 2 */}
          <div className="goal-item-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2903440140316ef22dc9aa945452956ac62282ad?placeholderIfAbsent=true"
              className="goal-icon-2"
              alt="Goal icon"
            />
            <div className="goal-description-2">
              <span>Goal 2 - description</span>
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
    </div>
  );
}

export default HomeScreen;
