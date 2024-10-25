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
// import Image from 'next/image';
var react_1 = require("react");
var md_1 = require("react-icons/md");
var ButtonIcon_1 = require("./ButtonIcon");
var link_1 = require("next/link");
var image_1 = require("next/image");
var axios_1 = require("axios");
var nextjs_1 = require("@clerk/nextjs");
var swr_1 = require("swr");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var Card = function (_a) {
    var _b, _c, _d;
    var item = _a.item, toggleDrawer = _a.toggleDrawer, showSizes = _a.showSizes, toggleShowSizes = _a.toggleShowSizes;
    var discountPercentage = Math.round((((item === null || item === void 0 ? void 0 : item.oldPrice) - (item === null || item === void 0 ? void 0 : item.price)) / (item === null || item === void 0 ? void 0 : item.oldPrice)) * 100);
    var _e = react_1.useState(null), selectedSize = _e[0], setSelectedSize = _e[1];
    var userId = nextjs_1.useAuth().userId;
    var router = navigation_1.useRouter();
    var fetcher = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data]; // Assuming the user has only one cart
            }
        });
    }); };
    // استخدام SWR لجلب بيانات السلة
    var _f = swr_1["default"](userId ? "http://localhost:1337/api/carts?populate=cart_items&filters[userId][$eq]=" + userId : null, fetcher, { refreshInterval: 1000 }), existingCart = _f.data, mutate = _f.mutate;
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
                    totalItemPrice = item.price * quantity;
                    cartData = {
                        productId: item.documentId,
                        size: size,
                        quantity: quantity,
                        price: item.price,
                        totalItem: totalItemPrice,
                        name: item.title,
                        image: (_a = item === null || item === void 0 ? void 0 : item.img1) === null || _a === void 0 ? void 0 : _a.url
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
                        return cartItem.productId === item.documentId && cartItem.size === size;
                    });
                    if (!existingItem) return [3 /*break*/, 6];
                    newQuantity = existingItem.quantity + 1;
                    updatedTotalItemPrice = item.price * newQuantity;
                    // تحديث عنصر السلة
                    console.log("Updating existing cart item:", existingItem);
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:1337/api/cart-items/" + existingItem.documentId, {
                            data: {
                                quantity: newQuantity,
                                totalItem: updatedTotalItemPrice,
                                productId: item.documentId,
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
                    toggleShowSizes();
                    toggleDrawer();
                    return [2 /*return*/];
            }
        });
    }); };
    // const handleAddToCart = async (size: string) => {
    //   if (!userId) {
    //       toast.error('You must sign-in to add products to cart', {
    //           duration: 4000,
    //           position: 'top-center',
    //       });
    //       router.push('/sign-in'); // توجيه المستخدم إلى صفحة تسجيل الدخول
    //       return;
    //   }
    //   setSelectedSize(size);
    //   const quantity = 1;
    //   const totalItemPrice = item.price * quantity;
    //   const cartData = {
    //     productId: item.documentId,
    //     size,
    //     quantity,
    //     price : item.price,
    //     totalItem: totalItemPrice,
    //     name: item.title,
    //     image: `http://localhost:1337${item?.img1?.url}`
    //   };
    //   try {
    //     let updatedCart;
    //     // إذا لم يكن لدى المستخدم سلة، نقوم بإنشاء سلة جديدة
    //     if (!existingCart) {
    //       const newCartResponse = await axios.post(`http://localhost:1337/api/carts`, {
    //         data: {
    //           userId: userId,
    //           cart_items: []
    //         }
    //       });
    //       updatedCart = newCartResponse.data.data;
    //     } else {
    //       updatedCart = existingCart;
    //     }
    //     const existingCartItems = updatedCart?.cart_items || [];
    //     // التحقق مما إذا كان المنتج بالحجم المحدد موجود بالفعل في السلة
    //     const existingItem = existingCartItems.find((cartItem: ICartItem) =>
    //       cartItem.productId === item.documentId && cartItem.size === size
    //     );
    //     if (existingItem) {
    //       // التحقق مما إذا كانت الكمية المتاحة كافية
    //       if (existingItem.quantity + 1  > item.stock) {
    //         toast.error(`Quantity exceeds available stock.`, {
    //           duration: 4000,
    //           position: 'top-center',
    //       });
    //           return;
    //       }
    //       // تحديث الكمية إذا كان العنصر موجود
    //       const newQuantity = existingItem.quantity + 1;
    //       const updatedTotalItemPrice = item.price * newQuantity;
    //       // documentId تحديث عنصر السلة الحالي في Strapi باستخدام
    //       await axios.put(`http://localhost:1337/api/cart-items/${existingItem.documentId}`, {
    //         data: {
    //           quantity: newQuantity,
    //           totalItem: updatedTotalItemPrice,
    //           productId: item.documentId,
    //           size,
    //           name: existingItem.name,
    //           image: existingItem.image, 
    //           price : existingItem.price
    //         }
    //       });
    //     } else {
    //       // إضافة عنصر جديد إلى السلة
    //       const addResponse = await axios.post("http://localhost:1337/api/cart-items", { data: cartData });
    //       // دمج العنصر الجديد مع العناصر الموجودة في السلة
    //       const updatedCartItems = [...existingCartItems, addResponse.data.data];
    //       // documentId تحديث السلة بدمج العناصر القديمة والجديدة باستخدام
    //       await axios.put(`http://localhost:1337/api/carts/${updatedCart.documentId}`, {
    //         data: {
    //           cart_items: updatedCartItems.map(item => item.documentId)
    //         }
    //       });
    //     }
    //     // تحديث بيانات السلة باستخدام SWR mutate
    //     mutate();
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   toggleShowSizes();
    //   toggleDrawer();
    // };
    return (react_1["default"].createElement("div", { className: "relative flex flex-col items-start w-full " },
        react_1["default"].createElement("div", { className: "relative group w-full" },
            (item === null || item === void 0 ? void 0 : item.isNew) && (react_1["default"].createElement("div", { className: "absolute top-[8px] right-0 bg-[#fff] text-[11px] lg:text-sm font-normal lg:font-medium text-center text-[##565656] tracking-[1px] uppercase px-2 py-1 z-10" }, "New Season")),
            react_1["default"].createElement("div", { className: "absolute bottom-0 bg-white  left-0 w-full transition-all duration-500  " + (showSizes ? "translate-y-0 opacity-[0.8] z-10" : "translate-y-6 opacity-0 z-0") },
                react_1["default"].createElement("div", { className: "p-4 flex flex-col items-center space-y-2" },
                    react_1["default"].createElement("p", { className: "text-center font-semibold text-gray-700" }, "Add Size"),
                    react_1["default"].createElement("div", { className: "flex flex-wrap justify-center items-start gap-1" }, item === null || item === void 0 ? void 0 : item.sizes.map(function (size) { return (react_1["default"].createElement(ButtonIcon_1["default"], { onClick: function () { return handleAddToCart(size.title); }, key: size.id, className: "border flex justify-center border-gray-300 py-1 px-5 text-sm font-medium hover:outline-stone-500 hover:border-stone-500 hover:border-2 transition-all duration-100  focus:outline-none focus:ring-2 focus:ring-gray-400 " + (selectedSize && "bg-black text-white") }, size.title)); })))),
            react_1["default"].createElement(link_1["default"], { href: "/product/" + (item === null || item === void 0 ? void 0 : item.documentId) },
                react_1["default"].createElement(image_1["default"], { src: (_b = item === null || item === void 0 ? void 0 : item.img1) === null || _b === void 0 ? void 0 : _b.url, quality: 85, width: 700, height: 500, alt: "Product", className: "w-full opacity-100 group-hover:opacity-0 inset-0 h-auto object-contain md:max-h-[400px] lg:max-h-[450px]" })),
            react_1["default"].createElement(link_1["default"], { href: "/product/" + (item === null || item === void 0 ? void 0 : item.documentId) },
                react_1["default"].createElement(image_1["default"], { src: (_c = item === null || item === void 0 ? void 0 : item.img2) === null || _c === void 0 ? void 0 : _c.url, quality: 85, width: 700, height: 500, alt: "Product Hover", className: "w-full opacity-0 group-hover:opacity-100 inset-0 h-auto object-contain absolute md:max-h-[400px] lg:max-h-[400px]" }))),
        react_1["default"].createElement("div", { className: "flex flex-col w-full mt-2 space-y-3" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-1" },
                react_1["default"].createElement("h4", { className: "text-sm w-full lg:text-base font-medium truncate w-full]" }, item === null || item === void 0 ? void 0 : item.title),
                react_1["default"].createElement("div", { className: "flex items-center gap-2 md:gap-3 mt-1" },
                    react_1["default"].createElement("p", { className: "text-gray-500 text-sm md:text-base capitalize" }, (_d = item === null || item === void 0 ? void 0 : item.color) === null || _d === void 0 ? void 0 : _d.title)),
                react_1["default"].createElement("div", { className: "mt-2 flex items-center space-x-2 md:space-x-3" },
                    (item === null || item === void 0 ? void 0 : item.oldPrice) && (react_1["default"].createElement("p", { className: "line-through text-sm md:text-base text-gray-500" },
                        "$", item === null || item === void 0 ? void 0 :
                        item.oldPrice)),
                    react_1["default"].createElement("p", { className: "text-sm md:text-base font-semibold text-gray-900" },
                        "$", item === null || item === void 0 ? void 0 :
                        item.price),
                    (item === null || item === void 0 ? void 0 : item.oldPrice) && (react_1["default"].createElement("p", { className: "text-xs md:text-sm font-semibold text-red-500 bg-red-100  rounded-full px-2 py-1" },
                        "-",
                        discountPercentage,
                        "%")))),
            react_1["default"].createElement(ButtonIcon_1["default"], { onClick: toggleShowSizes, className: "mt-2 cursor-pointer lg:mt-0 w-full h-fit text-base md:text-lg rounded-md bg-black text-white flex items-center justify-center space-x-1 py-2 px-1 font-medium md:py-2 md:px-3" },
                react_1["default"].createElement(md_1.MdOutlineShoppingBag, { size: 16 }),
                react_1["default"].createElement("span", null, "Add")))));
};
exports["default"] = Card;
