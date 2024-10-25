"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var lu_1 = require("react-icons/lu");
var fa_1 = require("react-icons/fa");
var DialogCat_1 = require("./ui/DialogCat");
var DialogCatEdit_1 = require("./DialogCatEdit");
var DeleteCat_1 = require("./ui/DeleteCat");
var CatAdmin = function (_a) {
    var categories = _a.categories;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState(false), isOpenEdit = _c[0], setIsOpenEdit = _c[1];
    var _d = react_1.useState(false), isOpenDelete = _d[0], setIsOpenDelete = _d[1];
    var _e = react_1.useState(null), selectedCategory = _e[0], setSelectedCategory = _e[1]; // Single category instead of array
    var _f = react_1.useState(null), selectedCategoryD = _f[0], setSelectedCategoryD = _f[1]; // Single category instead of array
    var toggleDialog = function () {
        setIsOpen(!isOpen);
    };
    var toggleDialogEdit = function (catId) {
        var cat = categories.find(function (item) { return item.documentId === catId; });
        setSelectedCategory(cat || null); // Set the selected category
        setIsOpenEdit(!isOpenEdit); // Toggle the edit dialog
    };
    var toggleDialogDelete = function (catId) {
        var cat = categories.find(function (item) { return item.documentId === catId; });
        setSelectedCategoryD(cat || null); // Set the selected category
        setIsOpenDelete(!isOpenDelete); // Toggle the edit dialog
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "products flex flex-col justify-center p-4" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-start items-start space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6" },
                react_1["default"].createElement("h1", { className: "text-3xl font-extrabold tracking-wider" }, "Categories"),
                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: toggleDialog, className: "py-2 px-4 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg" },
                    react_1["default"].createElement(fa_1.FaPlus, { size: 12 }),
                    react_1["default"].createElement("p", { className: "text-base font-semibold" }, "Create Category"))),
            categories.length === 0 ? (react_1["default"].createElement("p", null, "No Categories Created Yet")) : (react_1["default"].createElement("div", { className: "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border" },
                react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Image")),
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Name")),
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Actions")))),
                    react_1["default"].createElement("tbody", null, categories.map(function (item) {
                        var _a;
                        return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                            react_1["default"].createElement("td", { className: "p-4 py-5" },
                                react_1["default"].createElement(image_1["default"], { src: (_a = item === null || item === void 0 ? void 0 : item.img) === null || _a === void 0 ? void 0 : _a.url, quality: 85, width: 70, height: 70, alt: "Category Image" })),
                            react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                                react_1["default"].createElement("p", { className: "text-sm text-slate-500" }, item.title)),
                            react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                                react_1["default"].createElement("div", { className: "flex items-center justify-center space-x-2" },
                                    react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return toggleDialogEdit(item === null || item === void 0 ? void 0 : item.documentId); }, className: "bg-blue-800 text-white py-2 px-2 rounded-lg" },
                                        react_1["default"].createElement(lu_1.LuPencil, null)),
                                    react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return toggleDialogDelete(item === null || item === void 0 ? void 0 : item.documentId); }, className: "bg-red-800 text-white py-2 px-2 rounded-lg" },
                                        react_1["default"].createElement(lu_1.LuTrash2, null))))));
                    })))))),
        react_1["default"].createElement(DialogCat_1["default"], { isOpen: isOpen, toggleDialog: toggleDialog }),
        selectedCategory && (react_1["default"].createElement(DialogCatEdit_1["default"], { category: selectedCategory, isOpenEdit: isOpenEdit, toggleDialogEdit: toggleDialogEdit })),
        selectedCategoryD && (react_1["default"].createElement(DeleteCat_1["default"], { category: selectedCategoryD, isOpenDelete: isOpenDelete, toggleDialogDelete: toggleDialogDelete }))));
};
exports["default"] = CatAdmin;
