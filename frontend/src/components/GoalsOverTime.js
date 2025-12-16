import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { date: 'Mar 21', completed: 1 },
    { date: 'Mar 22', completed: 2 },
    { date: 'Mar 23', completed: 3 },
    { date: 'Mar 24', completed: 4 },
    { date: 'Mar 25', completed: 5 },
];
const GoalsOverTime = () => {
    return (_jsxs("div", { className: "p-6 bg-gray-900 min-h-[100vh] text-white", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "\uD83D\uDCC8 Goals Over Time" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: data, children: [_jsx(XAxis, { dataKey: "date", stroke: "#fff" }), _jsx(YAxis, { stroke: "#fff" }), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "completed", stroke: "#00ffcc", strokeWidth: 2 })] }) })] }));
};
export default GoalsOverTime;
