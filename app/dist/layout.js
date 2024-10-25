"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Footer_1 = require("./components/Footer");
var Header_1 = require("./components/Header");
var nextjs_1 = require("@clerk/nextjs");
var StoreProvider_1 = require("./StoreProvider");
var montserrat = google_1.Montserrat({
    subsets: ["latin"],
    display: "swap"
});
exports.metadata = {
    title: {
        template: "%s |  ShopCo.",
        "default": "Welcome | ShopCo."
    },
    desciption: "ShopCo is a brand have many clothes for mens and women , Have Many cateogries such as T-shirts Shorts Shirts Trousers Polo-Shirt Hats Shoeses"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement(StoreProvider_1["default"], null,
            React.createElement("html", { lang: "en" },
                React.createElement("body", { className: montserrat.className + "antialiased" },
                    React.createElement(Header_1["default"], null),
                    React.createElement("main", { className: " min-h-screen  " }, children),
                    React.createElement(Footer_1["default"], null))))));
}
exports["default"] = RootLayout;
