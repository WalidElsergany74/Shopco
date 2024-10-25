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
exports.__esModule = true;
var react_1 = require("react");
var nextjs_1 = require("@clerk/nextjs");
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_country_state_city_1 = require("react-country-state-city");
require("react-country-state-city/dist/react-country-state-city.css");
var google_libphonenumber_1 = require("google-libphonenumber");
require("react-international-phone/style.css");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var zod_2 = require("zod");
var react_international_phone_1 = require("react-international-phone");
var loading_1 = require("../loading");
var Navbar_1 = require("../components/Navbar");
var Footer_1 = require("../components/Footer");
var phoneUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
var isPhoneValid = function (phone) {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    }
    catch (error) {
        return false;
    }
};
var schema = zod_2.z.object({
    firstName: zod_2.z
        .string()
        .min(2, { message: 'First name must be at least 2 characters' })
        .max(20, { message: 'First name must be at most 20 characters' })
        .nonempty({ message: 'First name is required' }),
    lastName: zod_2.z
        .string()
        .min(2, { message: 'Last name must be at least 2 characters' })
        .max(20, { message: 'Last name must be at most 20 characters' })
        .nonempty({ message: 'Last name is required' }),
    country: zod_2.z.string().nonempty({ message: 'Country is required' }),
    state: zod_2.z.string().optional(),
    city: zod_2.z.string().nonempty({ message: 'City is required' }),
    address: zod_2.z
        .string()
        .max(150, { message: 'Address must be at most 150 characters' })
        .nonempty({ message: 'Address is required' }),
    email: zod_2.z
        .string()
        .nonempty({ message: 'Email is required' })
        .email({ message: 'Invalid email format' })
});
function Shipping() {
    var _this = this;
    var _a = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schema)
    }), register = _a.register, handleSubmit = _a.handleSubmit, setValue = _a.setValue, errors = _a.formState.errors;
    var userId = nextjs_1.useAuth().userId;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(0), countryid = _c[0], setCountryid = _c[1];
    var _d = react_1.useState(0), stateid = _d[0], setstateid = _d[1];
    var _e = react_1.useState(''), country = _e[0], setCountry = _e[1];
    var _f = react_1.useState(''), state = _f[0], setState = _f[1];
    var _g = react_1.useState(''), city = _g[0], setCity = _g[1];
    var _h = react_1.useState(""), phone = _h[0], setPhone = _h[1];
    var _j = react_1.useState([]), cartProducts = _j[0], setCartProducts = _j[1];
    var _k = react_1.useState(null), existingCart = _k[0], setExistingCart = _k[1];
    var subTotal = cartProducts.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    // Fetch cart data in useEffect using axios
    react_1.useEffect(function () {
        var fetchCartData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, cartData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userId) return [3 /*break*/, 5];
                        setIsLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, axios_1["default"].get("http://localhost:1337/api/carts?populate=cart_items&filters[userId][$eq]=" + userId)];
                    case 2:
                        response = _a.sent();
                        cartData = response.data.data[0];
                        setExistingCart(cartData);
                        setCartProducts((cartData === null || cartData === void 0 ? void 0 : cartData.cart_items) || []);
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching cart:", error_1);
                        return [3 /*break*/, 5];
                    case 4:
                        setIsLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchCartData();
    }, [userId]); // Fetch cart only when userId is available
    // Change handler for country
    var handleCountryChange = function (selectedCountry) {
        setCountry(selectedCountry); // Update state
        setCountryid(selectedCountry.id); // Assuming id corresponds to the country id
        setValue('country', selectedCountry.name);
    };
    // Change handler for state
    var handleStateChange = function (selectedState) {
        setState(selectedState); // Update state
        setstateid(selectedState.id); // Assuming id corresponds to the state id
        setValue('state', selectedState.name);
    };
    // Change handler for city
    var handleCityChange = function (selectedCity) {
        setCity(selectedCity); // Update state
        setValue('city', selectedCity.name);
    };
    var onSubmit = function (data) {
        var shippingData = __assign(__assign({}, data), { phone: phone });
        localStorage.setItem('shippingInfo', JSON.stringify(shippingData));
        router.push("/checkout?amount=" + subTotal); // اضبط المسار كما هو مطلوب
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isLoading && react_1["default"].createElement(loading_1["default"], null),
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "py-10 bg-gray-100 min-h-screen" },
            react_1["default"].createElement("div", { className: "container p-3 mx-auto" },
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-center gap-4 w-full " },
                    react_1["default"].createElement("div", { className: " flex-1  w-full  md:w-[50%] lg:w-[60%]" },
                        react_1["default"].createElement("div", { className: "bg-white mx-auto p-8 rounded-lg shadow-lg w-full max-w-md" },
                            react_1["default"].createElement("h2", { className: "text-2xl font-bold text-center text-gray-800 mb-6" }, "Shipping Information"),
                            react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit) },
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "firstName", className: "block text-gray-700 font-semibold mb-2" }, "First Name"),
                                    react_1["default"].createElement("input", __assign({ type: "text", id: "firstName", placeholder: "John", className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }, register('firstName'))),
                                    errors.firstName && react_1["default"].createElement("p", { className: "text-red-600" }, errors.firstName.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "lastName", className: "block text-gray-700 font-semibold mb-2" }, "Last Name"),
                                    react_1["default"].createElement("input", __assign({ type: "text", id: "lastName", placeholder: "Doe", className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }, register('lastName'))),
                                    errors.lastName && react_1["default"].createElement("p", { className: "text-red-600" }, errors.lastName.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "email", className: "block text-gray-700 font-semibold mb-2" }, "Email"),
                                    react_1["default"].createElement("input", __assign({ type: "email", id: "email", placeholder: "mohamed74@gmail.com", className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }, register('email'))),
                                    errors.email && react_1["default"].createElement("p", { className: "text-red-600" }, errors.email.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "country", className: "block text-gray-700 font-semibold mb-2" }, "Country"),
                                    react_1["default"].createElement(react_country_state_city_1.CountrySelect, { onChange: handleCountryChange, className: "overflow-scroll", placeHolder: "Select Country" }),
                                    errors.country && react_1["default"].createElement("p", { className: "text-red-600" }, errors.country.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "state", className: "block text-gray-700 font-semibold mb-2" }, "State"),
                                    react_1["default"].createElement(react_country_state_city_1.StateSelect, { countryid: countryid, onChange: handleStateChange, placeHolder: "Select State" }),
                                    errors.state && react_1["default"].createElement("p", { className: "text-red-600" }, errors.state.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "city", className: "block text-gray-700 font-semibold mb-2" }, "City"),
                                    react_1["default"].createElement(react_country_state_city_1.CitySelect, { countryid: countryid, stateid: stateid, onChange: handleCityChange, placeHolder: "Select City" }),
                                    errors.city && react_1["default"].createElement("p", { className: "text-red-600" }, errors.city.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "address", className: "block text-gray-700 font-semibold mb-2" }, "Address"),
                                    react_1["default"].createElement("input", __assign({ type: "text", id: "address", placeholder: "123 Street, Apartment 4B", className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }, register('address'))),
                                    errors.address && react_1["default"].createElement("p", { className: "text-red-600" }, errors.address.message)),
                                react_1["default"].createElement("div", { className: "mb-4" },
                                    react_1["default"].createElement("label", { htmlFor: "phone", className: "block text-gray-700 font-semibold mb-2" }, "Mobile Number"),
                                    react_1["default"].createElement(react_international_phone_1.PhoneInput, { value: phone, onChange: function (phone) { return setPhone(phone); }, required: true, countrySelectorStyleProps: { buttonClassName: "rounded-xl py-5 px-3" }, inputClassName: 'w-full', inputStyle: { padding: "10px  15px" }, defaultCountry: "eg" })),
                                react_1["default"].createElement("button", { type: "submit", className: "w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition" }, "Submit")))),
                    react_1["default"].createElement("div", { className: "w-full md:w-[50%] lg:w-[40%]" },
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto" },
                                react_1["default"].createElement("h2", { className: "text-xl font-bold text-gray-800 mb-4" }, "Order Summary"),
                                cartProducts.map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "flex justify-between mb-4 border-b pb-2" },
                                    react_1["default"].createElement("div", { className: "flex" },
                                        react_1["default"].createElement("img", { src: item.image, alt: item.name, className: "w-auto h-[110px] object-fill rounded-lg mr-4" }),
                                        react_1["default"].createElement("div", null,
                                            react_1["default"].createElement("h3", { className: "text-lg font-semibold text-gray-800" }, item.name),
                                            react_1["default"].createElement("span", { className: "text-gray-600" },
                                                "Quantity: ",
                                                item.quantity))),
                                    react_1["default"].createElement("span", { className: "text-lg font-semibold text-gray-800" },
                                        "$",
                                        (item.price * item.quantity).toFixed(2)))); }),
                                react_1["default"].createElement("div", { className: "flex justify-between mt-4" },
                                    react_1["default"].createElement("span", { className: "text-lg font-semibold text-gray-800" }, "Total Amount:"),
                                    react_1["default"].createElement("span", { className: "text-lg font-bold text-gray-800" }, subTotal)))))))),
        react_1["default"].createElement(Footer_1["default"], null)));
}
exports["default"] = Shipping;
