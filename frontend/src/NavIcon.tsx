import React from "react";
import styles from "./BottomNavigation.module.css";

interface NavButtonProps {
  id: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  id,
  icon,
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
      <div className={styles.iconContainer}>{icon}</div>
    </button>
  );
};

export default NavButton;
