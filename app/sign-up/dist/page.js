"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
function Page() {
    return React.createElement(nextjs_1.SignUp, { afterSignInUrl: "/" });
}
exports["default"] = Page;
