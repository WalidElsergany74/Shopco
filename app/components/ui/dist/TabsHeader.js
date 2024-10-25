"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("@material-tailwind/react");
var react_2 = require("react");
// تعريف المكون مع forwardRef
var MyTabsHeader = react_2.forwardRef(function (props, ref) {
    return (react_2["default"].createElement(react_1.TabsHeader, __assign({}, props, { ref: ref, className: "rounded-none border-b border-blue-gray-50 bg-transparent p-0", indicatorProps: {
            className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none"
        } }), props.children));
});
exports["default"] = MyTabsHeader;
