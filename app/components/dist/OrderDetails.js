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
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var lia_1 = require("react-icons/lia");
var image_1 = require("next/image"); // Ensure you import Image if using Next.js images
var axios_1 = require("axios");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var OrderDetails = function (_a) {
    var order = _a.order;
    var orderCart = (order === null || order === void 0 ? void 0 : order.cart_items) || [];
    var orderShipping = (order === null || order === void 0 ? void 0 : order.shipping) || {};
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var router = navigation_1.useRouter();
    var _c = react_1.useState((order === null || order === void 0 ? void 0 : order.orderstatus) || ''), status = _c[0], setStatus = _c[1];
    react_1.useEffect(function () {
        router.replace("/admin/orders/" + (order === null || order === void 0 ? void 0 : order.documentId));
        router.refresh();
    }, [order === null || order === void 0 ? void 0 : order.documentId, router]);
    var handleStatusChange = function (event) {
        setStatus(event.target.value);
    };
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:1337/api/orders/" + order.documentId, {
                            data: {
                                orderstatus: status
                            }
                        })];
                case 2:
                    _a.sent();
                    react_hot_toast_1["default"].success("Order status updated successfully");
                    router.refresh();
                    router.replace("/admin/orders");
                    router.prefetch("/admin/orders");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    react_hot_toast_1["default"].error("Error updating order status:", err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "p-3" },
        react_1["default"].createElement("div", { className: "flex flex-col" },
            react_1["default"].createElement("h2", { className: "font-bold tracking-wider text-3xl" }, "Order Details"),
            react_1["default"].createElement("div", { className: "flex justify-between items-start flex-col md:flex-row space-y-3 md:space-y-0" },
                react_1["default"].createElement("div", { className: "left flex-col gap-2" },
                    react_1["default"].createElement(link_1["default"], { className: "text-gray-400 mt-2 flex items-center", href: "/admin/orders" },
                        react_1["default"].createElement(lia_1.LiaLongArrowAltLeftSolid, { size: 18, className: "mr-1" }),
                        "Back to Orders"),
                    react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-lg" }, "Order ID:"),
                        react_1["default"].createElement("span", { className: "text-gray-400" }, order.documentId)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-lg" }, "Order Amount:"),
                        react_1["default"].createElement("span", { className: "text-gray-400" },
                            "$",
                            order.amount)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                        react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-lg" }, "Order Status:"),
                        react_1["default"].createElement("span", { className: "text-gray-400 capitalize" }, order.orderstatus)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                        react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-base" }, "Name:"),
                        react_1["default"].createElement("span", { className: "text-gray-400" },
                            orderShipping.firstName,
                            " ",
                            orderShipping.lastname)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                        react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-base" }, "Email:"),
                        react_1["default"].createElement("span", { className: "text-gray-400" }, orderShipping.email))),
                react_1["default"].createElement("div", { className: "right" },
                    react_1["default"].createElement("h4", { className: "font-semibold text-xl" }, "Shipping Details"),
                    react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
                        react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                            react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-base w-[200px]" },
                                "Country:",
                                react_1["default"].createElement("span", { className: "text-gray-400 ml-1" }, orderShipping.country),
                                ", State:",
                                react_1["default"].createElement("span", { className: "text-gray-400 ml-1" }, orderShipping.state),
                                ", City:",
                                react_1["default"].createElement("span", { className: "text-gray-400 ml-1" }, orderShipping.city))),
                        orderShipping.phonenumber && (react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                            react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-base" }, "Phone:"),
                            react_1["default"].createElement("span", { className: "text-gray-400" }, orderShipping.phonenumber))),
                        react_1["default"].createElement("div", { className: "flex items-start gap-1" },
                            react_1["default"].createElement("span", { className: "text-slate-800 font-semibold text-base" }, "Address:"),
                            react_1["default"].createElement("span", { className: "text-gray-400" }, orderShipping.address))))),
            react_1["default"].createElement("div", { className: "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mt-4" },
                react_1["default"].createElement("table", { className: "w-full text-left table-auto min-w-max" },
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-4 border-b border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Image")),
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Name")),
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Size")),
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Quantity")),
                            react_1["default"].createElement("th", { className: "p-4 border-b text-center border-slate-200 bg-slate-50" },
                                react_1["default"].createElement("p", { className: "text-sm font-normal uppercase leading-none text-slate-500" }, "Price")))),
                    react_1["default"].createElement("tbody", null, orderCart.map(function (item) { return (react_1["default"].createElement("tr", { key: item.id, className: "hover:bg-slate-50 border-b cursor-pointer border-slate-200" },
                        react_1["default"].createElement("td", { className: "p-4 py-5" },
                            react_1["default"].createElement(image_1["default"], { src: item.image, width: 70, height: 70, alt: "Product Image", quality: 85 })),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500" }, item.name)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500 capitalize" }, item.size)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500" }, item.quantity)),
                        react_1["default"].createElement("td", { className: "p-4 py-5 text-center" },
                            react_1["default"].createElement("p", { className: "text-sm text-slate-500" },
                                "$",
                                item.price)))); })))),
            react_1["default"].createElement("div", { className: "p-4 bg-white shadow-lg rounded-lg max-w-md  border mt-5 border-gray-200" },
                react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-2 text-gray-800" }, "Update Order Status"),
                react_1["default"].createElement("div", { className: "mb-4" },
                    react_1["default"].createElement("label", { htmlFor: "status-select", className: "block text-gray-600 mb-1" }, "Select New Status"),
                    react_1["default"].createElement("select", { id: "status-select", value: status, onChange: handleStatusChange, className: "w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400" },
                        react_1["default"].createElement("option", { value: "", disabled: true }, "Select status"),
                        react_1["default"].createElement("option", { value: "placed" }, "Placed"),
                        react_1["default"].createElement("option", { value: "processing" }, "Processing"),
                        react_1["default"].createElement("option", { value: "shipping" }, "Shipping"),
                        react_1["default"].createElement("option", { value: "delivered" }, "Delivered"))),
                react_1["default"].createElement(ButtonIcon_1["default"], { disabled: isLoading, onClick: handleClick, className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-indigo-400 disabled:cursor-none font-semibold py-2 px-4 rounded-lg transition-colors duration-200" }, isLoading ? "Updatting..." : " Update Status")),
            react_1["default"].createElement("div", null))));
};
exports["default"] = OrderDetails;
