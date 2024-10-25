"use client";
"use strict";
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
var image_1 = require("next/image");
var react_1 = require("react");
var md_1 = require("react-icons/md");
var Drawer_1 = require("@/app/components/Drawer");
var ButtonIcon_1 = require("@/app/components/ui/ButtonIcon");
var link_1 = require("next/link");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var swr_1 = require("swr");
var nextjs_1 = require("@clerk/nextjs");
var navigation_1 = require("next/navigation");
var SingleProduct = function (_a) {
    var _b, _c, _d, _e, _f;
    var product = _a.product, products = _a.products;
    var sameNameProducts = products === null || products === void 0 ? void 0 : products.filter(function (item) { return item.title === product.title && item.documentId !== product.documentId; });
    var _g = react_1.useState("S"), selectedSize = _g[0], setSelectedSize = _g[1];
    var _h = react_1.useState(false), drawerOpen = _h[0], setDrawerOpen = _h[1];
    var _j = react_1.useState((_b = product === null || product === void 0 ? void 0 : product.img1) === null || _b === void 0 ? void 0 : _b.url), selectedImage = _j[0], setSelectedImage = _j[1];
    console.log(selectedImage);
    var toggleDrawer = function () { return setDrawerOpen(!drawerOpen); };
    var discountPercentage = Math.round((((product === null || product === void 0 ? void 0 : product.oldPrice) - (product === null || product === void 0 ? void 0 : product.price)) / (product === null || product === void 0 ? void 0 : product.oldPrice)) * 100);
    var userId = nextjs_1.useAuth().userId;
    var router = navigation_1.useRouter();
    var fetcher = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data[0]]; // Assuming the user has only one cart
            }
        });
    }); };
    // استخدام SWR لجلب بيانات السلة
    var _k = swr_1["default"](userId ? "http://localhost:1337/api/carts?populate=cart_items&filters[userId][$eq]=" + userId : null, fetcher, { refreshInterval: 1000 }), existingCart = _k.data, mutate = _k.mutate;
    var cartProducts = (existingCart === null || existingCart === void 0 ? void 0 : existingCart.cart_items) || [];
    var handleAddToCart = function (size) { return __awaiter(void 0, void 0, void 0, function () {
        var quantity, totalItemPrice, cartData, updatedCart, newCartResponse, existingCartItems, existingItem, newQuantity, updatedTotalItemPrice, addResponse, updatedCartItems, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!userId) {
                        react_hot_toast_1["default"].error('You must sign-in to add products to cart', {
                            duration: 4000,
                            position: 'top-center'
                        });
                        router.push('/sign-in');
                        return [2 /*return*/];
                    }
                    setSelectedSize(size);
                    quantity = 1;
                    totalItemPrice = product.price * quantity;
                    cartData = {
                        productId: product.documentId,
                        size: size,
                        quantity: quantity,
                        price: product.price,
                        totalItem: totalItemPrice,
                        name: product.title,
                        image: (_a = product === null || product === void 0 ? void 0 : product.img1) === null || _a === void 0 ? void 0 : _a.url
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 10, , 11]);
                    updatedCart = void 0;
                    console.log("Existing cart data:", existingCart); // مراجعة السلة الحالية
                    if (!(!existingCart || existingCart.length === 0)) return [3 /*break*/, 3];
                    // إنشاء سلة جديدة
                    console.log("Creating a new cart with data:", cartData);
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:1337/api/carts", {
                            data: {
                                userId: userId,
                                cart_items: cartProducts.map(function (item) { return ({
                                    id: item.id
                                }); })
                            }
                        })];
                case 2:
                    newCartResponse = _b.sent();
                    updatedCart = newCartResponse.data.data;
                    return [3 /*break*/, 4];
                case 3:
                    // استخدام السلة الحالية
                    updatedCart = existingCart[0]; // لأن SWR قد يعيد قائمة بالسلات
                    _b.label = 4;
                case 4:
                    existingCartItems = updatedCart.cart_items || [];
                    existingItem = existingCartItems.find(function (cartItem) {
                        return cartItem.productId === product.documentId && cartItem.size === size;
                    });
                    if (!existingItem) return [3 /*break*/, 6];
                    newQuantity = existingItem.quantity + 1;
                    updatedTotalItemPrice = product.price * newQuantity;
                    // تحديث عنصر السلة
                    console.log("Updating existing cart item:", existingItem);
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:1337/api/cart-items/" + existingItem.documentId, {
                            data: {
                                quantity: newQuantity,
                                totalItem: updatedTotalItemPrice,
                                productId: product.documentId,
                                size: size,
                                name: existingItem.name,
                                image: existingItem.image,
                                price: existingItem.price
                            }
                        })];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 6:
                    // إضافة عنصر جديد إلى السلة
                    console.log("Adding new item to cart:", cartData);
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:1337/api/cart-items", { data: cartData })];
                case 7:
                    addResponse = _b.sent();
                    updatedCartItems = __spreadArrays(existingCartItems, [addResponse.data.data]);
                    // تحديث السلة بدمج العناصر القديمة والجديدة
                    console.log("Updating cart with new items:", updatedCartItems);
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:1337/api/carts/" + updatedCart.documentId, {
                            data: {
                                cart_items: updatedCartItems.map(function (item) { return item.documentId; })
                            }
                        })];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    // تحديث بيانات السلة باستخدام SWR mutate
                    mutate();
                    react_hot_toast_1["default"].success('Item added to cart successfully', {
                        duration: 3000,
                        position: 'top-center'
                    });
                    return [3 /*break*/, 11];
                case 10:
                    error_1 = _b.sent();
                    console.error("Error while adding to cart:", error_1);
                    react_hot_toast_1["default"].error('Error adding product to cart', {
                        duration: 4000,
                        position: 'top-center'
                    });
                    return [3 /*break*/, 11];
                case 11:
                    toggleDrawer();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "product pt-[30px] lg:px-[40px] min-h-screen " },
        react_1["default"].createElement("div", { className: "container mx-auto" },
            react_1["default"].createElement("div", { className: "flex  flex-col lg:flex-row  gap-5 mb-5" },
                react_1["default"].createElement("div", { className: "left w-full md:w-full lg:w-[60%] flex flex-col md:flex-row lg:flex-row gap-5" },
                    react_1["default"].createElement("div", { className: "images order-2 md:order-2 lg:order-1 flex flex-row md:flex-col lg:flex-col gap-3" },
                        react_1["default"].createElement(image_1["default"], { width: 800, height: 500, quality: 85, className: "w-auto  md:w-auto lg:w-full h-[150px]  object-contain md:object-contain  lg:object-cover cursor-pointer mb-[10px] ", alt: "...", src: (_c = product === null || product === void 0 ? void 0 : product.img1) === null || _c === void 0 ? void 0 : _c.url, onClick: function () { var _a; return setSelectedImage((_a = product === null || product === void 0 ? void 0 : product.img1) === null || _a === void 0 ? void 0 : _a.url); } }),
                        react_1["default"].createElement(image_1["default"], { width: 800, height: 500, quality: 85, className: "w-auto  md:w-auto lg:w-full h-[150px]  object-contain md:object-contain  lg:object-cover cursor-pointer mb-[10px] ", alt: "...", src: (_d = product === null || product === void 0 ? void 0 : product.img2) === null || _d === void 0 ? void 0 : _d.url, onClick: function () { var _a; return setSelectedImage((_a = product === null || product === void 0 ? void 0 : product.img2) === null || _a === void 0 ? void 0 : _a.url); } }),
                        react_1["default"].createElement(image_1["default"], { width: 800, height: 500, quality: 85, className: "w-auto  md:w-auto lg:w-full h-[150px]  object-contain md:object-contain  lg:object-cover cursor-pointer mb-[10px]   ", alt: "...", src: (_e = product === null || product === void 0 ? void 0 : product.img3) === null || _e === void 0 ? void 0 : _e.url, onClick: function () { var _a; return setSelectedImage((_a = product === null || product === void 0 ? void 0 : product.img3) === null || _a === void 0 ? void 0 : _a.url); } })),
                    react_1["default"].createElement("div", { className: "mainImage order-1 md:order-1 lg:order-2  flex-1" },
                        react_1["default"].createElement(image_1["default"], { width: 800, height: 500, quality: 85, className: "w-full h-[auto]  lg:h-full object-center object-contain md:object-contain lg:object-cover cursor-pointer mb-[10px] ", alt: "main image", src: selectedImage }))),
                react_1["default"].createElement("div", { className: "right w-full md:w-full lg:w-[40%] p-2  lg:p-8 " },
                    react_1["default"].createElement("div", { className: "details space-y-4" },
                        react_1["default"].createElement("h2", { className: "text-2xl font-semibold capitalize text-gray-800" }, product.title),
                        react_1["default"].createElement("p", { className: "text-gray-600 leading-relaxed" }, product.desc),
                        react_1["default"].createElement("div", { className: "mt-2 flex items-center space-x-3" },
                            product.oldPrice ?
                                react_1["default"].createElement("p", { className: "line-through text-sm md:text-xl text-gray-500" },
                                    "$",
                                    product.oldPrice)
                                : "",
                            react_1["default"].createElement("p", { className: "text-xl md:text-2xl font-bold text-gray-900" },
                                "$",
                                product.price),
                            (product === null || product === void 0 ? void 0 : product.oldPrice) ?
                                react_1["default"].createElement("p", { className: "text-sm md:text-base font-semibold text-red-500 bg-red-100 rounded-full px-3 py-1" },
                                    "-",
                                    discountPercentage,
                                    "%")
                                : ""),
                        react_1["default"].createElement("div", { className: "colors mt-4" },
                            react_1["default"].createElement("span", { className: "text-lg font-medium text-gray-700" }, "Available Colors:"),
                            react_1["default"].createElement("div", { className: "images flex gap-3 mt-2" }, sameNameProducts.length > 0 ? (sameNameProducts.map(function (item, index) {
                                var _a;
                                return (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(link_1["default"], { href: item === null || item === void 0 ? void 0 : item.documentId },
                                        react_1["default"].createElement(image_1["default"], { key: index, quality: 100, width: 800, height: 800, className: "w-auto  h-[100px] object-contain md:object-contain lg:object-cover cursor-pointer", alt: "Color " + (index + 1), src: (_a = item === null || item === void 0 ? void 0 : item.img1) === null || _a === void 0 ? void 0 : _a.url }))));
                            })) : (react_1["default"].createElement("span", { className: "text-gray-500" }, "No other colors available.")))),
                        react_1["default"].createElement("div", { className: "sizes mt-6" },
                            react_1["default"].createElement("span", { className: "text-lg font-medium text-gray-700" }, "Choose Size:"),
                            react_1["default"].createElement("div", { className: "flex gap-2 mt-2 flex-wrap" }, (_f = product === null || product === void 0 ? void 0 : product.sizes) === null || _f === void 0 ? void 0 : _f.map(function (size) { return (react_1["default"].createElement(ButtonIcon_1["default"], { key: size.id, onClick: function () { return setSelectedSize(size.title); }, className: "size-btn px-4 py-2 rounded-md transition-all duration-300 border border-black \n                        " + (selectedSize === size.title
                                    ? "bg-black text-white"
                                    : "hover:bg-black hover:text-white") }, size.title)); })))),
                    react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return handleAddToCart(selectedSize); }, className: "mt-4 w-full text-lg rounded-md bg-black text-white py-3 px-6 font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-300" },
                        react_1["default"].createElement(md_1.MdOutlineShoppingBag, { size: 20 }),
                        react_1["default"].createElement("span", null, "ADD TO CART"))))),
        react_1["default"].createElement(Drawer_1["default"], { openRight: drawerOpen, toggleDrawer: toggleDrawer })));
};
exports["default"] = SingleProduct;
