"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var ButtonIcon_1 = require("./ButtonIcon");
var AddProductDialog = function (_a) {
    var isOpen = _a.isOpen, toggleDialog = _a.toggleDialog;
    var _b = react_1.useState([]), selectedSizes = _b[0], setSelectedSizes = _b[1];
    var _c = react_1.useState(''), selectedSize = _c[0], setSelectedSize = _c[1];
    var _d = react_1.useState(''), productDescription = _d[0], setProductDescription = _d[1];
    var _e = react_1.useState(''), productPrice = _e[0], setProductPrice = _e[1];
    var _f = react_1.useState(''), productStock = _f[0], setProductStock = _f[1];
    var _g = react_1.useState(false), isNewProduct = _g[0], setIsNewProduct = _g[1];
    var _h = react_1.useState({
        image1: '',
        image2: '',
        image3: ''
    }), productImages = _h[0], setProductImages = _h[1];
    var _j = react_1.useState(''), category = _j[0], setCategory = _j[1];
    var _k = react_1.useState(''), subCategory = _k[0], setSubCategory = _k[1];
    var _l = react_1.useState(''), productType = _l[0], setProductType = _l[1];
    var _m = react_1.useState(''), color = _m[0], setColor = _m[1];
    var handleOverlayClick = function () {
        toggleDialog();
    };
    var handleDialogClick = function (e) {
        e.stopPropagation();
    };
    var handleSizeChange = function (e) {
        var size = e.target.value;
        if (size && !selectedSizes.includes(size)) {
            setSelectedSizes(__spreadArrays(selectedSizes, [size]));
            setSelectedSize(''); // Reset selected size
        }
    };
    var removeSize = function (size) {
        setSelectedSizes(selectedSizes.filter(function (s) { return s !== size; }));
    };
    var handleImageUpload = function (e, imageKey) {
        var _a;
        if (e.target.files) {
            setProductImages(__assign(__assign({}, productImages), (_a = {}, _a[imageKey] = URL.createObjectURL(e.target.files[0]), _a)));
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isOpen && (react_1["default"].createElement("div", { className: "fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-500 ease-in-out " + (isOpen ? 'opacity-100' : 'opacity-0'), onClick: handleOverlayClick })),
        react_1["default"].createElement("div", { className: "fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ease-in-out transform " + (isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'), onClick: handleOverlayClick },
            react_1["default"].createElement("div", { className: "relative bg-white rounded-lg shadow-lg p-6 max-h-[95vh] h-auto overflow-y-auto w-full max-w-[370px] sm:max-w-[450px] md:max-w-3xl  lg:max-w-4xl transform transition-transform duration-500 ease-in-out", onClick: handleDialogClick },
                react_1["default"].createElement("div", { className: "flex justify-between items-center mb-6" },
                    react_1["default"].createElement("h2", { className: "text-3xl font-semibold text-gray-800" }, "Add Product"),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "text-gray-500 hover:text-gray-800 transition-colors", onClick: toggleDialog },
                        react_1["default"].createElement(fi_1.FiX, { className: "mb-4", size: 24 }))),
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "productName" }, "Product Name"),
                            react_1["default"].createElement("input", { type: "text", id: "productName", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "e.g. White Shoes" })),
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "description" }, "Product Description"),
                            react_1["default"].createElement("textarea", { id: "description", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product description", value: productDescription, onChange: function (e) { return setProductDescription(e.target.value); } }))),
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "stock" }, "Stock"),
                            react_1["default"].createElement("input", { type: "number", id: "stock", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product stock", value: productStock, onChange: function (e) { return setProductStock(e.target.value ? Number(e.target.value) : ''); } })),
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "price" }, "Price"),
                            react_1["default"].createElement("input", { type: "number", id: "price", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product price", value: productPrice, onChange: function (e) { return setProductPrice(e.target.value ? Number(e.target.value) : ''); } })),
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "oldPrice" }, "Old Price (Optional)"),
                            react_1["default"].createElement("input", { type: "number", id: "oldPrice", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter old product price" }))),
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "category" }, "Category"),
                            react_1["default"].createElement("select", { id: "category", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: category, onChange: function (e) { return setCategory(e.target.value); } },
                                react_1["default"].createElement("option", { value: "" }, "Select Category"),
                                react_1["default"].createElement("option", { value: "category1" }, "Category 1"),
                                react_1["default"].createElement("option", { value: "category2" }, "Category 2"))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "subCategory" }, "Subcategory"),
                            react_1["default"].createElement("select", { id: "subCategory", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: subCategory, onChange: function (e) { return setSubCategory(e.target.value); } },
                                react_1["default"].createElement("option", { value: "" }, "Select Subcategory"),
                                react_1["default"].createElement("option", { value: "subCategory1" }, "Subcategory 1"),
                                react_1["default"].createElement("option", { value: "subCategory2" }, "Subcategory 2"))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "type" }, "Type"),
                            react_1["default"].createElement("select", { id: "type", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: productType, onChange: function (e) { return setProductType(e.target.value); } },
                                react_1["default"].createElement("option", { value: "" }, "Select Type"),
                                react_1["default"].createElement("option", { value: "type1" }, "Type 1"),
                                react_1["default"].createElement("option", { value: "type2" }, "Type 2")))),
                    react_1["default"].createElement("div", { className: "mb-6" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Product Images"),
                        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                            react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer" },
                                react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'image1'); } }),
                                productImages.image1 ? (react_1["default"].createElement("img", { src: productImages.image1, alt: "Image 1", className: "h-full w-full object-cover rounded-lg" })) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 1"))),
                            react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer" },
                                react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'image2'); } }),
                                productImages.image2 ? (react_1["default"].createElement("img", { src: productImages.image2, alt: "Image 2", className: "h-full w-full object-cover rounded-lg" })) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 2"))),
                            react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer" },
                                react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'image3'); } }),
                                productImages.image3 ? (react_1["default"].createElement("img", { src: productImages.image3, alt: "Image 3", className: "h-full w-full object-cover rounded-lg" })) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 3"))))),
                    react_1["default"].createElement("div", { className: "flex justify-between gap-3" },
                        react_1["default"].createElement("div", { className: "mb-4 flex-1" },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Sizes"),
                            react_1["default"].createElement("div", { className: "flex mb-2" },
                                react_1["default"].createElement("select", { className: "mt-1 block border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition flex-grow", value: selectedSize, onChange: handleSizeChange },
                                    react_1["default"].createElement("option", { value: "" }, "Select Size"),
                                    react_1["default"].createElement("option", { value: "Small" }, "Small"),
                                    react_1["default"].createElement("option", { value: "Medium" }, "Medium"),
                                    react_1["default"].createElement("option", { value: "Large" }, "Large"),
                                    react_1["default"].createElement("option", { value: "X-Large" }, "X-Large"))),
                            react_1["default"].createElement("div", { className: "flex gap-2 flex-wrap" }, selectedSizes.map(function (size) { return (react_1["default"].createElement("span", { key: size, className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center" },
                                size,
                                react_1["default"].createElement("button", { type: "button", className: "ml-2 text-red-500 hover:text-red-600", onClick: function () { return removeSize(size); } },
                                    react_1["default"].createElement(fi_1.FiX, null)))); }))),
                        react_1["default"].createElement("div", { className: 'flex-1' },
                            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "category" }, "Category"),
                            react_1["default"].createElement("select", { id: "category", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: category, onChange: function (e) { return setCategory(e.target.value); } },
                                react_1["default"].createElement("option", { value: "" }, "Select Category"),
                                react_1["default"].createElement("option", { value: "category1" }, "Category 1"),
                                react_1["default"].createElement("option", { value: "category2" }, "Category 2")))),
                    react_1["default"].createElement("button", { type: "submit", className: "mt-4 w-full bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition", onClick: function (e) {
                            e.preventDefault();
                            // Handle form submission logic here
                            console.log({
                                productDescription: productDescription,
                                productPrice: productPrice,
                                productStock: productStock,
                                selectedSizes: selectedSizes,
                                productImages: productImages,
                                category: category,
                                subCategory: subCategory,
                                productType: productType
                            });
                        } }, "Add Product"))))));
};
exports["default"] = AddProductDialog;
