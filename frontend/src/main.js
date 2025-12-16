import { jsx as _jsx } from "react/jsx-runtime";
import "./styles/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, } from "react-router-dom";
createRoot(document.getElementById("root")).render(_jsx(BrowserRouter, { children: _jsx(StrictMode, { children: _jsx(App, {}) }) }));
