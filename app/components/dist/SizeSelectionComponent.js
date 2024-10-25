"use strict";
exports.__esModule = true;
var SizeSelectionComponent = function (_a) {
    var sizes = _a.sizes;
    return (React.createElement("div", { className: "flex gap-2 mt-2 flex-wrap" }, sizes.map(function (size) { return (React.createElement("button", { key: size, className: "size-btn px-4 py-2 rounded-md border border-black hover:bg-black hover:text-white transition-all duration-300" }, size)); })));
};
exports["default"] = SizeSelectionComponent;
