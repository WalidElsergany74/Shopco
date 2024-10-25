"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var image_1 = require("next/image");
var Categories = function (_a) {
    var cats = _a.cats;
    return (react_1["default"].createElement("div", { className: 'py-16 min-h-[60vh]' },
        react_1["default"].createElement("div", { className: 'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-20' },
            react_1["default"].createElement("div", { className: "grid grid-cols-2 md:grid-cols-2 gap-4" }, cats === null || cats === void 0 ? void 0 : cats.map(function (cat) {
                var _a;
                return (react_1["default"].createElement("div", { className: "relative ", key: cat.id },
                    react_1["default"].createElement(image_1["default"], { width: 800, height: 500, quality: 85, alt: "categories", src: (_a = cat === null || cat === void 0 ? void 0 : cat.img) === null || _a === void 0 ? void 0 : _a.url, className: "object-cover w-full h-full" }),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "absolute left-1/2 uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 flex items-center justify-center bg-white p-2.5 hover:bg-blue-500 hover:text-white text-black font-semibold" },
                        react_1["default"].createElement(link_1["default"], { className: '', href: "/products/" + cat.documentId }, cat.title))));
            })))));
};
exports["default"] = Categories;
