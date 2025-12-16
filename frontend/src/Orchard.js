"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./Orchard.module.css";
function Orchard() {
    return (_jsxs("div", { className: styles.orchard, children: [_jsx(StatusBar, {}), _jsx(StatusBarOverlay, {}), _jsx("h1", { className: styles.myOrchard, children: "My Orchard" }), _jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7760160-0cc0-4e16-a481-4f60c1c7f94a?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5", alt: "Orchard visualization", className: styles.img4 }), _jsx(ActionButtons, {})] }));
}
function StatusBar() {
    return (_jsx("header", { className: styles.statusBarIPhone, children: _jsxs("div", { className: styles.frame, children: [_jsx("time", { className: styles.time, children: "9:41" }), _jsx("div", { className: styles.dynamicIslandspacer }), _jsxs("div", { className: styles.levels, children: [_jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d00ba8d75ff30c2745af03ba4a1f73eb41e3152?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5", alt: "Signal strength", className: styles.img }), _jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc4aff2c2b33428e59d83fba2d516b1b5edd07d?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5", alt: "Battery level", className: styles.img2 })] })] }) }));
}
function StatusBarOverlay() {
    return (_jsx("header", { className: styles.statusBarIPhone2, children: _jsxs("div", { className: styles.frame, children: [_jsx("time", { className: styles.time, children: "9:41" }), _jsx("div", { className: styles.dynamicIslandspacer }), _jsxs("div", { className: styles.levels, children: [_jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d00ba8d75ff30c2745af03ba4a1f73eb41e3152?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5", alt: "Signal strength", className: styles.img }), _jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc4aff2c2b33428e59d83fba2d516b1b5edd07d?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5", alt: "Battery level", className: styles.img3 })] })] }) }));
}
function ActionButtons() {
    return (_jsxs(_Fragment, { children: [_jsx("button", { className: styles.addFriend, children: "Add Friend" }), _jsx("button", { className: styles.sendMessage, children: "Send Message" }), _jsx("button", { className: styles.listView, children: "List View" })] }));
}
export default Orchard;
