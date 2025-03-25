"use client";
import React, { useState } from "react";
import styles from "./BottomNavigation.module.css";
import NavIcon from "./NavIcon";

// SVG content for each navigation icon
const TARGET_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_272_1422)">
    <path d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9.99996 15C12.7614 15 15 12.7614 15 10C15 7.2386 12.7614 5.00002 9.99996 5.00002C7.23854 5.00002 4.99996 7.2386 4.99996 10C4.99996 12.7614 7.23854 15 9.99996 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9.99996 11.6667C10.9204 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07955 10.9204 8.33335 9.99996 8.33335C9.07948 8.33335 8.33329 9.07955 8.33329 10C8.33329 10.9205 9.07948 11.6667 9.99996 11.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
  <defs>
    <clipPath id="clip0_272_1422">
      <rect width="20" height="20" fill="white"></rect>
    </clipPath>
  </defs>
</svg>`;

const IMAGE_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5ZM4.16667 17.5L13.3333 8.33333L17.5 12.5M8.33333 7.08333C8.33333 7.77369 7.77369 8.33333 7.08333 8.33333C6.39298 8.33333 5.83333 7.77369 5.83333 7.08333C5.83333 6.39298 6.39298 5.83333 7.08333 5.83333C7.77369 5.83333 8.33333 6.39298 8.33333 7.08333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const HOME_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 18.3334V10H12.5V18.3334M2.5 7.50002L10 1.66669L17.5 7.50002V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50002Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const USERS_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_272_1420)">
    <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5653 12.8512 11.7174 12.5 10.8334 12.5H4.16671C3.28265 12.5 2.43481 12.8512 1.80968 13.4763C1.18456 14.1014 0.833374 14.9493 0.833374 15.8333V17.5M19.1667 17.5V15.8333C19.1662 15.0948 18.9203 14.3773 18.4678 13.7936C18.0154 13.2099 17.3818 12.793 16.6667 12.6083M13.3334 2.60833C14.0504 2.79192 14.6859 3.20892 15.1397 3.79359C15.5936 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57764 15.5936 7.29673 15.1397 7.88141C14.6859 8.46608 14.0504 8.88308 13.3334 9.06667M10.8334 5.83333C10.8334 7.67428 9.34099 9.16667 7.50004 9.16667C5.65909 9.16667 4.16671 7.67428 4.16671 5.83333C4.16671 3.99238 5.65909 2.5 7.50004 2.5C9.34099 2.5 10.8334 3.99238 10.8334 5.83333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
  <defs>
    <clipPath id="clip0_272_1420">
      <rect width="20" height="20" fill="white"></rect>
    </clipPath>
  </defs>
</svg>`;

const TOOL_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.25 5.25C12.0973 5.40578 12.0118 5.61521 12.0118 5.83334C12.0118 6.05146 12.0973 6.2609 12.25 6.41667L13.5833 7.75C13.7391 7.90269 13.9485 7.98822 14.1667 7.98822C14.3848 7.98822 14.5942 7.90269 14.75 7.75L17.8917 4.60834C18.3107 5.53433 18.4376 6.56603 18.2554 7.56596C18.0732 8.56588 17.5906 9.48654 16.8719 10.2052C16.1532 10.9239 15.2325 11.4065 14.2326 11.5887C13.2327 11.7709 12.201 11.644 11.275 11.225L5.51667 16.9833C5.18515 17.3149 4.73551 17.5011 4.26667 17.5011C3.79783 17.5011 3.34819 17.3149 3.01667 16.9833C2.68515 16.6518 2.4989 16.2022 2.4989 15.7333C2.4989 15.2645 2.68515 14.8149 3.01667 14.4833L8.775 8.725C8.35597 7.79901 8.2291 6.76731 8.41129 5.76738C8.59348 4.76746 9.07607 3.8468 9.79477 3.1281C10.5135 2.40941 11.4341 1.92681 12.434 1.74462C13.434 1.56243 14.4657 1.68931 15.3917 2.10834L12.25 5.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const BottomNavigation: React.FC = () => {
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
            onClick={() => handleIconClick("target")}
            ariaLabel="Target"
          />
          <NavIcon
            iconName="image"
            svgContent={IMAGE_ICON}
            isActive={activeIcon === "image"}
            onClick={() => handleIconClick("image")}
            ariaLabel="Image"
          />
          <NavIcon
            iconName="home"
            svgContent={HOME_ICON}
            isActive={activeIcon === "home"}
            onClick={() => handleIconClick("home")}
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
            onClick={() => handleIconClick("tool")}
            ariaLabel="Tool"
          />
        </nav>
        <div className={styles.bottomBorder} />
      </div>
    </section>
  );
};

export default BottomNavigation;
