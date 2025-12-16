import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
    };
    return (_jsxs("div", { className: "login-screen", children: [_jsxs("div", { className: "status-bar", children: [_jsx("div", { children: "9:41" }), _jsx("div", { children: "\uD83D\uDCF6 \uD83D\uDD0B" })] }), _jsxs("form", { className: "login-content", onSubmit: handleSubmit, children: [_jsx("h1", { className: "login-title", children: "Thryve Login" }), _jsx("label", { className: "login-label", htmlFor: "username", children: "Username" }), _jsx("input", { id: "username", name: "username", className: "login-input", value: formData.username, onChange: handleChange }), _jsx("label", { className: "login-label", htmlFor: "password", children: "Password" }), _jsx("input", { id: "password", name: "password", type: "password", className: "login-input", value: formData.password, onChange: handleChange }), _jsx("button", { className: "login-button", type: "submit", children: "Login" }), _jsx("div", { className: "login-links", children: _jsx("button", { style: { color: "#000000" }, onClick: () => navigate("/CreateAccount"), children: "Create Account" }) })] }), _jsx("div", { className: "login-footer", children: _jsx("img", { src: "/TreeLogo.png", alt: "Tree logo" }) })] }));
};
export default Login;
