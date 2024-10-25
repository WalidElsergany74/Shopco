"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PhoneInput = react_1.forwardRef(function (_a, ref) {
    var value = _a.value, onChange = _a.onChange, countrySelectorStyleProps = _a.countrySelectorStyleProps, className = _a.className;
    return (react_1["default"].createElement("div", { className: countrySelectorStyleProps.buttonClassName },
        react_1["default"].createElement("input", { ref: ref, value: value, onChange: onChange, className: className, placeholder: "Enter your phone number" })));
});
exports["default"] = PhoneInput;
