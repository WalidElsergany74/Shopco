"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function page() {
    return (React.createElement("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6" },
        React.createElement("div", { className: "bg-white shadow-md rounded-lg p-8 max-w-md text-center" },
            React.createElement("h1", { className: "text-2xl font-bold text-red-600 mb-4" }, "This page is available to admins only"),
            React.createElement("p", { className: "text-gray-700 mb-6" }, "You can only access this page if you have the appropriate permissions."),
            React.createElement(link_1["default"], { className: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300", href: "/" }, "Return to Homepage"))));
}
exports["default"] = page;
