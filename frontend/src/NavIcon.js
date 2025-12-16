import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./BottomNavigation.module.css";
const NavButton = ({ id, svgContent, isActive, onClick, ariaLabel, }) => {
    return (_jsx("button", { id: id, className: isActive ? styles.activeIconButton : styles.iconButton, onClick: onClick, "aria-label": ariaLabel, "aria-pressed": isActive, children: _jsx("div", { className: styles.iconContainer, dangerouslySetInnerHTML: { __html: svgContent } }) }));
};
export default NavButton;
