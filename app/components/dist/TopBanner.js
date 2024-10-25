"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var ai_1 = require("react-icons/ai");
var TopBanner = function () {
    var _a = react_1.useState(false), close = _a[0], setClose = _a[1];
    var toggleClosed = function () {
        setClose(!close);
    };
    return (react_1["default"].createElement("div", { className: "bg-black text-white text-center px-1 lg:px-6 py-1.5 transition-all duration-700 transform " + (close ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0") + " " + (close ? "hidden" : "block") },
        react_1["default"].createElement("div", { className: "flex items-center justify-between" },
            react_1["default"].createElement("div", { className: "flex-1 flex items-center justify-center" },
                react_1["default"].createElement("p", { className: "md:mr-2 text-sm md:text-base" }, "Sign up and get 20% off your first order."),
                react_1["default"].createElement(link_1["default"], { href: "/sign-up", className: "underline text-sm md:text-base" }, "Sign Up Now")),
            react_1["default"].createElement(ButtonIcon_1["default"], { onClick: toggleClosed, "aria-label": "Close banner" },
                react_1["default"].createElement(ai_1.AiOutlineClose, { size: 18 })))));
};
exports["default"] = TopBanner;
