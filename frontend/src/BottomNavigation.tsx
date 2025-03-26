"use client";
import React, { useState } from "react";
import NavIcon from "./NavIcon";
import { useNavigate } from "react-router-dom";

// SVG Icons (same as yours)
const targetSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="black" stroke-width="2" fill="none"/></svg>`;
const imageSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="2" width="16" height="16" stroke="black" stroke-width="2" fill="none"/><circle cx="7" cy="7" r="2" stroke="black" stroke-width="2" fill="none"/></svg>`;
const homeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 2 L2 10 H6 V18 H14 V10 H18 Z" stroke="black" stroke-width="2" fill="none"/></svg>`;
const usersSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="6" cy="6" r="3" stroke="black" stroke-width="2" fill="none"/><circle cx="14" cy="6" r="3" stroke="black" stroke-width="2" fill="none"/><path d="M2 18 C2 14, 10 14, 10 18" stroke="black" stroke-width="2" fill="none"/><path d="M10 18 C10 14, 18 14, 18 18" stroke="black" stroke-width="2" fill="none"/></svg>`;
const toolSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M4 10 L10 4 L16 10 L10 16 Z" stroke="black" stroke-width="2" fill="none"/></svg>`;

interface BottomNavigationProps {
  setActiveScreen: (screen: "home" | "orchard") => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ setActiveScreen }) => {
  const [activeButton, setActiveButton] = useState("home");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);


    if (buttonId === "home") setActiveScreen("home");
    if (buttonId === "target") setActiveScreen("orchard");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black z-50">
      <div className="flex justify-between items-center max-w-md mx-auto px-4 py-3">
        <NavIcon
          iconName="target"
          svgContent={targetSvg}
          isActive={activeButton === "target"}
          onClick={() => handleClick("target")}
          ariaLabel="Target"
        />
        <NavIcon
          iconName="image"
          svgContent={imageSvg}
          isActive={activeButton === "image"}
          onClick={() => handleClick("image")}
          ariaLabel="Image"
        />
        <NavIcon
          iconName="home"
          svgContent={homeSvg}
          isActive={activeButton === "home"}
          onClick={() => handleClick("home")}
          ariaLabel="Home"
        />
        <NavIcon
          iconName="users"
          svgContent={usersSvg}
          isActive={activeButton === "users"}
          onClick={() => handleClick("users")}
          ariaLabel="Users"
        />
        <NavIcon
          iconName="tool"
          svgContent={toolSvg}
          isActive={activeButton === "tool"}
          onClick={() => handleClick("tool")}
          ariaLabel="Tool"
        />

const TOOL_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.25 5.25C12.0973 5.40578 12.0118 5.61521 12.0118 5.83334C12.0118 6.05146 12.0973 6.2609 12.25 6.41667L13.5833 7.75C13.7391 7.90269 13.9485 7.98822 14.1667 7.98822C14.3848 7.98822 14.5942 7.90269 14.75 7.75L17.8917 4.60834C18.3107 5.53433 18.4376 6.56603 18.2554 7.56596C18.0732 8.56588 17.5906 9.48654 16.8719 10.2052C16.1532 10.9239 15.2325 11.4065 14.2326 11.5887C13.2327 11.7709 12.201 11.644 11.275 11.225L5.51667 16.9833C5.18515 17.3149 4.73551 17.5011 4.26667 17.5011C3.79783 17.5011 3.34819 17.3149 3.01667 16.9833C2.68515 16.6518 2.4989 16.2022 2.4989 15.7333C2.4989 15.2645 2.68515 14.8149 3.01667 14.4833L8.775 8.725C8.35597 7.79901 8.2291 6.76731 8.41129 5.76738C8.59348 4.76746 9.07607 3.8468 9.79477 3.1281C10.5135 2.40941 11.4341 1.92681 12.434 1.74462C13.434 1.56243 14.4657 1.68931 15.3917 2.10834L12.25 5.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const BottomNavigation: React.FC = () => {
  // Navigation
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState<string>("target");

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <section className={styles.container}>
      <div className={styles.navigationWrapper}>
        <div className={styles.topBorder} />
        <nav className={styles.navigationBar}>
          <NavIcon
            iconName="target"
            svgContent={TARGET_ICON}
            isActive={activeIcon === "target"}
            onClick={() => navigate("/stats")}
            ariaLabel="Target"
          />
          <NavIcon
            iconName="image"
            svgContent={IMAGE_ICON}
            isActive={activeIcon === "image"}
            onClick={() => navigate("/Customization")}
            ariaLabel="Image"
          />
          <NavIcon
            iconName="home"
            svgContent={HOME_ICON}
            isActive={activeIcon === "home"}
            onClick={() => navigate("/")}
            ariaLabel="Home"
          />
          <NavIcon
            iconName="users"
            svgContent={USERS_ICON}
            isActive={activeIcon === "users"}
            onClick={() => handleIconClick("users")}
            ariaLabel="Users"
          />
          <NavIcon
            iconName="tool"
            svgContent={TOOL_ICON}
            isActive={activeIcon === "tool"}
            onClick={() => navigate("/Settings")}
            ariaLabel="Tool"
          />
        </nav>
        <div className={styles.bottomBorder} />
      </div>
    </div>
  );
};

export default BottomNavigation;
