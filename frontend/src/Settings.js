import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "./styles/Settings.css";
function Settings() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "settings-screen", children: [_jsx("h1", { className: "settings-title", children: "Settings" }), _jsx("button", { className: "settings-button logout", onClick: () => navigate("/Login"), type: "button", children: "Log Out" })] }));
}
export default Settings;
