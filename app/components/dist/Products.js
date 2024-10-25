"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Input_1 = require("./ui/Input");
var Products = function () {
    return (react_1["default"].createElement("div", { className: 'products' },
        react_1["default"].createElement("div", { className: "left" },
            react_1["default"].createElement("div", { className: 'filterItem' },
                react_1["default"].createElement("h2", null, "Filter Categories"),
                react_1["default"].createElement("div", { className: 'inputItem' },
                    react_1["default"].createElement("label", { htmlFor: '1' }, "Shoes"),
                    react_1["default"].createElement("input", { type: 'checkbox', id: '1', value: 1 })),
                react_1["default"].createElement("div", { className: 'inputItem' },
                    react_1["default"].createElement("label", { htmlFor: '2' }, "T-Shirts"),
                    react_1["default"].createElement("input", { type: 'checkbox', id: '2', value: 2 })),
                react_1["default"].createElement("div", { className: 'inputItem' },
                    react_1["default"].createElement("label", { htmlFor: '3' }, "Coats"),
                    react_1["default"].createElement("input", { type: 'checkbox', id: '3', value: 3 }))),
            react_1["default"].createElement("div", { className: "filterItem" },
                react_1["default"].createElement("h2", null, "Filter By Price"),
                react_1["default"].createElement("div", { className: "inputItem" },
                    react_1["default"].createElement("span", null, "0"),
                    react_1["default"].createElement(Input_1["default"], { type: 'range', min: 0, max: 1000 }),
                    react_1["default"].createElement("span", null, "1000"))),
            react_1["default"].createElement("div", { className: "filterItem" },
                react_1["default"].createElement("h2", null, "Sort By "))),
        react_1["default"].createElement("div", { className: "right" })));
};
exports["default"] = Products;
