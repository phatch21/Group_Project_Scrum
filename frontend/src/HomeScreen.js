import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../src/styles/HomeScreen.css";
import { useState } from "react";
// Uncomment when the `Goal` type is available
// import { Goal } from './types/goal'
/**
 * HomeScreen Component
 * @returns {JSX.Element} The rendered HomeScreen component
 */
function HomeScreen() {
    // Initialize state for goals
    const [goals, setGoals] = useState([
        { GName: "Read More Books" },
        { GName: "Exercise Daily" },
        { GName: "Learn React" },
    ]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "home-screen", children: [_jsx("div", { className: "status-bar", children: _jsxs("div", { className: "status-bar-frame", children: [_jsx("div", { className: "status-bar-time", children: _jsx("span", { children: "9:41" }) }), _jsx("div", { className: "dynamic-island-spacer" }), _jsxs("div", { className: "status-bar-levels", children: [_jsx("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/030048f7aa93a5d33cb0b57339c12e227beecf32?placeholderIfAbsent=true", className: "status-bar-image-1", alt: "Status icon" }), _jsx("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a61281c4d4d724c496bcdf46c744aa62a943dd8b?placeholderIfAbsent=true", className: "status-bar-image-2", alt: "Status icon" })] })] }) }), _jsxs("div", { className: "home-content", children: [_jsx("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/869054bed4e5b42fdd2de7faadbfd6cedee6f0cb?placeholderIfAbsent=true", className: "background-image", alt: "Background" }), _jsxs("div", { className: "goals-container", children: [_jsxs("div", { className: "goals-header", children: [_jsx("div", { className: "goals-title", children: _jsx("span", { children: "Your Goals:" }) }), _jsx("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1f0a5aa5edda19af6d1f2baaf0869836bf0e55?placeholderIfAbsent=true", className: "goals-icon", alt: "Goals icon" })] }), _jsx("div", { className: "goal-description", children: goals.map((g, index) => (_jsxs("div", { className: "goal-item", children: [_jsx("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2903440140316ef22dc9aa945452956ac62282ad?placeholderIfAbsent=true", className: "goal-icon", alt: "Goal icon" }), _jsx("h4", { children: g.GName })] }, index))) })] })] }), _jsx("div", { className: "spacer" }), _jsx("div", { className: "home-indicator", children: _jsx("div", { className: "home-indicator-inner", children: _jsx("div", { className: "home-indicator-container", children: _jsx("div", { className: "home-indicator-wrapper" }) }) }) })] }) }));
}
export default HomeScreen;
