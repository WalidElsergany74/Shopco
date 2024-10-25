"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
require("chart.js/auto");
var fa6_1 = require("react-icons/fa6");
var ti_1 = require("react-icons/ti");
var hi2_1 = require("react-icons/hi2");
var Dashboard = function (_a) {
    var orderStatus = _a.orderStatus, totalOrders = _a.totalOrders, totalProducts = _a.totalProducts, totalEarnings = _a.totalEarnings;
    var data = {
        labels: ['Placed', 'Processing', 'Shipping', 'Delivered'],
        datasets: [
            {
                label: 'Order Status',
                data: [
                    orderStatus.placed || 0,
                    orderStatus.shipping || 0,
                    orderStatus.processing || 0,
                    orderStatus.delivered || 0,
                ],
                backgroundColor: ['#ef4444', '#4f46e5', '#f59e0b', '#10b981'],
                hoverOffset: 4
            },
        ]
    };
    var options = {
        responsive: true,
        maintainAspectRatio: false
    };
    return (react_1["default"].createElement("div", { className: "p-5 bg-gray-100 min-h-screen" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-8" }, "Admin Dashboard"),
        react_1["default"].createElement("div", { className: "grid gap-6 mb-8 grid-cols-1 md:grid-cols-3" },
            react_1["default"].createElement("div", { className: "p-6 bg-white rounded-lg shadow-md border border-gray-200 border-b-4 border-b-[#4f46e5]" },
                react_1["default"].createElement("h3", { className: "text-gray-600 font-semibold mb-1" }, "Total Orders"),
                react_1["default"].createElement("div", { className: "flex justify-between items-center" },
                    react_1["default"].createElement("p", { className: "text-2xl font-bold text-indigo-600" }, totalOrders),
                    react_1["default"].createElement(fa6_1.FaCartArrowDown, { color: '4f46e5', size: 22 }))),
            react_1["default"].createElement("div", { className: "p-6 bg-white rounded-lg shadow-md border border-gray-200 border-b-4 border-b-[#10b981]" },
                react_1["default"].createElement("h3", { className: "text-gray-600 font-semibold mb-1" }, "Total Products"),
                react_1["default"].createElement("div", { className: "flex justify-between items-center " },
                    react_1["default"].createElement("p", { className: "text-2xl font-bold text-green-500" }, totalProducts),
                    react_1["default"].createElement(ti_1.TiShoppingCart, { color: "#10b981", size: 24 }))),
            react_1["default"].createElement("div", { className: "p-6 bg-white rounded-lg shadow-md border border-gray-200 border-b-4 border-b-[#f59e0b]" },
                react_1["default"].createElement("h3", { className: "text-gray-600 font-semibold mb-1" }, "Total Earnings"),
                react_1["default"].createElement("div", { className: "flex justify-between items-center" },
                    react_1["default"].createElement("p", { className: "text-2xl font-bold text-yellow-500" },
                        "$",
                        totalEarnings),
                    react_1["default"].createElement(hi2_1.HiMiniCurrencyDollar, { size: 24, color: '#f59e0b' })))),
        react_1["default"].createElement("div", { className: "p-6 bg-white rounded-lg shadow-md border border-gray-200" },
            react_1["default"].createElement("h3", { className: "text-gray-600 font-semibold mb-4" }, "Order Status Overview"),
            react_1["default"].createElement("div", { className: 'mx-auto w-full h-72' },
                react_1["default"].createElement(react_chartjs_2_1.Doughnut, { data: data, options: options })))));
};
exports["default"] = Dashboard;
