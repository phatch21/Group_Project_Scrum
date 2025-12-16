import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BottomNavigation from "./BottomNavigation";
import "./GoalsMenu.css";
import { useNavigate } from "react-router-dom";
function Stats() {
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container", children: [_jsx("div", { className: "menu-item", children: "Current Goals" }), _jsx("hr", {}), _jsx("div", { className: "menu-item", onClick: () => navigate("/GoalInput"), children: "New Goal" }), _jsx("hr", {}), _jsx("div", { className: "menu-item", onClick: () => navigate("/stats"), children: "Stats" })] }), _jsx(BottomNavigation, {})] }));
}
export default Stats;
