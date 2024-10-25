"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var fa_1 = require("react-icons/fa");
var lu_1 = require("react-icons/lu");
var image_1 = require("next/image");
var link_1 = require("next/link");
var Alert_1 = require("./ui/Alert");
var action_1 = require("@/actions/action");
var ProductsAdmin = function (_a) {
    var products = _a.products, totalItems = _a.totalItems;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(""), search = _c[0], setSearch = _c[1];
    var _d = react_1.useState(products || []), filteredData = _d[0], setFilteredData = _d[1];
    var _e = react_1.useState(null), selectedProductId = _e[0], setSelectedProductId = _e[1];
    var _f = react_1.useState(1), currentPage = _f[0], setCurrentPage = _f[1];
    var pageSize = 5; // Items per page
    var totalPages = Math.ceil(totalItems / pageSize);
    var handleOpen = function (documentId) {
        setSelectedProductId(documentId);
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
        setSelectedProductId(null);
    };
    var handlePageChange = function (newPage) { return __awaiter(void 0, void 0, void 0, function () {
        var newProducts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCurrentPage(newPage);
                    return [4 /*yield*/, action_1.getProductsAdmin(newPage)];
                case 1:
                    newProducts = _a.sent();
                    setFilteredData((newProducts === null || newProducts === void 0 ? void 0 : newProducts.data) || []);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (search) {
            var results = (products === null || products === void 0 ? void 0 : products.filter(function (item) {
                return item.title.toLowerCase().includes(search.toLowerCase());
            })) || [];
            setFilteredData(results);
        }
        else {
            setFilteredData(products || []);
        }
    }, [search, products]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "w-full flex justify-between my-5" },
            react_1["default"].createElement("div", { className: 'flex flex-col justify-start space-y-3' },
                react_1["default"].createElement("h3", { className: "text-lg font-semibold text-slate-800" }, "Table with products"),
                react_1["default"].createElement("p", { className: "text-slate-500" }, "Overview of the current products."))),
        react_1["default"].createElement("div", { className: "flex flex-col space-y-2 md:space-y-0 md:flex-row gap-1 w-full justify-start items-start md:justify-between md:items-center mb-5" },
            react_1["default"].createElement("div", { className: "w-full max-w-xs min-w-[100px] relative" },
                react_1["default"].createElement("div", { className: "relative" },
                    react_1["default"].createElement("input", { value: search, onChange: function (e) { return setSearch(e.target.value); }, className: "bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md", placeholder: "Search for invoice..." }),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded" },
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "3", stroke: "currentColor", className: "w-8 h-8 text-slate-600" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }))))),
            react_1["default"].createElement(link_1["default"], { href: "/admin/addProducts", className: 'py-2 px-4 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg' },
                react_1["default"].createElement(fa_1.FaPlus, { size: 12 }),
                react_1["default"].createElement("p", { className: 'text-base font-semibold' }, "Create Product"))),
        filteredData.length === 0 ? (react_1["default"].createElement("p", null, "No Products Created Yet")) : (react_1["default"].createElement("div", { className: "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border" },
            react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Image")),
                        react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Name")),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Category")),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Color")),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Price")),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Actions")))),
                react_1["default"].createElement("tbody", null, filteredData.map(function (item) {
                    var _a;
                    return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                        react_1["default"].createElement("td", { className: "p-4 py-5" },
                            react_1["default"].createElement(image_1["default"], { src: (_a = item === null || item === void 0 ? void 0 : item.img1) === null || _a === void 0 ? void 0 : _a.url, quality: 85, width: 70, height: 70, alt: "Product Image", className: "" })),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500" }, item.title)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500 capitalize" }, item.sub_category.title)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500 capitalize" }, item.color.title)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500" },
                                item.price,
                                "$")),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("div", { className: "flex items-center justify-center space-x-2" },
                                react_1["default"].createElement(link_1["default"], { href: "/product/" + item.documentId, className: 'bg-green-800 text-white py-2 px-2 rounded-lg' },
                                    react_1["default"].createElement(fa_1.FaEye, null)),
                                react_1["default"].createElement(link_1["default"], { href: "/admin/editProduct/" + item.documentId, className: 'bg-blue-800 text-white py-2 px-2 rounded-lg' },
                                    react_1["default"].createElement(lu_1.LuPencil, null)),
                                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return handleOpen(item.documentId); }, className: 'bg-red-800 text-white py-2 px-2 rounded-lg' },
                                    react_1["default"].createElement(lu_1.LuTrash2, null))))));
                }))),
            react_1["default"].createElement("div", { className: "flex justify-between items-center px-4 py-3" },
                react_1["default"].createElement("div", { className: "text-sm text-slate-500" },
                    "Showing ",
                    react_1["default"].createElement("b", null, filteredData.length),
                    " of ",
                    totalItems),
                react_1["default"].createElement("div", { className: "flex space-x-1" },
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "px-3 py-1 text-sm font-normal " + (currentPage === 1 ? 'text-gray-400' : 'text-slate-500') + " border border-slate-200 rounded", onClick: function () { return currentPage > 1 && handlePageChange(currentPage - 1); }, disabled: currentPage === 1 }, "Prev"),
                    __spreadArrays(Array(totalPages)).map(function (_, i) { return (react_1["default"].createElement(ButtonIcon_1["default"], { key: i, className: "px-3 py-1 text-sm font-normal " + (i + 1 === currentPage ? 'bg-slate-800 text-white' : 'text-slate-500 border') + " rounded", onClick: function () { return handlePageChange(i + 1); } }, i + 1)); }),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "px-3 py-1 text-sm font-normal " + (currentPage === totalPages ? 'text-gray-400' : 'text-slate-500') + " border border-slate-200 rounded", onClick: function () { return currentPage < totalPages && handlePageChange(currentPage + 1); }, disabled: currentPage === totalPages }, "Next"))))),
        react_1["default"].createElement(Alert_1.Alert, { open: open, handleOpen: handleClose, products: products, documentId: selectedProductId })));
};
exports["default"] = ProductsAdmin;
