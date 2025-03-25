"use client";
import React, { useState } from "react";
import NavIcon from "./NavIcon";

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
      </div>
    </div>
  );
};

export default BottomNavigation;
