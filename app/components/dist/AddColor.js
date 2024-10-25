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
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var ButtonIcon_1 = require("./ui/ButtonIcon");
var AddColor = function (_a) {
    var isOpen = _a.isOpen, toggleDialog = _a.toggleDialog;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(""), title = _c[0], setTitle = _c[1];
    var router = navigation_1.useRouter();
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (title.trim() === "") {
                        react_hot_toast_1["default"].error("Color name cannot be empty!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    if (title.length <= 2) {
                        react_hot_toast_1["default"].error("Color name cannot be less than or equal 2 characters!");
                        return [2 /*return*/]; // Prevent submission
                    }
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    formData = new FormData();
                    // Add product details
                    formData.append("data[title]", title);
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:1337/api/colors?populate=*", formData)];
                case 2:
                    response = _a.sent();
                    console.log("Response data:", response.data);
                    react_hot_toast_1["default"].success("Color added successfully");
                    router.refresh();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error adding Color:", error_1);
                    react_hot_toast_1["default"].error("Error: " + error_1);
                    return [3 /*break*/, 5];
                case 4:
                    toggleDialog();
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isOpen && (react_1["default"].createElement("div", { className: "fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-500 ease-in-out " + (isOpen ? 'opacity-100' : 'opacity-0') })),
        react_1["default"].createElement("div", { className: "fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ease-in-out transform " + (isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none') },
            react_1["default"].createElement("div", { className: "relative bg-white rounded-lg shadow-lg p-6 w-96 md:w-[400px] lg:w-[500px] transform transition-transform duration-500 ease-in-out" },
                react_1["default"].createElement("div", { className: "flex justify-between items-center" },
                    react_1["default"].createElement("h2", { className: "text-2xl font-semibold mb-4 text-gray-800" }, "Add Color"),
                    react_1["default"].createElement(ButtonIcon_1["default"], { className: "text-gray-500 hover:text-gray-800 transition-colors", onClick: toggleDialog },
                        react_1["default"].createElement(fi_1.FiX, { className: "mb-4", size: 24 }))),
                react_1["default"].createElement("form", { onSubmit: handleSubmit },
                    react_1["default"].createElement("div", { className: "mb-4 flex flex-col space-y-2" },
                        react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700", htmlFor: "productName" }, "Color Name"),
                        react_1["default"].createElement("input", { type: "text", id: "productName", value: title, onChange: function (e) { return setTitle(e.target.value); }, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition", placeholder: "e.g. Men" })),
                    react_1["default"].createElement("div", { className: "flex justify-end" },
                        react_1["default"].createElement("button", { type: "button", onClick: toggleDialog, className: "mr-2 px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold rounded" }, "Cancel"),
                        react_1["default"].createElement(ButtonIcon_1["default"], { disabled: isLoading, type: "submit", className: "flex justify-center items-center space-x-2 w-full bg-blue-600 disabled:bg-blue-300 disabled:cursor-none text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition" }, isLoading ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-6 h-6 text-transparent animate-spin fill-blue-600 mr-3", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1["default"].createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                                react_1["default"].createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })),
                            react_1["default"].createElement("span", null, "Adding"))) : (react_1["default"].createElement("span", null, "Add Color")))))))));
};
exports["default"] = AddColor;
