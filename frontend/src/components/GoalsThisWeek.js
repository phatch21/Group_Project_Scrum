import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const mockGoals = [
    {
        id: "1",
        name: "Read scriptures",
        category: "Spiritual",
        dueDate: "2025-03-25",
        completed: false,
    },
    {
        id: "2",
        name: "Workout",
        category: "Physical",
        dueDate: "2025-03-26",
        completed: true,
    },
    {
        id: "3",
        name: "Finish report",
        category: "Work",
        dueDate: "2025-03-26",
        completed: false,
    },
];
const GoalsThisWeek = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    // Fix: Match Calendar's onChange signature
    const handleDateChange = (value, event) => {
        if (value instanceof Date) {
            setSelectedDate(value);
        }
        else if (Array.isArray(value) && value[0] instanceof Date) {
            setSelectedDate(value[0]);
        }
        else {
            setSelectedDate(new Date()); // fallback to today if null
        }
    };
    const goalsForDate = mockGoals.filter((goal) => selectedDate &&
        new Date(goal.dueDate).toDateString() === selectedDate.toDateString());
    return (_jsxs("div", { className: "p-6 bg-gray-900 min-h-[100vh] text-white", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "\uD83D\uDCC5 Goals This Week" }), _jsx(Calendar, { onChange: handleDateChange, value: selectedDate }), _jsxs("div", { className: "mt-4", children: [_jsxs("h4", { className: "text-lg font-semibold", children: ["Goals for", " ", selectedDate ? selectedDate.toDateString() : "No date selected"] }), goalsForDate.length > 0 ? (_jsx("ul", { className: "list-disc list-inside", children: goalsForDate.map((goal) => (_jsxs("li", { children: [goal.name, " (", goal.category, ")"] }, goal.id))) })) : (_jsx("p", { children: "No goals for this day." }))] })] }));
};
export default GoalsThisWeek;
