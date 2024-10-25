"use client";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ButtonIcon_1 = require("@/app/components/ui/ButtonIcon");
var axios_1 = require("axios");
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var EditProduct = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var cats = _a.cats, subCats = _a.subCats, colors = _a.colors, sizes = _a.sizes, product = _a.product;
    var router = navigation_1.useRouter();
    var _l = react_1.useState(false), isLoading = _l[0], setIsLoading = _l[1];
    var _m = react_1.useState(product === null || product === void 0 ? void 0 : product.sizes), selectedSizes = _m[0], setSelectedSizes = _m[1];
    var _o = react_1.useState(''), selectedSize = _o[0], setSelectedSize = _o[1];
    var _p = react_1.useState(product.isNew), isNewProduct = _p[0], setIsNewProduct = _p[1];
    var _q = react_1.useState(), img1 = _q[0], setImg1 = _q[1];
    var _r = react_1.useState(null), img2 = _r[0], setImg2 = _r[1];
    var _s = react_1.useState(null), img3 = _s[0], setImg3 = _s[1];
    var _t = react_1.useState(product.img1.url), preview1 = _t[0], setPreview1 = _t[1];
    var _u = react_1.useState(product.img2.url), preview2 = _u[0], setPreview2 = _u[1];
    var _v = react_1.useState(product.img3.url), preview3 = _v[0], setPreview3 = _v[1];
    var _w = react_1.useState({
        productName: product === null || product === void 0 ? void 0 : product.title,
        productDescription: product === null || product === void 0 ? void 0 : product.desc,
        productPrice: product === null || product === void 0 ? void 0 : product.price,
        productStock: product === null || product === void 0 ? void 0 : product.stock,
        oldPrice: product === null || product === void 0 ? void 0 : product.oldPrice,
        category: product === null || product === void 0 ? void 0 : product.category,
        subCategory: product === null || product === void 0 ? void 0 : product.sub_category,
        productType: product.type,
        color: product === null || product === void 0 ? void 0 : product.color
    }), data = _w[0], setData = _w[1];
    console.log(data.category);
    react_1.useEffect(function () {
        router.replace("/admin/editProduct/" + product.documentId);
        router.refresh();
    }, [product.documentId, router]);
    var defaultImage = {
        id: 0,
        documentId: '',
        name: '',
        alternativeText: null,
        caption: null,
        width: 0,
        height: 0,
        hash: '',
        ext: '',
        mime: '',
        size: 0,
        url: '',
        previewUrl: null,
        provider: '',
        provider_metadata: null,
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        locale: null
    };
    var handleInputChange = function (e) {
        var _a;
        var _b, _c, _d;
        var _e = e.target, name = _e.name, value = _e.value, type = _e.type;
        var parsedValue = (type === "number" || name === "category" || name === "subCategory" || name === "color")
            ? Number(value)
            : value;
        if (name === "category") {
            setData(__assign(__assign({}, data), { category: {
                    id: Number(parsedValue),
                    title: ((_b = cats.find(function (cat) { return cat.id === Number(parsedValue); })) === null || _b === void 0 ? void 0 : _b.title) || "",
                    documentId: '',
                    createdAt: '',
                    updatedAt: '',
                    img: defaultImage,
                    publishedAt: '',
                    locale: null
                } }));
        }
        else if (name === "subCategory") {
            // Update both id and title for subCategory
            setData(__assign(__assign({}, data), { subCategory: {
                    id: Number(parsedValue),
                    title: ((_c = subCats.find(function (subCat) { return subCat.id === Number(parsedValue); })) === null || _c === void 0 ? void 0 : _c.title) || "" // Fallback to empty string if undefined
                    ,
                    documentId: '',
                    createdAt: '',
                    updatedAt: '',
                    img: defaultImage,
                    publishedAt: '',
                    locale: null
                } }));
        }
        else if (name === "color") {
            // Update both id and title for color
            setData(__assign(__assign({}, data), { color: {
                    id: Number(parsedValue),
                    title: ((_d = colors.find(function (color) { return color.id === Number(parsedValue); })) === null || _d === void 0 ? void 0 : _d.title) || "" // Fallback to empty string if undefined
                    ,
                    documentId: '',
                    createdAt: '',
                    updatedAt: '',
                    publishedAt: '',
                    locale: null
                } }));
        }
        else {
            // Handle other fields normally
            setData(__assign(__assign({}, data), (_a = {}, _a[name] = parsedValue, _a)));
        }
    };
    // const parsedValue = type === "number" || name === "category" || name === "subCategory" || name === "color"
    //   ? Number(value)
    //   : value;
    var handleSizeChange = function (e) {
        var sizeId = Number(e.target.value);
        var selectedSize = sizes.find(function (size) { return size.id === sizeId; });
        if (selectedSize && !selectedSizes.includes(selectedSize)) {
            setSelectedSizes(__spreadArrays(selectedSizes, [selectedSize]));
            setSelectedSize("");
        }
    };
    var removeSize = function (size) {
        setSelectedSizes(selectedSizes.filter(function (s) { return s.id !== size; }));
    };
    var handleImageUpload = function (e, imageKey) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            if (file) {
                var previewUrl = URL.createObjectURL(file);
                if (imageKey === 'img1') {
                    setImg1(file);
                    setPreview1(previewUrl);
                }
                else if (imageKey === 'img2') {
                    setImg2(file);
                    setPreview2(previewUrl);
                }
                else if (imageKey === 'img3') {
                    setImg3(file);
                    setPreview3(previewUrl);
                }
            }
        }
    };
    var handleRemoveImage = function (imageKey) {
        if (imageKey === 'img1') {
            setImg1(null);
            setPreview1(null);
        }
        else if (imageKey === 'img2') {
            setImg2(null);
            setPreview2(null);
        }
        else if (imageKey === 'img3') {
            setImg3(null);
            setPreview3(null);
        }
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData_1, img1Id, img2Id, img3Id, uploadImage, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (data.productName.trim() === "") {
                        react_hot_toast_1["default"].error("Product name cannot be empty!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (data.productDescription.trim() === "") {
                        react_hot_toast_1["default"].error("Product name cannot be empty!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (data.productDescription.length <= 10) {
                        react_hot_toast_1["default"].error("Product Description cannot be less than or equal 10 characters!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (data.productDescription.length >= 600) {
                        react_hot_toast_1["default"].error("Product Description cannot be less greater or equal 600 characters!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (data.productName.length <= 5) {
                        react_hot_toast_1["default"].error("Product name cannot be less than or equal 5 characters!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (!preview1 && !preview2 && !preview3) {
                        react_hot_toast_1["default"].error("Product Images cannot be empty!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (selectedSizes.length === 0) {
                        react_hot_toast_1["default"].error("Product Sizes cannot be empty!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (data.productPrice === 0 || data.productStock === 0) {
                        react_hot_toast_1["default"].error("Product Price and Stock cannot be 0 !");
                        return [2 /*return*/]; // Prevent submission
                    }
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, 10, 11]);
                    formData_1 = new FormData();
                    // Add product details
                    formData_1.append("data[title]", data.productName.toString());
                    formData_1.append("data[desc]", data.productDescription.toString());
                    formData_1.append("data[price]", data.productPrice.toString());
                    formData_1.append("data[oldPrice]", data.oldPrice.toString());
                    formData_1.append("data[isNew]", JSON.stringify(isNewProduct));
                    formData_1.append("data[stock]", data.productStock.toString());
                    formData_1.append("data[type]", data.productType.toString());
                    formData_1.append("data[category]", JSON.stringify(data.category.id));
                    formData_1.append("data[sub_category]", JSON.stringify(data.subCategory.id));
                    formData_1.append("data[color]", JSON.stringify(data.color.id));
                    // Add sizes
                    selectedSizes.forEach(function (size, index) {
                        formData_1.append("data[sizes][" + index + "]", size.id.toString());
                    });
                    img1Id = null;
                    img2Id = null;
                    img3Id = null;
                    uploadImage = function (image) { return __awaiter(void 0, void 0, void 0, function () {
                        var uploadFormData, uploadResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    uploadFormData = new FormData();
                                    uploadFormData.append('files', image);
                                    return [4 /*yield*/, axios_1["default"].post("http://localhost:1337/api/upload", uploadFormData)];
                                case 1:
                                    uploadResponse = _a.sent();
                                    return [2 /*return*/, uploadResponse.data[0].id]; // get the file ID
                            }
                        });
                    }); };
                    if (!img1) return [3 /*break*/, 3];
                    return [4 /*yield*/, uploadImage(img1)];
                case 2:
                    img1Id = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!img2) return [3 /*break*/, 5];
                    return [4 /*yield*/, uploadImage(img2)];
                case 4:
                    img2Id = _a.sent();
                    _a.label = 5;
                case 5:
                    if (!img3) return [3 /*break*/, 7];
                    return [4 /*yield*/, uploadImage(img3)];
                case 6:
                    img3Id = _a.sent();
                    _a.label = 7;
                case 7:
                    // Now attach image IDs to the product
                    if (img1Id) {
                        formData_1.append("data[img1]", img1Id);
                    }
                    if (img2Id) {
                        formData_1.append("data[img2]", img2Id);
                    }
                    if (img3Id) {
                        formData_1.append("data[img3]", img3Id);
                    }
                    console.log("Form Data:", Array.from(formData_1.entries()));
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:1337/api/products/" + product.documentId + "?populate=*", formData_1)];
                case 8:
                    _a.sent();
                    router.refresh();
                    react_hot_toast_1["default"].success("Product updated successfully");
                    router.replace("/admin/products");
                    router.prefetch("/admin/products");
                    return [3 /*break*/, 11];
                case 9:
                    error_1 = _a.sent();
                    react_hot_toast_1["default"].error("Error: " + error_1);
                    return [3 /*break*/, 11];
                case 10:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " py-2 md:py-0 md:px-2" },
            react_1["default"].createElement("form", { onSubmit: handleSubmit },
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "productName" }, "Product Name"),
                        react_1["default"].createElement("input", { name: 'productName', type: "text", id: "productName", value: data.productName, onChange: handleInputChange, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "e.g. White Shoes" })),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "description" }, "Product Description"),
                        react_1["default"].createElement("textarea", { id: "description", name: 'productDescription', rows: 2, cols: 50, className: "mt-1 block w-full resize-none border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product description", value: data.productDescription, onChange: handleInputChange }))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "stock" }, "Stock"),
                        react_1["default"].createElement("input", { name: 'productStock', type: "number", id: "stock", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product stock", value: data.productStock, onChange: handleInputChange })),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "price" }, "Price"),
                        react_1["default"].createElement("input", { name: 'productPrice', type: "number", id: "price", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter product price", value: data.productPrice, onChange: handleInputChange })),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "oldPrice" }, "Old Price (Optional)"),
                        react_1["default"].createElement("input", { type: "number", id: "oldPrice", name: 'oldPrice', value: data.oldPrice, onChange: handleInputChange, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "Enter old product price" }))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "category" }, "Category"),
                        react_1["default"].createElement("select", { id: "category", name: "category", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: (_d = (_c = (_b = data.category) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : data.category) !== null && _d !== void 0 ? _d : '', onChange: handleInputChange },
                            react_1["default"].createElement("option", { value: (_e = data.category) === null || _e === void 0 ? void 0 : _e.id }, (_f = data.category) === null || _f === void 0 ? void 0 : _f.title), cats === null || cats === void 0 ? void 0 :
                            cats.filter(function (cat) { var _a, _b, _c; return cat.id !== ((_c = (_b = (_a = data.category) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : data.category) !== null && _c !== void 0 ? _c : ''); }).map(function (cat) { return (react_1["default"].createElement("option", { key: cat.id, value: cat === null || cat === void 0 ? void 0 : cat.id }, cat === null || cat === void 0 ? void 0 : cat.title)); }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "subCategory" }, "Subcategory"),
                        react_1["default"].createElement("select", { id: "subCategory", name: "subCategory", className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: (_g = data.subCategory) === null || _g === void 0 ? void 0 : _g.id, onChange: handleInputChange },
                            react_1["default"].createElement("option", { value: data.subCategory.id }, (_h = data.subCategory) === null || _h === void 0 ? void 0 : _h.title), subCats === null || subCats === void 0 ? void 0 :
                            subCats.filter(function (sub) { return sub.id !== data.subCategory.id; }).map(function (sub) { return (react_1["default"].createElement("option", { key: sub.id, value: sub === null || sub === void 0 ? void 0 : sub.id }, sub === null || sub === void 0 ? void 0 : sub.title)); }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "type" }, "Type"),
                        react_1["default"].createElement("select", { id: "type", name: 'productType', className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: data.productType, onChange: handleInputChange },
                            data.productType === "normal" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("option", { value: data.productType }, data.productType),
                                react_1["default"].createElement("option", { value: "trending" }, "trending"),
                                react_1["default"].createElement("option", { value: "featured" }, "featured"))),
                            data.productType === "featured" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("option", { value: data.productType }, data.productType),
                                react_1["default"].createElement("option", { value: "trending" }, "trending"),
                                react_1["default"].createElement("option", { value: "normal" }, "normal"))),
                            data.productType === "trending" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("option", { value: data.productType }, data.productType),
                                react_1["default"].createElement("option", { value: "featured" }, "featured"),
                                react_1["default"].createElement("option", { value: "normal" }, "normal")))))),
                react_1["default"].createElement("div", { className: "mb-6" },
                    react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Product Images"),
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'img1'); } }),
                            preview1 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement("img", { src: preview1, alt: "Image 1", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement("button", { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img1'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 1"))),
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'img2'); } }),
                            preview2 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement("img", { src: preview2, alt: "Image 2", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement("button", { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img2'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 2"))),
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'img3'); } }),
                            preview3 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement("img", { src: preview3, alt: "Image 3", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement("button", { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img3'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 3"))))),
                react_1["default"].createElement("div", { className: "flex justify-between gap-3" },
                    react_1["default"].createElement("div", { className: "mb-4 flex-1" },
                        react_1["default"].createElement("label", { htmlFor: 'size', className: "block text-sm font-medium text-gray-700" }, "Sizes"),
                        react_1["default"].createElement("div", { className: "flex mb-2" },
                            react_1["default"].createElement("select", { id: 'size', className: "mt-1 block border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition flex-grow", value: selectedSize, onChange: handleSizeChange },
                                react_1["default"].createElement("option", { value: "" }, "Select Size"),
                                sizes.map(function (size) { return (react_1["default"].createElement("option", { key: size.id, value: size.id }, size.title)); }))),
                        react_1["default"].createElement("div", { className: "flex gap-2 flex-wrap" }, selectedSizes.map(function (size) {
                            return (selectedSizes && (react_1["default"].createElement("span", { key: size.id, className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center" },
                                size.title,
                                react_1["default"].createElement(ButtonIcon_1["default"], { className: "ml-2 text-red-500 hover:text-red-600", onClick: function () { return removeSize(size.id); } },
                                    react_1["default"].createElement(fi_1.FiX, null)))));
                        }))),
                    react_1["default"].createElement("div", { className: 'flex-1' },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "color" }, "Color"),
                        react_1["default"].createElement("select", { id: "color", name: 'color', className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", value: (_j = data.color) === null || _j === void 0 ? void 0 : _j.id, onChange: handleInputChange },
                            react_1["default"].createElement("option", { value: data.color.id }, (_k = data.color) === null || _k === void 0 ? void 0 : _k.title), colors === null || colors === void 0 ? void 0 :
                            colors.map(function (sub) { return (react_1["default"].createElement("option", { key: sub.id, value: sub === null || sub === void 0 ? void 0 : sub.id }, sub === null || sub === void 0 ? void 0 : sub.title)); })))),
                react_1["default"].createElement("div", { className: "flex items-center mb-2" },
                    react_1["default"].createElement("label", { htmlFor: "isNewProduct", className: "mr-2 block text-base text-gray-900" }, "Is this  New Product ?"),
                    react_1["default"].createElement("input", { type: "checkbox", id: "isNewProduct", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", checked: isNewProduct, onChange: function () { return setIsNewProduct(!isNewProduct); } })),
                react_1["default"].createElement(ButtonIcon_1["default"], { disabled: isLoading, type: "submit", className: "flex justify-center items-center space-x-2 w-full bg-blue-600 disabled:bg-blue-300 disabled:cursor-none text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition" }, isLoading ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-6 h-6 text-transparent animate-spin fill-blue-600 mr-3", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                        react_1["default"].createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })),
                    react_1["default"].createElement("span", null, "Editing"))) : (react_1["default"].createElement("span", null, "Edit Product")))))));
};
exports["default"] = EditProduct;
