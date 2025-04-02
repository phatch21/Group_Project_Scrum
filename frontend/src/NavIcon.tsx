import React from "react";
import styles from "./BottomNavigation.module.css";

interface NavButtonProps {
  iconName: string;
  svgContent: string;
  id: string;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  id,
  svgContent,
  isActive,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      id={id}
      className={isActive ? styles.activeIconButton : styles.iconButton}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={isActive}
    >
      <div
        className={styles.iconContainer}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </button>
  );
};

export default NavButton;
