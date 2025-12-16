import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import OrchardPage from "./pages/OrchardPage";
import CustomizationsPage from "./pages/CustomizationsPage";
import StatsPage from "./pages/StatsPage";
import GoalsInputPage from "./pages/GoalsInputPage";
import { Routes, Route } from "react-router-dom";
import Stats from "./stats";
import CreateAccount from "../src/pages/CreateAccount";
function App() {
    return (_jsx("div", { className: "app-container", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/settings", element: _jsx(SettingsPage, {}) }), _jsx(Route, { path: "/customization", element: _jsx(CustomizationsPage, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Stats, {}) }), _jsx(Route, { path: "/stats", element: _jsx(StatsPage, {}) }), _jsx(Route, { path: "/Login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/Orchard", element: _jsx(OrchardPage, {}) }), _jsx(Route, { path: "/CreateAccount", element: _jsx(CreateAccount, {}) }), _jsx(Route, { path: "/GoalInput", element: _jsx(GoalsInputPage, {}) })] }) }));
}
export default App;
