import React from "react";
import styles from "./BottomNavigation.module.css";

interface NavIconProps {
  iconName: string;
  svgContent: string;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const NavIcon: React.FC<NavIconProps> = ({
  iconName,
  svgContent,
  isActive,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className={isActive ? styles.activeIconButton : styles.iconButton}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={isActive}
    >
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className={styles.iconContainer}
      />
    </button>
  );
};

export default NavIcon;
