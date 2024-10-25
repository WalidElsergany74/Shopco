"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("./ui/Card");
var react_2 = require("swiper/react");
var modules_1 = require("swiper/modules");
var md_1 = require("react-icons/md");
require("swiper/css");
require("swiper/css/navigation");
var Drawer_1 = require("./Drawer");
var FeaturedProducts = function (_a) {
    var _b;
    var type = _a.type, data = _a.data;
    var _c = react_1.useState(false), reverse = _c[0], setReverse = _c[1];
    var _d = react_1.useState(false), showSizes = _d[0], setShowSizes = _d[1];
    var _e = react_1.useState(false), drawerOpen = _e[0], setDrawerOpen = _e[1];
    var _f = react_1.useState(null), selectedProductId = _f[0], setSelectedProductId = _f[1];
    var toggleDrawer = function () {
        setDrawerOpen(!drawerOpen);
        setShowSizes(false);
    };
    var toggleShowSizes = function (productId) {
        setShowSizes(!showSizes);
        setSelectedProductId(productId === selectedProductId ? null : productId);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "py-16" },
            react_1["default"].createElement("h1", { className: "text-4xl md:text-5xl font-extrabold text-center uppercase mb-7 " },
                type,
                " Products"),
            react_1["default"].createElement("div", { className: "container mx-auto  relative" },
                react_1["default"].createElement(react_2.Swiper, { modules: [modules_1.Navigation, modules_1.Autoplay], spaceBetween: 10, slidesPerView: 2, autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        reverseDirection: reverse
                    }, navigation: {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }, onReachEnd: function () { return setReverse(true); }, onReachBeginning: function () { return setReverse(false); }, loop: false, breakpoints: {
                        320: { slidesPerView: 1.7, spaceBetween: 15 },
                        400: { slidesPerView: 1.8, spaceBetween: 15 },
                        520: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 }
                    }, className: "product-swiper" }, (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.map(function (item) { return (react_1["default"].createElement(react_2.SwiperSlide, { key: item.id },
                    react_1["default"].createElement(Card_1["default"], { toggleShowSizes: function () { return toggleShowSizes(item.id); }, showSizes: selectedProductId === item.id, toggleDrawer: toggleDrawer, item: item }))); })),
                react_1["default"].createElement("div", { className: "hidden md:block" },
                    react_1["default"].createElement("div", { className: "swiper-button-prev hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 z-10" },
                        react_1["default"].createElement(md_1.MdArrowBackIos, { className: "text-2xl text-white p-2 rounded-full cursor-pointer" })),
                    react_1["default"].createElement("div", { className: "swiper-button-next hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 z-10" },
                        react_1["default"].createElement(md_1.MdArrowForwardIos, { className: "text-2xl text-white p-2 rounded-full cursor-pointer" }))))),
        react_1["default"].createElement(Drawer_1["default"], { openRight: drawerOpen, toggleDrawer: toggleDrawer })));
};
exports["default"] = FeaturedProducts;
