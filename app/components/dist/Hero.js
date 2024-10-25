"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Hero_png_1 = require("@/app/public/Hero.png");
var Hero2_png_1 = require("@/app/public/Hero2.png"); // form smaal screens
var ButtonIcon_1 = require("./ui/ButtonIcon");
var brand1_png_1 = require("@/app/public/brand1.png");
var brand2_png_1 = require("@/app/public/brand2.png");
var brand3_png_1 = require("@/app/public/brand3.png");
var brand4_png_1 = require("@/app/public/brand4.png");
var brand5_png_1 = require("@/app/public/brand5.png");
var star_png_1 = require("@/app/public/star.png");
var Hero = function () {
    return (react_1["default"].createElement("div", { className: 'relative w-full min-h-screen mb-20  flex items-center' },
        react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: '  absolute hidden xl:block top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2', src: star_png_1["default"], alt: 'Hero image....' }),
        react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: '  absolute w-[70px] hidden xl:block z-10 right-10 top-20', src: star_png_1["default"], alt: 'Hero image....' }),
        react_1["default"].createElement("div", { className: 'flex flex-col md:flex-none flex-1 ' },
            react_1["default"].createElement("div", { className: "md:absolute order-2   md:inset-0 md:z-0 w-full h-full" },
                react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-full h-full object-cover hidden md:block', src: Hero_png_1["default"], alt: 'Hero image....' }),
                react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-full h-full object-cover block md:hidden', src: Hero2_png_1["default"], alt: 'Hero image....' })),
            react_1["default"].createElement("div", { className: "relative z-10 order-1   w-full p-6 lg:p-12 bg-[#F2F0F1]  md:bg-transparent" },
                react_1["default"].createElement("div", { className: 'max-w-xl text-center lg:text-left ' },
                    react_1["default"].createElement("h3", { className: 'font-extrabold lg:leading-[64px] text-4xl md:text-5xl lg:text-6xl uppercase' }, "FIND CLOTHES THAT MATCHES YOUR STYLE"),
                    react_1["default"].createElement("p", { className: 'text-gray-500 my-5' }, "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "bg-black text-white py-3 px-4 rounded-full hover:bg-white hover:text-black" }, "Shop Now"),
                    react_1["default"].createElement("div", { className: "flex justify-center flex-wrap lg:justify-start items-center gap-8 mt-5" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("span", { className: "block text-3xl md:text-4xl \r\n              \r\n              font-bold" }, "200+"),
                            react_1["default"].createElement("span", { className: "block text-sm md:text-lg text-gray-500" }, "International Brands")),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("span", { className: "block text-3xl md:text-4xl font-bold" }, "2,000+"),
                            react_1["default"].createElement("span", { className: "block text-sm md:text-lg text-gray-500" }, "Happy Customers")),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("span", { className: "block text-3xl md:text-4xl font-bold" }, "30,000+"),
                            react_1["default"].createElement("span", { className: "block text-sm md:text-lg text-gray-500" }, "Unique Products")))))),
        react_1["default"].createElement("div", { className: "flex justify-center md:justify-evenly flex-wrap gap-4 absolute -bottom-20 left-0  items-center  uppercase     bg-black w-full  py-8 px-2 " },
            react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-[116px] h-[23px] md:w-[166px] md:h-[34px]', src: brand1_png_1["default"], alt: 'Hero image....' }),
            react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-[63px] h-[26px] md:w-[96px] md:h-[38px] ', src: brand2_png_1["default"], alt: 'Hero image....' }),
            react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: ' w-[109px] h-[23px] md:w-[194px] md:h-[36px]', src: brand3_png_1["default"], alt: 'Hero image....' }),
            react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-[127px] h-[21px] md:w-[194px] md:h-[32px] ', src: brand4_png_1["default"], alt: 'Hero image....' }),
            react_1["default"].createElement(image_1["default"], { priority: true, quality: 100, className: 'w-[134px] h-[21px] md:w-[206px] md:h-[33px] ', src: brand5_png_1["default"], alt: 'Hero image....' }))));
};
exports["default"] = Hero;
