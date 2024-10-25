"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProductsList_1 = require("../components/ProductsList");
var navigation_1 = require("next/navigation");
var Input_1 = require("../components/ui/Input");
var Products = function () {
    var catId = parseInt(navigation_1.useParams().id);
    console.log(catId);
    var _a = react_1.useState(1000), maxPrice = _a[0], setMaxPrice = _a[1];
    var _b = react_1.useState(null), sort = _b[0], setSort = _b[1];
    return (react_1["default"].createElement("div", { className: 'products ' },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "left" },
                        react_1["default"].createElement("div", { className: 'filterItem' },
                            react_1["default"].createElement("h2", null, "Filter Categories"),
                            react_1["default"].createElement("div", { className: 'inputItem' },
                                react_1["default"].createElement("input", { type: 'checkbox', id: '1', value: 1 }),
                                react_1["default"].createElement("label", { htmlFor: '1' }, "Shoes")),
                            react_1["default"].createElement("div", { className: 'inputItem' },
                                react_1["default"].createElement("input", { type: 'checkbox', id: '2', value: 2 }),
                                react_1["default"].createElement("label", { htmlFor: '2' }, "T-Shirts")),
                            react_1["default"].createElement("div", { className: 'inputItem' },
                                react_1["default"].createElement("input", { type: 'checkbox', id: '3', value: 3 }),
                                react_1["default"].createElement("label", { htmlFor: '3' }, "Coats"))),
                        react_1["default"].createElement("div", { className: "filterItem" },
                            react_1["default"].createElement("h2", null, "Filter By Price"),
                            react_1["default"].createElement("div", { className: "inputItem" },
                                react_1["default"].createElement("span", null, "0"),
                                react_1["default"].createElement(Input_1["default"], { type: 'range', min: 0, max: maxPrice, onChange: function (e) { return setMaxPrice(parseInt(e.target.value)); } }),
                                react_1["default"].createElement("span", null, "1000"))),
                        react_1["default"].createElement("div", { className: "filterItem" },
                            react_1["default"].createElement("h2", null, "Sort By "),
                            react_1["default"].createElement("div", { className: "inputItem" },
                                react_1["default"].createElement(Input_1["default"], { type: 'radio', id: 'asc', value: "asc", name: 'price', onChange: function (e) { return setSort("asc"); } }),
                                react_1["default"].createElement("label", { htmlFor: 'asc' }, "Price (Lowest First)")),
                            react_1["default"].createElement("div", { className: "inputItem" },
                                react_1["default"].createElement(Input_1["default"], { type: 'radio', id: 'desc', value: "desc", name: 'price', onChange: function (e) { return setSort("desc"); } }),
                                react_1["default"].createElement("label", { htmlFor: 'desc' }, "Price (Highest First)"))))),
                react_1["default"].createElement("div", { className: "right" },
                    react_1["default"].createElement("img", { className: '', alt: "...", src: "https://walidelsergany74.github.io/CARA/img/banner/b1.jpg" }),
                    react_1["default"].createElement(ProductsList_1["default"], null))))));
};
exports["default"] = Products;
