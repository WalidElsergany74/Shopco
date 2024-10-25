"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Input_1 = require("@/app/components/ui/Input");
var ProductsList_1 = require("@/app/components/ProductsList");
var fa_1 = require("react-icons/fa");
var ButtonIcon_1 = require("@/app/components/ui/ButtonIcon");
var ai_1 = require("react-icons/ai");
var swr_1 = require("swr");
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
var ProductsCo = function (_a) {
    var data = _a.data, id = _a.id, colors = _a.colors;
    var _b = react_1.useState([]), selectedSubCats = _b[0], setSelectedSubCats = _b[1];
    var _c = react_1.useState([]), selectedColors = _c[0], setSelectedColors = _c[1];
    var _d = react_1.useState(10000), maxPrice = _d[0], setMaxPrice = _d[1];
    var _e = react_1.useState(null), sort = _e[0], setSort = _e[1];
    // const [products, setProducts] =useState<IProduct[]>([])
    var _f = react_1.useState(true), showCategories = _f[0], setShowCategories = _f[1];
    var _g = react_1.useState(true), showColors = _g[0], setShowColors = _g[1];
    var _h = react_1.useState(true), showPrice = _h[0], setShowPrice = _h[1];
    var _j = react_1.useState(true), showSort = _j[0], setShowSort = _j[1];
    var _k = react_1.useState(false), menuOpen = _k[0], setMenuOpen = _k[1];
    var toggleMenu = function () {
        setMenuOpen(!menuOpen);
    };
    var handleChange = function (e) {
        var value = e.target.value;
        var isChecked = e.target.checked;
        setSelectedSubCats(isChecked ? __spreadArrays(selectedSubCats, [value]) : selectedSubCats.filter(function (item) { return item !== value; }));
    };
    var handleChangeColors = function (e) {
        var value = e.target.value;
        var isChecked = e.target.checked;
        setSelectedColors(isChecked ? __spreadArrays(selectedColors, [value]) : selectedColors.filter(function (item) { return item !== value; }));
    };
    var subCategoriesQuery = selectedSubCats
        .map(function (item) { return "&filters[sub_category][documentId][$eq]=" + item; })
        .join('');
    var colorsQuery = selectedColors
        .map(function (item) { return "&filters[color][documentId][$eq]=" + item; })
        .join('');
    var sortQuery = '';
    if (sort) {
        sortQuery = "&sort=price:" + sort;
    }
    var _l = swr_1["default"]("http://localhost:1337/api/products?populate=*&filters[category][documentId]=" + id + subCategoriesQuery + colorsQuery + "&filters[price][$lte]=" + maxPrice + "&" + sortQuery, fetcher), productsData = _l.data, isLoading = _l.isLoading;
    var products = (productsData === null || productsData === void 0 ? void 0 : productsData.data) || [];
    return (react_1["default"].createElement("div", { className: 'products py-5 md:py-7 lg:py-10 px-[5px]  md:px-[10px] lg:px-[20px] xl:px-[50px] lg:flex gap-3 min-h-screen ' },
        react_1["default"].createElement("div", { className: "left border-2 sticky top-[130px] h-full hidden md:hidden lg:block border-gray-100 px-4 py-6 rounded-2xl lg:w-[30%] xl:w-[20%]" },
            react_1["default"].createElement("div", { className: 'filterItem' },
                react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowCategories(!showCategories); } },
                    react_1["default"].createElement("h2", { className: 'font-semibold text-2xl mb-1' }, "Products Categories"),
                    showCategories ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                showCategories && (react_1["default"].createElement(react_1["default"].Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (item) { return (react_1["default"].createElement("div", { className: 'mt-2', key: item.id },
                    react_1["default"].createElement("div", { className: 'inputItem' },
                        react_1["default"].createElement("div", { className: 'flex items-center mb-1' },
                            react_1["default"].createElement("input", { onChange: handleChange, type: 'checkbox', id: item.documentId, value: item.documentId, className: 'w-5 h-5 rounded-md appearance-none border border-gray-400  checked:bg-blue-600 relative checked:before:content-["\u2713"] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:outline-none checked:border-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2' }),
                            react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium capitalize', htmlFor: item.documentId }, item.title))))); })))),
            react_1["default"].createElement("div", { className: "filterItem my-3" },
                react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowColors(!showColors); } },
                    react_1["default"].createElement("h2", { className: 'font-semibold text-2xl mb-2' }, "Filter By Colors"),
                    showColors ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                showColors && (react_1["default"].createElement(react_1["default"].Fragment, null, colors === null || colors === void 0 ? void 0 : colors.map(function (color) { return (react_1["default"].createElement("div", { className: "mt-2", key: color.id },
                    react_1["default"].createElement("div", { className: 'inputItem' },
                        react_1["default"].createElement("div", { className: 'flex items-center mb-1' },
                            react_1["default"].createElement("input", { onChange: handleChangeColors, type: 'checkbox', id: color.documentId, value: color.documentId, className: 'w-5 h-5 rounded-md appearance-none border border-gray-400  checked:bg-blue-600 relative checked:before:content-["\u2713"] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:outline-none checked:border-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2' }),
                            react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium capitalize', htmlFor: color.documentId }, color.title))))); })))),
            react_1["default"].createElement("div", { className: "filterItem my-3" },
                react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowPrice(!showPrice); } },
                    react_1["default"].createElement("h2", { className: 'font-semibold text-2xl mb-2' }, "Filter By Price"),
                    showPrice ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                showPrice && (react_1["default"].createElement("div", { className: "mt-2 flex items-center space-x-1" },
                    react_1["default"].createElement("span", null, "0"),
                    react_1["default"].createElement(Input_1["default"], { value: maxPrice, type: 'range', min: 0, max: 10000, onChange: function (e) { return setMaxPrice(parseInt(e.target.value)); } }),
                    react_1["default"].createElement("span", null, maxPrice)))),
            react_1["default"].createElement("div", { className: "filterItem my-3" },
                react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowSort(!showSort); } },
                    react_1["default"].createElement("h2", { className: 'font-semibold text-2xl mb-2' }, "Sort By"),
                    showSort ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                showSort && (react_1["default"].createElement("div", { className: 'my-2' },
                    react_1["default"].createElement("div", { className: "inputItem flex items-center my-2 " },
                        react_1["default"].createElement(Input_1["default"], { className: 'w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-600 checked:border-white focus:outline-none focus:ring-2 focus:ring-blue-600 checked:ring-2 checked:ring-blue-600', type: 'radio', id: 'asc', value: "asc", name: 'price', onChange: function () { return setSort("asc"); } }),
                        react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium', htmlFor: 'asc' }, "Price (Lowest First)")),
                    react_1["default"].createElement("div", { className: "inputItem flex items-center my-2" },
                        react_1["default"].createElement(Input_1["default"], { className: 'w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-600 checked:border-white focus:outline-none focus:ring-2 focus:ring-blue-600 checked:ring-2 checked:ring-blue-600', type: 'radio', id: 'desc', value: "desc", name: 'price', onChange: function () { return setSort("desc"); } }),
                        react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium', htmlFor: 'desc ' }, "Price (Highest First)")))))),
        react_1["default"].createElement("div", { className: "relative" },
            menuOpen && (react_1["default"].createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300", onClick: toggleMenu })),
            react_1["default"].createElement("div", { className: "fixed top-0 left-0 w-full md:w-1/2 md:rounded-e-lg h-full p-3 bg-white shadow-lg transform transition-transform duration-300 \n      " + (menuOpen ? "translate-x-0" : "-translate-x-full") + " lg:hidden z-50" },
                react_1["default"].createElement(ButtonIcon_1["default"], { onClick: toggleMenu, className: "text-gray-600 w-full flex justify-end mb-4", "aria-label": "Close menu" },
                    react_1["default"].createElement(ai_1.AiOutlineClose, { size: 24 })),
                react_1["default"].createElement("div", { className: "left h-full  block md:block lg:hidden mt-2   px-4  " },
                    react_1["default"].createElement("div", { className: 'filterItem' },
                        react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowCategories(!showCategories); } },
                            react_1["default"].createElement("h2", { className: 'font-bold text-xl mb-1' }, "Products Categories"),
                            showCategories ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                        showCategories && (react_1["default"].createElement(react_1["default"].Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (item) { return (react_1["default"].createElement("div", { className: 'mt-2', key: item.id },
                            react_1["default"].createElement("div", { className: 'inputItem' },
                                react_1["default"].createElement("div", { className: 'flex items-center mb-1' },
                                    react_1["default"].createElement("input", { type: 'checkbox', id: item.documentId, value: item.documentId, className: 'w-5 h-5 rounded-md appearance-none border border-gray-400  checked:bg-blue-600 relative checked:before:content-["\u2713"] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:outline-none checked:border-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2' }),
                                    react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium capitalize', htmlFor: item.documentId }, "Shoes"))))); })))),
                    react_1["default"].createElement("div", { className: "filterItem my-3" },
                        react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowColors(!showColors); } },
                            react_1["default"].createElement("h2", { className: 'font-bold text-xl mb-2' }, "Filter By Colors"),
                            showColors ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                        showColors && (react_1["default"].createElement("div", { className: "mt-2" }, colors.map(function (color) { return (react_1["default"].createElement("div", { className: 'inputItem', key: color.id },
                            react_1["default"].createElement("div", { className: 'flex items-center mb-1' },
                                react_1["default"].createElement("input", { type: 'checkbox', id: color.documentId, value: color.documentId, className: 'w-5 h-5 rounded-md appearance-none border border-gray-400  checked:bg-blue-600 relative checked:before:content-["\u2713"] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:outline-none checked:border-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2' }),
                                react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium capitalize', htmlFor: color.documentId }, "White")))); })))),
                    react_1["default"].createElement("div", { className: "filterItem my-3" },
                        react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowPrice(!showPrice); } },
                            react_1["default"].createElement("h2", { className: 'font-bold text-xl mb-2' }, "Filter By Price"),
                            showPrice ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                        showPrice && (react_1["default"].createElement("div", { className: "mt-2 flex items-center space-x-1" },
                            react_1["default"].createElement("span", null, "0"),
                            react_1["default"].createElement(Input_1["default"], { type: 'range', min: 0, max: 1000, onChange: function (e) { return setMaxPrice(parseInt(e.target.value)); } }),
                            react_1["default"].createElement("span", null, "1000")))),
                    react_1["default"].createElement("div", { className: "filterItem my-3" },
                        react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return setShowSort(!showSort); } },
                            react_1["default"].createElement("h2", { className: 'font-bold text-xl mb-2' }, "Sort By"),
                            showSort ? react_1["default"].createElement(fa_1.FaChevronUp, null) : react_1["default"].createElement(fa_1.FaChevronDown, null)),
                        showSort && (react_1["default"].createElement("div", { className: 'my-2' },
                            react_1["default"].createElement("div", { className: "inputItem flex items-center my-2 " },
                                react_1["default"].createElement(Input_1["default"], { className: 'w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-600 checked:border-white focus:outline-none focus:ring-2 focus:ring-blue-600 checked:ring-2 checked:ring-blue-600', type: 'radio', id: 'asc', value: "asc", name: 'price', onChange: function () { return setSort("asc"); } }),
                                react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium', htmlFor: 'asc' }, "Price (Lowest First)")),
                            react_1["default"].createElement("div", { className: "inputItem flex items-center my-2" },
                                react_1["default"].createElement(Input_1["default"], { className: 'w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-600 checked:border-white focus:outline-none focus:ring-2 focus:ring-blue-600 checked:ring-2 checked:ring-blue-600', type: 'radio', id: 'desc', value: "desc", name: 'price', onChange: function () { return setSort("desc"); } }),
                                react_1["default"].createElement("label", { className: 'ml-2 text-base font-medium', htmlFor: 'desc ' }, "Price (Highest First)")))))))),
        react_1["default"].createElement("div", { className: "right w-full lg:w-[70%] xl:w-[80%]" },
            react_1["default"].createElement("img", { className: 'w-full h-[220px] xl:h-[300px] object-cover mb-[50px]', alt: "...", src: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" }),
            react_1["default"].createElement(ProductsList_1["default"], { isLoading: isLoading, products: products, toggleMenu: toggleMenu }))));
};
exports["default"] = ProductsCo;
