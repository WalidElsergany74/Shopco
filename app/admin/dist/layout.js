"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var loading_1 = require("../loading");
var NavAdmin_1 = require("../components/NavAdmin");
var sl_1 = require("react-icons/sl");
var pi_1 = require("react-icons/pi");
var pi_2 = require("react-icons/pi");
var md_1 = require("react-icons/md");
var tb_1 = require("react-icons/tb");
var io5_1 = require("react-icons/io5");
var pi_3 = require("react-icons/pi");
var AdminLayout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "grid grid-cols-12 w-full min-h-screen " },
        React.createElement("aside", { className: "transition-all bg-[#fff] col-span-1 lg:col-span-2 duration-300  border-r border-gray-300" },
            React.createElement("div", { className: "p-[14px] border-b border-b-gray-300" },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("h2", { className: "text-3xl tracking-widest font-extrabold hidden lg:block" }, "SHOPCO."))),
            React.createElement("nav", { className: "mt-4" },
                React.createElement("ul", { className: "space-y-2" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin", className: "flex justify-start p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(sl_1.SlChart, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Dashboard"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/products", className: "flex justify-start items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(pi_1.PiTShirt, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Products"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/orders", className: "flex items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(pi_2.PiShoppingCart, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Orders"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/categories", className: "flex items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(tb_1.TbCategory, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Categories"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/subcategories", className: "flex items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(md_1.MdOutlineCategory, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Sub-Categories"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/colors", className: "flex items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(io5_1.IoColorPaletteOutline, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Colors"))),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/admin/sizes", className: "flex items-center  p-2  md:p-4 text-gray-600 hover:bg-gray-200" },
                            React.createElement(pi_3.PiXLogoLight, { size: 20, className: " md:mr-2" }),
                            React.createElement("span", { className: "hidden lg:block" }, "Sizes")))))),
        React.createElement(react_1.Suspense, { fallback: React.createElement(loading_1["default"], null) },
            React.createElement("main", { className: "col-span-11 lg:col-span-10 bg-[#f1f5f9] " },
                React.createElement("div", { className: "bg-[#fff]" },
                    React.createElement(NavAdmin_1["default"], null)),
                React.createElement("div", { className: "p-3" },
                    children,
                    " ")))));
};
exports["default"] = AdminLayout;
