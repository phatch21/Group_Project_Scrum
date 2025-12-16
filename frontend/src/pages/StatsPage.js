import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import '../styles/stats.css';
// Image imports
import GoalsWeekIcon from '../assets/stats-calendarlogo.png';
import CategoryIcon from '../assets/stats-categorylogo.png';
import TimeIcon from '../assets/stats-timelogo.png';
import AccomplishedIcon from '../assets/stats-accomplishedgoals.png';
// Component imports
import GoalsThisWeek from '../components/GoalsThisWeek';
import GoalsByCategory from '../components/GoalsByCategory';
import GoalsOverTime from '../components/GoalsOverTime';
import GoalsAccomplished from '../components/GoalsAccomplished';
const StatsPage = () => {
    // Refs to scroll into view
    const weekRef = useRef(null);
    const categoryRef = useRef(null);
    const timeRef = useRef(null);
    const accomplishedRef = useRef(null);
    const scrollToSection = (ref) => {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsx("div", { style: {
            display: 'flex',
            justifyContent: 'center', // centers horizontally
            alignItems: 'flex-start', // align to top so scrolling works
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            boxSizing: 'border-box',
        }, children: _jsxs("div", { style: {
                width: '375px', // phone-like width
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '16px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
            }, className: "stats-container", children: [_jsx("header", { className: "stats-header", children: _jsx("h2", { children: "My Stats" }) }), _jsxs("div", { className: "stats-buttons", children: [_jsx(StatButton, { label: "Goals This Week", icon: GoalsWeekIcon, onClick: () => scrollToSection(weekRef) }), _jsx(StatButton, { label: "Goals By Category", icon: CategoryIcon, onClick: () => scrollToSection(categoryRef) }), _jsx(StatButton, { label: "Goals Over Time", icon: TimeIcon, onClick: () => scrollToSection(timeRef) }), _jsx(StatButton, { label: "Goals Accomplished / Goals Set", icon: AccomplishedIcon, onClick: () => scrollToSection(accomplishedRef) })] }), _jsx("div", { ref: weekRef, className: "stat-section", children: _jsx(GoalsThisWeek, {}) }), _jsx("div", { ref: categoryRef, className: "stat-section", children: _jsx(GoalsByCategory, {}) }), _jsx("div", { ref: timeRef, className: "stat-section", children: _jsx(GoalsOverTime, {}) }), _jsx("div", { ref: accomplishedRef, className: "stat-section", children: _jsx(GoalsAccomplished, {}) })] }) }));
};
const StatButton = ({ label, icon, onClick }) => (_jsxs("div", { className: "stat-button", onClick: onClick, style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        cursor: 'pointer',
        marginBottom: '1rem',
    }, children: [_jsx("img", { src: icon, alt: label, style: { width: '48px', height: '48px', objectFit: 'contain' } }), _jsx("span", { style: { fontSize: '1rem', fontWeight: 500 }, children: label })] }));
export default StatsPage;
