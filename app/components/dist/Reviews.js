"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var md_1 = require("react-icons/md");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var fa_1 = require("react-icons/fa");
var modules_1 = require("swiper/modules");
var react_2 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
var Reviews = function (_a) {
    var _b;
    var product = _a.product;
    var _c = react_1.useState(false), reverse = _c[0], setReverse = _c[1];
    var _d = react_1.useState(true), isBeginning = _d[0], setIsBeginning = _d[1];
    var _e = react_1.useState(false), isEnd = _e[0], setIsEnd = _e[1];
    var swiperRef = react_1.useRef(null);
    return (react_1["default"].createElement("section", { className: " bg-gray-50 md:mb-[90px] " },
        react_1["default"].createElement("div", { className: "mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24" },
            react_1["default"].createElement("div", { className: "max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8" },
                react_1["default"].createElement("h2", { className: "max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "Read trusted reviews from our customers"),
                react_1["default"].createElement("div", { className: "mt-8 flex gap-4 lg:mt-0" },
                    react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { var _a; return (_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.slidePrev(); }, className: "rounded-full border p-3 transition " + (isBeginning ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-black text-black hover:bg-black hover:text-white"), disabled: isBeginning },
                        react_1["default"].createElement(md_1.MdOutlineKeyboardArrowLeft, { size: 20 })),
                    react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { var _a; return (_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.slideNext(); }, className: "rounded-full border p-3 transition " + (isEnd ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-black text-black hover:bg-black hover:text-white"), disabled: isEnd },
                        react_1["default"].createElement(md_1.MdOutlineKeyboardArrowRight, { size: 20 })))),
            react_1["default"].createElement(react_2.Swiper, { modules: [modules_1.Navigation, modules_1.Autoplay], spaceBetween: 30, slidesPerView: 1.2, autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    reverseDirection: reverse
                }, onReachEnd: function () { return setReverse(true); }, onReachBeginning: function () { return setReverse(false); }, loop: false, onSwiper: function (swiper) { return (swiperRef.current = swiper); }, onSlideChange: function (swiper) {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }, breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    520: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2.2, spaceBetween: 40 },
                    1024: { slidesPerView: 3.0, spaceBetween: 50 }
                } },
                react_1["default"].createElement(react_2.SwiperSlide, null, (_b = product === null || product === void 0 ? void 0 : product.reviews) === null || _b === void 0 ? void 0 : _b.map(function (review) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "mt-8 rounded-md   ", key: review.id },
                        react_1["default"].createElement("div", { className: " w-full" },
                            react_1["default"].createElement("div", { className: "flex rounded-lg w-full  flex-col justify-between bg-white shadow-sm p-2 md:p-4 lg:p-[2rem]" },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: "flex gap-0.5 text-yellow-500 my-3 mb-3  " },
                                        react_1["default"].createElement("div", { className: "flex space-x-1" }, Array.from({ length: 5 }, function (_, index) { return (react_1["default"].createElement(fa_1.FaStar, { key: index, size: 14, className: index < (review === null || review === void 0 ? void 0 : review.rating) ? 'text-yellow-500' : 'text-gray-300' })); }))),
                                    react_1["default"].createElement("p", { className: "text-lg font-bold sm:text-2xl capitalize " }, review === null || review === void 0 ? void 0 : review.reviewerName),
                                    react_1["default"].createElement("p", { className: "mt-4 leading-relaxed text-gray-700" }, review === null || review === void 0 ? void 0 : review.comment)),
                                react_1["default"].createElement("span", { className: "my-4 text-sm font-medium text-gray-700 sm:mt-6" },
                                    "\u2014 Posted on ",
                                    new Date(review.createdAt).toISOString().split('T')[0])))))); })),
                react_1["default"].createElement(react_2.SwiperSlide, null)))));
};
exports["default"] = Reviews;
