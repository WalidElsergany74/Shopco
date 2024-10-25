"use client";
"use strict";
exports.__esModule = true;
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var stripe_js_1 = require("@stripe/stripe-js");
var CheckoutForm_1 = require("../components/CheckoutForm");
var navigation_1 = require("next/navigation");
var Footer_1 = require("../components/Footer");
var Header_1 = require("../components/Header");
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
var stripePromise = stripe_js_1.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function App() {
    var searchParams = navigation_1.useSearchParams();
    var options = {
        mode: "payment",
        currency: "usd",
        amount: Number(searchParams.get("amount")) * 100
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement(react_stripe_js_1.Elements, { stripe: stripePromise, options: options },
            React.createElement(CheckoutForm_1["default"], { amount: Number(searchParams.get('amount')) })),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = App;
;
