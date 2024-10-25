"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var bi_1 = require("react-icons/bi");
var swr_1 = require("swr");
var image_1 = require("next/image");
var link_1 = require("next/link");
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
var Searchbar = function (_a) {
    var searchVisible = _a.searchVisible;
    var _b = react_1.useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = react_1.useState([]), filteredData = _c[0], setFilteredData = _c[1];
    var productsData = swr_1["default"]("http://localhost:1337/api/products?populate=*", fetcher).data;
    react_1.useEffect(function () {
        if (searchQuery) {
            var products = (productsData === null || productsData === void 0 ? void 0 : productsData.data) || [];
            var results = products === null || products === void 0 ? void 0 : products.filter(function (item) {
                return item.title.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredData(results);
        }
        else {
            setFilteredData([]);
        }
    }, [productsData === null || productsData === void 0 ? void 0 : productsData.data, searchQuery]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "relative lg:block hidden xl:w-[400px] lg:w-[250px] " + (searchVisible ? 'block' : 'hidden') },
            react_1["default"].createElement("label", { htmlFor: "Search", className: "sr-only" }, "Search"),
            react_1["default"].createElement("input", { type: "search", id: "Search", placeholder: "Search for products...", className: "w-full rounded-full bg-[#F0F0F0] border-none outline-none active:border-2 active:border-black py-3 pe-10 px-4 shadow-sm sm:text-sm", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } }),
            react_1["default"].createElement("span", { className: "absolute inset-y-0 end-0 grid w-10 place-content-center" },
                react_1["default"].createElement(ButtonIcon_1["default"], { className: "text-gray-600 hover:text-gray-700", "aria-label": "Search" },
                    react_1["default"].createElement(bi_1.BiSearch, null))),
            filteredData.length > 0 && (react_1["default"].createElement("div", { className: "absolute bg-gray-50 shadow-lg h-[200px] overflow-scroll top-[55px] w-full flex flex-col p-3" }, filteredData.map(function (product) {
                var _a;
                return (react_1["default"].createElement(link_1["default"], { href: "/product/" + (product === null || product === void 0 ? void 0 : product.documentId), key: product.id, className: "flex gap-3 cursor-pointer hover:bg-gray-100 items-center p-3 border-b" },
                    react_1["default"].createElement("div", { className: "image pr-1" },
                        react_1["default"].createElement(image_1["default"], { alt: 'Product Search', className: "w-full h-[100px] object-contain", src: (_a = product === null || product === void 0 ? void 0 : product.img1) === null || _a === void 0 ? void 0 : _a.url, quality: 85, width: 700, height: 500 })),
                    react_1["default"].createElement("div", { className: "details flex flex-col flex-1" },
                        react_1["default"].createElement("span", { className: "uppercase block text-[#565656] tracking-widest text-sm font-[400] mb-1.5" }, product.title),
                        react_1["default"].createElement("p", { className: "uppercase text-[#565656] mb-1.5 text-sm font-[400]" },
                            "price : $",
                            product.price))));
            }))))));
};
exports["default"] = Searchbar;
