"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function NotFound() {
    return (React.createElement("div", { className: "fixed inset-0 flex items-center justify-center w-screen h-screen" },
        React.createElement("div", { className: "px-4 lg:py-12" },
            React.createElement("div", { className: "lg:gap-4 lg:flex" },
                React.createElement("div", { className: "flex flex-col items-center justify-center md:py-24 lg:py-32" },
                    React.createElement("h1", { className: "font-bold text-indigo-600 text-9xl" }, "404"),
                    React.createElement("p", { className: "mb-2 text-2xl font-bold text-center  md:text-3xl" },
                        React.createElement("span", { className: "text-red-500" }, "Oops!"),
                        " ",
                        React.createElement("span", null, "Page not found")),
                    React.createElement("p", { className: "mb-8 text-center md:text-lg" }, "The page you\u2019re looking for doesn\u2019t exist."),
                    React.createElement(link_1["default"], { href: "/", className: "inline-block bg-indigo-600 p-2 text-white rounded-md" }, "Go Home"))))));
}
exports["default"] = NotFound;
