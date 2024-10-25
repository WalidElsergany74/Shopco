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
var action_1 = require("@/actions/action");
var fa_1 = require("react-icons/fa");
var navigation_1 = require("next/navigation");
var OrdersAdmin = function (_a) {
    var _b, _c, _d;
    var initialOrders = _a.initialOrders, totalItems = _a.totalItems;
    var _e = react_1.useState(initialOrders), orders = _e[0], setOrders = _e[1];
    var router = navigation_1.useRouter();
    var _f = react_1.useState(1), currentPage = _f[0], setCurrentPage = _f[1];
    var pageSize = 5; // Items per page
    var totalPages = Math.ceil(totalItems / pageSize);
    // Fetch orders for the current page
    var fetchOrders = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        var newOrders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, action_1.getOrdersAdmin(page)];
                case 1:
                    newOrders = _a.sent();
                    setOrders(newOrders);
                    return [2 /*return*/];
            }
        });
    }); };
    // Handle page change
    var handlePageChange = function (newPage) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCurrentPage(newPage);
                    return [4 /*yield*/, fetchOrders(newPage)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // Format date helper
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        var formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
        });
        var formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
        });
        return formattedDate + " at " + formattedTime;
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "w-full flex justify-between my-5" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-start space-y-3" },
                react_1["default"].createElement("h3", { className: "text-lg font-semibold text-slate-800" }, "Table with Orders"),
                react_1["default"].createElement("p", { className: "text-slate-500" },
                    "Open an order details to ",
                    react_1["default"].createElement("strong", null, "Change Order Status")))),
        ((_b = orders === null || orders === void 0 ? void 0 : orders.data) === null || _b === void 0 ? void 0 : _b.length) === 0 ? (react_1["default"].createElement("p", null, "No Orders Created Yet")) : (react_1["default"].createElement("div", { className: "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border" },
            react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" }, "Date"),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order ID"),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order Amount"),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order Status"),
                        react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order Details"))),
                react_1["default"].createElement("tbody", null, (_c = orders === null || orders === void 0 ? void 0 : orders.data) === null || _c === void 0 ? void 0 : _c.map(function (item) { return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                    react_1["default"].createElement("td", { className: "p-4 py-5 text-center" }, formatDate(item.createdAt)),
                    react_1["default"].createElement("td", { className: "p-4 py-5 text-center" }, item.documentId),
                    react_1["default"].createElement("td", { className: "p-4 py-5 text-center text-slate-700 font-semibold" },
                        item.amount,
                        "$"),
                    react_1["default"].createElement("td", { className: "p-4 py-5 text-center capitalize " + (item.orderstatus === "delivered" ? "text-green-500" : "text-red-500") }, item.orderstatus),
                    react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return router.push("/admin/orders/" + item.documentId); }, className: 'bg-green-600 text-white py-2 px-2 rounded-lg' },
                                react_1["default"].createElement(fa_1.FaEye, null)))))); }))),
            react_1["default"].createElement("div", { className: "flex justify-between items-center px-4 py-3" },
                react_1["default"].createElement("div", { className: "text-sm text-slate-500" },
                    "Showing ",
                    react_1["default"].createElement("b", null, (_d = orders === null || orders === void 0 ? void 0 : orders.data) === null || _d === void 0 ? void 0 : _d.length),
                    " of ",
                    totalItems),
                react_1["default"].createElement("div", { className: "flex space-x-1" },
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "px-3 py-1 text-sm font-normal " + (currentPage === 1 ? 'text-gray-400' : 'text-slate-500') + " border border-slate-200 rounded", onClick: function () { return currentPage > 1 && handlePageChange(currentPage - 1); }, disabled: currentPage === 1 }, "Prev"),
                    __spreadArrays(Array(totalPages)).map(function (_, i) { return (react_1["default"].createElement(ButtonIcon_1["default"], { key: i, className: "px-3 py-1 text-sm font-normal " + (i + 1 === currentPage ? 'bg-slate-800 text-white' : 'text-slate-500 border') + " rounded", onClick: function () { return handlePageChange(i + 1); } }, i + 1)); }),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "px-3 py-1 text-sm font-normal " + (currentPage === totalPages ? 'text-gray-400' : 'text-slate-500') + " border border-slate-200 rounded", onClick: function () { return currentPage < totalPages && handlePageChange(currentPage + 1); }, disabled: currentPage === totalPages }, "Next")))))));
};
exports["default"] = OrdersAdmin;
