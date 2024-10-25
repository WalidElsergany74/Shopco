"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var Badge1_png_1 = require("@/app/public/Badge1.png");
var Badge2_png_1 = require("@/app/public/Badge2.png");
var Badge3_png_1 = require("@/app/public/Badge3.png");
var Badge4_png_1 = require("@/app/public/Badge4.png");
var Badge5_png_1 = require("@/app/public/Badge5.png");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "bg-[#F0F0F0] " },
        react_1["default"].createElement("div", { className: "mx-auto relative max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", { className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" },
                react_1["default"].createElement("div", { className: "text-center sm:text-left" },
                    react_1["default"].createElement(link_1["default"], { href: "/", className: "uppercase text-4xl font-bold tracking-wider" }, "shopco."),
                    react_1["default"].createElement("p", { className: "text-gray-500 mt-5" }, "We have clothes that suits your style and which you\u2019re proud to wear. From women to men."),
                    react_1["default"].createElement("ul", { className: "flex md:justify-start justify-center  gap-6 mt-5 " },
                        react_1["default"].createElement("li", { className: "text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full" },
                            react_1["default"].createElement(link_1["default"], { href: "/", rel: "noreferrer", target: "_blank", className: " justify-center items-center flex  w-10 h-10 rounded-full  " },
                                react_1["default"].createElement(fa_1.FaTwitter, { size: 18 }))),
                        react_1["default"].createElement("li", { className: "text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full" },
                            react_1["default"].createElement(link_1["default"], { href: "/", rel: "noreferrer", target: "_blank", className: " justify-center items-center flex  w-10 h-10 rounded-full  " },
                                react_1["default"].createElement(fa_1.FaFacebook, { size: 18 }))),
                        react_1["default"].createElement("li", { className: "text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full" },
                            react_1["default"].createElement(link_1["default"], { href: "/", rel: "noreferrer", target: "_blank", className: " justify-center items-center flex  w-10 h-10 rounded-full  " },
                                react_1["default"].createElement(fa_1.FaGithub, { size: 18 }))),
                        react_1["default"].createElement("li", { className: "text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full" },
                            react_1["default"].createElement(link_1["default"], { href: "/", rel: "noreferrer", target: "_blank", className: " justify-center items-center flex  w-10 h-10 rounded-full  " },
                                react_1["default"].createElement(fa_1.FaInstagram, { size: 18 }))))),
                react_1["default"].createElement("div", { className: "text-center sm:text-left" },
                    react_1["default"].createElement("p", { className: "text-lg font-medium text-black uppercase" }, "Company"),
                    react_1["default"].createElement("ul", { className: "mt-8 space-y-4 text-sm" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "About")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Features")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Works")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Career")))),
                react_1["default"].createElement("div", { className: "text-center sm:text-left" },
                    react_1["default"].createElement("p", { className: "text-lg font-medium text-black uppercase" }, "Resources"),
                    react_1["default"].createElement("ul", { className: "mt-8 space-y-4 text-sm" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Free Books")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Yotube Playlist")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "How to -Blog")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Development Tutorial")))),
                react_1["default"].createElement("div", { className: "text-center sm:text-left" },
                    react_1["default"].createElement("p", { className: "text-lg font-medium text-black uppercase" }, "Helpful links"),
                    react_1["default"].createElement("ul", { className: "mt-8 space-y-4 text-sm" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "FAQs")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { className: "text-gray-500 transition text-base hover:text-gray-700/50", href: "/" }, "Support"))))),
            react_1["default"].createElement("hr", { className: 'mt-10' }),
            react_1["default"].createElement("div", { className: "mt-16  " },
                react_1["default"].createElement("div", { className: "mt-16 sm:flex sm:items-center sm:justify-between " },
                    react_1["default"].createElement("span", { className: 'text-gray-500' }, "ShopCo. \u00A9 2000-2025, All rights reserved"),
                    react_1["default"].createElement("div", { className: "flex justify-center items-center mt-6 md:mt-0" },
                        react_1["default"].createElement("img", { src: Badge1_png_1["default"], alt: "image.." }),
                        react_1["default"].createElement("img", { src: Badge2_png_1["default"], alt: "image.." }),
                        react_1["default"].createElement("img", { src: Badge5_png_1["default"], alt: "image.." }),
                        react_1["default"].createElement("img", { src: Badge3_png_1["default"], alt: "image.." }),
                        react_1["default"].createElement("img", { src: Badge4_png_1["default"], alt: "image.." })))))));
};
exports["default"] = Footer;
