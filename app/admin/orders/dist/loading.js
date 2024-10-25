"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Loading = function () {
    var _a = react_1.useState(true), isLoading = _a[0], setIsLoading = _a[1]; // Start loading as true
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            setIsLoading(false); // Set loading to false after 5 seconds
        }, 5000); // Delay for 5 seconds
        return function () { return clearTimeout(timer); }; // Cleanup the timer on unmount
    }, []); // Empty dependency array to run once on mount
    if (!isLoading) {
        return null; // Don't render anything if not loading
    }
    return (react_1["default"].createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center" },
            react_1["default"].createElement("div", { className: "loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid" }),
            react_1["default"].createElement("span", { className: "text-white mt-4 text-lg font-medium" }, "Loading..."))));
};
exports["default"] = Loading;
