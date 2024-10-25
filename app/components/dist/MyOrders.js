"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MyOrders = function (_a) {
    var _b, _c;
    var initialOrders = _a.initialOrders;
    var _d = react_1.useState(initialOrders), orders = _d[0], setOrders = _d[1];
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
    return (react_1["default"].createElement("div", { className: 'min-h-screen py-5 px-6' },
        react_1["default"].createElement("div", { className: "flex flex-col  p-4" },
            react_1["default"].createElement("h3", { className: 'text-2xl font-bold capatilize tracking-wider' }, "My Orders"),
            ((_b = orders === null || orders === void 0 ? void 0 : orders.data) === null || _b === void 0 ? void 0 : _b.length) === 0 ? (react_1["default"].createElement("p", null, "No Orders Created Yet")) : (react_1["default"].createElement("div", { className: "relative mt-4  flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border" },
                react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" }, "Date"),
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order ID"),
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order Amount"),
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50 text-center" }, "Order Status"))),
                    react_1["default"].createElement("tbody", null, (_c = orders === null || orders === void 0 ? void 0 : orders.data) === null || _c === void 0 ? void 0 : _c.map(function (item) { return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" }, formatDate(item.createdAt)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" }, item.documentId),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center text-slate-700 font-semibold" },
                            item.amount,
                            "$"),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center capitalize " + (item.orderstatus === "delivered" ? "text-green-500" : "text-red-500") }, item.orderstatus))); }))))))));
};
exports["default"] = MyOrders;
