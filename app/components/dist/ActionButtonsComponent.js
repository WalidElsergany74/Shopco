"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
var ActionButtonsComponent = function () {
    return (React.createElement("div", { className: "action-buttons mt-6" },
        React.createElement("button", { className: "w-full text-lg bg-black text-white py-3 px-6 flex items-center justify-center space-x-2 rounded-md hover:bg-gray-800 transition-all duration-300" },
            React.createElement(md_1.MdOutlineShoppingBag, { size: 20 }),
            React.createElement("span", null, "Add to Cart")),
        React.createElement("button", { className: "mt-3 w-full text-lg border border-gray-300 py-3 px-6 flex items-center justify-center space-x-2 rounded-md hover:border-gray-500 transition-all duration-300" },
            React.createElement(fa_1.FaRegHeart, { size: 20 }),
            React.createElement("span", null, "Save to Wishlist"))));
};
exports["default"] = ActionButtonsComponent;
