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
var react_hook_form_1 = require("react-hook-form");
var axios_1 = require("axios");
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var zod_1 = require("@hookform/resolvers/zod");
var Input_1 = require("./ui/Input");
var image_1 = require("next/image");
var validation_1 = require("../validation");
var AddProductDialog = function (_a) {
    var _b;
    var cats = _a.cats, subCats = _a.subCats, colors = _a.colors, sizes = _a.sizes;
    var _c = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validation_1.addProductSchema)
    }), register = _c.register, handleSubmit = _c.handleSubmit, setValue = _c.setValue, clearErrors = _c.clearErrors, errors = _c.formState.errors;
    var _d = react_1.useState([]), selectedSizes = _d[0], setSelectedSizes = _d[1];
    var router = navigation_1.useRouter();
    var _e = react_1.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.useState(null), oldPrice = _f[0], setOldPrice = _f[1];
    var _g = react_1.useState(false), isNewProduct = _g[0], setIsNewProduct = _g[1];
    var _h = react_1.useState(null), img1 = _h[0], setImg1 = _h[1];
    var _j = react_1.useState(null), img2 = _j[0], setImg2 = _j[1];
    var _k = react_1.useState(null), img3 = _k[0], setImg3 = _k[1];
    var _l = react_1.useState(null), preview1 = _l[0], setPreview1 = _l[1];
    var _m = react_1.useState(null), preview2 = _m[0], setPreview2 = _m[1];
    var _o = react_1.useState(null), preview3 = _o[0], setPreview3 = _o[1];
    var handleSizeChange = function (e) {
        var size = Number(e.target.value);
        if (size && !selectedSizes.includes(size)) {
            setSelectedSizes(__spreadArrays(selectedSizes, [size])); // Update selected sizes
            clearErrors("size"); // Clear size error immediately after selection
        }
    };
    var removeSize = function (size) {
        setSelectedSizes(selectedSizes.filter(function (s) { return s !== size; }));
    };
    var handleImageUpload = function (e, imageKey) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            var previewUrl = URL.createObjectURL(file);
            setValue(imageKey, file);
            if (imageKey === 'img1') {
                setPreview1(previewUrl);
            }
            else if (imageKey === 'img2') {
                setPreview2(previewUrl);
            }
            else if (imageKey === 'img3') {
                setPreview3(previewUrl);
            }
            clearErrors(imageKey);
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
    var submitForm = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var formData_1, img1Id, img2Id, img3Id, uploadImage, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, 10, 11]);
                    formData_1 = new FormData();
                    // Add product details
                    formData_1.append("data[title]", data.productName);
                    formData_1.append("data[desc]", data.productDescription);
                    formData_1.append("data[price]", data.productPrice);
                    if (oldPrice !== null && oldPrice !== undefined) {
                        formData_1.append("data[oldPrice]", oldPrice.toString());
                    }
                    formData_1.append("data[isNew]", JSON.stringify(isNewProduct));
                    formData_1.append("data[stock]", data.productStock);
                    formData_1.append("data[type]", data.productType);
                    formData_1.append("data[category]", data.category);
                    formData_1.append("data[sub_category]", data.subCategory);
                    formData_1.append("data[color]", data.color);
                    // Add sizes
                    selectedSizes.forEach(function (size, index) {
                        formData_1.append("data[sizes][" + index + "]", size.toString());
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
                                    console.log('Upload Response:', uploadResponse.data); // فحص البيانات التي يتم إرجاعها
                                    return [2 /*return*/, uploadResponse.data[0].id]; // تأكد من وجود الـ id في هذه البيانات
                            }
                        });
                    }); };
                    if (!data.img1) return [3 /*break*/, 3];
                    return [4 /*yield*/, uploadImage(data.img1)];
                case 2:
                    img1Id = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!data.img2) return [3 /*break*/, 5];
                    return [4 /*yield*/, uploadImage(data.img2)];
                case 4:
                    img2Id = _a.sent();
                    _a.label = 5;
                case 5:
                    if (!data.img3) return [3 /*break*/, 7];
                    return [4 /*yield*/, uploadImage(data.img3)];
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
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:1337/api/products?populate=*", formData_1)];
                case 8:
                    response = _a.sent();
                    console.log("Response data:", response.data);
                    react_hot_toast_1["default"].success("Product added successfully");
                    router.refresh();
                    router.prefetch("/admin/products");
                    router.push("/admin/products");
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
            react_1["default"].createElement("form", { onSubmit: handleSubmit(submitForm) },
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "productName" }, "Product Name"),
                        react_1["default"].createElement(Input_1["default"], __assign({}, register("productName"), { 
                            // name="productName"
                            type: "text", id: "productName", 
                            // value={data.productName}
                            // onChange={handleInputChange}
                            className: "mt-1 block w-full border " + ((errors === null || errors === void 0 ? void 0 : errors.productName) ? 'border-red-500' : 'border-gray-300') + " rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "e.g. White Shoes" })),
                        (errors === null || errors === void 0 ? void 0 : errors.productName) && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.productName.message))),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "description" }, "Product Description"),
                        react_1["default"].createElement("textarea", __assign({}, register("productDescription"), { id: "description", 
                            // name="productDescription"
                            rows: 2, cols: 50, className: "mt-1 block w-full resize-none border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.productDescription) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'), placeholder: "Enter product description" })),
                        errors.productDescription && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.productDescription.message)))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "stock" }, "Stock"),
                        react_1["default"].createElement("input", __assign({}, register("productStock"), { 
                            // name="productStock"
                            type: "number", id: "stock", className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.productStock) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'), placeholder: "Enter product stock" })),
                        errors.productStock && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.productStock.message))),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "price" }, "Price"),
                        react_1["default"].createElement("input", __assign({}, register("productPrice"), { 
                            // name="productPrice"
                            type: "number", id: "price", className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.productPrice) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'), placeholder: "Enter product price" })),
                        errors.productPrice && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.productPrice.message))),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "oldPrice" }, "Old Price (Optional)"),
                        react_1["default"].createElement("input", { name: "oldPrice", type: "number", id: "oldPrice", value: oldPrice !== null && oldPrice !== void 0 ? oldPrice : "", onChange: function (e) { return setOldPrice(e.target.value ? parseFloat(e.target.value) : null); }, className: "mt-1 block w-full border rounded-md p-2 transition " + 'border-gray-300 focus:border-blue-500 focus:ring-blue-200', placeholder: "Enter old product price" }))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "category" }, "Category"),
                        react_1["default"].createElement("select", __assign({}, register("category"), { id: "category", 
                            // name="category"
                            className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.category) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200') }),
                            react_1["default"].createElement("option", { value: "" }, "Select Category"), cats === null || cats === void 0 ? void 0 :
                            cats.map(function (cat) { return (react_1["default"].createElement("option", { key: cat.id, value: cat === null || cat === void 0 ? void 0 : cat.id }, cat === null || cat === void 0 ? void 0 : cat.title)); })),
                        (errors === null || errors === void 0 ? void 0 : errors.category) && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.category.message))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "subCategory" }, "Subcategory"),
                        react_1["default"].createElement("select", __assign({}, register("subCategory"), { id: "subCategory", 
                            // name="subCategory"
                            className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.subCategory) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200') }),
                            react_1["default"].createElement("option", { value: "" }, "Select Subcategory"), subCats === null || subCats === void 0 ? void 0 :
                            subCats.map(function (sub) { return (react_1["default"].createElement("option", { key: sub.id, value: sub === null || sub === void 0 ? void 0 : sub.id }, sub === null || sub === void 0 ? void 0 : sub.title)); })),
                        errors.subCategory && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.subCategory.message))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "type" }, "Type"),
                        react_1["default"].createElement("select", __assign({ id: "type" }, register("productType"), { 
                            // name="productType"
                            className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.productType) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200') }),
                            react_1["default"].createElement("option", { value: "" }, "Select Type"),
                            react_1["default"].createElement("option", { value: "normal" }, "normal"),
                            react_1["default"].createElement("option", { value: "trending" }, "trending"),
                            react_1["default"].createElement("option", { value: "featured" }, "featured")),
                        errors.productType && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.productType.message)))),
                react_1["default"].createElement("div", { className: "mb-6" },
                    react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Product Images"),
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", onChange: function (e) { return handleImageUpload(e, 'img1'); }, className: "hidden" }),
                            errors.img1 && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.img1.message)),
                            preview1 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement(image_1["default"], { width: 500, height: 500, src: preview1, alt: "Image 1", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement(ButtonIcon_1["default"], { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img1'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 1"))),
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'img2'); } }),
                            errors.img2 && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.img2.message)),
                            preview2 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement(image_1["default"], { width: 500, height: 500, src: preview2, alt: "Image 2", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement(ButtonIcon_1["default"], { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img2'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 2"))),
                        react_1["default"].createElement("label", { className: "h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg cursor-pointer relative" },
                            react_1["default"].createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: function (e) { return handleImageUpload(e, 'img3'); } }),
                            errors.img3 && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.img3.message)),
                            preview3 ? (react_1["default"].createElement("div", { className: "relative h-full w-full" },
                                react_1["default"].createElement(image_1["default"], { width: 500, height: 500, src: preview3, alt: "Image 3", className: "h-full w-full object-cover rounded-lg" }),
                                react_1["default"].createElement(ButtonIcon_1["default"], { className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center", onClick: function () { return handleRemoveImage('img3'); } }, "X"))) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "Upload Image 3"))))),
                react_1["default"].createElement("div", { className: "flex justify-between gap-3" },
                    react_1["default"].createElement("div", { className: "mb-4 flex-1" },
                        react_1["default"].createElement("label", { htmlFor: 'size', className: "block text-sm font-medium text-gray-700" }, "Sizes"),
                        react_1["default"].createElement("div", { className: "flex mb-2" },
                            react_1["default"].createElement("select", __assign({ id: 'size' }, register("size", { required: "Size is required" }), { className: "mt-1 block w-full border rounded-md p-2 transition " + ((errors === null || errors === void 0 ? void 0 : errors.size) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'), onChange: function (e) {
                                    handleSizeChange(e);
                                    clearErrors("size");
                                } }),
                                (errors === null || errors === void 0 ? void 0 : errors.size) && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.size.message)),
                                react_1["default"].createElement("option", { value: "" }, "Select Size"),
                                sizes.map(function (size) { return (react_1["default"].createElement("option", { key: size.id, value: size.id }, size.title)); }))),
                        react_1["default"].createElement("div", { className: "flex gap-2 flex-wrap" }, selectedSizes.map(function (sizeId) {
                            var size = sizes.find(function (s) { return s.id === sizeId; });
                            return (size && (react_1["default"].createElement("span", { key: size.id, className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center" },
                                size.title,
                                react_1["default"].createElement(ButtonIcon_1["default"], { className: "ml-2 text-red-500 hover:text-red-600", onClick: function () { return removeSize(size.id); } },
                                    react_1["default"].createElement(fi_1.FiX, null)))));
                        }))),
                    react_1["default"].createElement("div", { className: 'flex-1' },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "color" }, "Color"),
                        react_1["default"].createElement("select", __assign({ id: "color" }, register("color"), { className: "mt-1 block w-full border rounded-md p-2 transition " + (((_b = errors === null || errors === void 0 ? void 0 : errors.color) === null || _b === void 0 ? void 0 : _b.message) ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200') }),
                            (errors === null || errors === void 0 ? void 0 : errors.color) && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors === null || errors === void 0 ? void 0 : errors.color.message)),
                            react_1["default"].createElement("option", { value: "" }, "Select Color"), colors === null || colors === void 0 ? void 0 :
                            colors.map(function (sub) { return (react_1["default"].createElement("option", { key: sub.id, value: sub === null || sub === void 0 ? void 0 : sub.id }, sub === null || sub === void 0 ? void 0 : sub.title)); })))),
                react_1["default"].createElement("div", { className: "flex items-center mb-2" },
                    react_1["default"].createElement("label", { htmlFor: "isNewProduct", className: "mr-2 block text-base text-gray-900" }, "Is this  New Product ?"),
                    react_1["default"].createElement("input", { type: "checkbox", id: "isNewProduct", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", checked: isNewProduct, onChange: function () { return setIsNewProduct(!isNewProduct); } })),
                react_1["default"].createElement(ButtonIcon_1["default"], { disabled: isLoading, type: "submit", className: "flex justify-center items-center space-x-2 w-full bg-blue-600 disabled:bg-blue-300 disabled:cursor-none text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition" }, isLoading ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-6 h-6 text-transparent animate-spin fill-blue-600 mr-3", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                        react_1["default"].createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })),
                    react_1["default"].createElement("span", null, "Adding"))) : (react_1["default"].createElement("span", null, "Add Product")))))));
};
exports["default"] = AddProductDialog;
