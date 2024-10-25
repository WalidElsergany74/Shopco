"use strict";
exports.__esModule = true;
var TopBanner_1 = require("./TopBanner");
var Navbar_1 = require("./Navbar");
var Header = function () {
    return (React.createElement("header", { className: "bg-white shadow-md w-full sticky top-0 left-0 z-30  " },
        React.createElement(TopBanner_1["default"], null),
        React.createElement(Navbar_1["default"], null)));
};
exports["default"] = Header;
