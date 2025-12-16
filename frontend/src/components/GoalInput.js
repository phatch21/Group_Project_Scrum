var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GoalInput.css";
const GoalInput = () => {
    var _a;
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [finishDate, setFinishDate] = useState("");
    const [frequency, setFrequency] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategories = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://localhost:7182/goaltypes");
                if (!response.ok)
                    throw new Error("Failed to load categories");
                const data = yield response.json();
                setCategories(data); // Now categories is an array of { typeId, typeName }
            }
            catch (err) {
                setError("Error loading categories");
                console.error("Error fetching categories:", err);
            }
        });
        fetchCategories();
    }, []);
    const handleCategorySelect = (selectedCategory) => {
        const selectedType = categories.find((cat) => cat.typeName === selectedCategory);
        if (selectedType) {
            setCategory(selectedType.typeId.toString()); // Store the typeId as a string for now
        }
        setName("");
        setDescription("");
        setFinishDate("");
        setFrequency("");
        setSubmitted(false);
    };
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!name || !description || !category || !frequency) {
            setError("Please fill out all required fields.");
            return;
        }
        const userId = 1; // ⚠️ Make sure this user exists in your Users table
        const typeId = parseInt(category);
        const freqId = parseInt(frequency);
        if (userId <= 0 || typeId <= 0 || freqId <= 0) {
            setError("Invalid user, category, or frequency selection.");
            return;
        }
        const formattedDate = finishDate
            ? new Date(finishDate).toISOString()
            : null;
        const payload = {
            goalId: 0,
            userId,
            gname: name,
            gdescription: description,
            typeId,
            finDate: formattedDate,
            suggestId: null,
            freqId,
            goalComp: false,
        };
        console.log("Submitting payload:", payload);
        try {
            const response = yield fetch("https://localhost:7182/AddGoal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                setSubmitted(true);
                setError(""); // clear any previous error
            }
            else {
                const errorResponse = yield response.text();
                console.error("Server Response:", errorResponse);
                setError("Server rejected the goal. Check values and try again.");
            }
        }
        catch (error) {
            console.error("Error submitting goal:", error);
            setError("Something went wrong while submitting your goal.");
        }
    });
    return (_jsx("div", { className: "p-4 max-w-md mx-auto flex flex-col items-center text-center", children: _jsxs("div", { className: "p-4 max-w-md mx-auto", children: [error ? (_jsx("p", { className: "text-red-500", children: error })) : !category ? (_jsxs("div", { children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Select a Goal Category" }), categories.length > 0 ? (categories.map((cat) => (_jsx("button", { className: "my-button", onClick: () => handleCategorySelect(cat.typeName), children: cat.typeName }, cat.typeId)))) : (_jsx("p", { children: "Loading categories..." }))] })) : (_jsxs("div", { children: [_jsxs("h2", { className: "text-lg font-bold mb-4", children: [(_a = categories.find((cat) => cat.typeId.toString() === category)) === null || _a === void 0 ? void 0 : _a.typeName, " ", "Goal"] }), !submitted ? (_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Goal Name", value: name, onChange: (e) => setName(e.target.value), className: "mb-2 p-2 border rounded w-full text-black" }), _jsx("textarea", { placeholder: "Description", value: description, onChange: (e) => setDescription(e.target.value), className: "mb-2 p-2 border rounded w-full text-black" }), _jsx("input", { type: "date", value: finishDate, onChange: (e) => setFinishDate(e.target.value), className: "mb-2 p-2 border rounded w-full text-black" }), _jsxs("select", { value: frequency, onChange: (e) => setFrequency(e.target.value), className: "mb-2 p-2 border rounded w-full text-black", children: [_jsx("option", { value: "", children: "Select Frequency" }), _jsx("option", { value: "1", children: "Daily" }), _jsx("option", { value: "2", children: "Weekly" }), _jsx("option", { value: "3", children: "Monthly" })] }), _jsx("button", { className: "my-button", onClick: handleSubmit, children: "Submit Goal" })] })) : (_jsx("p", { className: "text-green-600", children: "Goal submitted successfully!" }))] })), category && (_jsx("button", { onClick: () => setCategory(""), className: "my-button mt-4", children: "Back" }))] }) }));
};
export default GoalInput;
