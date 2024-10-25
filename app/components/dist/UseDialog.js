"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useDialog = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(null), selectedItem = _b[0], setSelectedItem = _b[1];
    var toggleDialog = function () {
        setIsOpen(!isOpen);
    };
    var openDialogWithItem = function (item) {
        setSelectedItem(item);
        setIsOpen(true);
    };
    var closeDialog = function () {
        setIsOpen(false);
        setSelectedItem(null);
    };
    return {
        isOpen: isOpen,
        selectedItem: selectedItem,
        toggleDialog: toggleDialog,
        openDialogWithItem: openDialogWithItem,
        closeDialog: closeDialog
    };
};
exports["default"] = useDialog;
