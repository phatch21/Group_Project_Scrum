import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const totalGoals = 10;
const completedGoals = 7;
const percentage = Math.round((completedGoals / totalGoals) * 100);
const GoalsAccomplished = () => {
    return (_jsxs("div", { className: "p-6 bg-gray-800 min-h-[100vh] text-white flex flex-col items-center justify-center", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "\u2705 Goals Accomplished" }), _jsxs("div", { className: "w-40 h-40 rounded-full border-8 border-green-400 flex items-center justify-center text-2xl font-bold", children: [percentage, "%"] }), _jsxs("p", { className: "mt-4", children: [completedGoals, " of ", totalGoals, " goals completed"] })] }));
};
export default GoalsAccomplished;
