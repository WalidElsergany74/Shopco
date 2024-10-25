"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var image_1 = require("next/image");
var react_1 = require("react");
var verified_gif_1 = require("@/app/public/verified.gif");
var link_1 = require("next/link");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
exports.metadata = {
    title: "Payment Successful - ShopCo | Men's and Women's Fashion",
    description: "Thank you for your purchase at ShopCo! Explore a wide range of clothing for men and women, including T-shirts, Shorts, Shirts, Trousers, Polo-Shirts, Hats, and Shoes. Shop the latest fashion trends with a seamless checkout process.",
    keywords: "payment successful, ShopCo, online clothing store, men's fashion, women's fashion, T-shirts, Shorts, Shirts, Trousers, Polo-Shirts, Hats, Shoes, fashion shopping, online store"
};
function PaymentConfirm() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: 'flex p-4 min-h-screen flex-col items-center justify-center px-5 ' },
            react_1["default"].createElement(image_1["default"], { src: verified_gif_1["default"], alt: 'check', width: 130, height: 130 }),
            react_1["default"].createElement("h2", { className: 'text-[24px]' }, "Payment Successful !"),
            react_1["default"].createElement("h2", { className: 'text-[17px] text-center mt-6 text-gray-500' }, "We sent an email with your order confirmation along with Digital Content"),
            react_1["default"].createElement(link_1["default"], { href: "/", className: 'p-2 mt-6 bg-cyan-400 text-white rounded-md bg-primary' }, "Go to Home")),
        react_1["default"].createElement(Footer_1["default"], null)));
}
exports["default"] = PaymentConfirm;
