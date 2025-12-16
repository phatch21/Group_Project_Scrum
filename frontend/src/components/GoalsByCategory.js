import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { category: 'Spiritual', goals: 4 },
    { category: 'Physical', goals: 2 },
    { category: 'Work', goals: 3 },
    { category: 'Social', goals: 1 },
];
const GoalsByCategory = () => {
    return (_jsxs("div", { className: "p-6 bg-gray-800 min-h-[100vh] text-white", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "\uD83D\uDCCA Goals By Category" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: data, children: [_jsx(XAxis, { dataKey: "category", stroke: "#fff" }), _jsx(YAxis, { stroke: "#fff" }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "goals", fill: "#00d1b2" })] }) })] }));
};
export default GoalsByCategory;
