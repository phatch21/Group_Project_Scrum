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
import { useState } from "react";
import "../Login.css";
function CreateAccount() {
    const [formData, setFormData] = useState({
        userID: 0, // Add userID for type compatibility
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profilePic: "",
    });
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.id]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const addUser = function (newUser) {
                return __awaiter(this, void 0, void 0, function* () {
                    const response = yield fetch("https://localhost:7182/Goals/CreateAccount", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newUser),
                    });
                    if (!response.ok) {
                        throw new Error("Failed to create account");
                    }
                    const data = yield response.json();
                    console.log("Account created successfully:", data);
                    return data;
                });
            };
            yield addUser(formData);
        }
        catch (err) {
            setError("Error creating account. Please try again.");
            console.error(err);
        }
    });
    return (_jsxs("div", { className: "login-screen", children: [_jsxs("div", { className: "status-bar", children: [_jsx("div", { children: "9:41" }), _jsx("div", { children: "\uD83D\uDCF6 \uD83D\uDD0B" })] }), _jsxs("form", { className: "login-content", onSubmit: handleSubmit, children: [_jsx("h1", { className: "login-title", children: "Create Account" }), _jsx("label", { className: "login-label", htmlFor: "firstName", children: "First Name:" }), _jsx("input", { id: "firstName", className: "login-input", value: formData.firstName, onChange: handleChange }), _jsx("br", {}), _jsx("label", { className: "login-label", htmlFor: "lastName", children: "Last Name:" }), _jsx("input", { id: "lastName", className: "login-input", value: formData.lastName, onChange: handleChange }), _jsx("br", {}), _jsx("label", { className: "login-label", htmlFor: "email", children: "Email:" }), _jsx("input", { className: "login-input", id: "email", value: formData.email, onChange: handleChange }), _jsx("br", {}), _jsx("label", { className: "login-label", htmlFor: "password", children: "Password:" }), _jsx("input", { type: "password", id: "password", className: "login-input", value: formData.password, onChange: handleChange }), _jsx("br", {}), error && _jsx("p", { style: { color: "red" }, children: error }), _jsx("button", { className: "login-button", type: "submit", children: "Submit" })] })] }));
}
export default CreateAccount;
