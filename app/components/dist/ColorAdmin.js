"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var fa_1 = require("react-icons/fa");
var lu_1 = require("react-icons/lu");
var UseDialog_1 = require("./UseDialog");
var EditColor_1 = require("./EditColor");
var DeleteColor_1 = require("./DeleteColor");
var AddColor_1 = require("./AddColor");
var ColorAdmin = function (_a) {
    var colors = _a.colors;
    var _b = UseDialog_1["default"](), isOpen = _b.isOpen, toggleDialog = _b.toggleDialog;
    var _c = react_1.useState(false), isOpenEdit = _c[0], setIsOpenEdit = _c[1];
    var _d = react_1.useState(false), isOpenDelete = _d[0], setIsOpenDelete = _d[1];
    var _e = react_1.useState(null), selectedEdit = _e[0], setSelectedEdit = _e[1];
    var _f = react_1.useState(null), selectedDelete = _f[0], setSelectedDelete = _f[1];
    var toggleDialogEdit = function () {
        setIsOpenEdit(function (prev) { return !prev; });
    };
    var toggleDialogDelete = function () {
        setIsOpenDelete(function (prev) { return !prev; });
    };
    var toggleEdit = function (documentId) {
        var selectedItem = colors.find(function (item) { return item.documentId === documentId; });
        setSelectedEdit(selectedItem || null);
        setIsOpenEdit(true); // Open the edit dialog
    };
    var toggleDelete = function (documentId) {
        var selectedItem = colors.find(function (item) { return item.documentId === documentId; });
        setSelectedDelete(selectedItem || null);
        setIsOpenDelete(true); // Open the edit dialog
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "products flex flex-col justify-center p-4" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-start items-start space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6" },
                react_1["default"].createElement("h1", { className: "text-3xl font-extrabold tracking-wider" }, "Colors"),
                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: toggleDialog, className: "py-2 px-4 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg" },
                    react_1["default"].createElement(fa_1.FaPlus, { size: 12 }),
                    react_1["default"].createElement("p", { className: "text-base font-semibold" }, "Create Color"))),
            colors.length === 0 ? (react_1["default"].createElement("p", null, "No Colors Created Yet")) : (react_1["default"].createElement("div", { className: "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border" },
                react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" }, "Name"),
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Actions"))),
                    react_1["default"].createElement("tbody", null, colors.map(function (item) { return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" }, item.title),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("div", { className: "flex items-center justify-center space-x-2" },
                                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return toggleEdit(item === null || item === void 0 ? void 0 : item.documentId); }, className: "bg-blue-800 text-white py-2 px-2 rounded-lg" },
                                    react_1["default"].createElement(lu_1.LuPencil, null)),
                                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return toggleDelete(item === null || item === void 0 ? void 0 : item.documentId); }, className: "bg-red-800 text-white py-2 px-2 rounded-lg" },
                                    react_1["default"].createElement(lu_1.LuTrash2, null)))))); })))))),
        react_1["default"].createElement(AddColor_1["default"], { toggleDialog: toggleDialog, isOpen: isOpen }),
        isOpenEdit && selectedEdit && (react_1["default"].createElement(EditColor_1["default"], { isOpenEdit: isOpenEdit, subs: selectedEdit, toggleDialogEdit: toggleDialogEdit })),
        isOpenDelete && selectedDelete && (react_1["default"].createElement(DeleteColor_1["default"], { subs: selectedDelete, toggleDialogDelete: toggleDialogDelete, isOpenDelete: isOpenDelete }))));
};
exports["default"] = ColorAdmin;
